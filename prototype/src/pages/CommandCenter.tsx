import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, CartesianGrid } from 'recharts'
import { TrendingUp, Users, MessageSquare, Mic, ArrowUp } from 'lucide-react'
import { orgStats, rriTrend, winRateCorrelation, coachingActions } from '../data/mockData'

function TierBadge({ tier }: { tier: string }) {
  const map: Record<string, string> = {
    Ready: 'bg-emerald-100 text-emerald-700',
    Developing: 'bg-blue-100 text-blue-700',
    'At Risk': 'bg-amber-100 text-amber-700',
    Critical: 'bg-red-100 text-red-700',
  }
  return <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${map[tier] ?? ''}`}>{tier}</span>
}

function StatCard({ label, value, sub, icon: Icon, accent }: { label: string; value: string | number; sub?: string; icon: React.ElementType; accent: string }) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
      <div className="flex items-center justify-between mb-3">
        <span className="text-slate-500 text-sm">{label}</span>
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${accent}`}>
          <Icon size={15} className="text-white" />
        </div>
      </div>
      <div className="text-3xl font-bold text-slate-800">{value}</div>
      {sub && <div className="text-xs text-slate-400 mt-1">{sub}</div>}
    </div>
  )
}

export default function CommandCenter() {
  return (
    <div className="p-6 max-w-7xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Command Center</h1>
        <p className="text-slate-500 text-sm mt-1">Week of June 9, 2026 — 120 reps, 5 teams</p>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 col-span-2 lg:col-span-1">
          <div className="flex items-center justify-between mb-3">
            <span className="text-slate-500 text-sm">Readiness Index</span>
            <TrendingUp size={15} className="text-violet-500" />
          </div>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold text-slate-800">{orgStats.rri}</span>
            <span className="text-sm text-emerald-600 font-medium mb-1 flex items-center gap-0.5">
              <ArrowUp size={12} />+{orgStats.rriTrend} vs. last month
            </span>
          </div>
          <div className="mt-2 flex gap-1">
            {(['Critical', 'At Risk', 'Developing', 'Ready'] as const).map((tier, i) => {
              const vals = [orgStats.criticalCount, orgStats.atRiskCount, orgStats.developingCount, orgStats.readyCount]
              const cols = ['bg-red-400', 'bg-amber-400', 'bg-blue-400', 'bg-emerald-400']
              const pct = Math.round((vals[i] / orgStats.totalReps) * 100)
              return <div key={tier} className={`h-2 rounded-full ${cols[i]}`} style={{ width: `${pct}%` }} title={`${tier}: ${vals[i]}`} />
            })}
          </div>
          <div className="flex gap-3 mt-1.5 text-xs text-slate-400">
            <span className="text-red-500">{orgStats.criticalCount} Critical</span>
            <span className="text-amber-500">{orgStats.atRiskCount} At Risk</span>
            <span className="text-emerald-500">{orgStats.readyCount} Ready</span>
          </div>
        </div>
        <StatCard label="Ramp Time (Q1 Cohort)" value={`${orgStats.avgRampMonths}mo`} sub={`vs. ${orgStats.rampTarget}mo target`} icon={Users} accent="bg-violet-500" />
        <StatCard label="Open Coaching Actions" value={orgStats.coachingActionsOpen} sub={`${orgStats.coachingActionsOverdue} overdue`} icon={MessageSquare} accent="bg-amber-500" />
        <StatCard label="Roleplays (Jun)" value={orgStats.roleplaysThisMonth} sub="+22% vs. last month" icon={Mic} accent="bg-blue-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {/* RRI Trend */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 lg:col-span-2">
          <h2 className="font-semibold text-slate-700 mb-4">Readiness Index — 12-Week Trend</h2>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={rriTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
              <XAxis dataKey="week" tick={{ fontSize: 11, fill: '#94A3B8' }} />
              <YAxis domain={[50, 75]} tick={{ fontSize: 11, fill: '#94A3B8' }} />
              <Tooltip contentStyle={{ fontSize: 12 }} />
              <Line type="monotone" dataKey="rri" stroke="#7C3AED" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Win Rate Correlation */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
          <h2 className="font-semibold text-slate-700 mb-1">Win Rate by RRI Band</h2>
          <p className="text-xs text-slate-400 mb-4">Reps with RRI ≥80 win at 2× the rate of Critical tier</p>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={winRateCorrelation} layout="vertical">
              <XAxis type="number" domain={[0, 45]} tick={{ fontSize: 10, fill: '#94A3B8' }} tickFormatter={v => `${v}%`} />
              <YAxis type="category" dataKey="rriRange" tick={{ fontSize: 11, fill: '#94A3B8' }} width={45} />
              <Tooltip formatter={(v) => [`${v}%`, 'Win Rate']} contentStyle={{ fontSize: 12 }} />
              <Bar dataKey="winRate" fill="#7C3AED" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Coaching Queue Preview */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-slate-700">Coaching Queue — This Week</h2>
          <span className="text-xs text-violet-600 font-medium cursor-pointer hover:underline">View all</span>
        </div>
        <div className="space-y-3">
          {coachingActions.slice(0, 3).map(action => (
            <div key={action.id} className="flex items-start gap-4 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-medium text-slate-800 text-sm">{action.repName}</span>
                  <TierBadge tier={action.priority === 'Critical' ? 'Critical' : action.priority === 'High' ? 'At Risk' : 'Developing'} />
                  <span className="text-xs text-slate-400">{action.skill}</span>
                </div>
                <p className="text-xs text-slate-500 truncate">{action.evidence}</p>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <button className="text-xs bg-violet-600 text-white px-3 py-1.5 rounded-lg hover:bg-violet-700">Coach</button>
                <button className="text-xs border border-slate-200 text-slate-500 px-3 py-1.5 rounded-lg hover:bg-slate-100">Dismiss</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
