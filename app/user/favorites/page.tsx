'use client'

import { useAuth } from '@/contexts/auth-context'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Play } from 'lucide-react'
import Link from 'next/link'

export default function UserFavorites() {
  const { user } = useAuth()

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Please log in to view your favorite tracks</h1>
          <Link href="/login">
            <Button>Log In</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <Link href="/user" className="text-white hover:text-pink-500 flex items-center mb-6">
          <ArrowLeft className="mr-2" /> Back to Dashboard
        </Link>
        <h1 className="text-4xl font-bold mb-8">Your Favorite Tracks</h1>
        
        <Card className="bg-purple-800 bg-opacity-50">
          <CardHeader>
            <CardTitle>Liked Songs</CardTitle>
          </CardHeader>
          <CardContent>
            {user.likedSongs.length === 0 ? (
              <p>You haven't liked any songs yet.</p>
            ) : (
              <ul className="space-y-4">
                {user.likedSongs.map((songId) => (
                  <li key={songId} className="flex items-center justify-between">
                    <span>Song ID: {songId}</span>
                    <Button size="sm" className="flex items-center">
                      <Play className="mr-2" size={16} /> Play
                    </Button>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

