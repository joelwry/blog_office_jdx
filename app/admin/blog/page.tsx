import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const blogPosts = [
  { id: 1, title: 'New Release: "Neon Dreams" by Neon Lights', category: 'Artist', date: '2023-07-01' },
  { id: 2, title: 'Top 10 Summer Music Festivals', category: 'Entertainment', date: '2023-06-28' },
  { id: 3, title: 'Upcoming Gig: Rock the Stadium', category: 'Gigs', date: '2023-06-25' },
]

export default function ManageBlog() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manage Blog Posts</h1>
        <Link href="/admin/blog/create">
          <Button>Create New Blog Post</Button>
        </Link>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {blogPosts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>{post.title}</TableCell>
              <TableCell>{post.category}</TableCell>
              <TableCell>{post.date}</TableCell>
              <TableCell>
                <Button variant="outline" className="mr-2">Edit</Button>
                <Button variant="destructive">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

