import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { User } from '@clerk/nextjs/server'
import { UserButton } from '@clerk/nextjs'
import { ModeToggle } from '../providers/Theme'


type Props = {
  user?: null | User
}


const Navigation = ({user}: Props) => {
  return (
    <div className="p-4 flex items-center justify-between relative">
        <aside className='flex items-center'>
          <Image 
          src={'/assets/vvicon.png'}
          alt="logo vv"
          height={40}
          width={40}
          />
          <span className="text-xl font-bold">-Vision</span>
        </aside>
        <nav className="hidden md:block absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] ">
          <ul className="flex items-center justify-center gap-8">
            <Link href={'#'}>Prix</Link>
            <Link href={'#'}>A propos</Link>
            <Link href={'#'}>Docs</Link>
            <Link href={'#'}>Features</Link>
          </ul>
        </nav>
        <aside className="flex gap-2 items-center">
          <Link href={'/agency/sign-in'} className="bg-primary text-whitep-2 px-4 rounded md hover: bg-primary/80">
           Se connecter
          </Link>
          <UserButton />
          <ModeToggle />
          
        </aside>
    </div>
  )
}

export default Navigation