import { useState } from 'react'
import { Play, CheckCircle, Clock } from 'lucide-react'
import { scenarios, roleplays } from '../data/mockData'

function DifficultyBadge({ d }: { d: string }) {
  const map: Record<string, string> = {
    Beginner: 'bg-emerald-100 text-emerald-700',
    Intermediate: 'bg-blue-100 text-blue-700',
    Advanced: 'bg-violet-100 text-violet-700',
  }
  return <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${map[d] ?? 'bg-slate-100 text-slate-600'}`}>{d}</span>
}

function ScoreTier({ score }: { score: number }) {
  if (score >= 80) return <span className="text-emerald-600 font-bold">{score} — Ready</span>
  if (score >= 60) return <span className="text-blue-600 font-bold">{score} — Developing</span>
  if (score >= 40) return <span className="text-amber-600 font-bold">{score} — At Risk</span>
  return <span className="text-red-600 font-bold">{score} — Critical</span>
}

export default function AIRoleplay() {
  const [activeTab, setActiveTab] = useState<'scenarios' | 'history'>('scenarios')
  const [selectedRoleplay, setSelectedRoleplay] = useState<string | null>(null)
  const [sessionState, setSessionState] = useState<'idle' | 'active' | 'done'>('idle')
  const [messages, setMessages] = useState<{speaker: string; text: string}[]>([])
  const [input, setInput] = useState('')


  function startSession() {
    setSessionState('active')
    setMessages([
      { speaker: 'Buyer', text: 'Hi — thanks for joining. I have about 20 minutes. What were you hoping to cover today?' }
    ])
  }

  function sendMessage() {
    if (!input.trim()) return
    const userMsg = input.trim()
    setInput('')
    setMessages(prev => [...prev, { speaker: 'Rep', text: userMsg }])
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { speaker: 'Buyer', text: "That's interesting. But honestly, we already have a solution in place. What makes you think we need something different?" }
      ])
    }, 1200)
  }

  return (
    <div className="p-6 max-w-7xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">AI Roleplay</h1>
        <p className="text-slate-500 text-sm mt-1">Practice sales scenarios with an AI buyer — get scored feedback</p>
      </div>

      {sessionState !== 'idle' ? (
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="bg-violet-600 px-5 py-3 flex items-center justify-between">
            <div>
              <p className="text-white font-medium text-sm">Enterprise Discovery Call — VP Operations</p>
              <p className="text-violet-200 text-xs">Intermediate · Discovery, Value Articulation</p>
            </div>
            <button
              onClick={() => setSessionState('done')}
              className="text-xs bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-lg transition-colors"
            >
              End Session
            </button>
          </div>

          {sessionState === 'active' ? (
            <>
              <div className="h-80 overflow-y-auto p-5 space-y-4">
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.speaker === 'Rep' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-sm px-4 py-2.5 rounded-2xl text-sm ${
                      m.speaker === 'Rep'
                        ? 'bg-violet-600 text-white rounded-br-sm'
                        : 'bg-slate-100 text-slate-800 rounded-bl-sm'
                    }`}>
                      {m.text}
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-slate-100 p-4 flex gap-3">
                <input
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && sendMessage()}
                  placeholder="Type your response..."
                  className="flex-1 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300"
                />
                <button
                  onClick={sendMessage}
                  className="bg-violet-600 text-white px-5 py-2.5 rounded-lg text-sm hover:bg-violet-700 transition-colors"
                >
                  Send
                </button>
              </div>
            </>
          ) : (
            <div className="p-6">
              <div className="flex items-center gap-3 mb-5">
                <CheckCircle size={24} className="text-violet-600" />
                <div>
                  <p className="font-semibold text-slate-800">Session Complete — Debrief Ready</p>
                  <p className="text-xs text-slate-400">AI confidence: 89%</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-5 p-4 bg-slate-50 rounded-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">52</div>
                  <div className="text-xs text-slate-500">Overall</div>
                </div>
                <div className="flex-1 space-y-1.5">
                  {[{ s: 'Discovery', v: 42 }, { s: 'Value Articulation', v: 61 }, { s: 'Objection Handling', v: 58 }].map(({ s, v }) => (
                    <div key={s} className="flex items-center gap-2">
                      <span className="text-xs text-slate-500 w-32">{s}</span>
                      <div className="flex-1 bg-slate-200 rounded-full h-1.5">
                        <div className="h-1.5 rounded-full bg-violet-500" style={{ width: `${v}%` }} />
                      </div>
                      <span className="text-xs text-slate-700 font-medium w-5">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-emerald-50 rounded-xl">
                  <p className="text-xs font-semibold text-emerald-700 mb-2">Strengths</p>
                  <ul className="space-y-1 text-xs text-emerald-700">
                    <li>Strong rapport-building opener</li>
                    <li>Good follow-up question on timeline</li>
                  </ul>
                </div>
                <div className="p-4 bg-amber-50 rounded-xl">
                  <p className="text-xs font-semibold text-amber-700 mb-2">Development Areas</p>
                  <ul className="space-y-1 text-xs text-amber-700">
                    <li>Jumped to solution too early (turn 3)</li>
                    <li>Did not ask about current state</li>
                  </ul>
                </div>
              </div>
              <button
                onClick={() => { setSessionState('idle'); setMessages([]) }}
                className="mt-4 text-sm text-violet-600 hover:underline"
              >
                Back to scenarios
              </button>
            </div>
          )}
        </div>
      ) : (
        <>
          <div className="flex gap-1 mb-5">
            {(['scenarios', 'history'] as const).map(t => (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className={`text-sm px-4 py-2 rounded-lg capitalize ${
                  activeTab === t ? 'bg-violet-600 text-white' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {t === 'scenarios' ? 'Practice Scenarios' : 'Session History'}
              </button>
            ))}
          </div>

          {activeTab === 'scenarios' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {scenarios.map(sc => (
                <div key={sc.id} className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 hover:border-violet-200 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-medium text-slate-800 text-sm">{sc.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-slate-400">{sc.type}</span>
                        <DifficultyBadge d={sc.difficulty} />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {sc.skills.map(sk => (
                      <span key={sk} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">{sk}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">{sc.completions} team completions</span>
                    <button
                      onClick={startSession}
                      className="flex items-center gap-1.5 text-xs bg-violet-600 text-white px-3 py-1.5 rounded-lg hover:bg-violet-700 transition-colors"
                    >
                      <Play size={11} />
                      Start Practice
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {roleplays.map(rp => (
                <div
                  key={rp.id}
                  onClick={() => setSelectedRoleplay(rp.id === selectedRoleplay ? null : rp.id)}
                  className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 cursor-pointer hover:border-violet-200 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-slate-800 text-sm">{rp.scenarioTitle}</p>
                      <div className="flex items-center gap-3 mt-1 text-xs text-slate-400">
                        <span className="flex items-center gap-1"><Clock size={11} />{rp.completedAt}</span>
                        <span>{rp.repName}</span>
                      </div>
                    </div>
                    <ScoreTier score={rp.overallScore} />
                  </div>
                  {selectedRoleplay === rp.id && (
                    <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 gap-3">
                      <div className="bg-emerald-50 p-3 rounded-lg">
                        <p className="text-xs font-semibold text-emerald-700 mb-2">Strengths</p>
                        {rp.strengths.map((s, i) => <p key={i} className="text-xs text-emerald-600">· {s}</p>)}
                      </div>
                      <div className="bg-amber-50 p-3 rounded-lg">
                        <p className="text-xs font-semibold text-amber-700 mb-2">Development Areas</p>
                        {rp.gaps.map((g, i) => <p key={i} className="text-xs text-amber-600">· {g}</p>)}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}
