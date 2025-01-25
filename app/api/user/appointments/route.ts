import { NextResponse } from 'next/server'
import type { Appointment } from '@/types/user'

export async function POST(request: Request) {
  try {
    const appointmentData = await request.json()
    
    // Here you would typically:
    // 1. Verify the user's session
    // 2. Create a new appointment in your database
    // 3. Notify the artist
    
    const newAppointment: Appointment = {
      id: Math.random().toString(),
      ...appointmentData,
      status: 'pending',
      createdAt: new Date(),
    }
    
    return NextResponse.json(newAppointment)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create appointment' },
      { status: 500 }
    )
  }
}

