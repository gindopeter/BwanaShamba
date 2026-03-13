import './_group.css';

export function CurrentDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 flex" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Sidebar */}
      <aside className="w-56 bg-white border-r border-slate-200 flex flex-col shrink-0">
        <div className="p-5 flex items-center gap-2.5">
          <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
          <span className="font-bold text-lg text-slate-900">Mkulima AI</span>
        </div>
        <nav className="flex-1 px-3 space-y-1 mt-3">
          {[
            { label: 'Dashboard', active: true, icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
            { label: 'Live Scout', active: false, icon: 'M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75' },
            { label: 'Farm Map', active: false, icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' }
          ].map((item) => (
            <button key={item.label} className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${item.active ? 'bg-indigo-50 text-indigo-700 border border-indigo-100' : 'text-slate-600 hover:bg-slate-50'}`}>
              <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} style={{width:18,height:18}}><path strokeLinecap="round" strokeLinejoin="round" d={item.icon}/></svg>
              {item.label}
            </button>
          ))}
        </nav>
        <div className="p-3 border-t border-slate-200">
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs">F</div>
              <div>
                <p className="text-xs font-semibold text-slate-900">Farm Admin</p>
                <div className="flex items-center gap-1 text-[10px] text-indigo-600 font-medium">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>Admin
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Farm Overview</h2>
              <p className="text-indigo-600 font-medium text-xs uppercase mt-0.5">Malivundo, Pwani • 5 Acres</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 text-slate-500 hover:text-indigo-600 rounded-lg border border-slate-200 bg-white">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              </button>
              <button className="flex items-center gap-1.5 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/></svg>
                New Task
              </button>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-5">
            {/* Schedule */}
            <div className="col-span-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-bold text-slate-900">Today's Schedule</h3>
                <span className="text-[10px] font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100 px-2 py-0.5 rounded-full">2 Pending</span>
              </div>
              <div className="bg-white border border-slate-100 rounded-xl p-4 shadow-sm space-y-3">
                {['Zone A - Morning Irrigation', 'Zone B - Fertilizer Application'].map((task, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{task}</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">{i === 0 ? '6:00 AM' : '2:00 PM'}</p>
                    </div>
                    <span className="text-[10px] font-bold bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full border border-amber-200">Pending</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Zone Cards */}
            <div className="col-span-8">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-bold text-slate-900">Active Zones</h3>
                <button className="text-xs font-semibold text-indigo-600 uppercase">View Map</button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Zone A', crop: 'Tomato', days: 31, total: 120, color: 'red', area: '2.5 acres' },
                  { name: 'Zone B', crop: 'Onion', days: 61, total: 150, color: 'purple', area: '2.5 acres' }
                ].map((zone) => (
                  <div key={zone.name} className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-bold text-slate-900">{zone.name}</h4>
                        <p className="text-xs text-slate-500">{zone.crop} • {zone.area}</p>
                      </div>
                      <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200">Active</span>
                    </div>
                    <div className="mb-2">
                      <div className="flex justify-between text-[10px] text-slate-500 mb-1">
                        <span>Day {zone.days}/{zone.total}</span>
                        <span>{Math.round(zone.days/zone.total*100)}%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2">
                        <div className={`h-2 rounded-full ${zone.color === 'red' ? 'bg-red-500' : 'bg-purple-500'}`} style={{ width: `${zone.days/zone.total*100}%` }}></div>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <button className="flex-1 text-[10px] font-semibold py-1.5 rounded-lg bg-blue-50 text-blue-700 border border-blue-100">Irrigate</button>
                      <button className="flex-1 text-[10px] font-semibold py-1.5 rounded-lg bg-slate-50 text-slate-600 border border-slate-200">Details</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weather */}
            <div className="col-span-4">
              <div className="bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl p-5 text-white shadow-sm">
                <p className="text-xs font-medium text-sky-100 mb-1">Weather Now</p>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold">28°</span>
                  <span className="text-sky-200 text-sm mb-1">Partly Cloudy</span>
                </div>
                <div className="flex gap-4 mt-3 text-xs text-sky-100">
                  <span>Humidity: 72%</span>
                  <span>Wind: 12 km/h</span>
                </div>
              </div>
            </div>

            {/* Water Usage */}
            <div className="col-span-8">
              <div className="bg-white border border-slate-100 p-5 rounded-xl shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-indigo-50 rounded-lg border border-indigo-100">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"/></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-600 text-sm">Total Water Usage</h3>
                    <div className="flex items-end gap-1.5">
                      <span className="text-2xl font-bold text-slate-900">1,240</span>
                      <span className="text-slate-500 text-xs mb-0.5">L/day</span>
                    </div>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">-12%</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
