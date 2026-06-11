import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { TrendingDown, TrendingUp, AlertCircle, Users } from 'lucide-react'
import { skillGapSummary } from '../data/mockData'

export default function SkillGaps() {
  const chartData = skillGapSummary
    .filter(s => s.gap > 0)
    .sort((a, b) => b.gap - a.gap)
    .map(s => ({ ...s, name: s.skill.replace(' Handling', '').replace(' Discipline', '') }))

  return (
    <div className="p-6 max-w-6xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Skill Gaps</h1>
        <p className="text-slate-500 text-sm mt-1">Organization-level skill analysis — current period vs. target</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
          <div className="text-2xl font-bold text-red-600">{skillGapSummary.filter(s => s.avgScore < 60).length}</div>
          <div className="text-xs text-slate-400 mt-0.5">Skills below 60</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
          <div className="text-2xl font-bold text-amber-600">{skillGapSummary.find(s => s.skill === 'Executive Communication')?.affectedReps ?? 0}</div>
          <div className="text-xs text-slate-400 mt-0.5">Reps with top gap</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
          <div className="text-2xl font-bold text-emerald-600">{skillGapSummary.filter(s => s.trend > 0).length}/10</div>
          <div className="text-xs text-slate-400 mt-0.5">Skills trending up</div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 mb-6">
        <h2 className="font-semibold text-slate-700 mb-4">Skill Gap — Actual vs. Target (70)</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={chartData} layout="vertical" margin={{ left: 130 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" horizontal={false} />
            <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 10, fill: '#94A3B8' }} />
            <YAxis type="category" dataKey="name" tick={{ fontSize: 11, fill: '#475569' }} width={130} />
            <Tooltip contentStyle={{ fontSize: 12 }} />
            <Bar dataKey="target" fill="#E2E8F0" name="Target" radius={[0, 4, 4, 0]} />
            <Bar dataKey="avgScore" name="Actual" radius={[0, 4, 4, 0]}>
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.avgScore >= 70 ? '#10B981' : entry.avgScore >= 60 ? '#3B82F6' : entry.avgScore >= 40 ? '#F59E0B' : '#EF4444'}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-3">
        {skillGapSummary.map(skill => (
          <div key={skill.skill} className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${skill.avgScore >= 70 ? 'bg-emerald-500' : skill.avgScore >= 60 ? 'bg-blue-500' : skill.avgScore >= 40 ? 'bg-amber-500' : 'bg-red-500'}`} />
                <span className="font-medium text-slate-800 text-sm">{skill.skill}</span>
                {skill.gap > 10 && <AlertCircle size={13} className="text-amber-500" />}
              </div>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1 text-xs text-slate-500">
                  <Users size={11} />{skill.affectedReps} reps below target
                </span>
                <span className={`flex items-center gap-0.5 text-xs font-medium ${skill.trend > 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                  {skill.trend > 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                  {skill.trend > 0 ? '+' : ''}{skill.trend} pts (30d)
                </span>
                <div className="text-right">
                  <span className="text-lg font-bold text-slate-800">{skill.avgScore}</span>
                  <span className="text-xs text-slate-400"> / {skill.target}</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-100 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${skill.avgScore >= 70 ? 'bg-emerald-500' : skill.avgScore >= 60 ? 'bg-blue-500' : skill.avgScore >= 40 ? 'bg-amber-500' : 'bg-red-500'}`}
                style={{ width: `${skill.avgScore}%` }}
              />
            </div>
            {skill.gap > 10 && (
              <p className="text-xs text-amber-600 mt-2">
                Critical gap: {skill.gap} points below target. AI recommendation: prioritize this skill in Q3 program investment.
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
