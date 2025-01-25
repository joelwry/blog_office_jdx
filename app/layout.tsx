import { AppSidebar } from '@/components/Sidebar'
import Header from './components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'
import { AuthProvider } from '@/contexts/auth-context'
import { ArtistProvider } from '@/contexts/artist-context'
import { ProducerProvider } from '@/contexts/producer-context'

const MusicPlayer = dynamic(() => import('./components/MusicPlayer'), { ssr: false })

const inter = Inter({ subsets: ['latin'] })

const playlist = [
  {
    id: 1,
    title: 'Sample Track 1',
    artist: 'Demo Artist',
    url: 'https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav'
  },
  {
    id: 2,
    title: 'Sample Track 2',
    artist: 'Demo Artist',
    url: 'https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand60.wav'
  },
  {
    id: 3,
    title: 'Sample Track 3',
    artist: 'Demo Artist',
    url: 'https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav'
  }
]

export const metadata = {
  title: 'BlogOffice',
  description: 'Your ultimate music companion for discovery, gigs, and connections.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} pb-20`}>
        <AuthProvider>
          <ArtistProvider>
            <ProducerProvider>
              <AuthenticatedLayout>
                {children}
              </AuthenticatedLayout>
              <MusicPlayer playlist={playlist} />
            </ProducerProvider>
          </ArtistProvider>
        </AuthProvider>
      </body>
    </html>
  )
}

function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Header />
      {children}
    </div>
  )
}

