import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend
} from 'recharts'
import { analytics, winRateCorrelation } from '../data/mockData'
import { TrendingDown, Award, Users, Zap } from 'lucide-react'

export default function Analytics() {
  return (
    <div className="p-6 max-w-7xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Analytics</h1>
        <p className="text-slate-500 text-sm mt-1">Readiness trends, ramp time, and revenue correlation data</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Ramp Time — Q1 Cohort', value: '7.8mo', sub: '–1.4mo vs. Q3 2025 cohort', icon: TrendingDown, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'Avg Certifications/Rep', value: '2.4', sub: '+0.8 vs. 6 months ago', icon: Award, color: 'text-violet-600', bg: 'bg-violet-50' },
          { label: 'Coaching Completion Rate', value: '68%', sub: '+12pts since platform launch', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Roleplays This Month', value: '187', sub: '+22% MoM', icon: Zap, color: 'text-amber-600', bg: 'bg-amber-50' },
        ].map(({ label, value, sub, icon: Icon, color, bg }) => (
          <div key={label} className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
            <div className={`w-8 h-8 rounded-lg ${bg} flex items-center justify-center mb-3`}>
              <Icon size={15} className={color} />
            </div>
            <div className="text-2xl font-bold text-slate-800">{value}</div>
            <div className="text-xs text-slate-500 mt-0.5">{label}</div>
            <div className={`text-xs mt-1 ${color}`}>{sub}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        {/* Ramp time by cohort */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
          <h2 className="font-semibold text-slate-700 mb-1">Ramp Time by Hire Cohort</h2>
          <p className="text-xs text-slate-400 mb-4">Average months to first-quota attainment</p>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={analytics.rampCohorts}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
              <XAxis dataKey="cohort" tick={{ fontSize: 11, fill: '#94A3B8' }} />
              <YAxis domain={[6, 10]} tick={{ fontSize: 11, fill: '#94A3B8' }} />
              <Tooltip contentStyle={{ fontSize: 12 }} />
              <Bar dataKey="targetMonths" fill="#E2E8F0" name="Target" radius={[4, 4, 0, 0]} />
              <Bar dataKey="avgRampMonths" fill="#7C3AED" name="Actual" radius={[4, 4, 0, 0]} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Monthly roleplay trend */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
          <h2 className="font-semibold text-slate-700 mb-1">Roleplay Sessions — Monthly</h2>
          <p className="text-xs text-slate-400 mb-4">AI roleplay adoption since platform launch</p>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={analytics.monthlyRoleplays}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#94A3B8' }} />
              <YAxis tick={{ fontSize: 11, fill: '#94A3B8' }} />
              <Tooltip contentStyle={{ fontSize: 12 }} />
              <Line type="monotone" dataKey="sessions" stroke="#7C3AED" strokeWidth={2} dot={{ fill: '#7C3AED', r: 3 }} name="Sessions" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Win rate correlation */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
          <h2 className="font-semibold text-slate-700 mb-1">Win Rate vs. Readiness Band</h2>
          <p className="text-xs text-slate-400 mb-4">Reps at RRI ≥80 win at 2× the rate of Critical tier</p>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={winRateCorrelation}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
              <XAxis dataKey="rriRange" tick={{ fontSize: 11, fill: '#94A3B8' }} />
              <YAxis tickFormatter={v => `${v}%`} tick={{ fontSize: 11, fill: '#94A3B8' }} />
              <Tooltip formatter={v => [`${v}%`, 'Win Rate']} contentStyle={{ fontSize: 12 }} />
              <Bar dataKey="winRate" fill="#7C3AED" radius={[4, 4, 0, 0]} name="Win Rate" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Program effectiveness */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
          <h2 className="font-semibold text-slate-700 mb-4">Program Effectiveness</h2>
          <div className="space-y-4">
            {analytics.programEffectiveness.map(prog => (
              <div key={prog.program}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm text-slate-700">{prog.program}</span>
                  <div className="flex gap-4 text-xs">
                    <span className="text-emerald-600 font-medium">+{prog.skillLift}pt lift</span>
                    <span className="text-slate-400">{prog.completionRate}% complete</span>
                    <span className="text-slate-400">{prog.repCount} reps</span>
                  </div>
                </div>
                <div className="bg-slate-100 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${prog.completionRate >= 80 ? 'bg-emerald-500' : prog.completionRate >= 60 ? 'bg-blue-500' : 'bg-amber-500'}`}
                    style={{ width: `${prog.completionRate}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-violet-50 rounded-lg">
            <p className="text-xs text-violet-700 font-medium">AI Insight</p>
            <p className="text-xs text-violet-600 mt-0.5">
              Reps who completed ≥3 roleplay sessions in their first month ramped 7 weeks faster than peers who did not.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
