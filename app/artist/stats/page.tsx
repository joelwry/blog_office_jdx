'use client'

import { useState } from 'react'
import { useArtist } from '@/contexts/artist-context'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, BarChart2, PieChart, TrendingUp } from 'lucide-react'
import Link from 'next/link'

// Mock data for stats
const mockStats = {
  totalPlays: 10000,
  topGenres: [
    { genre: 'Pop', percentage: 40 },
    { genre: 'Rock', percentage: 30 },
    { genre: 'Hip Hop', percentage: 20 },
    { genre: 'Electronic', percentage: 10 },
  ],
  topTracks: [
    { id: '1', title: 'Track 1', plays: 2000 },
    { id: '2', title: 'Track 2', plays: 1800 },
    { id: '3', title: 'Track 3', plays: 1500 },
  ],
}

export default function ArtistStats() {
  const { artist } = useArtist()
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null)

  if (!artist) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <Link href="/artist" className="text-white hover:text-pink-500 flex items-center mb-6">
          <ArrowLeft className="mr-2" /> Back to Dashboard
        </Link>
        <h1 className="text-4xl font-bold mb-8">Artist Statistics</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="bg-purple-800 bg-opacity-50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart2 className="mr-2" />
                Total Plays
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">{mockStats.totalPlays.toLocaleString()}</p>
            </CardContent>
          </Card>

          <Card className="bg-purple-800 bg-opacity-50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <PieChart className="mr-2" />
                Top Genres
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                {mockStats.topGenres.map((genre) => (
                  <li key={genre.genre} className="flex justify-between">
                    <span>{genre.genre}</span>
                    <span>{genre.percentage}%</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-purple-800 bg-opacity-50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2" />
                Top Tracks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                {mockStats.topTracks.map((track) => (
                  <li key={track.id} className="flex justify-between">
                    <span>{track.title}</span>
                    <span>{track.plays.toLocaleString()} plays</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-purple-800 bg-opacity-50">
          <CardHeader>
            <CardTitle>Track Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <select
                className="w-full p-2 bg-purple-700 text-white rounded"
                onChange={(e) => setSelectedTrack(e.target.value)}
                value={selectedTrack || ''}
              >
                <option value="">Select a track</option>
                {artist.tracks.map((track) => (
                  <option key={track.id} value={track.id}>{track.title}</option>
                ))}
              </select>
              {selectedTrack && (
                <div>
                  <h3 className="text-xl font-semibold mb-2">Stats for {artist.tracks.find(t => t.id === selectedTrack)?.title}</h3>
                  <p>Plays: {Math.floor(Math.random() * 10000)}</p>
                  <p>Likes: {Math.floor(Math.random() * 1000)}</p>
                  <p>Playlist Additions: {Math.floor(Math.random() * 500)}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

