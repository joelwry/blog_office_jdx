'use client'

import { useAuth } from '@/contexts/auth-context'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Wallet, Music, Calendar, Heart } from 'lucide-react'
import Link from 'next/link'

export default function Dashboard() {
  const { user } = useAuth()

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Please log in to view your dashboard</h1>
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
        <h1 className="text-4xl font-bold mb-8">Welcome, {user.name}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-purple-800 bg-opacity-50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Wallet className="mr-2" />
                Wallet Balance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">${user.walletBalance.toFixed(2)}</p>
              <Button className="mt-4 w-full">Add Funds</Button>
            </CardContent>
          </Card>

          <Card className="bg-purple-800 bg-opacity-50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Music className="mr-2" />
                Playlists
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{user.playlists.length}</p>
              <Button className="mt-4 w-full">Create Playlist</Button>
            </CardContent>
          </Card>

          <Card className="bg-purple-800 bg-opacity-50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Heart className="mr-2" />
                Liked Songs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{user.likedSongs.length}</p>
              <Button className="mt-4 w-full">View All</Button>
            </CardContent>
          </Card>

          <Card className="bg-purple-800 bg-opacity-50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2" />
                Appointments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{user.appointments.length}</p>
              <Button className="mt-4 w-full">Book Appointment</Button>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="playlists" className="w-full">
          <TabsList className="w-full justify-start bg-purple-800 bg-opacity-50">
            <TabsTrigger value="playlists">My Playlists</TabsTrigger>
            <TabsTrigger value="liked">Liked Songs</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
          </TabsList>
          
          <TabsContent value="playlists">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {user.playlists.map((playlist) => (
                <Card key={playlist.id} className="bg-purple-800 bg-opacity-50">
                  <CardHeader>
                    <CardTitle>{playlist.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{playlist.tracks.length} tracks</p>
                    <Button className="mt-4">Play</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          {/* Add other tab contents */}
        </Tabs>
      </div>
    </div>
  )
}

