'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function CreateBlogPost() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('')
  const [artistName, setArtistName] = useState('')
  const [trackName, setTrackName] = useState('')
  const [inspiration, setInspiration] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log({ title, content, category, artistName, trackName, inspiration })
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Create New Blog Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <Label htmlFor="category">Category</Label>
          <Select onValueChange={setCategory} required>
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="artist">Artist</SelectItem>
              <SelectItem value="entertainment">Entertainment</SelectItem>
              <SelectItem value="gigs">Gigs</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {category === 'artist' && (
          <>
            <div>
              <Label htmlFor="artistName">Artist Name</Label>
              <Input id="artistName" value={artistName} onChange={(e) => setArtistName(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="trackName">Track Name</Label>
              <Input id="trackName" value={trackName} onChange={(e) => setTrackName(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="inspiration">Inspiration</Label>
              <Textarea id="inspiration" value={inspiration} onChange={(e) => setInspiration(e.target.value)} required />
            </div>
          </>
        )}
        <div>
          <Label htmlFor="content">Content</Label>
          <Textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} required />
        </div>
        <Button type="submit">Create Blog Post</Button>
      </form>
    </div>
  )
}

