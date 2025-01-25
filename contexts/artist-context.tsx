'use client'

import { createContext, useContext, useState } from 'react'
import { Artist, Album, BlogPost } from '@/types/artist'
import { Track, Appointment } from '@/types/user'

interface ArtistContextType {
  artist: Artist | null
  updateWalletBalance: (amount: number) => void
  addTrack: (track: Track) => void
  addAlbum: (album: Album) => void
  addBlogPost: (post: BlogPost) => void
  updateBookingRate: (rate: number) => void
  addAppointment: (appointment: Appointment) => void
}

const ArtistContext = createContext<ArtistContextType | undefined>(undefined)

// Mock artist data
const mockArtist: Artist = {
  id: '1',
  name: 'Neon Lights',
  email: 'neonlights@example.com',
  walletBalance: 1000,
  bio: 'Electronic music producer known for vibrant beats and mesmerizing melodies.',
  genre: 'Electronic',
  tracks: [
    { id: '1', title: 'Neon Dreams', artist: 'Neon Lights', url: 'https://example.com/neondreams.mp3' },
    { id: '2', title: 'Electric Pulse', artist: 'Neon Lights', url: 'https://example.com/electricpulse.mp3' },
  ],
  albums: [
    {
      id: '1',
      title: 'Neon City',
      releaseDate: new Date('2023-01-01'),
      tracks: [
        { id: '1', title: 'Neon Dreams', artist: 'Neon Lights', url: 'https://example.com/neondreams.mp3' },
        { id: '2', title: 'Electric Pulse', artist: 'Neon Lights', url: 'https://example.com/electricpulse.mp3' },
      ],
    },
  ],
  blogPosts: [
    {
      id: '1',
      title: 'The Making of Neon City',
      content: 'Here\'s how I created my latest album...',
      publishDate: new Date('2023-01-15'),
    },
  ],
  appointments: [],
  bookingRate: 500,
}

export function ArtistProvider({ children }: { children: React.ReactNode }) {
  const [artist, setArtist] = useState<Artist | null>(mockArtist)

  const updateWalletBalance = (amount: number) => {
    if (artist) {
      setArtist({ ...artist, walletBalance: artist.walletBalance + amount })
    }
  }

  const addTrack = (track: Track) => {
    if (artist) {
      setArtist({ ...artist, tracks: [...artist.tracks, track] })
    }
  }

  const addAlbum = (album: Album) => {
    if (artist) {
      setArtist({ ...artist, albums: [...artist.albums, album] })
    }
  }

  const addBlogPost = (post: BlogPost) => {
    if (artist) {
      setArtist({ ...artist, blogPosts: [...artist.blogPosts, post] })
    }
  }

  const updateBookingRate = (rate: number) => {
    if (artist) {
      setArtist({ ...artist, bookingRate: rate })
    }
  }

  const addAppointment = (appointment: Appointment) => {
    if (artist) {
      setArtist({ ...artist, appointments: [...artist.appointments, appointment] })
    }
  }

  return (
    <ArtistContext.Provider value={{
      artist,
      updateWalletBalance,
      addTrack,
      addAlbum,
      addBlogPost,
      updateBookingRate,
      addAppointment,
    }}>
      {children}
    </ArtistContext.Provider>
  )
}

export function useArtist() {
  const context = useContext(ArtistContext)
  if (context === undefined) {
    throw new Error('useArtist must be used within an ArtistProvider')
  }
  return context
}

