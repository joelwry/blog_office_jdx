'use client'

import { useState } from 'react'
import { useAuth } from '@/contexts/auth-context'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function AppointmentsPage() {
  const { user } = useAuth()
  const [artistId, setArtistId] = useState('')
  const [date, setDate] = useState('')
  const [type, setType] = useState('')
  const [details, setDetails] = useState('')

  const handleBookAppointment = () => {
    // Here you would typically make an API call to book the appointment
    console.log('Booking appointment:', { artistId, date, type, details })
    // Reset form
    setArtistId('')
    setDate('')
    setType('')
    setDetails('')
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Please log in to manage appointments</h1>
          <Link href="/login">
            <Button>Log In</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <Link href="/user" className="text-white hover:text-pink-500 flex items-center mb-6">
          <ArrowLeft className="mr-2" /> Back to Dashboard
        </Link>
        <h1 className="text-4xl font-bold mb-8">Manage Appointments</h1>
        
        <Card className="bg-purple-800 bg-opacity-50 mb-8">
          <CardHeader>
            <CardTitle>Book New Appointment</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label htmlFor="artistId" className="block mb-2">Artist</label>
                <Input
                  id="artistId"
                  placeholder="Enter artist ID"
                  value={artistId}
                  onChange={(e) => setArtistId(e.target.value)}
                  className="bg-white text-black"
                />
              </div>
              <div>
                <label htmlFor="date" className="block mb-2">Date</label>
                <Input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="bg-white text-black"
                />
              </div>
              <div>
                <label htmlFor="type" className="block mb-2">Type</label>
                <Select onValueChange={setType}>
                  <SelectTrigger className="bg-white text-black">
                    <SelectValue placeholder="Select appointment type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="meeting">Meeting</SelectItem>
                    <SelectItem value="performance">Performance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="details" className="block mb-2">Details</label>
                <Input
                  id="details"
                  placeholder="Enter appointment details"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="bg-white text-black"
                />
              </div>
              <Button onClick={handleBookAppointment} className="w-full">Book Appointment</Button>
            </form>
          </CardContent>
        </Card>

        <Card className="bg-purple-800 bg-opacity-50">
          <CardHeader>
            <CardTitle>Your Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            {user.appointments.length === 0 ? (
              <p>You have no appointments scheduled.</p>
            ) : (
              <ul className="space-y-4">
                {user.appointments.map((appointment) => (
                  <li key={appointment.id} className="bg-purple-700 bg-opacity-50 p-4 rounded-lg">
                    <p><strong>Artist ID:</strong> {appointment.artistId}</p>
                    <p><strong>Date:</strong> {new Date(appointment.date).toLocaleDateString()}</p>
                    <p><strong>Type:</strong> {appointment.type}</p>
                    <p><strong>Status:</strong> {appointment.status}</p>
                    <p><strong>Details:</strong> {appointment.details}</p>
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

