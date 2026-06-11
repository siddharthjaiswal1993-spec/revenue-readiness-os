import { NavLink, Outlet } from 'react-router-dom'
import {
  LayoutDashboard,
  Users,
  Mic,
  MessageSquare,
  BookOpen,
  FileText,
  TrendingDown,
  Briefcase,
  BarChart3,
  Sparkles,
} from 'lucide-react'
import { currentUser } from '../data/mockData'

const SIDEBAR_BG = '#0F172A'

const navItems = [
  { to: '/', label: 'Command Center', icon: LayoutDashboard },
  { to: '/rep-readiness', label: 'Rep Readiness', icon: Users },
  { to: '/roleplay', label: 'AI Roleplay', icon: Mic },
  { to: '/coaching', label: 'Coaching Queue', icon: MessageSquare, badge: 4 },
  { to: '/programs', label: 'Programs', icon: BookOpen },
  { to: '/content', label: 'Content Hub', icon: FileText },
  { to: '/skill-gaps', label: 'Skill Gaps', icon: TrendingDown },
  { to: '/deals', label: 'Deal Readiness', icon: Briefcase, badge: 2 },
  { to: '/analytics', label: 'Analytics', icon: BarChart3 },
  { to: '/ai-assistant', label: 'AI Assistant', icon: Sparkles },
]

export default function Layout() {
  return (
    <div className="flex h-screen overflow-hidden">
      <aside
        className="w-60 flex-shrink-0 flex flex-col"
        style={{ backgroundColor: SIDEBAR_BG }}
      >
        <div className="px-5 py-5 border-b border-white/10">
          <div className="text-white font-bold text-base leading-tight">Revenue</div>
          <div className="text-violet-400 font-bold text-base leading-tight">Readiness OS</div>
        </div>

        <nav className="flex-1 overflow-y-auto py-3">
          {navItems.map(({ to, label, icon: Icon, badge }) => (
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
              {badge !== undefined && (
                <span className="bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                  {badge}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="px-4 py-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center text-white text-xs font-bold">
              {currentUser.avatar}
            </div>
            <div className="min-w-0">
              <div className="text-white text-xs font-medium truncate">{currentUser.name}</div>
              <div className="text-slate-400 text-xs truncate">{currentUser.role}</div>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto bg-slate-50">
        <Outlet />
      </main>
    </div>
  )
}
