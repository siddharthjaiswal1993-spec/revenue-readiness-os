import { NavLink, Outlet } from 'react-router-dom'
import {
  Wand2,
  Orbit,
  ShieldCheck,
  Braces,
  Sparkles,
  Bell,
  Search,
  ChevronDown,
} from 'lucide-react'

const SIDEBAR_BG = '#0F172A'

const navItems = [
  { to: '/', label: 'Recommendations', icon: Wand2 },
  { to: '/context', label: 'Context Explorer', icon: Orbit },
  { to: '/governance', label: 'Governance', icon: ShieldCheck },
  { to: '/developer', label: 'API & MCP', icon: Braces },
]

export default function Layout() {
  return (
    <div className="flex h-screen overflow-hidden">
      <aside
        className="w-60 flex-shrink-0 flex flex-col"
        style={{ backgroundColor: SIDEBAR_BG }}
      >
        <div className="px-5 py-5 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-400 flex items-center justify-center shadow-lg shadow-violet-900/40">
              <Sparkles size={16} className="text-white" />
            </div>
            <div>
              <div className="text-white font-semibold text-sm leading-tight">Mindtickle</div>
              <div className="text-violet-300 text-xs leading-tight mt-0.5">Context Intelligence</div>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-3">
          <div className="px-4 pt-2 pb-2 text-[10px] font-semibold tracking-[0.16em] uppercase text-slate-500">Platform</div>
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 mx-2 rounded-lg text-sm transition-colors ${
                  isActive
                    ? 'bg-violet-600 text-white font-medium'
                    : 'text-slate-400 hover:text-white hover:bg-white/10'
                }`
              }
            >
              <Icon size={16} />
              <span className="flex-1">{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="px-4 py-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center text-white text-xs font-bold">
              SJ
            </div>
            <div className="min-w-0">
              <div className="text-white text-xs font-medium truncate">Siddharth Jaiswal</div>
              <div className="text-slate-400 text-xs truncate">GPM candidate</div>
            </div>
          </div>
        </div>
      </aside>

      <div className="flex-1 min-w-0 flex flex-col bg-[#f5f6f8]">
        <header className="h-16 shrink-0 bg-white/90 backdrop-blur border-b border-slate-200 flex items-center justify-between px-6 z-20">
          <div className="relative w-80 hidden lg:block">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input className="w-full rounded-lg bg-slate-100 border border-transparent py-2 pl-9 pr-3 text-sm outline-none focus:bg-white focus:border-violet-300" placeholder="Search accounts, opportunities, content..." />
          </div>
          <div className="flex items-center gap-3 ml-auto">
            <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-100">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> All systems operational
            </span>
            <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50"><Bell size={16} /></button>
            <button className="flex items-center gap-2 pl-2">
              <div className="w-8 h-8 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center text-xs font-bold">SJ</div>
              <ChevronDown size={14} className="text-slate-400" />
            </button>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
