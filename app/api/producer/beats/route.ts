import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'

export async function POST(request: Request) {
  try {
    // 1. Verify producer authentication
    const user = await auth()
    if (!user || user.role !== 'producer') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // 2. Parse the multipart form data
    const formData = await request.formData()
    const audioFile = formData.get('audio') as File
    const metadata = JSON.parse(formData.get('metadata') as string)

    // 3. Upload beat to storage
    // const audioUrl = await uploadToStorage(audioFile)

    // 4. Create beat record in database
    // const beat = await db.beats.create({
    //   data: {
    //     title: metadata.title,
    //     producerId: user.id,
    //     audioUrl,
    //     price: metadata.price,
    //     isFree: metadata.isFree,
    //     license: metadata.license,
    //     ...metadata
    //   }
    // })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error uploading beat:', error)
    return NextResponse.json(
      { error: 'Failed to upload beat' },
      { status: 500 }
    )
  }
}

export async function GET(request: Request) {
  try {
    // 1. Get query parameters
    const { searchParams } = new URL(request.url)
    const producerId = searchParams.get('producerId')
    const genre = searchParams.get('genre')
    const isFree = searchParams.get('isFree')

    // 2. Build query
    // const where = {
    //   ...(producerId && { producerId }),
    //   ...(genre && { genre }),
    //   ...(isFree && { isFree: isFree === 'true' })
    // }

    // 3. Get beats from database
    // const beats = await db.beats.findMany({ where })

    return NextResponse.json({ beats: [] })
  } catch (error) {
    console.error('Error fetching beats:', error)
    return NextResponse.json(
      { error: 'Failed to fetch beats' },
      { status: 500 }
    )
  }
}

