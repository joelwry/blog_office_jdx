'use client'

import { useState } from 'react'
import { useAuth } from '@/contexts/auth-context'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function WalletPage() {
  const { user, updateWalletBalance } = useAuth()
  const [amount, setAmount] = useState('')

  const handleAddFunds = async () => {
    if (!amount) return
    await updateWalletBalance(parseFloat(amount))
    setAmount('')
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Please log in to manage your wallet</h1>
          <Link href="/login">
            <Button>Log In</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <Link href="/user" className="text-white hover:text-pink-500 flex items-center mb-6">
          <ArrowLeft className="mr-2" /> Back to Dashboard
        </Link>
        <h1 className="text-4xl font-bold mb-8">Wallet Management</h1>
        
        <Card className="bg-purple-800 bg-opacity-50 mb-8">
          <CardHeader>
            <CardTitle>Current Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">${user.walletBalance.toFixed(2)}</p>
          </CardContent>
        </Card>

        <Card className="bg-purple-800 bg-opacity-50">
          <CardHeader>
            <CardTitle>Add Funds</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <Input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-white text-black"
              />
              <Button onClick={handleAddFunds}>Add Funds</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

