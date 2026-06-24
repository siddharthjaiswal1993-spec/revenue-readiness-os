import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Braces, CheckCircle2, Compass, Menu, Orbit, ShieldCheck, Sparkles, Wand2, X } from 'lucide-react'
import { useState } from 'react'

const journey = [
  { to: '/', label: 'Platform story', caption: 'Vision and strategic shift', icon: Compass, number: '00' },
  { to: '/recommendations', label: 'Seller experience', caption: 'Context to useful content', icon: Wand2, number: '01' },
  { to: '/context', label: 'Context intelligence', caption: 'Signals and resolution', icon: Orbit, number: '02' },
  { to: '/governance', label: 'Trust and control', caption: 'Policy and auditability', icon: ShieldCheck, number: '03' },
  { to: '/developer', label: 'Open delivery', caption: 'API, events and MCP', icon: Braces, number: '04' },
]

const routeMeta: Record<string, { section: string; title: string; progress: number; guide: string; previous?: string; next?: string; nextLabel: string }> = {
  '/': { section: 'Assignment narrative', title: 'Platform story', progress: 0, guide: 'Start with the strategic shift, then enter the flagship seller workflow.', next: '/recommendations', nextLabel: 'Start walkthrough' },
  '/recommendations': { section: 'Step 1 of 4 · Seller value', title: 'Contextual recommendations', progress: 25, guide: 'Show the outcome first: three approved assets, ranked and explained for one live opportunity.', previous: '/', next: '/context', nextLabel: 'Inspect context' },
  '/context': { section: 'Step 2 of 4 · Intelligence', title: 'Context intelligence', progress: 50, guide: 'Trace the recommendation back to resolved, permission-safe revenue signals.', previous: '/recommendations', next: '/governance', nextLabel: 'Review controls' },
  '/governance': { section: 'Step 3 of 4 · Trust', title: 'Enterprise control', progress: 75, guide: 'Demonstrate that deterministic rules remain for eligibility, permissions, policy and audit.', previous: '/context', next: '/developer', nextLabel: 'Open the platform' },
  '/developer': { section: 'Step 4 of 4 · Reach', title: 'Open delivery', progress: 100, guide: 'Close the loop: one governed contract serves CRM, partners, embedded apps and agents.', previous: '/governance', next: '/', nextLabel: 'Finish and recap' },
}

export default function Layout() {
  const location = useLocation()
  const navigate = useNavigate()
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const meta = routeMeta[location.pathname] ?? routeMeta['/']

  return <div className="flex h-screen overflow-hidden bg-[#f5f6f8] text-slate-900">
    {mobileNavOpen && <button aria-label="Close navigation" onClick={() => setMobileNavOpen(false)} className="fixed inset-0 z-40 bg-slate-950/40 lg:hidden" />}

    <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-[252px] shrink-0 bg-[#0d1529] text-white flex flex-col transition-transform lg:translate-x-0 ${mobileNavOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="h-[68px] px-5 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3"><div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center shadow-lg shadow-violet-950/40"><Sparkles size={17} /></div><div><div className="text-sm font-semibold">Mindtickle</div><div className="text-[11px] text-violet-300 mt-0.5">Context Intelligence</div></div></div>
        <button className="lg:hidden text-slate-400" onClick={() => setMobileNavOpen(false)}><X size={18} /></button>
      </div>

      <div className="px-4 pt-5 pb-2"><div className="text-[10px] uppercase tracking-[0.16em] font-semibold text-slate-500">Guided walkthrough</div></div>
      <nav className="flex-1 overflow-y-auto px-2 py-1">
        {journey.map(({ to, label, caption, icon: Icon, number }) => <NavLink key={to} to={to} end={to === '/'} onClick={() => setMobileNavOpen(false)} className={({isActive}) => `group flex items-center gap-3 px-3 py-3 rounded-xl mb-1 transition-colors ${isActive ? 'bg-violet-600 text-white' : 'text-slate-400 hover:text-white hover:bg-white/[0.06]'}`}>
          {({isActive}) => <><div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${isActive ? 'bg-white/15' : 'bg-white/[0.05]'}`}><Icon size={16} /></div><div className="flex-1 min-w-0"><div className="text-xs font-semibold">{label}</div><div className={`text-[10px] mt-0.5 truncate ${isActive ? 'text-violet-100' : 'text-slate-500'}`}>{caption}</div></div><span className={`text-[10px] font-mono ${isActive ? 'text-violet-200' : 'text-slate-600'}`}>{number}</span></>}
        </NavLink>)}
      </nav>

      <div className="p-4 border-t border-white/10"><div className="rounded-xl bg-white/[0.05] border border-white/[0.08] p-3"><div className="text-[10px] uppercase tracking-[0.12em] text-slate-500">Prototype status</div><div className="flex items-center gap-2 mt-2 text-[11px] text-emerald-300"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Interactive demo ready</div></div><div className="flex items-center gap-3 mt-4"><div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center text-xs font-bold">SJ</div><div><div className="text-xs font-medium">Siddharth Jaiswal</div><div className="text-[10px] text-slate-500 mt-0.5">GPM platform assignment</div></div></div></div>
    </aside>

    <div className="flex-1 min-w-0 flex flex-col">
      <header className="h-[68px] shrink-0 bg-white border-b border-slate-200 px-4 lg:px-6 flex items-center">
        <button className="lg:hidden mr-3 p-2 rounded-lg border border-slate-200" onClick={() => setMobileNavOpen(true)}><Menu size={17} /></button>
        <div className="min-w-0"><div className="text-[10px] uppercase tracking-[0.14em] font-semibold text-violet-600">{meta.section}</div><div className="text-sm font-semibold mt-0.5 truncate">{meta.title}</div></div>
        <div className="hidden md:flex items-center gap-3 ml-auto w-[340px]"><div className="h-1.5 flex-1 rounded-full bg-slate-100 overflow-hidden"><div className="h-full rounded-full bg-violet-600 transition-all" style={{width:`${Math.max(meta.progress,3)}%`}} /></div><span className="text-[10px] font-medium text-slate-400 w-8">{meta.progress}%</span></div>
      </header>

      <div className="shrink-0 min-h-[62px] bg-white border-b border-slate-200 px-4 lg:px-6 py-2.5 flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="flex items-center gap-2.5 min-w-0"><div className="w-8 h-8 rounded-lg bg-violet-50 text-violet-700 flex items-center justify-center shrink-0">{meta.progress === 100 ? <CheckCircle2 size={15} /> : <Sparkles size={14} />}</div><p className="text-xs text-slate-600 leading-relaxed truncate sm:whitespace-normal">{meta.guide}</p></div>
        <div className="flex items-center gap-2 sm:ml-auto shrink-0">{meta.previous && <button onClick={() => navigate(meta.previous!)} className="px-3 py-2 rounded-lg border border-slate-200 text-xs font-medium text-slate-600 hover:bg-slate-50 flex items-center gap-1.5"><ArrowLeft size={13} /> Back</button>}<button onClick={() => navigate(meta.next!)} className="next-action px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold flex items-center gap-2 shadow-sm">{meta.nextLabel}<ArrowRight size={13} /></button></div>
      </div>

      <main className="flex-1 overflow-y-auto"><Outlet /></main>
    </div>
  </div>
}
