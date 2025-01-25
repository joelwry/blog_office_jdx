'use client'

import { useState } from 'react'
import { useAuth } from '@/contexts/auth-context'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowLeft, Plus } from 'lucide-react'
import Link from 'next/link'

export default function UserPlaylists() {
  const { user } = useAuth()
  const [newPlaylistName, setNewPlaylistName] = useState('')

  const handleCreatePlaylist = () => {
    if (newPlaylistName) {
      // Here you would typically make an API call to create a new playlist
      console.log(`Creating new playlist: ${newPlaylistName}`)
      setNewPlaylistName('')
    }
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Please log in to view your playlists</h1>
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
        <h1 className="text-4xl font-bold mb-8">Your Playlists</h1>
        
        <Card className="bg-purple-800 bg-opacity-50 mb-8">
          <CardHeader>
            <CardTitle>Create New Playlist</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <Input
                placeholder="Playlist Name"
                value={newPlaylistName}
                onChange={(e) => setNewPlaylistName(e.target.value)}
                className="bg-white text-black"
              />
              <Button onClick={handleCreatePlaylist}>
                <Plus className="mr-2" /> Create
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {user.playlists.map((playlist) => (
            <Card key={playlist.id} className="bg-purple-800 bg-opacity-50">
              <CardHeader>
                <CardTitle>{playlist.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{playlist.tracks.length} tracks</p>
                <Button className="mt-4 w-full">View Playlist</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

