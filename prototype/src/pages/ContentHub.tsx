import { useState } from 'react'
import { Search, Upload, AlertTriangle, Eye, Share2, Download, FileText, BookOpen, Link } from 'lucide-react'
import { contentAssets } from '../data/mockData'

function FreshnessIndicator({ score }: { score: number }) {
  const color = score >= 80 ? 'text-emerald-600 bg-emerald-50' : score >= 50 ? 'text-amber-600 bg-amber-50' : 'text-red-600 bg-red-50'
  const label = score >= 80 ? 'Fresh' : score >= 50 ? 'Aging' : 'Stale'
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${color}`}>
      {score >= 50 ? '' : '⚠ '}{score} — {label}
    </span>
  )
}

function TypeIcon({ type }: { type: string }) {
  const icons: Record<string, React.ElementType> = {
    'Pitch Deck': FileText,
    'Battle Card': FileText,
    'One-Pager': FileText,
    'Playbook': BookOpen,
    'FAQ': FileText,
    'Case Study': FileText,
    'Tool': Link,
  }
  const Icon = icons[type] ?? FileText
  return <Icon size={14} className="text-violet-500" />
}

export default function ContentHub() {
  const [search, setSearch] = useState('')
  const [filterTag, setFilterTag] = useState('All')

  const allTags = ['All', 'Enterprise', 'Competitive', 'Discovery', 'Security', 'SDR', 'Pricing']

  const filtered = contentAssets.filter(a => {
    const matchSearch = search === '' || a.title.toLowerCase().includes(search.toLowerCase())
    const matchTag = filterTag === 'All' || a.tags.includes(filterTag)
    return matchSearch && matchTag
  })

  const staleCount = contentAssets.filter(a => a.freshness < 40).length

  return (
    <div className="p-6 max-w-6xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Content Hub</h1>
          <p className="text-slate-500 text-sm mt-1">Searchable library with freshness scoring and usage analytics</p>
        </div>
        <button className="flex items-center gap-2 bg-violet-600 text-white text-sm px-4 py-2.5 rounded-lg hover:bg-violet-700 transition-colors">
          <Upload size={15} />
          Upload Asset
        </button>
      </div>

      {staleCount > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5 flex items-center gap-3">
          <AlertTriangle size={16} className="text-amber-500 flex-shrink-0" />
          <p className="text-sm text-amber-700">
            <span className="font-semibold">{staleCount} asset{staleCount > 1 ? 's are' : ' is'} stale</span> — freshness score below 40. Review and update to keep the library current.
          </p>
        </div>
      )}

      <div className="flex gap-3 mb-5">
        <div className="flex-1 relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search content..."
            className="w-full pl-9 pr-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-300"
          />
        </div>
        <div className="flex gap-1.5">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilterTag(tag)}
              className={`text-xs px-3 py-2 rounded-lg border transition-colors ${
                filterTag === tag ? 'bg-violet-600 text-white border-violet-600' : 'border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map(asset => (
          <div key={asset.id} className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 hover:border-violet-200 transition-colors">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-9 h-9 bg-violet-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <TypeIcon type={asset.type} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-slate-800 text-sm truncate">{asset.title}</h3>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-xs text-slate-400">{asset.type}</span>
                  <span className="text-slate-200">·</span>
                  <span className="text-xs text-slate-400">Updated {asset.lastUpdated}</span>
                </div>
              </div>
              <FreshnessIndicator score={asset.freshness} />
            </div>

            <div className="flex flex-wrap gap-1 mb-3">
              {asset.tags.map(tag => (
                <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">{tag}</span>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1"><Eye size={11} />{asset.views}</span>
                <span className="flex items-center gap-1"><Share2 size={11} />{asset.shares}</span>
              </div>
              <div className="flex gap-2">
                <button className="text-xs border border-slate-200 text-slate-600 px-3 py-1.5 rounded-lg hover:bg-slate-50 flex items-center gap-1">
                  <Share2 size={11} />Share
                </button>
                <button className="text-xs bg-violet-600 text-white px-3 py-1.5 rounded-lg hover:bg-violet-700 flex items-center gap-1">
                  <Download size={11} />Download
                </button>
              </div>
            </div>

            {asset.freshness < 40 && (
              <div className="mt-3 p-2.5 bg-red-50 rounded-lg text-xs text-red-600 flex items-center gap-1.5">
                <AlertTriangle size={11} />
                This asset is stale — consider updating or archiving
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
