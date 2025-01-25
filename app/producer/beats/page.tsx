'use client'

import { useProducer } from '@/contexts/producer-context'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Edit, Trash2 } from 'lucide-react'
import Link from 'next/link'

export default function ManageBeats() {
  const { producer, deleteBeat } = useProducer()

  if (!producer) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <Link href="/producer" className="text-white hover:text-pink-500 flex items-center mb-6">
          <ArrowLeft className="mr-2" /> Back to Dashboard
        </Link>
        <h1 className="text-4xl font-bold mb-8">Manage Beats</h1>
        
        <Card className="bg-purple-800 bg-opacity-50">
          <CardHeader>
            <CardTitle>Your Beats</CardTitle>
          </CardHeader>
          <CardContent>
            {producer.beats.length === 0 ? (
              <p>You haven't uploaded any beats yet.</p>
            ) : (
              <ul className="space-y-4">
                {producer.beats.map((beat) => (
                  <li key={beat.id} className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{beat.title}</h3>
                      <p className="text-sm text-gray-300">
                        {beat.genre} | {beat.bpm} BPM | {beat.key}
                      </p>
                    </div>
                    <div>
                      <Link href={`/producer/beats/${beat.id}`}>
                        <Button variant="outline" size="sm" className="mr-2">
                          <Edit className="mr-2" size={16} /> Edit
                        </Button>
                      </Link>
                      <Button variant="destructive" size="sm" onClick={() => deleteBeat(beat.id)}>
                        <Trash2 className="mr-2" size={16} /> Delete
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

