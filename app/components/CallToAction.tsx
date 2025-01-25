import { Button } from '@/components/ui/button'

export default function CallToAction() {
  return (
    <section id="signup" className="py-20 bg-yellow-500 text-purple-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Join the Music Revolution?</h2>
        <p className="text-xl mb-8">Sign up now and start exploring the world of music like never before!</p>
        <Button className="bg-purple-900 text-yellow-500 hover:bg-purple-800 text-lg py-2 px-6 rounded-full">
          Create Your Account
        </Button>
      </div>
    </section>
  )
}

