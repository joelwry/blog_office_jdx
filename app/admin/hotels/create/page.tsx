'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function CreateHotel() {
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log({ name, location, price, description })
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Add New Hotel</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Hotel Name</Label>
          <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <Label htmlFor="location">Location</Label>
          <Input id="location" value={location} onChange={(e) => setLocation(e.target.value)} required />
        </div>
        <div>
          <Label htmlFor="price">Price per Night</Label>
          <Input id="price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <Button type="submit">Add Hotel</Button>
      </form>
    </div>
  )
}

