import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const artists = [
  { id: 1, name: 'Neon Lights', genre: 'Electronic', followers: 50000 },
  { id: 2, name: 'Acoustic Soul', genre: 'Folk', followers: 30000 },
  { id: 3, name: 'Rhythm Rebels', genre: 'Rock', followers: 75000 },
]

export default function ManageArtists() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manage Artists</h1>
        <Link href="/admin/artists/create">
          <Button>Create Artist Account</Button>
        </Link>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Genre</TableHead>
            <TableHead>Followers</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {artists.map((artist) => (
            <TableRow key={artist.id}>
              <TableCell>{artist.name}</TableCell>
              <TableCell>{artist.genre}</TableCell>
              <TableCell>{artist.followers.toLocaleString()}</TableCell>
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

