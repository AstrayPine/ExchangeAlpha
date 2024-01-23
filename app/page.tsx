import Features from '@/components/Features'
import GetApp from '@/components/GetApp'
import Camp from '@/components/Camp'
import Hero from '@/components/Hero'
import Guide from '@/components/Guide'
import { Cambay } from 'next/font/google'
import Image from 'next/image'

export default function Home() {
  return (
    // React Fragment used to group elements when you dont need additional classes
    // Saves Code
    <>
      <Hero/>
      <Camp/>
      <Guide/>
      <Features/>
      <GetApp/>
    </>
  )
}
