import React from 'react'
import { Home, User, Users, Film } from 'lucide-react';
import NavLink from '../../NavLink';

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

type SidebarBodyProps = {
  className?: string
  isOpen?: boolean
}

const SidebarBody = ({ className, isOpen }: SidebarBodyProps) => {
  return (
    <ul className='mt-4 flex flex-col gap-4 transition-all duration-700'>
      {
        links.map((link) => (
          <NavLink key={link.href} href={link.href}>
            <li className='flex gap-3 items-center'>
              {link.icon}
              {isOpen && link.pathname}
            </li>
          </NavLink>
        ))
      }
    </ul>
  )
}

export default SidebarBody