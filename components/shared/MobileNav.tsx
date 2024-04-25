import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'
import { Separator } from "@/components/ui/separator"
import Navitems from './Navitems'


const MobileNav = () => {
  return (
    <div>
      <nav>
      <Sheet>
  <SheetTrigger className="align-middle md:hidden">
    <Image src="/assets/icons/menu.svg" height={24} width={24} alt='logo'/>
  </SheetTrigger>
  <SheetContent className='flex flex-col gap-6 bg-white '>
    <Image  src = "assets/images/logo.svg" alt="logo" height={38} width={128}/>
    <Separator />
    <Navitems/>
  </SheetContent>
</Sheet>

      </nav>
    </div>
  )
}

export default MobileNav
