import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Initiatives from './pages/Initiatives'
import ReportForm from './pages/ReportForm'
import ResourceLibrary from './pages/ResourceLibrary'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Dashboard /></Layout>} />
      <Route path="/initiatives" element={<Layout><Initiatives /></Layout>} />
      <Route path="/report" element={<Layout><ReportForm /></Layout>} />
      <Route path="/resources" element={<Layout><ResourceLibrary /></Layout>} />
    </Routes>
  )
}

export default App