
import { createContext, useContext, useState } from 'react'

const AuthContext = createContext<any>(null)

export function AuthProvider({ children }: { children: any }) {
  const [user, setUser] = useState<string | null>(null)
  const login = () => setUser('admin')
  const logout = () => setUser(null)
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
