# BwanaShamba

AI-powered farm operations dashboard for a 5-acre mixed horticulture/maize farm in Malivundo, Pwani, Tanzania.

## Features

- **AI Multi-Agent System** — Google ADK with specialized agents for pest scouting, irrigation planning, task management, and market intelligence
- **Live Voice Scout** — Real-time camera + AI crop analysis with voice interaction
- **13 Crop Support** — Tomato, Onion, Pepper, Cabbage, Spinach, Cucumber, Watermelon, Eggplant, Carrot, Lettuce, Okra, Green Bean, Maize
- **Farm Overview** — Visual allocation bar, active/inactive acreage tracking, zone management (CRUD)
- **Task Scheduling** — Auto-generated irrigation tasks based on crop stage and weather
- **Weather Integration** — Live 7-day forecast from Open-Meteo for Malivundo
- **Multilingual** — English and Swahili support
- **Mobile Responsive** — Optimized for field use on mobile devices

## Tech Stack

- **Frontend**: React 19 + TypeScript + Vite + Tailwind CSS 4
- **Backend**: Express.js + TypeScript (tsx)
- **AI**: Google ADK (Agent Development Kit) + Gemini 2.5 Flash
- **Database**: PostgreSQL (Cloud SQL) in production, SQLite for local development
- **Deployment**: Google Cloud Run with Cloud Build

## Local Development

**Prerequisites:** Node.js 22+, Python 3.11+

1. Clone and install dependencies:
   ```bash
   npm install
   pip install -r requirements.txt
   ```

2. Copy environment variables:
   ```bash
   cp .env.example .env.local
   ```

3. Set your `GEMINI_API_KEY` in `.env.local`

4. Start the development server:
   ```bash
   npm run dev
   ```

5. (Optional) Start the ADK agent service:
   ```bash
   bash adk_service/start.sh
   ```

The app runs on `http://localhost:5000`. Default login: `admin@bwanashamba.com` / `admin123`

## Deploy to Google Cloud Run

1. Set up a Cloud SQL PostgreSQL instance
2. Update `cloudbuild.yaml` with your Cloud SQL instance connection name
3. Set required environment variables in Cloud Run:
   - `GEMINI_API_KEY`
   - `DATABASE_URL`
   - `SESSION_SECRET`
   - `DB_SSL=false`
4. Deploy:
   ```bash
   gcloud builds submit --config cloudbuild.yaml
   ```

## Contact

gindopeter@gmail.com
