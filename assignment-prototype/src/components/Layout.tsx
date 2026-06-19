import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { ArrowRight, Bell, Braces, ChevronDown, Compass, Menu, MousePointerClick, Orbit, Play, Search, ShieldCheck, Sparkles, Wand2, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { to: '/', label: 'Platform story', caption: 'Vision & value', icon: Compass, step: '00' },
  { to: '/recommendations', label: 'Seller experience', caption: 'Context → content', icon: Wand2, step: '01' },
  { to: '/context', label: 'Context intelligence', caption: 'Signals & resolution', icon: Orbit, step: '02' },
  { to: '/governance', label: 'Trust & control', caption: 'Policy & audit', icon: ShieldCheck, step: '03' },
  { to: '/developer', label: 'Open delivery', caption: 'API, MCP & events', icon: Braces, step: '04' },
]

const routeMeta: Record<string, { eyebrow: string; title: string; progress: number }> = {
  '/': { eyebrow: 'Assignment narrative', title: 'Platform story', progress: 0 },
  '/recommendations': { eyebrow: 'Seller workflow', title: 'Contextual recommendations', progress: 25 },
  '/context': { eyebrow: 'Platform capability', title: 'Context intelligence', progress: 50 },
  '/governance': { eyebrow: 'Enterprise foundation', title: 'Trust and control', progress: 75 },
  '/developer': { eyebrow: 'Open platform', title: 'Delivery anywhere', progress: 100 },
}

const nextSteps: Record<string, { eyebrow: string; label: string; detail: string; to: string }> = {
  '/': { eyebrow: 'Start here', label: 'Begin seller workflow', detail: 'See the flagship use case', to: '/recommendations' },
  '/recommendations': { eyebrow: 'Next step', label: 'Inspect the context', detail: 'See what shaped the ranking', to: '/context' },
  '/context': { eyebrow: 'Next step', label: 'Review trust & control', detail: 'See how enterprise policy applies', to: '/governance' },
  '/governance': { eyebrow: 'Next step', label: 'Open the platform', detail: 'See API, events, and MCP delivery', to: '/developer' },
  '/developer': { eyebrow: 'Journey complete', label: 'Return to platform story', detail: 'Recap the value and strategy', to: '/' },
}

export default function Layout() {
  const location = useLocation()
  const navigate = useNavigate()
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const meta = routeMeta[location.pathname] ?? routeMeta['/']
  const nextStep = nextSteps[location.pathname] ?? nextSteps['/']

  return (
    <div className="flex h-screen overflow-hidden bg-[#f5f6f8]">
      {mobileNavOpen && <button className="fixed inset-0 bg-slate-950/40 z-40 lg:hidden" onClick={() => setMobileNavOpen(false)} aria-label="Close navigation" />}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-[272px] flex-shrink-0 flex flex-col bg-[#0d1529] transition-transform lg:translate-x-0 ${mobileNavOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="px-5 py-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center shadow-lg shadow-violet-950/40"><Sparkles size={17} className="text-white" /></div>
            <div><div className="text-white font-semibold text-sm">Mindtickle</div><div className="text-violet-300 text-[11px] mt-0.5">Context Intelligence</div></div>
          </div>
          <button className="lg:hidden text-slate-400" onClick={() => setMobileNavOpen(false)}><X size={18} /></button>
        </div>

        <div className="px-4 pt-4">
          <div className="rounded-xl border border-violet-400/20 bg-violet-400/10 px-3 py-2.5">
            <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-violet-300">Interactive assignment</div>
            <div className="text-[11px] text-slate-400 mt-1">Follow the numbered journey for the panel walkthrough.</div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          <div className="px-4 pb-2 text-[10px] font-semibold tracking-[0.16em] uppercase text-slate-500">Value journey</div>
          {navItems.map(({ to, label, caption, icon: Icon, step }) => (
            <NavLink key={to} to={to} end={to === '/'} onClick={() => setMobileNavOpen(false)} className={({ isActive }) => `group flex items-center gap-3 px-3 py-3 mx-2 rounded-xl transition-all ${isActive ? 'bg-violet-600 text-white shadow-lg shadow-violet-950/30' : 'text-slate-400 hover:text-white hover:bg-white/[0.06]'}`}>
              {({ isActive }) => <><div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${isActive ? 'bg-white/15' : 'bg-white/[0.05] group-hover:bg-white/10'}`}><Icon size={16} /></div><div className="flex-1 min-w-0"><div className="text-xs font-semibold">{label}</div><div className={`text-[10px] mt-0.5 ${isActive ? 'text-violet-100' : 'text-slate-500'}`}>{caption}</div></div><span className={`text-[10px] font-mono ${isActive ? 'text-violet-100' : 'text-slate-600'}`}>{step}</span></>}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center text-white text-xs font-bold">SJ</div><div className="min-w-0"><div className="text-white text-xs font-medium truncate">Siddharth Jaiswal</div><div className="text-slate-500 text-[10px] truncate">GPM platform assignment</div></div></div>
        </div>
      </aside>

      <div className="flex-1 min-w-0 flex flex-col">
        <header className="h-[68px] shrink-0 bg-white/90 backdrop-blur border-b border-slate-200 flex items-center px-4 lg:px-6 z-30">
          <button className="lg:hidden mr-3 p-2 rounded-lg border border-slate-200" onClick={() => setMobileNavOpen(true)}><Menu size={17} /></button>
          <div className="min-w-0"><div className="text-[10px] uppercase tracking-[0.14em] font-semibold text-violet-600">{meta.eyebrow}</div><div className="text-sm font-semibold text-slate-900 mt-0.5 truncate">{meta.title}</div></div>
          <div className="hidden md:flex items-center gap-2 ml-8 flex-1 max-w-md"><div className="h-1.5 flex-1 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-violet-500 to-blue-500 rounded-full transition-all" style={{ width: `${Math.max(meta.progress, 4)}%` }} /></div><span className="text-[10px] text-slate-400 w-8">{meta.progress}%</span></div>
          <div className="flex items-center gap-2 ml-auto">
            {location.pathname !== '/' && <button onClick={() => navigate('/')} className="hidden sm:flex px-3 py-2 rounded-lg border border-slate-200 text-xs font-medium text-slate-600 items-center gap-1.5 hover:bg-slate-50"><Play size={12} /> Restart story</button>}
            <div className="relative w-64 hidden xl:block"><Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" /><input className="w-full rounded-lg bg-slate-100 border border-transparent py-2 pl-9 pr-3 text-xs outline-none focus:bg-white focus:border-violet-300" placeholder="Search this prototype..." /></div>
            <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50"><Bell size={15} /></button>
            <button className="flex items-center gap-1.5 pl-1"><div className="w-8 h-8 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center text-xs font-bold">SJ</div><ChevronDown size={13} className="text-slate-400" /></button>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto"><Outlet /></main>
        <div className="fixed bottom-5 right-5 lg:right-7 z-40 flex items-end gap-3">
          <div className="hidden sm:block rounded-xl bg-white border border-violet-200 panel-shadow px-3 py-2 text-right">
            <div className="text-[10px] uppercase tracking-[0.14em] font-bold text-violet-600">{nextStep.eyebrow}</div>
            <div className="text-[11px] text-slate-500 mt-0.5">{nextStep.detail}</div>
          </div>
          <button onClick={() => navigate(nextStep.to)} className="guided-action relative min-w-[210px] rounded-xl bg-violet-600 hover:bg-violet-500 text-white px-4 py-3 text-left shadow-xl shadow-violet-900/25">
            <span className="absolute -top-3 -left-3 w-7 h-7 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center shadow-lg animate-bounce"><MousePointerClick size={14} /></span>
            <span className="flex items-center justify-between gap-3 text-xs font-semibold"><span>{nextStep.label}</span><ArrowRight size={14} /></span>
          </button>
        </div>
      </div>
    </div>
  )
}
