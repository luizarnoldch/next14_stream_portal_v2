import { cn } from '@/lib/utils'
import React from 'react'
import CompanyIcon from "@/icons/Company"
import { Button } from '@/components/ui/button'
import ThemeButton from '@/components/button/ThemeButton';
import Link from 'next/link'
import NavLink from '../../NavLink'

type LinkType = {
    href: string
    pathname: string
}

const links: LinkType[] = [
    { href: '/', pathname: 'Home' },
    { href: '/about', pathname: 'About' },
    { href: '/contact', pathname: 'Contact' },
];

type LandingNavbarProps = {
    className?: string
}

const LandingNavbar = ({ className }: LandingNavbarProps) => {
    return (
        <nav className={cn("h-16 bg-primary-foreground flex justify-center", className)}>
            <div className='container flex justify-around items-center h-full'>
                <CompanyIcon className='size-8' />
                <ul className='flex gap-4'>
                    {
                        links.map((link) => (
                            <NavLink
                                href={link.href}
                                key={link.href}
                            >
                                <li >
                                    {link.pathname}
                                </li>
                            </NavLink>

                        ))
                    }
                </ul>
                <div className='flex item-center gap-3'>
                    <ThemeButton />
                    <Link href={"/sign-in"} className='flex'>
                        <Button variant="outline" size="icon" className='w-20'>
                            Sign In
                        </Button>
                    </Link>
                </div>

            </div>
        </nav>
    )
}

export default LandingNavbar