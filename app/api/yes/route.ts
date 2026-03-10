import { NextResponse } from 'next/server'

export async function POST() {
  const time = new Date().toLocaleTimeString()
  console.log('\n💖 ================================= 💖')
  console.log(`   SHE SAID YES!! 🎉🎉🎉`)
  console.log(`   Time: ${time}`)
  console.log('💖 ================================= 💖\n')

  return NextResponse.json({ ok: true })
}
