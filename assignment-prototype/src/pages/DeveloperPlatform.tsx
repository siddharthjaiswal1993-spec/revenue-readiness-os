import { useState } from 'react'
import { Braces, Check, ChevronRight, Clipboard, Code2, ExternalLink, KeyRound, Radio, Server, TerminalSquare, Webhook, Zap } from 'lucide-react'
import JourneyFooter from '../components/JourneyFooter'

const code = `curl --request POST \\
  --url https://api.mindtickle.com/v1/recommendations \\
  --header 'Authorization: Bearer ••••••••' \\
  --header 'Content-Type: application/json' \\
  --data '{
    "entity": { "type": "opportunity", "id": "OPP-1842" },
    "recommendation_type": "content",
    "surface": "crm",
    "limit": 3,
    "include_explanation": true
  }'`

const response = `{
  "request_id": "req_123",
  "context_version": "ctx_456",
  "status": "complete",
  "recommendations": [{
    "id": "rec_789",
    "content_id": "content_roi_guide_v4",
    "confidence_band": "high",
    "reasons": [
      { "code": "MATCHES_RECENT_BUYER_OBJECTION" },
      { "code": "APPROVED_FOR_STAGE" }
    ]
  }]
}`

export default function DeveloperPlatform(){
  const [tab,setTab]=useState<'request'|'response'>('request'); const [copied,setCopied]=useState(false); const [running,setRunning]=useState(false)
  const runRequest = () => { setRunning(true); setTimeout(() => { setRunning(false); setTab('response') }, 650) }
  return <div className="max-w-[1400px] mx-auto p-6 lg:p-8"><div className="flex items-end justify-between mb-7"><div><div className="text-xs font-semibold text-violet-700 mb-2">OPEN DELIVERY PLATFORM</div><h1 className="text-[28px] font-semibold tracking-tight text-slate-900">API & MCP workspace</h1><p className="text-sm text-slate-500 mt-1.5">One governed recommendation contract for CRM, embedded applications, partners, and agents.</p></div><button className="px-4 py-2.5 rounded-lg bg-slate-900 text-white text-sm flex items-center gap-2"><KeyRound size={15}/> Create sandbox key</button></div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">{[{title:'Recommendation API',desc:'Synchronous, versioned content recommendations.',icon:Braces,status:'Available in sandbox',color:'violet'},{title:'Events & webhooks',desc:'Recommendation lifecycle and feedback events.',icon:Webhook,status:'Private beta',color:'blue'},{title:'MCP server',desc:'Governed tools for agentic workflows.',icon:Server,status:'Design partner preview',color:'emerald'}].map(item=>{const Icon=item.icon;return <div key={item.title} className="bg-white border border-slate-200 rounded-2xl panel-shadow p-5"><div className="flex items-start justify-between"><div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.color==='violet'?'bg-violet-100 text-violet-700':item.color==='blue'?'bg-blue-100 text-blue-700':'bg-emerald-100 text-emerald-700'}`}><Icon size={18}/></div><ExternalLink size={14} className="text-slate-300"/></div><h3 className="text-sm font-semibold text-slate-900 mt-4">{item.title}</h3><p className="text-xs text-slate-500 mt-1.5">{item.desc}</p><div className="text-[11px] text-emerald-700 font-medium mt-4 flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"/>{item.status}</div></div>})}</div>
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-5"><div className="bg-[#0b1120] rounded-2xl panel-shadow overflow-hidden"><div className="h-12 px-4 border-b border-white/10 flex items-center justify-between"><div className="flex items-center gap-1"><button onClick={()=>setTab('request')} className={`px-3 py-1.5 rounded-md text-xs ${tab==='request'?'bg-white/10 text-white':'text-slate-400'}`}>Request</button><button onClick={()=>setTab('response')} className={`px-3 py-1.5 rounded-md text-xs ${tab==='response'?'bg-white/10 text-white':'text-slate-400'}`}>Response</button></div><button onClick={()=>{setCopied(true);setTimeout(()=>setCopied(false),1200)}} className="text-slate-400 hover:text-white flex items-center gap-1.5 text-xs">{copied?<Check size={13}/>:<Clipboard size={13}/>} {copied?'Copied':'Copy'}</button></div><pre className="p-6 text-[13px] leading-7 text-slate-300 overflow-x-auto min-h-[420px]"><code>{tab==='request'?code:response}</code></pre><div className="px-5 py-3 border-t border-white/10 flex items-center justify-between"><div className="flex items-center gap-2 text-[11px] text-slate-500"><span className={`w-2 h-2 rounded-full ${running?'bg-amber-400 animate-pulse':'bg-emerald-400'}`}/> {running?'Evaluating policy and ranking...':'Sandbox · us-east-1'}</div><button onClick={runRequest} disabled={running} className="px-3 py-1.5 bg-violet-600 disabled:opacity-60 text-white rounded-lg text-xs font-medium flex items-center gap-1.5"><Zap size={12}/>{running?'Running...':'Run request'}</button></div></div>
      <div className="space-y-5"><div className="bg-white rounded-2xl border border-slate-200 panel-shadow p-5"><div className="flex items-center gap-2"><TerminalSquare size={16} className="text-violet-600"/><h3 className="text-sm font-semibold text-slate-900">MCP tools</h3></div><div className="mt-4 space-y-2">{['get_content_recommendations','get_recommendation_explanation','submit_recommendation_feedback'].map((tool,i)=><button key={tool} className="w-full text-left p-3 rounded-xl bg-slate-50 hover:bg-violet-50 group"><div className="flex items-center justify-between"><code className="text-[11px] text-slate-700 group-hover:text-violet-700">{tool}</code><ChevronRight size={13} className="text-slate-300"/></div><div className="text-[10px] text-slate-400 mt-1">Scope: {i===2?'feedback:write':'recommendations:read'}</div></button>)}</div><button className="w-full mt-3 py-2.5 border border-slate-200 rounded-lg text-xs text-slate-600 flex items-center justify-center gap-1.5"><Code2 size={13}/> View MCP manifest</button></div><div className="bg-white rounded-2xl border border-slate-200 panel-shadow p-5"><div className="flex items-center gap-2"><Radio size={15} className="text-emerald-600"/><h3 className="text-sm font-semibold text-slate-900">Platform health</h3></div><div className="mt-4 grid grid-cols-2 gap-3"><div className="bg-slate-50 p-3 rounded-xl"><div className="text-lg font-semibold text-slate-900">99.96%</div><div className="text-[10px] text-slate-400">30-day uptime</div></div><div className="bg-slate-50 p-3 rounded-xl"><div className="text-lg font-semibold text-slate-900">342ms</div><div className="text-[10px] text-slate-400">p95 latency</div></div></div><div className="mt-4 text-[11px] text-slate-500 flex items-center justify-between"><span>Requests today</span><span className="font-semibold text-slate-800">18,429</span></div></div></div>
    </div>
    <JourneyFooter completed="Open-platform loop complete" insight="CRM, embedded experiences, partners, and agents consume the same governed recommendation contract—decoupling intelligence from any single surface." previous={{label:'Trust & control',to:'/governance'}} next={{label:'Replay seller value',to:'/recommendations',description:'Return to the flagship opportunity workflow'}} />
  </div>
}
