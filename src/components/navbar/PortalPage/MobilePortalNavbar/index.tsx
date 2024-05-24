import React from 'react'
import NavLink from '../../NavLink';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import CompanyIcon from "@/icons/Company"
import ThemeButton from '@/components/button/ThemeButton';
import { cn } from '@/lib/utils';
import Burger from '@/icons/Burger';
import Logout from '@/icons/Logout';
import AvatarPortal from './AvatarPortal';
import NotificationPortal from './NotificationPortal';
import Link from 'next/link';

import { Home, User, Users, Film } from 'lucide-react';

type LinkType = {
  href: string
  pathname: string
  icon?: React.ReactNode
}

const links: LinkType[] = [
  { href: '/portal', pathname: 'Home', icon: <Home /> },
  { href: '/portal/profile', pathname: 'Profile', icon: <User /> },
  { href: '/portal/workers', pathname: 'Workers', icon: <Users /> },
  { href: '/portal/accounts', pathname: 'Accounts', icon: <Film /> },
];

type MobileLandingNavbarProps = {
  className?: string
}

const MobilePortalNavbar = ({ className }: MobileLandingNavbarProps) => {
  return (
    <nav className={cn("h-16 flex justify-center items-center bg-primary-foreground", className)}>
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
              <Link href={"/"} className='absolute left-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-zinc-100 dark:ring-offset-zinc-950 dark:focus:ring-zinc-300 dark:data-[state=open]:bg-zinc-800 flex gap-2 hover:cursor-pointer p-1'>
                <Logout />
                <span>Log out</span>
              </Link>
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
                  <NavLink key={link.href} href={link.href}>
                    <li className='flex gap-3 items-center'>
                      {link.icon}
                      {link.pathname}
                    </li>
                  </NavLink>
                ))
              }
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </nav >
  )
}

export default MobilePortalNavbar