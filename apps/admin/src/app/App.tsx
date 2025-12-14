
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import { useAuth } from './context/AuthContext'

export default function App() {
  const { user } = useAuth()
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/dashboard"
        element={user ? <DashboardPage /> : <Navigate to="/" />}
      />
    </Routes>
  )
}
