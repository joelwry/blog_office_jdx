import Link from 'next/link'
import { Calendar, MapPin } from 'lucide-react'

const previewGigs = [
  { id: 1, title: 'Summer Music Festival', date: '2023-07-15', location: 'Central Park, New York', artist: 'Various Artists' },
  { id: 2, title: 'Jazz Night', date: '2023-07-22', location: 'Blue Note, Chicago', artist: 'Smooth Sax Quartet' },
  { id: 3, title: 'Rock the Stadium', date: '2023-08-05', location: 'Wembley Stadium, London', artist: 'Thunder Struck' },
]

export default function GigPreview() {
  return (
    <section className="py-20 bg-indigo-900 bg-opacity-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Upcoming Gigs</h2>
        <div className="space-y-6">
          {previewGigs.map((gig) => (
            <Link href={`/gigs/${gig.id}`} key={gig.id} className="block">
              <div className="bg-purple-800 bg-opacity-50 p-6 rounded-lg transition-all duration-300 hover:bg-opacity-75 hover:shadow-lg">
                <h3 className="text-2xl font-semibold mb-2">{gig.title}</h3>
                <p className="text-pink-400 mb-4">{gig.artist}</p>
                <div className="flex items-center space-x-4 text-indigo-300">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{new Date(gig.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{gig.location}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/gigs" className="inline-block bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors">
            View All Gigs
          </Link>
        </div>
      </div>
    </section>
  )
}

