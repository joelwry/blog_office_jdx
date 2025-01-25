'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Star, Wifi, Car, Coffee } from 'lucide-react'
import BackButton from '../../components/BackButton'

// This would typically come from an API or database
const hotel = {
  id: 1,
  name: 'Luxury Suites',
  rating: 4.5,
  price: 200,
  image: '/placeholder.svg?height=400&width=600',
  description: 'Experience luxury and comfort in the heart of the city. Our spacious suites offer stunning views and top-notch amenities.',
  amenities: ['Free Wi-Fi', 'Parking', 'Breakfast Included'],
}

export default function HotelPage({ params }: { params: { id: string } }) {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(1)

  const handleBooking = () => {
    // Here you would typically handle the booking process
    console.log(`Booking ${hotel.name} for ${guests} guests from ${checkIn} to ${checkOut}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <BackButton />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <Image
              src={hotel.image || "/placeholder.svg"}
              alt={hotel.name}
              width={600}
              height={400}
              className="rounded-lg mb-6"
            />
            <h1 className="text-4xl font-bold mb-4">{hotel.name}</h1>
            <div className="flex items-center mb-4">
              <Star className="w-6 h-6 text-yellow-400 mr-1" />
              <span className="text-xl">{hotel.rating}</span>
            </div>
            <p className="text-lg mb-6">{hotel.description}</p>
            <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
            <ul className="space-y-2">
              {hotel.amenities.map((amenity, index) => (
                <li key={index} className="flex items-center">
                  {amenity.includes('Wi-Fi') && <Wifi className="w-5 h-5 mr-2" />}
                  {amenity.includes('Parking') && <Car className="w-5 h-5 mr-2" />}
                  {amenity.includes('Breakfast') && <Coffee className="w-5 h-5 mr-2" />}
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-purple-800 bg-opacity-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Book Your Stay</h2>
            <p className="text-xl mb-6">Price: ${hotel.price} per night</p>
            <div className="space-y-4">
              <div>
                <Label htmlFor="check-in">Check-in Date</Label>
                <Input
                  type="date"
                  id="check-in"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="text-black"
                />
              </div>
              <div>
                <Label htmlFor="check-out">Check-out Date</Label>
                <Input
                  type="date"
                  id="check-out"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="text-black"
                />
              </div>
              <div>
                <Label htmlFor="guests">Number of Guests</Label>
                <Input
                  type="number"
                  id="guests"
                  value={guests}
                  onChange={(e) => setGuests(Math.max(1, parseInt(e.target.value)))}
                  className="text-black"
                />
              </div>
            </div>
            <Button onClick={handleBooking} className="w-full mt-6 bg-pink-500 hover:bg-pink-600">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

