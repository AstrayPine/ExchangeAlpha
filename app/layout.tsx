import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ethers } from "ethers";
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Js Exhchange',
  description: 'Example Exhchange',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
