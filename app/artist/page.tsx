'use client'

import { useArtist } from '@/contexts/artist-context'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Wallet, Music, Calendar, BarChart, FileText } from 'lucide-react'

export default function ArtistDashboard() {
  const { artist } = useArtist()

  if (!artist) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Welcome, {artist.name}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="bg-purple-800 bg-opacity-50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Wallet className="mr-2" />
                Wallet Balance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">${artist.walletBalance.toFixed(2)}</p>
              <Link href="/artist/wallet">
                <Button className="mt-4 w-full">Manage Wallet</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-purple-800 bg-opacity-50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Music className="mr-2" />
                Tracks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{artist.tracks.length}</p>
              <Link href="/artist/music">
                <Button className="mt-4 w-full">Manage Music</Button>
              </Link>
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
              <p className="text-2xl font-bold">{artist.appointments.length}</p>
              <Link href="/artist/appointments">
                <Button className="mt-4 w-full">Manage Appointments</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-purple-800 bg-opacity-50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart className="mr-2" />
                Music Stats
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl">View your music performance</p>
              <Link href="/artist/stats">
                <Button className="mt-4 w-full">View Stats</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-purple-800 bg-opacity-50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2" />
                Blog Posts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{artist.blogPosts.length}</p>
              <Link href="/artist/blog">
                <Button className="mt-4 w-full">Manage Blog</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-purple-800 bg-opacity-50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Music className="mr-2" />
                Booking Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">${artist.bookingRate}/hour</p>
              <Link href="/artist/booking">
                <Button className="mt-4 w-full">Update Rate</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

