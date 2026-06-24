export const opportunities = [
  { id: 'opp-1', account: 'Acme Corp', stage: 'Proposal / Price Quote', value: '$420K', owner: 'Maya Chen', close: 'Jul 18', health: 68, industry: 'Manufacturing', region: 'North America' },
  { id: 'opp-2', account: 'Northstar Bank', stage: 'Security Review', value: '$680K', owner: 'Maya Chen', close: 'Aug 02', health: 54, industry: 'Financial Services', region: 'North America' },
  { id: 'opp-3', account: 'Lumon Health', stage: 'Discovery', value: '$185K', owner: 'Maya Chen', close: 'Sep 12', health: 82, industry: 'Healthcare', region: 'EMEA' },
]

export const contextSignals = [
  { type: 'Opportunity', title: 'Proposal stage · 19 days', detail: 'Decision date moved once; economic buyer identified', freshness: '8 min ago', strength: 96, color: 'violet' },
  { type: 'Latest call', title: 'ROI validation is the open question', detail: 'VP Operations asked for quantified time-to-value and peer evidence', freshness: 'Yesterday, 3:42 PM', strength: 91, color: 'blue' },
  { type: 'Account', title: '1,200 employees · Manufacturing', detail: 'Expansion account; Operations and Enablement stakeholders active', freshness: '2 hours ago', strength: 86, color: 'cyan' },
  { type: 'Activity', title: 'Engagement increased 34%', detail: 'Three stakeholders viewed the proposal; security page viewed twice', freshness: '22 min ago', strength: 78, color: 'amber' },
  { type: 'Contact', title: 'Elena Ruiz · VP Operations', detail: 'Economic buyer · prefers concise business cases', freshness: '4 days ago', strength: 73, color: 'rose' },
]

export const recommendations = [
  {
    id: 'rec-1', rank: 1, title: 'Enterprise ROI & Value Realization Guide', type: 'Business case', pages: '12 pages', updated: 'Updated 6 days ago', confidence: 94,
    description: 'A customer-ready guide to quantify productivity gains, ramp impact, and payback period for enterprise revenue teams.',
    reasons: ['Addresses the ROI concern raised in yesterday\'s call', 'Approved for Proposal / Price Quote stage', 'Used in 8 similar manufacturing opportunities'],
    evidence: [{ label: 'Call signal', value: 'ROI validation requested', time: 'Yesterday' }, { label: 'Opportunity', value: 'Proposal stage · $420K', time: '8 min ago' }, { label: 'Outcome pattern', value: '8 similar opportunities', time: '90-day window' }],
    accent: 'violet', usage: 'Used in 42 opportunities', lift: '+18% share-to-view rate'
  },
  {
    id: 'rec-2', rank: 2, title: 'Manufacturing Transformation: Acme Peer Story', type: 'Customer story', pages: '6 pages', updated: 'Updated 18 days ago', confidence: 88,
    description: 'Peer evidence showing reduced onboarding time and improved manager coaching consistency at a global manufacturer.',
    reasons: ['Matches Acme’s industry and company size', 'Economic buyer requested peer validation', 'Current and approved for external sharing'],
    evidence: [{ label: 'Account', value: 'Manufacturing · 1,200 employees', time: '2 hours ago' }, { label: 'Contact', value: 'VP Operations', time: '4 days ago' }],
    accent: 'blue', usage: 'Used in 27 opportunities', lift: '31% influenced pipeline'
  },
  {
    id: 'rec-3', rank: 3, title: 'Security & Data Architecture Brief', type: 'Technical brief', pages: '8 pages', updated: 'Updated 2 days ago', confidence: 79,
    description: 'A concise overview of enterprise data boundaries, integrations, access controls, and security architecture.',
    reasons: ['Security content received repeat engagement', 'Common next step before final commercial review', 'Approved for this account segment'],
    evidence: [{ label: 'Activity', value: 'Security page viewed twice', time: '22 min ago' }, { label: 'Policy', value: 'Enterprise approved', time: 'Current' }],
    accent: 'cyan', usage: 'Used in 65 opportunities', lift: '14% faster security progression'
  }
]

export const policies = [
  { id: 'p1', name: 'External sharing approval', description: 'Only externally approved content can be recommended to sellers.', scope: 'All recommendations', status: true, type: 'Eligibility' },
  { id: 'p2', name: 'Current content only', description: 'Suppress content past review date or with freshness below 60.', scope: 'All tenants', status: true, type: 'Suppression' },
  { id: 'p3', name: 'Required security brief', description: 'Boost security brief when security engagement is detected.', scope: 'Enterprise segment', status: true, type: 'Boost' },
  { id: 'p4', name: 'Outcome-aware ranking', description: 'Use anonymized tenant outcome signals as a ranking feature.', scope: 'Design partners', status: false, type: 'Learning' },
]
