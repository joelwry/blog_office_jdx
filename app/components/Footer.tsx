import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-purple-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold text-pink-500 mb-4">BlogOffice</h3>
            <p className="text-indigo-200">Your ultimate music companion for discovery, gigs, and connections.</p>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-indigo-200 hover:text-pink-500 transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-indigo-200 hover:text-pink-500 transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-indigo-200 hover:text-pink-500 transition-colors">Contact</Link></li>
              <li><Link href="#" className="text-indigo-200 hover:text-pink-500 transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-indigo-200 hover:text-pink-500 transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-indigo-200 hover:text-pink-500 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-indigo-200 hover:text-pink-500 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-indigo-200 hover:text-pink-500 transition-colors"><Facebook /></a>
              <a href="#" className="text-indigo-200 hover:text-pink-500 transition-colors"><Twitter /></a>
              <a href="#" className="text-indigo-200 hover:text-pink-500 transition-colors"><Instagram /></a>
              <a href="#" className="text-indigo-200 hover:text-pink-500 transition-colors"><Youtube /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center text-indigo-200">
          <p>&copy; 2023 BlogOffice. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

