import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import WorkDetail from './pages/WorkDetail'
import LearningDetail from './pages/LearningDetail'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/works/:slug" element={<WorkDetail />} />
      <Route path="/learning/:id" element={<LearningDetail />} />
    </Routes>
  )
}
