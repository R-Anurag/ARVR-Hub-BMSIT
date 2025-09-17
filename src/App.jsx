import Header from './components/Header'
import { Routes, Route, HashRouter } from 'react-router-dom'

import HomePage from './pages/Home'
// import EventsPage from './pages/EventsPage'
import TeamsPage from './pages/Teams'
import LegacyTeams from './pages/LegacyTeams'

export default function App() {
  return (
    <HashRouter>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/events" element={<EventsPage />} /> */}
          <Route path="/Teams" element={<TeamsPage />} />
          <Route path="/LegacyTeams" element={<LegacyTeams />} />
        </Routes>
      </main>
    </HashRouter>
  )
}
