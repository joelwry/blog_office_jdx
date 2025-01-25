'use client'

import { useState } from 'react'
import { useArtist } from '@/contexts/artist-context'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowLeft, DollarSign } from 'lucide-react'
import Link from 'next/link'

export default function ArtistWallet() {
  const { artist, updateWalletBalance } = useArtist()
  const [amount, setAmount] = useState('')

  const handleTopUp = async () => {
    if (!amount) return
    // Here you would typically integrate with Paystack API
    // For now, we'll just update the balance directly
    await updateWalletBalance(parseFloat(amount))
    setAmount('')
    alert('Wallet topped up successfully!')
  }

  if (!artist) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <Link href="/artist" className="text-white hover:text-pink-500 flex items-center mb-6">
          <ArrowLeft className="mr-2" /> Back to Dashboard
        </Link>
        <h1 className="text-4xl font-bold mb-8">Artist Wallet</h1>
        
        <Card className="bg-purple-800 bg-opacity-50 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <DollarSign className="mr-2" />
              Current Balance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">${artist.walletBalance.toFixed(2)}</p>
          </CardContent>
        </Card>

        <Card className="bg-purple-800 bg-opacity-50">
          <CardHeader>
            <CardTitle>Top Up Wallet</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-white text-black"
              />
              <Button onClick={handleTopUp} className="w-full">
                Top Up
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

