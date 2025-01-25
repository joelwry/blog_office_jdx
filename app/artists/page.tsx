import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const topArtists = [
  { id: 1, name: 'Neon Lights', genre: 'Electronic', image: '/placeholder.svg?height=150&width=150' },
  { id: 2, name: 'Acoustic Soul', genre: 'Folk', image: '/placeholder.svg?height=150&width=150' },
  { id: 3, name: 'Rhythm Rebels', genre: 'Rock', image: '/placeholder.svg?height=150&width=150' },
]

const newArtists = [
  { id: 4, name: 'Jazzy Jeff', genre: 'Jazz', image: '/placeholder.svg?height=150&width=150' },
  { id: 5, name: 'Rap Master', genre: 'Hip Hop', image: '/placeholder.svg?height=150&width=150' },
  { id: 6, name: 'Indie Vibes', genre: 'Indie', image: '/placeholder.svg?height=150&width=150' },
]

const topAfrobeatArtists = [
  { id: 7, name: 'AfroKing', genre: 'Afrobeat', image: '/placeholder.svg?height=150&width=150' },
  { id: 8, name: 'Lagos Groove', genre: 'Afrobeat', image: '/placeholder.svg?height=150&width=150' },
  { id: 9, name: 'Naija Beats', genre: 'Afrobeat', image: '/placeholder.svg?height=150&width=150' },
]

export default function ArtistsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Discover Artists</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Top Artists</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topArtists.map((artist) => (
              <Link href={`/artists/${artist.id}`} key={artist.id} className="group">
                <div className="bg-purple-800 bg-opacity-50 p-6 rounded-lg text-center transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-lg">
                  <Image
                    src={artist.image || "/placeholder.svg"}
                    alt={artist.name}
                    width={150}
                    height={150}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{artist.name}</h3>
                  <p className="text-indigo-300">{artist.genre}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">New Artists</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newArtists.map((artist) => (
              <Link href={`/artists/${artist.id}`} key={artist.id} className="group">
                <div className="bg-purple-800 bg-opacity-50 p-6 rounded-lg text-center transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-lg">
                  <Image
                    src={artist.image || "/placeholder.svg"}
                    alt={artist.name}
                    width={150}
                    height={150}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{artist.name}</h3>
                  <p className="text-indigo-300">{artist.genre}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Top Afrobeat Artists</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topAfrobeatArtists.map((artist) => (
              <Link href={`/artists/${artist.id}`} key={artist.id} className="group">
                <div className="bg-purple-800 bg-opacity-50 p-6 rounded-lg text-center transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-lg">
                  <Image
                    src={artist.image || "/placeholder.svg"}
                    alt={artist.name}
                    width={150}
                    height={150}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{artist.name}</h3>
                  <p className="text-indigo-300">{artist.genre}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <div className="text-center mt-12">
          <Link href="/artists/all">
            <Button size="lg" className="bg-pink-500 hover:bg-pink-600">View All Artists</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

