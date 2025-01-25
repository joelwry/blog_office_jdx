import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
          Welcome to <span className="text-pink-500">BlogOffice</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">
          Your one-stop shop for music discovery, gigs, and artist connections
        </p>
        <Button className="bg-yellow-500 text-purple-900 hover:bg-yellow-600 text-lg py-2 px-6 rounded-full animate-bounce">
          Get Started
        </Button>
      </div>
    </section>
  )
}

