import React from 'react'
import NavLink from '../../NavLink';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import CompanyIcon from "@/icons/Company"
import ThemeButton from '@/components/button/ThemeButton';
import { cn } from '@/lib/utils';
import Burger from '@/icons/Burger';

type LinkType = {
  href: string
  pathname: string
}

const links: LinkType[] = [
  { href: '/', pathname: 'Home' },
  { href: '/about', pathname: 'About' },
  { href: '/contact', pathname: 'Contact' },
  { href: '/sign-in', pathname: 'Sign In' },
];

type MobileLandingNavbarProps = {
  className?: string
}

const MobileLandingNavbar = ({ className }: MobileLandingNavbarProps) => {
  return (
    <nav className={cn("h-16 flex justify-center items-center bg-primary-foreground", className)}>
      <div className='max-w-3xl w-full flex justify-between items-center px-6'>
        <Sheet>
          <CompanyIcon className='size-8' />
          <div className='flex gap-2'>
            <ThemeButton />
            <SheetTrigger asChild>
              <Button variant="outline" className='px-2'>
                <Burger />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className='text-center'>Menu</SheetTitle>
                <SheetDescription className='text-center'>
                  Go to your favorite Side
                </SheetDescription>
              </SheetHeader>
              <ul className='mt-4 flex flex-col gap-4'>
                {
                  links.map((link) => (
                    <NavLink
                      key={link.href}
                      href={link.href}
                    >
                      <li>
                        {link.pathname}

                      </li>
                    </NavLink>

                  ))
                }
              </ul>
            </SheetContent>
          </div>
        </Sheet>
      </div >
    </nav >
  )
}

export default MobileLandingNavbar