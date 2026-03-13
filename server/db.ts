import Database from 'better-sqlite3';
import path from 'path';
import os from 'os';

let db: any;

try {
  db = new Database('farm.db');
} catch (err: any) {
  console.warn('Failed to open farm.db in current directory, falling back to /tmp:', err.message);
  db = new Database(path.join(os.tmpdir(), 'farm.db'));
}

// Initialize database schema
db.exec(`
  CREATE TABLE IF NOT EXISTS zones (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    crop_type TEXT CHECK(crop_type IN ('Tomato', 'Onion')) NOT NULL,
    planting_date TEXT NOT NULL,
    area_size REAL DEFAULT 1.0,
    status TEXT DEFAULT 'Active',
    expected_yield_kg REAL DEFAULT 0,
    actual_yield_kg REAL DEFAULT 0,
    irrigation_status TEXT DEFAULT 'Off' CHECK(irrigation_status IN ('Off', 'Running'))
  );

  CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    zone_id INTEGER NOT NULL,
    task_type TEXT CHECK(task_type IN ('Irrigation', 'Fertigation', 'Scouting')) NOT NULL,
    scheduled_time TEXT NOT NULL,
    duration_minutes INTEGER,
    status TEXT DEFAULT 'Pending',
    reasoning TEXT,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (zone_id) REFERENCES zones (id)
  );

  CREATE TABLE IF NOT EXISTS logs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    zone_id INTEGER,
    message TEXT NOT NULL,
    severity TEXT DEFAULT 'Info',
    timestamp TEXT DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    first_name TEXT,
    last_name TEXT,
    role TEXT DEFAULT 'user' CHECK(role IN ('admin', 'user')),
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS sessions (
    sid TEXT PRIMARY KEY,
    sess TEXT NOT NULL,
    expire INTEGER NOT NULL
  );
  CREATE INDEX IF NOT EXISTS idx_sessions_expire ON sessions(expire);

  CREATE TABLE IF NOT EXISTS conversations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    title TEXT DEFAULT 'New Conversation',
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (id)
  );

  CREATE TABLE IF NOT EXISTS chat_messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    conversation_id INTEGER NOT NULL,
    role TEXT NOT NULL CHECK(role IN ('user', 'ai', 'system')),
    text TEXT NOT NULL,
    image_url TEXT,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (conversation_id) REFERENCES conversations (id) ON DELETE CASCADE
  );
  CREATE INDEX IF NOT EXISTS idx_chat_messages_conv ON chat_messages(conversation_id);
`);

// Migration: Add missing columns if they don't exist (for existing databases)
const tableInfo = db.prepare("PRAGMA table_info(zones)").all() as any[];
const columnNames = tableInfo.map(c => c.name);

if (!columnNames.includes('expected_yield_kg')) {
  db.exec("ALTER TABLE zones ADD COLUMN expected_yield_kg REAL DEFAULT 0");
}
if (!columnNames.includes('actual_yield_kg')) {
  db.exec("ALTER TABLE zones ADD COLUMN actual_yield_kg REAL DEFAULT 0");
}
if (!columnNames.includes('irrigation_status')) {
  db.exec("ALTER TABLE zones ADD COLUMN irrigation_status TEXT DEFAULT 'Off' CHECK(irrigation_status IN ('Off', 'Running'))");
}

// Migration: ensure users table has correct schema for local auth
const usersTableInfo = db.prepare("PRAGMA table_info(users)").all() as any[];
const usersColumns = usersTableInfo.map((c: any) => c.name);
if (usersColumns.length > 0 && !usersColumns.includes('password_hash')) {
  db.exec("DROP TABLE IF EXISTS users");
  db.exec(`
    CREATE TABLE users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      first_name TEXT,
      last_name TEXT,
      role TEXT DEFAULT 'user' CHECK(role IN ('admin', 'user')),
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `);
}

// Migration: ensure users table has role column
if (usersColumns.includes('password_hash') && !usersColumns.includes('role')) {
  db.exec("ALTER TABLE users ADD COLUMN role TEXT DEFAULT 'user' CHECK(role IN ('admin', 'user'))");
}

// Seed default admin if no users exist
import bcrypt from 'bcryptjs';
const usersCount = db.prepare('SELECT count(*) as count FROM users').get() as { count: number };
if (usersCount.count === 0) {
  const hash = bcrypt.hashSync('admin123', 10);
  db.prepare('INSERT INTO users (email, password_hash, first_name, last_name, role) VALUES (?, ?, ?, ?, ?)').run(
    'admin@farm.co.tz', hash, 'Farm', 'Admin', 'admin'
  );
  console.log('Seeded default admin: admin@farm.co.tz / admin123');
}

// Seed initial data if empty
const zonesCount = db.prepare('SELECT count(*) as count FROM zones').get() as { count: number };

if (zonesCount.count === 0) {
  const insertZone = db.prepare('INSERT INTO zones (name, crop_type, planting_date, area_size) VALUES (?, ?, ?, ?)');
  // Planted 30 days ago
  const date30DaysAgo = new Date();
  date30DaysAgo.setDate(date30DaysAgo.getDate() - 30);
  
  // Planted 60 days ago
  const date60DaysAgo = new Date();
  date60DaysAgo.setDate(date60DaysAgo.getDate() - 60);

  insertZone.run('Zone A', 'Tomato', date30DaysAgo.toISOString().split('T')[0], 2.5);
  insertZone.run('Zone B', 'Onion', date60DaysAgo.toISOString().split('T')[0], 2.5);
  
  console.log('Seeded initial zones.');
}

export default db;
