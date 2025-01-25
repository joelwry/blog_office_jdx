'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Home, Briefcase, Building, Music, Users, LogOut } from 'lucide-react';

export function AdminSidebar({ isOpen, toggleSidebar }: { isOpen: boolean; toggleSidebar: () => void }) {
  const pathname = usePathname();

  const menuItems = [
    { href: '/admin', label: 'Dashboard', icon: Home },
    { href: '/admin/gigs', label: 'Manage Gigs', icon: Briefcase },
    { href: '/admin/hotels', label: 'Manage Hotels', icon: Building },
    { href: '/admin/artists', label: 'Manage Artists', icon: Music },
    { href: '/admin/users', label: 'Manage Users', icon: Users },
  ];

  return (
    <div
      className={`fixed top-0 left-0 z-50 h-full w-64 bg-purple-700 text-white transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 md:relative md:translate-x-0`}
    >
      {/* Close button for mobile */}
      <button
        className="absolute top-4 right-4 text-white md:hidden"
        onClick={toggleSidebar}
      >
        <X className="h-6 w-6" />
      </button>

      <div className="p-4">
        <h2 className="text-xl font-bold">AdminPanel</h2>
      </div>

      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block py-2 px-4 rounded ${
                  pathname === item.href ? 'bg-purple-800' : 'hover:bg-purple-800'
                } flex items-center`}
              >
                <item.icon className="mr-4 h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4">
        <button
          className="flex items-center py-2 px-4 w-full text-left rounded hover:bg-purple-800"
          onClick={() => console.log('Logging out')}
        >
          <LogOut className="mr-4 h-4 w-4" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}
