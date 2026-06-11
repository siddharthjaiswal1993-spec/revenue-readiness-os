import { BookOpen, Users, Award, TrendingUp, Plus } from 'lucide-react'
import { programs } from '../data/mockData'

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    Active: 'bg-emerald-100 text-emerald-700',
    Draft: 'bg-slate-100 text-slate-500',
    Paused: 'bg-amber-100 text-amber-700',
  }
  return <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${map[status] ?? ''}`}>{status}</span>
}

function ProgressBar({ value, color = 'bg-violet-500' }: { value: number; color?: string }) {
  return (
    <div className="bg-slate-100 rounded-full h-2">
      <div className={`h-2 rounded-full ${color}`} style={{ width: `${value}%` }} />
    </div>
  )
}

export default function EnablementPrograms() {
  return (
    <div className="p-6 max-w-6xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Enablement Programs</h1>
          <p className="text-slate-500 text-sm mt-1">Learning paths, certifications, and skill development programs</p>
        </div>
        <button className="flex items-center gap-2 bg-violet-600 text-white text-sm px-4 py-2.5 rounded-lg hover:bg-violet-700 transition-colors">
          <Plus size={15} />
          New Program
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Active Programs', value: programs.filter(p => p.status === 'Active').length, icon: BookOpen, color: 'bg-violet-500' },
          { label: 'Enrolled Reps', value: programs.reduce((s, p) => s + p.enrolledCount, 0), icon: Users, color: 'bg-blue-500' },
          { label: 'Certifications Required', value: programs.filter(p => p.certificationRequired).length, icon: Award, color: 'bg-amber-500' },
          { label: 'Avg Skill Lift', value: '13pts', icon: TrendingUp, color: 'bg-emerald-500' },
        ].map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-slate-500">{label}</span>
              <div className={`w-7 h-7 rounded-lg ${color} flex items-center justify-center`}>
                <Icon size={13} className="text-white" />
              </div>
            </div>
            <div className="text-2xl font-bold text-slate-800">{value}</div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        {programs.map(prog => (
          <div key={prog.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-5">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-semibold text-slate-800">{prog.title}</h3>
                    <StatusBadge status={prog.status} />
                    {prog.certificationRequired && (
                      <span className="text-xs bg-amber-50 text-amber-600 border border-amber-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Award size={10} />
                        Certification
                      </span>
                    )}
                  </div>
                  <div className="flex gap-4 text-xs text-slate-400">
                    <span>{prog.type}</span>
                    <span>{prog.modules} modules</span>
                    <span>{prog.duration}</span>
                    <span>Updated {prog.lastUpdated}</span>
                  </div>
                  <div className="flex gap-1.5 mt-2">
                    {prog.targetRoles.map(r => (
                      <span key={r} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">{r}</span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <button className="text-xs border border-slate-200 text-slate-600 px-3 py-1.5 rounded-lg hover:bg-slate-50">Edit</button>
                  <button className="text-xs bg-violet-600 text-white px-3 py-1.5 rounded-lg hover:bg-violet-700">View</button>
                </div>
              </div>

              {prog.status === 'Active' && (
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-slate-500">Completion Rate</span>
                      <span className={`text-xs font-semibold ${prog.completionRate >= 80 ? 'text-emerald-600' : prog.completionRate >= 60 ? 'text-blue-600' : 'text-amber-600'}`}>
                        {prog.completionRate}%
                      </span>
                    </div>
                    <ProgressBar
                      value={prog.completionRate}
                      color={prog.completionRate >= 80 ? 'bg-emerald-500' : prog.completionRate >= 60 ? 'bg-blue-500' : 'bg-amber-500'}
                    />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-slate-500">Enrolled</span>
                      <span className="text-xs font-semibold text-slate-700">{prog.enrolledCount} reps</span>
                    </div>
                    <ProgressBar value={Math.min(100, (prog.enrolledCount / 120) * 100)} color="bg-violet-500" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-slate-500">Avg Skill Lift</span>
                      <span className="text-xs font-semibold text-emerald-600">+{prog.avgSkillImprovement} pts</span>
                    </div>
                    <ProgressBar value={Math.min(100, prog.avgSkillImprovement * 4)} color="bg-emerald-500" />
                  </div>
                </div>
              )}

              {prog.status === 'Draft' && (
                <div className="bg-slate-50 rounded-lg p-3 text-xs text-slate-500">
                  Draft program — complete setup and publish to enroll reps.
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
