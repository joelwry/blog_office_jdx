'use client'
import { ReactNode, useState } from 'react';
import { AdminSidebar } from '@/components/AdminSidebar';
import { Menu } from 'lucide-react';

export default function AdminLayout({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 h-screen">
      {/* Menu button for mobile */}
      <button
        className="fixed top-4 left-4 z-50 text-purple-900 md:hidden"
        onClick={toggleSidebar}
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Sidebar */}
      <AdminSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main content */}
      <main className="flex-1 p-10 ml-0 transition-all duration-300">
        {children}
      </main>
    </div>
  );
}
