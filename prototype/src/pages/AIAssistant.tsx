import { useState } from 'react'
import { Sparkles, Send, User } from 'lucide-react'

type Message = { role: 'user' | 'assistant'; content: string }

const SUGGESTED_PROMPTS = [
  "Which reps should I prioritize coaching this week?",
  "What are the top 3 skill gaps across the org right now?",
  "Show me the readiness status of the Enterprise AE team",
  "Which deals are at risk due to rep skill gaps?",
  "What content should Kavya Rao use for the TechCorp deal?",
  "Generate a coaching brief for Arjun Nair",
]

const RESPONSES: Record<string, string> = {
  "Which reps should I prioritize coaching this week?": `Based on current skill signals, I recommend prioritizing these reps this week:

**1. Neha Gupta — Critical (RRI: 35)**
Executive Communication score dropped from 39 to 28 in 14 days. The TechCorp deal is at risk. Immediate intervention recommended. Action: 1:1 this week + assign Executive Pitch roleplay before next call.

**2. Arjun Nair — At Risk (RRI: 44)**
Competitive Positioning at 38/100 — lowest on the team. No competitive content used in 30 days. Action: 30-min competitive session + Competitive Handling roleplay.

**3. Kavya Rao — At Risk (RRI: 58)**
Discovery score is 52 — she's jumping to solution before establishing current state. Pattern confirmed in 2 of 3 recent call signals. Action: SPIN framework coaching in Thursday 1:1.`,

  "What are the top 3 skill gaps across the org right now?": `**Top 3 org-level skill gaps (June 2026):**

**1. Executive Communication** — avg score 51/100, 48 reps below target
The largest gap and most revenue-correlated skill. Reps are struggling with C-level conversations and board-level ROI narratives. Recommend investing in an Executive Communication certification program in Q3.

**2. Pricing Confidence** — avg score 54/100, 41 reps affected
Discounting behavior is likely high. Reps lack conviction when buyers push back on price. Recommend a focused pricing objection roleplay library and manager coaching certification.

**3. Competitive Positioning** — avg score 56/100, 38 reps below target
Improving (+3pts in 30 days) but still a critical gap. The new competitive battle cards deployed in June should accelerate this. Monitor at end of month.`,

  "Which deals are at risk due to rep skill gaps?": `**2 deals flagged with rep skill-related risk:**

**MediData Systems** — $92K · Discovery stage · Owner: Neha Gupta
- Discovery score 38 (critical)
- No activity in 14 days
- No content shared with this account
→ Coaching action created. Deal at high risk of stalling.

**TechCorp Industries** — $240K · Evaluation stage · Owner: Kavya Rao
- No executive sponsor contact in CRM
- Discovery score below recommended threshold (52 vs. 65+ target)
→ Coaching action created. Recommend joint call with manager.`,
}

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi Aanya — I'm your Revenue Readiness AI assistant. I can help you understand team readiness, identify coaching priorities, surface deal risks, and generate insights from your rep and program data. What would you like to explore?",
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  function sendMessage(text?: string) {
    const query = text ?? input.trim()
    if (!query) return
    setInput('')

    const userMsg: Message = { role: 'user', content: query }
    setMessages(prev => [...prev, userMsg])
    setLoading(true)

    setTimeout(() => {
      const response = RESPONSES[query] ?? "I've analyzed your current team data. Based on the signals available, your top priorities this week are: (1) coaching Neha Gupta on Executive Communication — deal at risk, (2) reviewing Arjun Nair's competitive positioning before his next set of outbound calls, and (3) assigning the Discovery Excellence program to the 3 reps who completed onboarding last week but haven't started it yet."

      setMessages(prev => [...prev, { role: 'assistant', content: response }])
      setLoading(false)
    }, 1400)
  }

  return (
    <div className="p-6 max-w-4xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">AI Assistant</h1>
        <p className="text-slate-500 text-sm mt-1">Ask about team readiness, coaching priorities, deals, and program effectiveness</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden flex flex-col" style={{ height: 'calc(100vh - 200px)' }}>
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                msg.role === 'assistant' ? 'bg-violet-600' : 'bg-slate-200'
              }`}>
                {msg.role === 'assistant' ? <Sparkles size={13} className="text-white" /> : <User size={13} className="text-slate-600" />}
              </div>
              <div className={`max-w-2xl px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                msg.role === 'user'
                  ? 'bg-violet-600 text-white rounded-br-sm'
                  : 'bg-slate-100 text-slate-800 rounded-bl-sm'
              }`}>
                {msg.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex gap-3">
              <div className="w-7 h-7 rounded-full bg-violet-600 flex items-center justify-center">
                <Sparkles size={13} className="text-white" />
              </div>
              <div className="bg-slate-100 px-4 py-3 rounded-2xl rounded-bl-sm">
                <div className="flex gap-1">
                  {[0, 1, 2].map(i => (
                    <div key={i} className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Suggested prompts */}
        {messages.length === 1 && (
          <div className="px-5 pb-3">
            <p className="text-xs text-slate-400 mb-2">Try asking:</p>
            <div className="flex flex-wrap gap-2">
              {SUGGESTED_PROMPTS.map(p => (
                <button
                  key={p}
                  onClick={() => sendMessage(p)}
                  className="text-xs bg-slate-100 hover:bg-violet-50 hover:text-violet-700 text-slate-600 px-3 py-1.5 rounded-full border border-slate-200 hover:border-violet-200 transition-colors"
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="border-t border-slate-100 p-4 flex gap-3">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && !e.shiftKey && sendMessage()}
            placeholder="Ask about team readiness, coaching, deals..."
            className="flex-1 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300"
          />
          <button
            onClick={() => sendMessage()}
            disabled={!input.trim() || loading}
            className="bg-violet-600 text-white px-4 py-2.5 rounded-xl hover:bg-violet-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <Send size={15} />
          </button>
        </div>
      </div>
    </div>
  )
}
