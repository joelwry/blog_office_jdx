'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Calendar, MapPin, Clock, Users } from 'lucide-react'
import BackButton from '../../components/BackButton'

// This would typically come from an API or database
const gig = {
  id: 1,
  title: 'Summer Music Festival',
  date: '2023-07-15',
  time: '14:00',
  location: 'Central Park, New York',
  artist: 'Various Artists',
  description: 'Join us for a day of music and fun in the sun! Featuring a lineup of top artists across multiple genres.',
  ticketPrice: 50,
}

export default function GigPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)

  const handlePurchase = () => {
    // Here you would typically handle the ticket purchase process
    console.log(`Purchasing ${quantity} tickets for ${gig.title}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <BackButton />
        <h1 className="text-4xl font-bold mb-6">{gig.title}</h1>
        <p className="text-2xl text-pink-400 mb-8">{gig.artist}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-6">{gig.description}</p>
            <div className="space-y-4 text-indigo-300">
              <div className="flex items-center">
                <Calendar className="w-6 h-6 mr-3" />
                <span>{new Date(gig.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-6 h-6 mr-3" />
                <span>{gig.time}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-3" />
                <span>{gig.location}</span>
              </div>
            </div>
          </div>
          <div className="bg-purple-800 bg-opacity-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Purchase Tickets</h2>
            <p className="text-xl mb-6">Price: ${gig.ticketPrice} per ticket</p>
            <div className="mb-6">
              <Label htmlFor="quantity" className="block mb-2">Quantity</Label>
              <div className="flex items-center">
                <Button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="bg-pink-500 hover:bg-pink-600"
                >-</Button>
                <Input
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                  className="mx-2 w-20 text-center text-black"
                />
                <Button
                  onClick={() => setQuantity(quantity + 1)}
                  className="bg-pink-500 hover:bg-pink-600"
                >+</Button>
              </div>
            </div>
            <p className="text-xl mb-6">Total: ${gig.ticketPrice * quantity}</p>
            <Button onClick={handlePurchase} className="w-full bg-pink-500 hover:bg-pink-600">
              Purchase Tickets
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

