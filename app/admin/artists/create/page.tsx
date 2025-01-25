'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function CreateArtist() {
  const [name, setName] = useState('')
  const [genre, setGenre] = useState('')
  const [email, setEmail] = useState('')
  const [bio, setBio] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log({ name, genre, email, bio })
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Create Artist Account</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Artist Name</Label>
          <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <Label htmlFor="genre">Genre</Label>
          <Input id="genre" value={genre} onChange={(e) => setGenre(e.target.value)} required />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <Label htmlFor="bio">Biography</Label>
          <Textarea id="bio" value={bio} onChange={(e) => setBio(e.target.value)} required />
        </div>
        <Button type="submit">Create Artist Account</Button>
      </form>
    </div>
  )
}

