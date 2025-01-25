'use client'

import { useState } from 'react'
import { useProducer } from '@/contexts/producer-context'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ArrowLeft, Upload } from 'lucide-react'
import Link from 'next/link'

export default function UploadBeat() {
  const { uploadBeat } = useProducer()
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [genre, setGenre] = useState('')
  const [bpm, setBpm] = useState('')
  const [key, setKey] = useState('')
  const [license, setLicense] = useState('')
  const [isFree, setIsFree] = useState(false)
  const [audioFile, setAudioFile] = useState<File | null>(null)

  const handleUpload = () => {
    if (title && genre && bpm && key && license && audioFile) {
      uploadBeat({
        title,
        producer: 'Current Producer', // This should be dynamic based on the logged-in producer
        price: parseFloat(price) || 0,
        genre,
        bpm: parseInt(bpm),
        key,
        license,
        isFree,
        audioUrl: URL.createObjectURL(audioFile), // In a real app, you'd upload this file to a server
      })
      // Reset form
      setTitle('')
      setPrice('')
      setGenre('')
      setBpm('')
      setKey('')
      setLicense('')
      setIsFree(false)
      setAudioFile(null)
      alert('Beat uploaded successfully!')
    } else {
      alert('Please fill in all required fields')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <Link href="/producer" className="text-white hover:text-pink-500 flex items-center mb-6">
          <ArrowLeft className="mr-2" /> Back to Dashboard
        </Link>
        <h1 className="text-4xl font-bold mb-8">Upload New Beat</h1>
        
        <Card className="bg-purple-800 bg-opacity-50">
          <CardHeader>
            <CardTitle>Beat Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Input
                placeholder="Beat Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-white text-black"
              />
              <Input
                type="number"
                placeholder="Price (leave empty if free)"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="bg-white text-black"
              />
              <Select onValueChange={setGenre}>
                <SelectTrigger className="bg-white text-black">
                  <SelectValue placeholder="Select genre" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pop">Pop</SelectItem>
                  <SelectItem value="hiphop">Hip Hop</SelectItem>
                  <SelectItem value="rnb">R&B</SelectItem>
                  <SelectItem value="electronic">Electronic</SelectItem>
                </SelectContent>
              </Select>
              <Input
                type="number"
                placeholder="BPM"
                value={bpm}
                onChange={(e) => setBpm(e.target.value)}
                className="bg-white text-black"
              />
              <Input
                placeholder="Key"
                value={key}
                onChange={(e) => setKey(e.target.value)}
                className="bg-white text-black"
              />
              <Textarea
                placeholder="License terms"
                value={license}
                onChange={(e) => setLicense(e.target.value)}
                className="bg-white text-black"
                rows={4}
              />
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="isFree"
                  checked={isFree}
                  onChange={(e) => setIsFree(e.target.checked)}
                />
                <label htmlFor="isFree">This beat is free</label>
              </div>
              <Input
                type="file"
                accept="audio/*"
                onChange={(e) => setAudioFile(e.target.files?.[0] || null)}
                className="bg-white text-black"
              />
              <Button onClick={handleUpload} className="w-full">
                <Upload className="mr-2" /> Upload Beat
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

