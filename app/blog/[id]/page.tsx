import Link from 'next/link'
import { Button } from '@/components/ui/button'

// This would typically come from an API or database
const blogPost = {
  id: 1,
  title: 'New Release: "Neon Dreams" by Neon Lights',
  category: 'Artist',
  date: '2023-07-01',
  content: `
    Neon Lights, the electronic music sensation, has just dropped their latest single "Neon Dreams" and it's already taking the music world by storm.

    The track, a pulsating blend of synth-wave and future bass, showcases Neon Lights' signature sound while pushing the boundaries of electronic music. With its infectious melody and driving beat, "Neon Dreams" is set to become the anthem of the summer.

    Inspiration for the Track:
    According to Neon Lights, "Neon Dreams" was inspired by the vibrant nightlife of Tokyo. "I wanted to capture the energy and excitement of the city after dark," the artist explains. "The neon lights, the bustling streets, the feeling of endless possibilities - that's what I tried to convey in this track."

    The single is the first release from Neon Lights' upcoming album, scheduled to drop later this year. If "Neon Dreams" is any indication, fans are in for a treat when the full album arrives.

    You can listen to "Neon Dreams" now on all major streaming platforms. Don't forget to check out Neon Lights' other tracks and stay tuned for more updates on the upcoming album release!
  `,
  artistName: 'Neon Lights',
  trackName: 'Neon Dreams',
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">{blogPost.title}</h1>
        <p className="text-xl text-pink-400 mb-8">{blogPost.category} | {blogPost.date}</p>
        <div className="prose prose-invert max-w-none">
          {blogPost.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
          ))}
        </div>
        {blogPost.category === 'Artist' && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">About the Artist</h2>
            <Link href={`/artists/${blogPost.artistName.toLowerCase().replace(' ', '-')}`}>
              <Button variant="outline" className="mr-4">View {blogPost.artistName}'s Biography</Button>
            </Link>
            <Link href={`/artists/${blogPost.artistName.toLowerCase().replace(' ', '-')}/music`}>
              <Button variant="outline">View All Music by {blogPost.artistName}</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

