
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const { login } = useAuth()
  const nav = useNavigate()
  return (
    <div className="h-screen flex items-center justify-center">
      <button
        className="px-6 py-3 bg-blue-600 text-white rounded"
        onClick={() => { login(); nav('/dashboard') }}
      >
        Login
      </button>
    </div>
  )
}
