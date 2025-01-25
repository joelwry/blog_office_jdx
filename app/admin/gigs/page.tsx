import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const gigs = [
  { id: 1, title: 'Summer Music Festival', date: '2023-07-15', location: 'Central Park, New York' },
  { id: 2, title: 'Jazz Night', date: '2023-07-22', location: 'Blue Note, Chicago' },
  { id: 3, title: 'Rock the Stadium', date: '2023-08-05', location: 'Wembley Stadium, London' },
]

export default function ManageGigs() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manage Gigs</h1>
        <Link href="/admin/gigs/create">
          <Button>Create New Gig</Button>
        </Link>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {gigs.map((gig) => (
            <TableRow key={gig.id}>
              <TableCell>{gig.title}</TableCell>
              <TableCell>{gig.date}</TableCell>
              <TableCell>{gig.location}</TableCell>
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

