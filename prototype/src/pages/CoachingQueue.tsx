import { useState } from 'react'
import { CheckCircle, X, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react'
import { coachingActions } from '../data/mockData'

type Action = typeof coachingActions[0] & { dismissed?: boolean; completed?: boolean }

function PriorityBadge({ p }: { p: string }) {
  const map: Record<string, string> = {
    Critical: 'bg-red-100 text-red-700 border border-red-200',
    High: 'bg-amber-100 text-amber-700 border border-amber-200',
    Medium: 'bg-blue-100 text-blue-700 border border-blue-200',
    Low: 'bg-slate-100 text-slate-600 border border-slate-200',
  }
  return <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${map[p] ?? ''}`}>{p}</span>
}

export default function CoachingQueue() {
  const [actions, setActions] = useState<Action[]>(coachingActions)
  const [expanded, setExpanded] = useState<string | null>(null)
  const [dismissReason, setDismissReason] = useState<Record<string, string>>({})

  const active = actions.filter(a => !a.dismissed && !a.completed)
  const done = actions.filter(a => a.completed)
  const dismissed = actions.filter(a => a.dismissed)

  function complete(id: string) {
    setActions(prev => prev.map(a => a.id === id ? { ...a, completed: true } : a))
    setExpanded(null)
  }

  function dismiss(id: string) {
    setActions(prev => prev.map(a => a.id === id ? { ...a, dismissed: true } : a))
    setExpanded(null)
  }

  return (
    <div className="p-6 max-w-4xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Coaching Queue</h1>
        <p className="text-slate-500 text-sm mt-1">AI-prioritized coaching actions — week of June 9, 2026</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 text-center">
          <div className="text-2xl font-bold text-slate-800">{active.length}</div>
          <div className="text-xs text-slate-400 mt-0.5">Open Actions</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 text-center">
          <div className="text-2xl font-bold text-emerald-600">{done.length}</div>
          <div className="text-xs text-slate-400 mt-0.5">Completed</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 text-center">
          <div className="text-2xl font-bold text-slate-400">{dismissed.length}</div>
          <div className="text-xs text-slate-400 mt-0.5">Dismissed</div>
        </div>
      </div>

      {active.length === 0 && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center">
          <CheckCircle size={32} className="text-emerald-500 mx-auto mb-2" />
          <p className="text-emerald-700 font-medium">All coaching actions completed!</p>
          <p className="text-emerald-600 text-sm mt-1">New actions will appear next Monday.</p>
        </div>
      )}

      <div className="space-y-3">
        {active.map(action => (
          <div key={action.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
            <div
              className="p-4 cursor-pointer hover:bg-slate-50 transition-colors"
              onClick={() => setExpanded(expanded === action.id ? null : action.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-violet-100 flex items-center justify-center text-violet-700 font-bold text-sm">
                    {action.repName.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-slate-800 text-sm">{action.repName}</span>
                      <PriorityBadge p={action.priority} />
                      <span className="text-xs text-slate-500">{action.skill}</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">Created {action.createdAt} · AI confidence: {Math.round(action.aiConfidence * 100)}%</p>
                  </div>
                </div>
                {expanded === action.id ? <ChevronUp size={16} className="text-slate-400" /> : <ChevronDown size={16} className="text-slate-400" />}
              </div>

              {action.priority === 'Critical' && (
                <div className="mt-2 flex items-center gap-1.5 text-xs text-red-600">
                  <AlertCircle size={12} />
                  Requires immediate attention — score below critical threshold
                </div>
              )}
            </div>

            {expanded === action.id && (
              <div className="px-4 pb-4 border-t border-slate-100">
                <div className="mt-4 space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">Evidence</p>
                    <p className="text-sm text-slate-700 leading-relaxed">{action.evidence}</p>
                    <div className="flex gap-2 mt-2">
                      {action.evidenceRefs.map(ref => (
                        <span key={ref} className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full font-mono">{ref}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">Suggested Approach</p>
                    <p className="text-sm text-slate-700 leading-relaxed">{action.approach}</p>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => complete(action.id)}
                      className="flex items-center gap-1.5 text-sm bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
                    >
                      <CheckCircle size={14} />
                      Mark Complete
                    </button>
                    <div className="flex items-center gap-2">
                      <select
                        value={dismissReason[action.id] ?? ''}
                        onChange={e => setDismissReason(prev => ({ ...prev, [action.id]: e.target.value }))}
                        className="text-sm border border-slate-200 rounded-lg px-3 py-2 text-slate-600 focus:outline-none"
                      >
                        <option value="">Dismiss reason...</option>
                        <option>Already addressed</option>
                        <option>Not relevant</option>
                        <option>Wrong timing</option>
                        <option>Other</option>
                      </select>
                      {dismissReason[action.id] && (
                        <button
                          onClick={() => dismiss(action.id)}
                          className="flex items-center gap-1.5 text-sm border border-slate-200 text-slate-600 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors"
                        >
                          <X size={14} />
                          Dismiss
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {done.length > 0 && (
        <div className="mt-6">
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">Completed This Week</h2>
          {done.map(action => (
            <div key={action.id} className="bg-slate-50 rounded-xl p-4 mb-2 opacity-60 flex items-center gap-3">
              <CheckCircle size={16} className="text-emerald-500" />
              <span className="text-sm text-slate-600">{action.repName} · {action.skill}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
