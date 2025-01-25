'use client'

import { createContext, useContext, useState } from 'react'

interface Beat {
  id: string
  title: string
  producer: string
  price: number
  genre: string
  bpm: number
  key: string
  license: string
  isFree: boolean
  audioUrl: string
}

interface Producer {
  id: string
  name: string
  email: string
  beats: Beat[]
}

interface ProducerContextType {
  producer: Producer | null
  uploadBeat: (beat: Omit<Beat, 'id'>) => void
  updateBeat: (beatId: string, beat: Partial<Beat>) => void
  deleteBeat: (beatId: string) => void
}

const ProducerContext = createContext<ProducerContextType | undefined>(undefined)

// Mock producer data
const mockProducer: Producer = {
  id: '1',
  name: 'Beat Master',
  email: 'beatmaster@example.com',
  beats: [
    {
      id: '1',
      title: 'Summer Vibes',
      producer: 'Beat Master',
      price: 49.99,
      genre: 'Pop',
      bpm: 120,
      key: 'C Major',
      license: 'Standard',
      isFree: false,
      audioUrl: 'https://example.com/summer-vibes.mp3',
    },
  ],
}

export function ProducerProvider({ children }: { children: React.ReactNode }) {
  const [producer, setProducer] = useState<Producer | null>(mockProducer)

  const uploadBeat = (beat: Omit<Beat, 'id'>) => {
    if (producer) {
      const newBeat = { ...beat, id: Date.now().toString() }
      setProducer({ ...producer, beats: [...producer.beats, newBeat] })
    }
  }

  const updateBeat = (beatId: string, updatedBeat: Partial<Beat>) => {
    if (producer) {
      const updatedBeats = producer.beats.map(beat =>
        beat.id === beatId ? { ...beat, ...updatedBeat } : beat
      )
      setProducer({ ...producer, beats: updatedBeats })
    }
  }

  const deleteBeat = (beatId: string) => {
    if (producer) {
      const updatedBeats = producer.beats.filter(beat => beat.id !== beatId)
      setProducer({ ...producer, beats: updatedBeats })
    }
  }

  return (
    <ProducerContext.Provider value={{ producer, uploadBeat, updateBeat, deleteBeat }}>
      {children}
    </ProducerContext.Provider>
  )
}

export function useProducer() {
  const context = useContext(ProducerContext)
  if (context === undefined) {
    throw new Error('useProducer must be used within a ProducerProvider')
  }
  return context
}

