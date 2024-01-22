import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'

const navbar = () => {
  return (
    <nav className=' flexBetween max-container 
    padding-container relative z-30 py-5'>
        <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo"
         width={74} height={29}/>
        </Link>
        <ul className='hidden h-full gap-12 lg:flex'>
          {NAV_LINKS.map((link) =>(
            <Link href={link.href} key={link.key} className='regular-16
           text-gray-50 flexCenter cursor-point pb-1.5 transition-all
            hover:font-bold'>
            {link.label}
            </Link>
          ))}
        </ul>
        <div className=''>
          <Button
          type="button"
          title="login"
          />
        </div>
    </nav>
  )
}

export default navbar