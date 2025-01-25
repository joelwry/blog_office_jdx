import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const blogPosts = [
  { id: 1, title: 'New Release: "Neon Dreams" by Neon Lights', category: 'Artist', date: '2023-07-01', excerpt: 'Neon Lights drops a new single that\'s sure to light up the dance floor...' },
  { id: 2, title: 'Top 10 Summer Music Festivals', category: 'Entertainment', date: '2023-06-28', excerpt: 'Get ready for an unforgettable summer with these must-attend music festivals...' },
  { id: 3, title: 'Upcoming Gig: Rock the Stadium', category: 'Gigs', date: '2023-06-25', excerpt: 'Prepare for the biggest rock concert of the year as Thunder Struck takes the stage...' },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id}>
              <Card className="bg-purple-800 bg-opacity-50 hover:bg-opacity-75 transition-all duration-300">
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-pink-400 mb-2">{post.category} | {post.date}</p>
                  <p>{post.excerpt}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

