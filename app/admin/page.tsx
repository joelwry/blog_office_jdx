import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Music, Hotel, Users, Calendar } from 'lucide-react'

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 mt-12">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Gigs</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">25</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Hotels</CardTitle>
            <Hotel className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Artists</CardTitle>
            <Music className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">50</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/admin/gigs/create" className="bg-purple-600 text-white p-4 rounded-lg text-center hover:bg-purple-700 transition-colors">
            Create New Gig
          </Link>
          <Link href="/admin/hotels/create" className="bg-purple-600 text-white p-4 rounded-lg text-center hover:bg-purple-700 transition-colors">
            Add New Hotel
          </Link>
          <Link href="/admin/artists/create" className="bg-purple-600 text-white p-4 rounded-lg text-center hover:bg-purple-700 transition-colors">
            Create Artist Account
          </Link>
          <Link href="/admin/users/create" className="bg-purple-600 text-white p-4 rounded-lg text-center hover:bg-purple-700 transition-colors">
            Create User Account
          </Link>
        </div>
      </div>
    </div>
  )
}

