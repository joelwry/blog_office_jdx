'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/contexts/auth-context'
import { Button } from '@/components/ui/button'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { Home, Music, Calendar, Heart, Wallet, Settings, LogOut } from 'lucide-react'

export function AppSidebar() {
  const { user, logout } = useAuth()
  const pathname = usePathname()

  if (!user) return null

  const menuItems = [
    { href: '/user', icon: Home, label: 'Dashboard' },
    { href: '/user/playlists', icon: Music, label: 'Playlists' },
    { href: '/user/appointments', icon: Calendar, label: 'Appointments' },
    { href: '/user/liked-songs', icon: Heart, label: 'Liked Songs' },
    { href: '/user/wallet', icon: Wallet, label: 'Wallet' },
  ]

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <h2 className="text-2xl font-bold">BlogOffice</h2>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton asChild isActive={pathname === item.href}>
                  <Link href={item.href}>
                    <item.icon className="mr-2 h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/settings">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={logout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  )
}

