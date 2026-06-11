import { useState } from 'react'
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip } from 'recharts'
import { ChevronDown, ChevronUp, TrendingUp, TrendingDown, User } from 'lucide-react'
import { reps } from '../data/mockData'

function TierBadge({ tier }: { tier: string }) {
  const map: Record<string, string> = {
    Ready: 'bg-emerald-100 text-emerald-700',
    Developing: 'bg-blue-100 text-blue-700',
    'At Risk': 'bg-amber-100 text-amber-700',
    Critical: 'bg-red-100 text-red-700',
  }
  return <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${map[tier] ?? ''}`}>{tier}</span>
}

function ScoreBar({ score, label }: { score: number; label: string }) {
  const color = score >= 80 ? 'bg-emerald-500' : score >= 60 ? 'bg-blue-500' : score >= 40 ? 'bg-amber-500' : 'bg-red-500'
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-slate-500 w-36 truncate">{label}</span>
      <div className="flex-1 bg-slate-100 rounded-full h-2">
        <div className={`h-2 rounded-full ${color}`} style={{ width: `${score}%` }} />
      </div>
      <span className="text-xs font-semibold text-slate-700 w-7 text-right">{score}</span>
    </div>
  )
}

export default function RepReadiness() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [filterTier, setFilterTier] = useState('All')

  const filtered = filterTier === 'All' ? reps : reps.filter(r => r.tier === filterTier)
  const selected = reps.find(r => r.id === selectedId) ?? null

  const radarData = selected
    ? Object.entries(selected.skillScores).map(([k, v]) => ({
        skill: k.replace(/([A-Z])/g, ' $1').trim(),
        score: v,
      }))
    : []

  return (
    <div className="p-6 max-w-7xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Rep Readiness</h1>
        <p className="text-slate-500 text-sm mt-1">Skill scores and readiness status across the team</p>
      </div>

      <div className="flex gap-2 mb-5">
        {['All', 'Critical', 'At Risk', 'Developing', 'Ready'].map(t => (
          <button
            key={t}
            onClick={() => setFilterTier(t)}
            className={`text-sm px-3 py-1.5 rounded-lg border transition-colors ${
              filterTier === t ? 'bg-violet-600 text-white border-violet-600' : 'border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Rep list */}
        <div className="space-y-3">
          {filtered.map(rep => (
            <div
              key={rep.id}
              onClick={() => setSelectedId(rep.id === selectedId ? null : rep.id)}
              className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 cursor-pointer hover:border-violet-200 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-violet-100 flex items-center justify-center text-violet-700 font-semibold text-sm">
                    {rep.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-medium text-slate-800 text-sm">{rep.name}</div>
                    <div className="text-xs text-slate-400">{rep.role} · {rep.tenure}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <TierBadge tier={rep.tier} />
                  <div className="text-right">
                    <div className="text-xl font-bold text-slate-800">{rep.rri}</div>
                    <div className={`text-xs flex items-center gap-0.5 ${rep.rriTrend >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                      {rep.rriTrend >= 0 ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
                      {rep.rriTrend >= 0 ? '+' : ''}{rep.rriTrend} pts
                    </div>
                  </div>
                  {selectedId === rep.id ? <ChevronUp size={14} className="text-slate-400" /> : <ChevronDown size={14} className="text-slate-400" />}
                </div>
              </div>

              {selectedId === rep.id && (
                <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                  {Object.entries(rep.skillScores).map(([key, val]) => (
                    <ScoreBar key={key} score={val} label={key.replace(/([A-Z])/g, ' $1').trim()} />
                  ))}
                  <div className="flex gap-4 mt-3 text-xs text-slate-500">
                    <span>{rep.roleplaysCompleted} roleplays completed</span>
                    <span>Last practice: {rep.lastRoleplay}</span>
                    <span>Top gap: <span className="text-amber-600 font-medium">{rep.topGap}</span></span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Radar chart */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 sticky top-4 h-fit">
          {selected ? (
            <>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-700 font-bold">
                  {selected.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-slate-800">{selected.name}</div>
                  <div className="flex items-center gap-2">
                    <TierBadge tier={selected.tier} />
                    <span className="text-sm text-slate-500">RRI: {selected.rri}/100</span>
                  </div>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={radarData}>
                  <PolarGrid stroke="#E2E8F0" />
                  <PolarAngleAxis dataKey="skill" tick={{ fontSize: 9, fill: '#64748B' }} />
                  <Radar dataKey="score" stroke="#7C3AED" fill="#7C3AED" fillOpacity={0.2} />
                  <Tooltip contentStyle={{ fontSize: 12 }} />
                </RadarChart>
              </ResponsiveContainer>
              <div className="mt-3 p-3 bg-amber-50 rounded-lg">
                <p className="text-xs text-amber-700 font-medium">Top coaching opportunity: {selected.topGap}</p>
                <p className="text-xs text-amber-600 mt-0.5">{selected.roleplaysCompleted} roleplay sessions completed · Last practice {selected.lastRoleplay}</p>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-64 text-slate-400">
              <User size={32} className="mb-3 text-slate-300" />
              <p className="text-sm">Select a rep to view skill breakdown</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
