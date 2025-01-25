import { Music, Ticket, Upload, Calendar } from 'lucide-react'

const features = [
  { icon: Music, title: 'Discover Music', description: 'Explore new artists and genres' },
  { icon: Ticket, title: 'Buy Tickets', description: 'Secure your spot at live shows' },
  { icon: Upload, title: 'Share Your Music', description: 'Upload and showcase your creations' },
  { icon: Calendar, title: 'Book Meetings', description: 'Connect with venue admins for gigs' },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-indigo-900 bg-opacity-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-purple-800 bg-opacity-50 p-6 rounded-lg text-center hover:bg-opacity-75 transition-all duration-300 transform hover:-translate-y-1">
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-pink-500" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-indigo-200">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

