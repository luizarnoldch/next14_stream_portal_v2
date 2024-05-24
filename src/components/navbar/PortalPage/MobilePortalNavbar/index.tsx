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
import Logout from '@/icons/Logout';
import AvatarPortal from './AvatarPortal';
import NotificationPortal from './NotificationPortal';

type LinkType = {
  href: string
  pathname: string
}

const links: LinkType[] = [
  { href: '/portal', pathname: 'Home' },
  { href: '/portal/profile', pathname: 'Profile' },
  { href: '/portal/workers', pathname: 'Workers' },
  { href: '/portal/accounts', pathname: 'Accounts' },
];

type MobileLandingNavbarProps = {
  className?: string
}

const MobileLandingNavbar = ({ className }: MobileLandingNavbarProps) => {
  return (
    <nav className={cn("h-12 flex justify-center items-center bg-primary-foreground", className)}>
      <div className='max-w-3xl w-full flex justify-between items-center px-6'>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className='px-2'>
              <Burger />
            </Button>
          </SheetTrigger>

          <div className='flex gap-3'>
            <ThemeButton />
            <NotificationPortal />
            <AvatarPortal />
          </div>

          <SheetContent side={"left"}>
            <SheetHeader className='mt-10'>
              <div className='absolute left-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-zinc-100 dark:ring-offset-zinc-950 dark:focus:ring-zinc-300 dark:data-[state=open]:bg-zinc-800 flex gap-2 hover:cursor-pointer p-1'>
                <Logout />
                <span>Log out</span>
              </div>
              <SheetTitle className='justify-center flex items-center gap-2'>
                <CompanyIcon className='size-8' />
                <span>Menu</span>
              </SheetTitle>
              <SheetDescription className='text-center'>
                Select your workspace
              </SheetDescription>
            </SheetHeader>
            <ul className='mt-4 flex flex-col gap-4'>
              {
                links.map((link) => (
                  <NavLink
                    key={link.href}
                    href={link.href}
                    className='w-full'
                  >
                    <Button className='
                    w-full
                    
                    text-primary
                    bg-primary-foreground
                    hover:bg-primary
                    hover:text-primary-foreground

                    dark:text-primary
                    dark:bg-primary-foreground
                    dark:hover:bg-primary
                    dark:hover:text-primary-foreground

                    border
                    border-primary
                    '>
                      <li >
                        {link.pathname}
                      </li>
                    </Button>
                  </NavLink>

                ))
              }
            </ul>
            {/* <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
                </SheetClose>
              </SheetFooter> */}
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}

export default MobileLandingNavbar