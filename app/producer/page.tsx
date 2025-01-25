'use client'

import { useProducer } from '@/contexts/producer-context'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Music, DollarSign, Upload } from 'lucide-react'

export default function ProducerDashboard() {
  const { producer } = useProducer()

  if (!producer) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Welcome, {producer.name}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="bg-purple-800 bg-opacity-50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Music className="mr-2" />
                Total Beats
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{producer.beats.length}</p>
              <Link href="/producer/beats">
                <Button className="mt-4 w-full">Manage Beats</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-purple-800 bg-opacity-50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="mr-2" />
                Total Sales
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">$0.00</p>
              <Button className="mt-4 w-full" disabled>View Sales</Button>
            </CardContent>
          </Card>

          <Card className="bg-purple-800 bg-opacity-50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Upload className="mr-2" />
                Upload Beat
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Link href="/producer/upload">
                <Button className="mt-4 w-full">Upload New Beat</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

