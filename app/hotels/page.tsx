import Link from 'next/link'
import Image from 'next/image'
import { Star } from 'lucide-react'

// This would typically come from an API or database
const hotels = [
  { id: 1, name: 'Luxury Suites', rating: 4.5, price: 200, image: '/placeholder.svg?height=200&width=300' },
  { id: 2, name: 'Cozy Inn', rating: 4.0, price: 120, image: '/placeholder.svg?height=200&width=300' },
  { id: 3, name: 'City View Hotel', rating: 4.2, price: 150, image: '/placeholder.svg?height=200&width=300' },
  { id: 4, name: 'Riverside Retreat', rating: 4.7, price: 250, image: '/placeholder.svg?height=200&width=300' },
]

export default function HotelsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Book a Hotel</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel) => (
            <Link href={`/hotels/${hotel.id}`} key={hotel.id} className="block">
              <div className="bg-purple-800 bg-opacity-50 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:bg-opacity-75">
                <Image
                  src={hotel.image || "/placeholder.svg"}
                  alt={hotel.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">{hotel.name}</h2>
                  <div className="flex items-center mb-2">
                    <Star className="w-5 h-5 text-yellow-400 mr-1" />
                    <span>{hotel.rating}</span>
                  </div>
                  <p className="text-xl text-pink-400">From ${hotel.price} per night</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

