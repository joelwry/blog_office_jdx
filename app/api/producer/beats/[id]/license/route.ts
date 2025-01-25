import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // 1. Verify producer authentication
    const user = await auth()
    if (!user || user.role !== 'producer') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // 2. Get license template
    // const license = await db.licenses.findFirst({
    //   where: { beatId: params.id }
    // })

    return NextResponse.json({ license: null })
  } catch (error) {
    console.error('Error fetching license:', error)
    return NextResponse.json(
      { error: 'Failed to fetch license' },
      { status: 500 }
    )
  }
}

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // 1. Verify producer authentication
    const user = await auth()
    if (!user || user.role !== 'producer') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // 2. Parse request body
    const { terms, restrictions, price } = await request.json()

    // 3. Create or update license
    // const license = await db.licenses.upsert({
    //   where: { beatId: params.id },
    //   update: { terms, restrictions, price },
    //   create: {
    //     beatId: params.id,
    //     terms,
    //     restrictions,
    //     price
    //   }
    // })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error updating license:', error)
    return NextResponse.json(
      { error: 'Failed to update license' },
      { status: 500 }
    )
  }
}

