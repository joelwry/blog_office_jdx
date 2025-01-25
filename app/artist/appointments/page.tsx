'use client'

import { useState } from 'react'
import { useArtist } from '@/contexts/artist-context'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowLeft, Calendar } from 'lucide-react'
import Link from 'next/link'

export default function AppointmentsManagement() {
  const { artist, updateBookingRate } = useArtist()
  const [newRate, setNewRate] = useState('')

  const handleUpdateRate = () => {
    if (newRate) {
      updateBookingRate(parseFloat(newRate))
      setNewRate('')
    }
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
        <h1 className="text-4xl font-bold mb-8">Appointments Management</h1>
        
        <Card className="bg-purple-800 bg-opacity-50 mb-8">
          <CardHeader>
            <CardTitle>Update Booking Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <Input
                type="number"
                placeholder="New hourly rate"
                value={newRate}
                onChange={(e) => setNewRate(e.target.value)}
                className="bg-white text-black"
              />
              <Button onClick={handleUpdateRate}>Update Rate</Button>
            </div>
            <p className="mt-2">Current rate: ${artist.bookingRate}/hour</p>
          </CardContent>
        </Card>

        <Card className="bg-purple-800 bg-opacity-50">
          <CardHeader>
            <CardTitle>Upcoming Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            {artist.appointments.length === 0 ? (
              <p>No upcoming appointments.</p>
            ) : (
              <ul className="space-y-4">
                {artist.appointments.map((appointment) => (
                  <li key={appointment.id} className="border-b border-purple-700 pb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-semibold">{appointment.type}</h3>
                        <p className="text-sm text-gray-300">Date: {new Date(appointment.date).toLocaleDateString()}</p>
                        <p className="text-sm text-gray-300">Status: {appointment.status}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

