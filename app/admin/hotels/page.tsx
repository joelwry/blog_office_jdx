import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const hotels = [
  { id: 1, name: 'Luxury Suites', location: 'New York', rating: 4.5 },
  { id: 2, name: 'Cozy Inn', location: 'Chicago', rating: 4.0 },
  { id: 3, name: 'City View Hotel', location: 'Los Angeles', rating: 4.2 },
]

export default function ManageHotels() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manage Hotels</h1>
        <Link href="/admin/hotels/create">
          <Button>Add New Hotel</Button>
        </Link>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {hotels.map((hotel) => (
            <TableRow key={hotel.id}>
              <TableCell>{hotel.name}</TableCell>
              <TableCell>{hotel.location}</TableCell>
              <TableCell>{hotel.rating}</TableCell>
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

