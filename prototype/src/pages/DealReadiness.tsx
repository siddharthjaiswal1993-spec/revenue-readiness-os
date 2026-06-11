import { AlertTriangle, AlertCircle, CheckCircle, TrendingDown, DollarSign } from 'lucide-react'
import { deals } from '../data/mockData'

function ScoreBadge({ score }: { score: number }) {
  const tier = score >= 80 ? { label: 'Ready', cls: 'text-emerald-700 bg-emerald-100' }
    : score >= 60 ? { label: 'Developing', cls: 'text-blue-700 bg-blue-100' }
    : score >= 40 ? { label: 'At Risk', cls: 'text-amber-700 bg-amber-100' }
    : { label: 'Critical', cls: 'text-red-700 bg-red-100' }
  return (
    <div className="flex items-center gap-2">
      <span className="text-2xl font-bold text-slate-800">{score}</span>
      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tier.cls}`}>{tier.label}</span>
    </div>
  )
}

function SeverityIcon({ severity }: { severity: string }) {
  if (severity === 'critical') return <AlertCircle size={13} className="text-red-500 flex-shrink-0" />
  return <AlertTriangle size={13} className="text-amber-500 flex-shrink-0" />
}

export default function DealReadiness() {
  const atRisk = deals.filter(d => d.dealReadinessScore < 60)

  return (
    <div className="p-6 max-w-6xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Deal Readiness</h1>
        <p className="text-slate-500 text-sm mt-1">Rep skill gaps and risk signals on active deals</p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
          <div className="text-2xl font-bold text-slate-800">{deals.length}</div>
          <div className="text-xs text-slate-400 mt-0.5">Active Deals</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
          <div className="text-2xl font-bold text-red-600">{atRisk.length}</div>
          <div className="text-xs text-slate-400 mt-0.5">At Risk / Critical</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
          <div className="text-2xl font-bold text-slate-800">
            ${(deals.reduce((s, d) => s + d.value, 0) / 1000).toFixed(0)}K
          </div>
          <div className="text-xs text-slate-400 mt-0.5">Total Pipeline</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
          <div className="text-2xl font-bold text-amber-600">
            ${(atRisk.reduce((s, d) => s + d.value, 0) / 1000).toFixed(0)}K
          </div>
          <div className="text-xs text-slate-400 mt-0.5">Pipeline at Risk</div>
        </div>
      </div>

      {atRisk.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-5 flex items-start gap-3">
          <TrendingDown size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-700">
            <span className="font-semibold">{atRisk.length} deals at risk</span> — rep skill gaps detected.
            AI has generated coaching actions for the assigned reps.
          </p>
        </div>
      )}

      <div className="space-y-4">
        {deals.map(deal => (
          <div key={deal.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-5">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-semibold text-slate-800">{deal.accountName}</h3>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">{deal.stage}</span>
                  </div>
                  <div className="flex gap-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <DollarSign size={10} />${(deal.value / 1000).toFixed(0)}K
                    </span>
                    <span>Close: {deal.closeDate}</span>
                    <span>Owner: {deal.owner}</span>
                    <span>Last activity: {deal.lastActivity}</span>
                  </div>
                </div>
                <ScoreBadge score={deal.dealReadinessScore} />
              </div>

              {deal.riskSignals.length === 0 ? (
                <div className="flex items-center gap-2 text-sm text-emerald-600">
                  <CheckCircle size={14} />
                  No risk signals detected — rep is ready for this deal stage
                </div>
              ) : (
                <div className="space-y-2">
                  {deal.riskSignals.map((signal, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-2.5 p-3 rounded-lg text-sm ${
                        signal.severity === 'critical' ? 'bg-red-50 text-red-700' : 'bg-amber-50 text-amber-700'
                      }`}
                    >
                      <SeverityIcon severity={signal.severity} />
                      <p className="text-xs leading-relaxed">{signal.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {deal.riskSignals.length > 0 && (
                <div className="flex gap-2 mt-3">
                  <button className="text-xs bg-violet-600 text-white px-3 py-1.5 rounded-lg hover:bg-violet-700 transition-colors">
                    View Coaching Action
                  </button>
                  <button className="text-xs border border-slate-200 text-slate-600 px-3 py-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                    Recommend Content
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
