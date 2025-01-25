import { Button } from '@/components/ui/button'
import { Play } from 'lucide-react'

const previewTracks = [
  { id: 1, title: 'Summer Vibes', artist: 'Sunny Days', duration: '3:45' },
  { id: 2, title: 'Midnight Blues', artist: 'Moon Walker', duration: '4:20' },
  { id: 3, title: 'Electric Dreams', artist: 'Neon Lights', duration: '3:55' },
]

export default function MusicPreview() {
  return (
    <section className="py-20 bg-indigo-900 bg-opacity-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Discover New Music</h2>
        <div className="space-y-4">
          {previewTracks.map((track) => (
            <div key={track.id} className="flex items-center justify-between bg-purple-800 bg-opacity-50 p-4 rounded-lg">
              <div>
                <h3 className="text-xl font-semibold">{track.title}</h3>
                <p className="text-indigo-300">{track.artist}</p>
              </div>
              <div className="flex items-center space-x-4">
                <span>{track.duration}</span>
                <Button size="icon" variant="ghost" className="text-pink-500 hover:text-pink-400 hover:bg-pink-500 hover:bg-opacity-20">
                  <Play />
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button variant="outline" className="bg-pink-500 text-white border-pink-500 hover:bg-pink-600">
            Explore More Music
          </Button>
        </div>
      </div>
    </section>
  )
}

