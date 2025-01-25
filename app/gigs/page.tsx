import Link from 'next/link'
import { Calendar, MapPin } from 'lucide-react'

// This would typically come from an API or database
const gigs = [
  { id: 1, title: 'Summer Music Festival', date: '2023-07-15', location: 'Central Park, New York', artist: 'Various Artists' },
  { id: 2, title: 'Jazz Night', date: '2023-07-22', location: 'Blue Note, Chicago', artist: 'Smooth Sax Quartet' },
  { id: 3, title: 'Rock the Stadium', date: '2023-08-05', location: 'Wembley Stadium, London', artist: 'Thunder Struck' },
  { id: 4, title: 'Electronic Beats', date: '2023-08-12', location: 'Berghain, Berlin', artist: 'Neon Lights' },
  { id: 5, title: 'Acoustic Session', date: '2023-08-19', location: 'The Bluebird Cafe, Nashville', artist: 'Acoustic Soul' },
]

export default function GigsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Upcoming Gigs</h1>
        <div className="space-y-6">
          {gigs.map((gig) => (
            <Link href={`/gigs/${gig.id}`} key={gig.id} className="block">
              <div className="bg-purple-800 bg-opacity-50 p-6 rounded-lg transition-all duration-300 hover:bg-opacity-75 hover:shadow-lg">
                <h2 className="text-2xl font-semibold mb-2">{gig.title}</h2>
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
      </div>
    </div>
  )
}

