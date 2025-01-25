'use client'

import { useState } from 'react'
import { useArtist } from '@/contexts/artist-context'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ArrowLeft, FileText } from 'lucide-react'
import Link from 'next/link'

export default function BlogManagement() {
  const { artist, addBlogPost } = useArtist()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleAddBlogPost = () => {
    if (title && content) {
      addBlogPost({
        id: Date.now().toString(),
        title,
        content,
        publishDate: new Date(),
      })
      setTitle('')
      setContent('')
    }
  }

  if (!artist) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <Link href="/artist" className="text-white hover:text-pink-500 flex items-center mb-6">
          <ArrowLeft className="mr-2" /> Back to Dashboard
        </Link>
        <h1 className="text-4xl font-bold mb-8">Blog Management</h1>
        
        <Card className="bg-purple-800 bg-opacity-50 mb-8">
          <CardHeader>
            <CardTitle>Create New Blog Post</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Input
                placeholder="Blog Post Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-white text-black"
              />
              <Textarea
                placeholder="Blog Post Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="bg-white text-black"
                rows={10}
              />
              <Button onClick={handleAddBlogPost} className="w-full">
                <FileText className="mr-2" /> Publish Blog Post
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-purple-800 bg-opacity-50">
          <CardHeader>
            <CardTitle>Your Blog Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {artist.blogPosts.map((post) => (
                <li key={post.id} className="border-b border-purple-700 pb-4">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-sm text-gray-300 mb-2">Published on: {post.publishDate.toLocaleDateString()}</p>
                  <p className="text-gray-100">{post.content.substring(0, 100)}...</p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Edit
                  </Button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

