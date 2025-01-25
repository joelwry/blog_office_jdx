'use client'

import { useAuth } from '@/contexts/auth-context'
import { AppSidebar } from '@/components/Sidebar'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user, router])

  if (!user) {
    return null
  }

  return (
    <div className="flex h-screen">
      <AppSidebar />
      <main className="flex-1 overflow-auto pt-8 px-4">
        {children}
      </main>
    </div>
  )
}

