import './_group.css';

export function RedesignDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Sidebar */}
      <aside className="w-60 bg-green-900 flex flex-col shrink-0 text-white">
        <div className="p-5 flex items-center gap-3 border-b border-green-800/50">
          <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/10">
            <svg className="w-6 h-6 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" /></svg>
          </div>
          <div>
            <span className="font-bold text-base text-white block leading-tight">Mkulima AI</span>
            <span className="text-[10px] text-green-300/70 font-medium">Farm Dashboard</span>
          </div>
        </div>

        <nav className="flex-1 px-3 mt-4 space-y-0.5">
          {[
            { label: 'Overview', active: true, icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
            { label: 'Live Scout', active: false, icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' },
            { label: 'Farm Map', active: false, icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' },
            { label: 'Settings', active: false, icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' }
          ].map((item) => (
            <button key={item.label} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${item.active ? 'bg-white/15 text-white' : 'text-green-200/60 hover:text-white hover:bg-white/5'}`}>
              <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d={item.icon}/></svg>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-3 border-t border-green-800/50">
          <div className="flex items-center gap-2.5 p-2.5">
            <div className="w-8 h-8 rounded-full bg-emerald-400/20 flex items-center justify-center text-emerald-300 font-bold text-xs border border-emerald-400/20">FA</div>
            <div>
              <p className="text-xs font-semibold text-white">Farm Admin</p>
              <p className="text-[10px] text-green-300/60">admin@farm.co.tz</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-sm font-medium text-green-700 mb-0.5">Good morning, Farm Admin</p>
              <h2 className="text-2xl font-bold text-gray-900">Farm Overview</h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right mr-2">
                <p className="text-xs font-medium text-gray-400">Malivundo, Pwani</p>
                <p className="text-sm font-semibold text-gray-700">5 Acres • 2 Zones</p>
              </div>
              <button className="flex items-center gap-2 bg-green-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-green-700/20">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/></svg>
                New Task
              </button>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Active Zones', value: '2', sub: 'Tomato & Onion', color: 'bg-emerald-50 text-emerald-700 border-emerald-200', icon: '🌱' },
              { label: 'Water Usage', value: '1,240L', sub: '-12% vs yesterday', color: 'bg-blue-50 text-blue-700 border-blue-200', icon: '💧' },
              { label: 'Pending Tasks', value: '3', sub: '2 irrigation, 1 scout', color: 'bg-amber-50 text-amber-700 border-amber-200', icon: '📋' },
              { label: 'Temperature', value: '28°C', sub: 'Partly cloudy', color: 'bg-sky-50 text-sky-700 border-sky-200', icon: '☀️' },
            ].map((stat) => (
              <div key={stat.label} className={`rounded-xl p-4 border ${stat.color}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-xs font-medium opacity-80 mt-0.5">{stat.label}</p>
                <p className="text-[10px] opacity-60 mt-0.5">{stat.sub}</p>
              </div>
            ))}
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-12 gap-5">
            {/* Zone Cards */}
            <div className="col-span-8">
              <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">Active Zones</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Zone A', crop: 'Tomato', emoji: '🍅', days: 31, total: 120, area: '2.5 acres', status: 'Running', statusColor: 'bg-blue-500' },
                  { name: 'Zone B', crop: 'Onion', emoji: '🧅', days: 61, total: 150, area: '2.5 acres', status: 'Off', statusColor: 'bg-gray-400' }
                ].map((zone) => (
                  <div key={zone.name} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{zone.emoji}</span>
                        <div>
                          <h4 className="font-bold text-gray-900 text-base">{zone.name}</h4>
                          <p className="text-xs text-gray-500">{zone.crop} • {zone.area}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${zone.statusColor}`}></span>
                        <span className="text-[10px] font-semibold text-gray-500">{zone.status}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-[11px] text-gray-500 mb-1.5 font-medium">
                        <span>Growth Progress</span>
                        <span>Day {zone.days}/{zone.total}</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2.5">
                        <div className="h-2.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-400" style={{ width: `${zone.days/zone.total*100}%` }}></div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button className="flex-1 text-xs font-semibold py-2 rounded-lg bg-green-50 text-green-700 border border-green-200 hover:bg-green-100 transition-colors">
                        💧 Irrigate
                      </button>
                      <button className="flex-1 text-xs font-semibold py-2 rounded-lg bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100 transition-colors">
                        📊 Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="col-span-4 space-y-4">
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">Today's Tasks</h3>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-50">
                  {[
                    { task: 'Zone A - Morning Irrigation', time: '6:00 AM', status: 'pending', statusBg: 'bg-amber-100 text-amber-800' },
                    { task: 'Zone B - Fertilizer', time: '2:00 PM', status: 'pending', statusBg: 'bg-amber-100 text-amber-800' },
                    { task: 'Scout Zone A', time: '4:00 PM', status: 'done', statusBg: 'bg-emerald-100 text-emerald-800' }
                  ].map((t, i) => (
                    <div key={i} className="flex items-center justify-between p-3.5">
                      <div>
                        <p className="text-sm font-semibold text-gray-800">{t.task}</p>
                        <p className="text-[10px] text-gray-400 mt-0.5">{t.time}</p>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${t.statusBg}`}>{t.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weather */}
              <div className="bg-gradient-to-br from-green-700 to-emerald-600 rounded-2xl p-5 text-white">
                <p className="text-xs font-medium text-green-100/70 mb-2 uppercase tracking-wider">Weather</p>
                <div className="flex items-end gap-2 mb-3">
                  <span className="text-4xl font-bold">28°</span>
                  <span className="text-green-100/80 text-sm mb-1">Partly Cloudy</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-green-100/70">
                  <div className="bg-white/10 rounded-lg p-2">
                    <p className="text-green-100/50">Humidity</p>
                    <p className="font-semibold text-white">72%</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-2">
                    <p className="text-green-100/50">Wind</p>
                    <p className="font-semibold text-white">12 km/h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
