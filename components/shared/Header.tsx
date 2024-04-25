import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { SignedOut, UserButton } from '@clerk/nextjs'
import { SignedIn } from '@clerk/nextjs'
import Navitems from './Navitems'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className='w-full border-b'>
        <div className="wrapper flex items-center justify-between">
         <Link href="/" className='w-36'>
            <Image src="/assets/images/logo.svg" alt="logo" height={38} width={128}/>
        </Link>    

        <SignedIn>
            <nav className="md:flex-between hidden w-full max-w-xs">
                <Navitems/>
            </nav>
        </SignedIn>
        <div className="flex w-32 justify-end gap-3">
            <SignedIn>
                <UserButton  afterSignOutUrl='/'/>
                <MobileNav/>
            </SignedIn>
            <SignedOut>
                <Link href="/sign-in">
                    <Button>Sign In</Button>
                </Link>
            </SignedOut>
        </div>
        </div>

    </header>
  )
}

export default Header
