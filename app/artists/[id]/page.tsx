import Image from 'next/image'
import { Button } from '@/components/ui/button'
import BackButton from '@/src/app/components/BackButton'

// This would typically come from an API or database
const artist = {
  id: 1,
  name: 'Neon Lights',
  genre: 'Electronic',
  image: '/placeholder.svg?height=300&width=300',
  bio: 'Neon Lights is an electronic music producer known for their vibrant, pulsating beats and mesmerizing melodies. With a career spanning over a decade, they have become a staple in the electronic music scene, performing at major festivals and clubs worldwide.',
  popularTracks: [
    { id: 1, title: 'Neon Dreams', duration: '3:45' },
    { id: 2, title: 'Electric Pulse', duration: '4:20' },
    { id: 3, title: 'Midnight Glow', duration: '3:55' },
  ]
}

export default function ArtistPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <BackButton />
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
          <Image
            src={artist.image || "/placeholder.svg"}
            alt={artist.name}
            width={300}
            height={300}
            className="rounded-full"
          />
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4">{artist.name}</h1>
            <p className="text-xl text-pink-400 mb-6">{artist.genre}</p>
            <p className="text-lg mb-8">{artist.bio}</p>
            <h2 className="text-2xl font-semibold mb-4">Popular Tracks</h2>
            <ul className="space-y-4">
              {artist.popularTracks.map((track) => (
                <li key={track.id} className="flex items-center justify-between bg-purple-800 bg-opacity-50 p-4 rounded-lg">
                  <span>{track.title}</span>
                  <span>{track.duration}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-8 bg-pink-500 hover:bg-pink-600">
              View All Tracks
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

