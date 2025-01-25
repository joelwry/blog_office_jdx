'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { User } from '@/types/user'

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  updateWalletBalance: (amount: number) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Mock user data
const mockUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  walletBalance: 100,
  playlists: [
    { id: '1', name: 'My Favorites', tracks: [], createdAt: new Date() }
  ],
  likedSongs: ['1', '2', '3'],
  appointments: []
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    // Simulate an API call
    setTimeout(() => {
      setUser(mockUser)
      setLoading(false)
    }, 1000)
  }

  const login = async (email: string, password: string) => {
    // Simulate login
    setUser(mockUser)
  }

  const logout = async () => {
    // Simulate logout
    setUser(null)
  }

  const updateWalletBalance = async (amount: number) => {
    if (!user) return

    // Simulate wallet update
    const updatedUser = { ...user, walletBalance: user.walletBalance + amount }
    setUser(updatedUser)
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, updateWalletBalance }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

