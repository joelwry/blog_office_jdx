'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/contexts/auth-context'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const { user, logout } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Don't show header for authenticated routes
  if (user && (pathname?.startsWith('/user') || pathname?.startsWith('/artist') || pathname?.startsWith('/producer') || pathname?.startsWith('/admin'))) {
    return null
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-opacity-50 backdrop-blur-md fixed w-full z-10" style={{backgroundColor: "rgb(22 5 36 / 50%)"}}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href={user ? "/user" : "/"} className="text-2xl font-bold text-pink-500">BlogOffice</Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            {user ? (
              <>
                <li><Link href="/user" className="text-white hover:text-pink-500 transition-colors">Dashboard</Link></li>
                <li><Link href="/user/appointments" className="text-white hover:text-pink-500 transition-colors">Appointments</Link></li>
                <li><Link href="/user/wallet" className="text-white hover:text-pink-500 transition-colors">Wallet</Link></li>
                <li><button onClick={logout} className="text-white hover:text-pink-500 transition-colors">Logout</button></li>
              </>
            ) : (
              <>
                <li><Link href="/" className="text-white hover:text-pink-500 transition-colors">Home</Link></li>
                <li><Link href="/artists" className="text-white hover:text-pink-500 transition-colors">Artists</Link></li>
                <li><Link href="/gigs" className="text-white hover:text-pink-500 transition-colors">Gigs</Link></li>
                <li><Link href="/hotels" className="text-white hover:text-pink-500 transition-colors">Hotels</Link></li>
                <li><Link href="/blog" className="text-white hover:text-pink-500 transition-colors">Blog</Link></li>
              </>
            )}
          </ul>
        </nav>
        {!user && (
          <Link href="/login" className="hidden md:block">
            <Button variant="outline" className="bg-pink-500 text-white border-pink-500 hover:bg-pink-600">
              Log In
            </Button>
          </Link>
        )}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-purple-900 bg-opacity-95">
          <ul className="flex flex-col space-y-2 p-4">
            {user ? (
              <>
                <li><Link href="/user" className="text-white hover:text-pink-500 transition-colors">Dashboard</Link></li>
                <li><Link href="/user/appointments" className="text-white hover:text-pink-500 transition-colors">Appointments</Link></li>
                <li><Link href="/user/wallet" className="text-white hover:text-pink-500 transition-colors">Wallet</Link></li>
                <li><button onClick={logout} className="text-white hover:text-pink-500 transition-colors">Logout</button></li>
              </>
            ) : (
              <>
                <li><Link href="/" className="text-white hover:text-pink-500 transition-colors">Home</Link></li>
                <li><Link href="/artists" className="text-white hover:text-pink-500 transition-colors">Artists</Link></li>
                <li><Link href="/gigs" className="text-white hover:text-pink-500 transition-colors">Gigs</Link></li>
                <li><Link href="/hotels" className="text-white hover:text-pink-500 transition-colors">Hotels</Link></li>
                <li><Link href="/blog" className="text-white hover:text-pink-500 transition-colors">Blog</Link></li>
                <li>
                  <Link href="/login">
                    <Button variant="outline" className="bg-pink-500 text-white border-pink-500 hover:bg-pink-600 w-full">
                      Log In
                    </Button>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </header>
  )
}

