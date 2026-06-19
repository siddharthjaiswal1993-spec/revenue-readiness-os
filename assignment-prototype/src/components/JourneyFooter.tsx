import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

type Props = {
  completed: string
  insight: string
  previous?: { label: string; to: string }
  next: { label: string; to: string; description: string }
}

export default function JourneyFooter({ completed, insight, previous, next }: Props) {
  const navigate = useNavigate()
  return <div className="mt-7 rounded-2xl bg-slate-900 text-white panel-shadow overflow-hidden">
    <div className="p-5 lg:p-6 flex flex-col lg:flex-row lg:items-center gap-5">
      <div className="flex-1"><div className="flex items-center gap-2 text-xs font-semibold text-emerald-300"><CheckCircle2 size={14} /> {completed}</div><p className="text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">{insight}</p></div>
      <div className="flex items-center gap-2 shrink-0">{previous && <button onClick={() => navigate(previous.to)} className="px-3 py-2.5 rounded-lg border border-white/15 text-xs text-slate-300 hover:bg-white/5 flex items-center gap-1.5"><ArrowLeft size={13} /> {previous.label}</button>}<button onClick={() => navigate(next.to)} className="min-w-[220px] text-left px-4 py-3 rounded-xl bg-violet-600 hover:bg-violet-500"><div className="flex items-center justify-between text-xs font-semibold">{next.label}<ArrowRight size={14} /></div><div className="text-[10px] text-violet-200 mt-1">{next.description}</div></button></div>
    </div>
  </div>
}
