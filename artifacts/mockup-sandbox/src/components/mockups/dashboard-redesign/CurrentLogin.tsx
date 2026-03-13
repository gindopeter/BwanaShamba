import './_group.css';

export function CurrentLogin() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="bg-slate-900/80 backdrop-blur-xl w-full max-w-md rounded-3xl shadow-2xl border border-slate-800 overflow-hidden relative z-10">
        <div className="p-10 text-center border-b border-slate-800">
          <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
            <svg className="w-10 h-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <h1 className="text-3xl font-bold text-slate-100 mb-2 tracking-tight">Mkulima AI</h1>
          <p className="text-emerald-400/80 font-medium">Tanzania Farm Operations</p>
        </div>
        <div className="p-10">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-wider">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <input type="email" defaultValue="admin@farm.co.tz" className="block w-full pl-12 pr-4 py-3.5 bg-slate-950/50 border border-slate-700 rounded-xl text-slate-200 placeholder-slate-600" readOnly />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-wider">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </div>
                <input type="password" defaultValue="admin123" className="block w-full pl-12 pr-4 py-3.5 bg-slate-950/50 border border-slate-700 rounded-xl text-slate-200" readOnly />
              </div>
            </div>
            <button className="w-full flex items-center justify-center gap-3 bg-emerald-500 text-slate-950 py-4 rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              Access System
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7"/></svg>
            </button>
          </div>
          <p className="text-xs text-slate-600 text-center mt-6">Contact your administrator for account access</p>
        </div>
      </div>
    </div>
  );
}
