import Image from 'next/image'
import { Button } from '@/components/ui/button'

const previewSections = [
  {
    title: 'Upcoming Gigs',
    description: 'Check out the hottest shows in your area',
    imageSrc: '/placeholder.svg?height=300&width=400',
    buttonText: 'View All Gigs',
  },
  {
    title: 'Featured Artists',
    description: 'Discover new and trending musicians',
    imageSrc: '/placeholder.svg?height=300&width=400',
    buttonText: 'Explore Artists',
  },
  {
    title: 'Latest Uploads',
    description: 'Fresh tracks from our community',
    imageSrc: '/placeholder.svg?height=300&width=400',
    buttonText: 'Listen Now',
  },
]

export default function Preview() {
  return (
    <section id="preview" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">What's Happening</h2>
        <div className="space-y-20">
          {previewSections.map((section, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
              <div className="w-full md:w-1/2">
                <Image
                  src={section.imageSrc || "/placeholder.svg"}
                  alt={section.title}
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-3xl font-semibold">{section.title}</h3>
                <p className="text-xl text-indigo-200">{section.description}</p>
                <Button variant="outline" className="bg-pink-500 text-white border-pink-500 hover:bg-pink-600">
                  {section.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

