import Image from 'next/image'
import Link from 'next/link'

const previewArtists = [
  { id: 1, name: 'Neon Lights', genre: 'Electronic', image: '/placeholder.svg?height=150&width=150' },
  { id: 2, name: 'Acoustic Soul', genre: 'Folk', image: '/placeholder.svg?height=150&width=150' },
  { id: 3, name: 'Rhythm Rebels', genre: 'Rock', image: '/placeholder.svg?height=150&width=150' },
]

export default function ArtistPreview() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Featured Artists</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewArtists.map((artist) => (
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
        <div className="mt-8 text-center">
          <Link href="/artists" className="inline-block bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors">
            Explore All Artists
          </Link>
        </div>
      </div>
    </section>
  )
}

