import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import RecommendationWorkspace from './pages/RecommendationWorkspace'
import ContextExplorer from './pages/ContextExplorer'
import GovernanceConsole from './pages/GovernanceConsole'
import DeveloperPlatform from './pages/DeveloperPlatform'
import PlatformOverview from './pages/PlatformOverview'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PlatformOverview />} />
          <Route path="recommendations" element={<RecommendationWorkspace />} />
          <Route path="context" element={<ContextExplorer />} />
          <Route path="governance" element={<GovernanceConsole />} />
          <Route path="developer" element={<DeveloperPlatform />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
