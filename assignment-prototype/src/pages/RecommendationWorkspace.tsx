import { useMemo, useState } from 'react'
import { ArrowUpRight, Bookmark, Check, ChevronDown, HelpCircle, Clock3, Copy, FileText, MoreHorizontal, RefreshCw, Send, Share2, ShieldCheck, Sparkles, ThumbsDown, X } from 'lucide-react'
import { contextSignals, opportunities, recommendations } from '../data/recommendationData'
import { useNavigate } from 'react-router-dom'
import JourneyFooter from '../components/JourneyFooter'

const accentStyles: Record<string, { chip: string; icon: string; bar: string }> = {
  violet: { chip: 'bg-violet-50 text-violet-700 border-violet-100', icon: 'bg-violet-100 text-violet-700', bar: 'bg-violet-500' },
  blue: { chip: 'bg-blue-50 text-blue-700 border-blue-100', icon: 'bg-blue-100 text-blue-700', bar: 'bg-blue-500' },
  cyan: { chip: 'bg-cyan-50 text-cyan-700 border-cyan-100', icon: 'bg-cyan-100 text-cyan-700', bar: 'bg-cyan-500' },
}

export default function RecommendationWorkspace() {
  const navigate = useNavigate()
  const [selectedOpportunity, setSelectedOpportunity] = useState(opportunities[0])
  const [detailId, setDetailId] = useState<string | null>('rec-1')
  const [usedIds, setUsedIds] = useState<string[]>([])
  const [dismissedIds, setDismissedIds] = useState<string[]>([])
  const [showOpportunityMenu, setShowOpportunityMenu] = useState(false)
  const [refreshed, setRefreshed] = useState(false)
  const visibleRecommendations = useMemo(() => recommendations.filter(r => !dismissedIds.includes(r.id)), [dismissedIds])
  const detail = recommendations.find(r => r.id === detailId)

  const selectOpportunity = (opportunity: typeof opportunities[0]) => {
    setSelectedOpportunity(opportunity)
    setShowOpportunityMenu(false)
    setDismissedIds([])
    setDetailId(opportunity.id === 'opp-1' ? 'rec-1' : null)
  }

  return (
    <div className="min-h-full">
      <div className="px-6 lg:px-8 pt-7 pb-5 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row lg:items-start justify-between gap-5">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-violet-700 mb-2"><Sparkles size={13} /> Contextual recommendations</div>
            <h1 className="text-[28px] tracking-tight font-semibold text-slate-900">Opportunity content workspace</h1>
            <p className="text-sm text-slate-500 mt-1.5">Approved content ranked for this buyer, moment, and seller—with the evidence behind every result.</p>
          </div>
          <div className="relative">
            <button onClick={() => setShowOpportunityMenu(!showOpportunityMenu)} className="min-w-[315px] bg-white border border-slate-200 rounded-xl px-4 py-3 flex items-center gap-3 text-left panel-shadow hover:border-violet-300">
              <div className="w-9 h-9 rounded-lg bg-slate-900 text-white flex items-center justify-center text-sm font-semibold">{selectedOpportunity.account.slice(0, 1)}</div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-slate-900">{selectedOpportunity.account}</div>
                <div className="text-xs text-slate-500 mt-0.5">{selectedOpportunity.stage} · {selectedOpportunity.value}</div>
              </div>
              <ChevronDown size={16} className="text-slate-400" />
            </button>
            {showOpportunityMenu && (
              <div className="absolute right-0 top-[62px] w-full bg-white border border-slate-200 rounded-xl panel-shadow p-1.5 z-30">
                {opportunities.map(opp => <button key={opp.id} onClick={() => selectOpportunity(opp)} className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-50"><div className="text-sm font-medium text-slate-800">{opp.account}</div><div className="text-xs text-slate-500">{opp.stage} · {opp.value}</div></button>)}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto p-6 lg:p-8">
        <div className="grid grid-cols-1 xl:grid-cols-[280px_minmax(0,1fr)_360px] gap-5 items-start">
          <aside className="space-y-4">
            <div className="bg-white rounded-2xl border border-slate-200 panel-shadow overflow-hidden">
              <div className="p-4 border-b border-slate-100 flex items-center justify-between"><div><div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Live context</div><div className="text-sm font-semibold text-slate-900 mt-1">5 sources connected</div></div><span className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-50" /></div>
              <div className="p-3 space-y-1">
                {contextSignals.map((signal, index) => (
                  <button key={signal.type} className="w-full text-left p-3 rounded-xl hover:bg-slate-50 group">
                    <div className="flex items-center justify-between"><span className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">{signal.type}</span><span className="text-[10px] text-slate-400">{signal.strength}%</span></div>
                    <div className="text-xs font-medium text-slate-800 mt-1 leading-relaxed">{signal.title}</div>
                    {index < 2 && <div className="text-[11px] text-slate-400 mt-1">{signal.freshness}</div>}
                  </button>
                ))}
              </div>
              <button onClick={() => navigate('/context')} className="w-full px-4 py-3 border-t border-slate-100 text-xs font-medium text-violet-700 hover:bg-violet-50">Explore full context graph →</button>
            </div>
            <div className="rounded-2xl bg-slate-900 text-white p-4 panel-shadow">
              <div className="flex items-center gap-2 text-xs font-semibold"><ShieldCheck size={14} className="text-emerald-400" /> Enterprise controls applied</div>
              <p className="text-[11px] text-slate-400 leading-relaxed mt-2">3 policies and seller permissions filtered 14 candidates before ranking.</p>
              <button onClick={() => navigate('/governance')} className="text-[11px] text-violet-300 mt-3">View policy trace →</button>
            </div>
          </aside>

          <section className="min-w-0">
            <div className="bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 rounded-2xl px-5 py-4 text-white panel-shadow mb-4 overflow-hidden relative">
              <div className="absolute -right-10 -top-20 w-56 h-56 rounded-full border-[30px] border-white/5" />
              <div className="relative flex items-start justify-between gap-4">
                <div><div className="flex items-center gap-2 text-xs font-semibold text-violet-100"><Sparkles size={14} /> Recommendation brief</div><p className="text-sm font-medium mt-2 max-w-2xl leading-relaxed">Lead with quantified value. The latest call centered on ROI validation, while recent account activity suggests security will be the next proof point.</p><div className="text-[11px] text-violet-200 mt-2">Generated from 18 authorized signals · No sensitive fields included</div></div>
                <button onClick={() => { setRefreshed(true); setTimeout(() => setRefreshed(false), 1200) }} className="shrink-0 bg-white/10 hover:bg-white/20 border border-white/15 rounded-lg p-2"><RefreshCw size={15} className={refreshed ? 'animate-spin' : ''} /></button>
              </div>
            </div>

            <div className="flex items-center justify-between mb-3 px-1"><div><h2 className="font-semibold text-slate-900">Recommended for this opportunity</h2><p className="text-xs text-slate-500 mt-0.5">Ranked from 128 approved assets</p></div><button className="text-xs text-slate-500 flex items-center gap-1.5">Relevance: highest <ChevronDown size={13} /></button></div>
            {selectedOpportunity.id !== 'opp-1' ? (
              <div className="bg-white rounded-2xl border border-slate-200 panel-shadow p-12 text-center"><div className="w-12 h-12 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center mx-auto"><Sparkles size={20} /></div><h3 className="font-semibold text-slate-900 mt-4">Context is ready for {selectedOpportunity.account}</h3><p className="text-sm text-slate-500 mt-2 max-w-sm mx-auto">This prototype’s detailed recommendation set is configured for Acme Corp. Switch back to explore the full interactive flow.</p><button onClick={() => selectOpportunity(opportunities[0])} className="mt-5 px-4 py-2 rounded-lg bg-violet-600 text-white text-sm">Open Acme Corp</button></div>
            ) : visibleRecommendations.length === 0 ? (
              <div className="bg-white rounded-2xl border border-slate-200 p-10 text-center"><h3 className="font-medium text-slate-900">No recommendations remain</h3><p className="text-sm text-slate-500 mt-2">All results were dismissed for this session.</p><button onClick={() => setDismissedIds([])} className="mt-4 text-sm text-violet-700">Restore recommendations</button></div>
            ) : (
              <div className="space-y-3">
                {visibleRecommendations.map(rec => {
                  const style = accentStyles[rec.accent]
                  const isUsed = usedIds.includes(rec.id)
                  return (
                    <article key={rec.id} onClick={() => setDetailId(rec.id)} className={`bg-white rounded-2xl border panel-shadow overflow-hidden transition-all cursor-pointer ${detailId === rec.id ? 'border-violet-300 ring-2 ring-violet-100' : 'border-slate-200 hover:border-slate-300'}`}>
                      <div className={`h-1 ${style.bar}`} />
                      <div className="p-5">
                        <div className="flex items-start gap-4">
                          <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${style.icon}`}><FileText size={19} /></div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-start justify-between gap-4"><div><div className="flex items-center gap-2"><span className="text-[10px] font-bold text-slate-400">#{rec.rank}</span><span className={`text-[10px] px-2 py-0.5 rounded-full border font-semibold ${style.chip}`}>{rec.type}</span></div><h3 className="text-base font-semibold text-slate-900 mt-2">{rec.title}</h3></div><button className="text-slate-400 hover:text-slate-700"><MoreHorizontal size={18} /></button></div>
                            <p className="text-xs text-slate-500 leading-relaxed mt-1.5">{rec.description}</p>
                            <div className="mt-3 bg-slate-50 rounded-xl p-3"><div className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 mb-2">Why this fits</div>{rec.reasons.slice(0, 2).map(reason => <div key={reason} className="flex items-start gap-2 text-xs text-slate-700 mt-1.5"><Check size={12} className="text-emerald-600 mt-0.5 shrink-0" />{reason}</div>)}</div>
                            <div className="flex items-center justify-between mt-4"><div className="flex items-center gap-3 text-[11px] text-slate-400"><span>{rec.pages}</span><span>•</span><span>{rec.updated}</span><span className="inline-flex items-center gap-1 text-emerald-600 font-medium"><ShieldCheck size={11} /> Approved</span></div><div className="flex items-center gap-2"><button onClick={(e) => { e.stopPropagation(); setDismissedIds([...dismissedIds, rec.id]) }} className="p-2 rounded-lg border border-slate-200 text-slate-400 hover:text-red-500"><ThumbsDown size={14} /></button><button onClick={(e) => { e.stopPropagation(); setUsedIds([...usedIds, rec.id]) }} className={`px-3 py-2 rounded-lg text-xs font-medium flex items-center gap-1.5 ${isUsed ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-slate-900 text-white'}`}>{isUsed ? <><Check size={13} /> Added to deal</> : <><Send size={13} /> Use content</>}</button></div></div>
                          </div>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
            )}
          </section>

          <aside className="xl:sticky xl:top-6">
            {detail ? (
              <div className="bg-white rounded-2xl border border-slate-200 panel-shadow overflow-hidden">
                <div className="p-5 border-b border-slate-100 flex items-start justify-between"><div><div className="text-[10px] uppercase tracking-wider font-semibold text-violet-600">Recommendation trace</div><h3 className="text-base font-semibold text-slate-900 mt-1">Why this recommendation?</h3></div><button onClick={() => setDetailId(null)} className="p-1 text-slate-400 hover:text-slate-700"><X size={16} /></button></div>
                <div className="p-5">
                  <div className="flex items-end justify-between"><div><div className="text-3xl font-semibold tracking-tight text-slate-900">{detail.confidence}%</div><div className="text-xs text-slate-500 mt-1">Confidence band: high</div></div><div className="w-28 h-2 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-violet-500 to-blue-500 rounded-full" style={{ width: `${detail.confidence}%` }} /></div></div>
                  <div className="mt-6"><div className="text-xs font-semibold text-slate-900 mb-3">Grounded evidence</div><div className="relative space-y-4 before:absolute before:left-[5px] before:top-2 before:bottom-2 before:w-px before:bg-slate-200">{detail.evidence.map(item => <div key={item.label} className="relative pl-6"><span className="absolute left-0 top-1.5 w-[11px] h-[11px] rounded-full bg-white border-[3px] border-violet-500" /><div className="text-[10px] uppercase tracking-wide font-semibold text-slate-400">{item.label}</div><div className="text-xs text-slate-800 mt-0.5">{item.value}</div><div className="text-[10px] text-slate-400 mt-0.5">Freshness: {item.time}</div></div>)}</div></div>
                  <div className="mt-6 p-3.5 rounded-xl bg-emerald-50 border border-emerald-100"><div className="flex items-center gap-2 text-xs font-semibold text-emerald-800"><ShieldCheck size={14} /> Policy check passed</div><div className="text-[11px] text-emerald-700 leading-relaxed mt-1.5">External sharing approved · Seller has access · Content is current</div></div>
                  <div className="grid grid-cols-2 gap-2 mt-4"><div className="p-3 rounded-xl bg-slate-50"><div className="text-[10px] text-slate-400">Historical usage</div><div className="text-xs font-medium text-slate-800 mt-1">{detail.usage}</div></div><div className="p-3 rounded-xl bg-slate-50"><div className="text-[10px] text-slate-400">Observed signal</div><div className="text-xs font-medium text-slate-800 mt-1">{detail.lift}</div></div></div>
                  <div className="flex gap-2 mt-5"><button className="flex-1 px-3 py-2.5 rounded-lg bg-violet-600 text-white text-xs font-medium flex items-center justify-center gap-1.5"><Share2 size={13} /> Share</button><button className="p-2.5 rounded-lg border border-slate-200 text-slate-500"><Bookmark size={14} /></button><button className="p-2.5 rounded-lg border border-slate-200 text-slate-500"><Copy size={14} /></button></div>
                  <button className="w-full mt-4 text-[11px] text-slate-400 flex items-center justify-center gap-1.5"><HelpCircle size={12} /> How confidence is calculated <ArrowUpRight size={11} /></button>
                </div>
              </div>
            ) : <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-8 text-center"><Clock3 size={20} className="text-slate-300 mx-auto" /><p className="text-sm text-slate-500 mt-3">Select a recommendation to inspect its evidence and policy trace.</p></div>}
          </aside>
        </div>
        <JourneyFooter completed="Seller value demonstrated" insight="The seller sees a small, approved set of content tied to live buyer context—with evidence, confidence, and feedback built into the workflow." previous={{label:'Platform story',to:'/'}} next={{label:'Inspect the context',to:'/context',description:'See how five sources become one resolved snapshot'}} />
      </div>
    </div>
  )
}
