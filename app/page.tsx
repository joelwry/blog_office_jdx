import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import MusicPreview from './components/MusicPreview'
import ArtistPreview from './components/ArtistPreview'
import GigPreview from './components/GigPreview'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white">
      <main>
        <Hero />
        <Features />
        <MusicPreview />
        <ArtistPreview />
        <GigPreview />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

