import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import CommandCenter from './pages/CommandCenter'
import RepReadiness from './pages/RepReadiness'
import AIRoleplay from './pages/AIRoleplay'
import CoachingQueue from './pages/CoachingQueue'
import EnablementPrograms from './pages/EnablementPrograms'
import ContentHub from './pages/ContentHub'
import SkillGaps from './pages/SkillGaps'
import DealReadiness from './pages/DealReadiness'
import Analytics from './pages/Analytics'
import AIAssistant from './pages/AIAssistant'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CommandCenter />} />
          <Route path="rep-readiness" element={<RepReadiness />} />
          <Route path="roleplay" element={<AIRoleplay />} />
          <Route path="coaching" element={<CoachingQueue />} />
          <Route path="programs" element={<EnablementPrograms />} />
          <Route path="content" element={<ContentHub />} />
          <Route path="skill-gaps" element={<SkillGaps />} />
          <Route path="deals" element={<DealReadiness />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="ai-assistant" element={<AIAssistant />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
