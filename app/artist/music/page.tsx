'use client'

import { useState } from 'react'
import { useArtist } from '@/contexts/artist-context'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ArrowLeft, Upload, Music, Edit, Trash2, Plus } from 'lucide-react'
import Link from 'next/link'

interface LyricsSection {
  type: 'intro' | 'verse' | 'chorus' | 'bridge' | 'outro' | 'hook'
  content: string
}

export default function MusicManagement() {
  const { artist, addTrack, addAlbum } = useArtist()
  const [trackTitle, setTrackTitle] = useState('')
  const [trackFile, setTrackFile] = useState<File | null>(null)
  const [coverImage, setCoverImage] = useState<File | null>(null)
  const [genre, setGenre] = useState('')
  const [featuredArtists, setFeaturedArtists] = useState(['', '', '', ''])
  const [producers, setProducers] = useState('')
  const [trackBio, setTrackBio] = useState('')
  const [lyrics, setLyrics] = useState<LyricsSection[]>([])
  const [releaseDate, setReleaseDate] = useState('')
  const [isPublic, setIsPublic] = useState(true)
  const [audiomackLink, setAudiomackLink] = useState('')
  const [albumTitle, setAlbumTitle] = useState('')

  const handleAddTrack = () => {
    // Here you would typically make an API call to upload the track
    console.log('Uploading track:', {
      title: trackTitle,
      file: trackFile,
      coverImage,
      genre,
      
      featuredArtists,
      producers,
      trackBio,
      lyrics,
      releaseDate,
      isPublic,
    })
    // Reset form fields
    setTrackTitle('')
    setTrackFile(null)
    setCoverImage(null)
    setGenre('')
    setFeaturedArtists(['', '', '', ''])
    setProducers('')
    setTrackBio('')
    setLyrics([])
    setReleaseDate('')
    setIsPublic(true)
  }

  const handleAddAudiomackTrack = () => {
    // Here you would typically make an API call to add the Audiomack track
    console.log('Adding Audiomack track:', {
      audiomackLink,
      lyrics,
    })
    // Reset form fields
    setAudiomackLink('')
    setLyrics([])
  }

  const handleAddAlbum = () => {
    if (albumTitle) {
      addAlbum({
        id: Date.now().toString(),
        title: albumTitle,
        releaseDate: new Date(),
        tracks: [],
      })
      setAlbumTitle('')
    }
  }

  const handleAddLyricsSection = () => {
    setLyrics([...lyrics, { type: 'verse', content: '' }])
  }

  const handleUpdateLyricsSection = (index: number, type: LyricsSection['type'], content: string) => {
    const newLyrics = [...lyrics]
    newLyrics[index] = { type, content }
    setLyrics(newLyrics)
  }

  const handleDeleteLyricsSection = (index: number) => {
    const newLyrics = lyrics.filter((_, i) => i !== index)
    setLyrics(newLyrics)
  }

  if (!artist) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <Link href="/artist" className="text-white hover:text-pink-500 flex items-center mb-6">
          <ArrowLeft className="mr-2" /> Back to Dashboard
        </Link>
        <h1 className="text-4xl font-bold mb-8">Music Management</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-purple-800 bg-opacity-50">
            <CardHeader>
              <CardTitle>Upload New Track</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input
                  placeholder="Track Title"
                  value={trackTitle}
                  onChange={(e) => setTrackTitle(e.target.value)}
                  className="bg-white text-black"
                />
                <Input
                  type="file"
                  accept="audio/*"
                  onChange={(e) => setTrackFile(e.target.files?.[0] || null)}
                  className="bg-white text-black"
                />
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setCoverImage(e.target.files?.[0] || null)}
                  className="bg-white text-black"
                />
                <Select onValueChange={setGenre}>
                  <SelectTrigger className="bg-white text-black">
                    <SelectValue placeholder="Select genre" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pop">Pop</SelectItem>
                    <SelectItem value="rock">Rock</SelectItem>
                    <SelectItem value="hiphop">Hip Hop</SelectItem>
                    <SelectItem value="electronic">Electronic</SelectItem>
                  </SelectContent>
                </Select>
                {featuredArtists.map((artist, index) => (
                  <Input
                    key={index}
                    placeholder={`Featured Artist ${index + 1}`}
                    value={artist}
                    onChange={(e) => {
                      const newFeaturedArtists = [...featuredArtists]
                      newFeaturedArtists[index] = e.target.value
                      setFeaturedArtists(newFeaturedArtists)
                    }}
                    className="bg-white text-black"
                  />
                ))}
                <Input
                  placeholder="Producers"
                  value={producers}
                  onChange={(e) => setProducers(e.target.value)}
                  className="bg-white text-black"
                />
                <Textarea
                  placeholder="Track Bio"
                  value={trackBio}
                  onChange={(e) => setTrackBio(e.target.value)}
                  className="bg-white text-black"
                  rows={3}
                />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Lyrics</h3>
                  {lyrics.map((section, index) => (
                    <div key={index} className="mb-4">
                      <Select
                        value={section.type}
                        onValueChange={(value) => handleUpdateLyricsSection(index, value as LyricsSection['type'], section.content)}
                      >
                        <SelectTrigger className="bg-white text-black mb-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="intro">Intro</SelectItem>
                          <SelectItem value="verse">Verse</SelectItem>
                          <SelectItem value="chorus">Chorus</SelectItem>
                          <SelectItem value="bridge">Bridge</SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                          <SelectItem value="hook">Hook</SelectItem>
                        </SelectContent>
                      </Select>
                      <Textarea
                        value={section.content}
                        onChange={(e) => handleUpdateLyricsSection(index, section.type, e.target.value)}
                        className="bg-white text-black mb-2"
                        rows={3}
                      />
                      <Button onClick={() => handleDeleteLyricsSection(index)} variant="destructive" size="sm">
                        <Trash2 className="mr-2" size={16} /> Delete Section
                      </Button>
                    </div>
                  ))}
                  <Button onClick={handleAddLyricsSection} className="mt-2">
                    <Plus className="mr-2" size={16} /> Add Lyrics Section
                  </Button>
                </div>
                <Input
                  type="date"
                  value={releaseDate}
                  onChange={(e) => setReleaseDate(e.target.value)}
                  className="bg-white text-black"
                />
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={isPublic}
                    onChange={(e) => setIsPublic(e.target.checked)}
                    id="isPublic"
                  />
                  <label htmlFor="isPublic">Make track public</label>
                </div>
                <Button onClick={handleAddTrack} className="w-full">
                  <Upload className="mr-2" /> Upload Track
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-purple-800 bg-opacity-50">
            <CardHeader>
              <CardTitle>Add Audiomack Track</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input
                  placeholder="Audiomack Embed Link"
                  value={audiomackLink}
                  onChange={(e) => setAudiomackLink(e.target.value)}
                  className="bg-white text-black"
                />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Lyrics</h3>
                  {lyrics.map((section, index) => (
                    <div key={index} className="mb-4">
                      <Select
                        value={section.type}
                        onValueChange={(value) => handleUpdateLyricsSection(index, value as LyricsSection['type'], section.content)}
                      >
                        <SelectTrigger className="bg-white text-black mb-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="intro">Intro</SelectItem>
                          <SelectItem value="verse">Verse</SelectItem>
                          <SelectItem value="chorus">Chorus</SelectItem>
                          <SelectItem value="bridge">Bridge</SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                          <SelectItem value="hook">Hook</SelectItem>
                        </SelectContent>
                      </Select>
                      <Textarea
                        value={section.content}
                        onChange={(e) => handleUpdateLyricsSection(index, section.type, e.target.value)}
                        className="bg-white text-black mb-2"
                        rows={3}
                      />
                      <Button onClick={() => handleDeleteLyricsSection(index)} variant="destructive" size="sm">
                        <Trash2 className="mr-2" size={16} /> Delete Section
                      </Button>
                    </div>
                  ))}
                  <Button onClick={handleAddLyricsSection} className="mt-2">
                    <Plus className="mr-2" size={16} /> Add Lyrics Section
                  </Button>
                </div>
                <Button onClick={handleAddAudiomackTrack} className="w-full">
                  <Music className="mr-2" /> Add Audiomack Track
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-purple-800 bg-opacity-50 mt-8">
          <CardHeader>
            <CardTitle>Create New Album</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Input
                placeholder="Album Title"
                value={albumTitle}
                onChange={(e) => setAlbumTitle(e.target.value)}
                className="bg-white text-black"
              />
              <Button onClick={handleAddAlbum} className="w-full">
                <Music className="mr-2" /> Create Album
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-purple-800 bg-opacity-50 mt-8">
          <CardHeader>
            <CardTitle>Your Tracks</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {artist.tracks.map((track) => (
                <li key={track.id} className="flex justify-between items-center">
                  <span>{track.title}</span>
                  <div>
                    <Button variant="outline" size="sm" className="mr-2">
                      <Edit className="mr-2" size={16} /> Edit
                    </Button>
                    <Button variant="destructive" size="sm">
                      <Trash2 className="mr-2" size={16} /> Delete
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-purple-800 bg-opacity-50 mt-8">
          <CardHeader>
            <CardTitle>Your Albums</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {artist.albums.map((album) => (
                <li key={album.id} className="flex justify-between items-center">
                  <span>{album.title}</span>
                  <div>
                    <Button variant="outline" size="sm" className="mr-2">
                      <Edit className="mr-2" size={16} /> Edit
                    </Button>
                    <Button variant="destructive" size="sm">
                      <Trash2 className="mr-2" size={16} /> Delete
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

