"use client"

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
    href: string
    children: React.ReactNode
    className?: string
}

const NavLink = ({ href, className, children, ...props }: Props) => {
    const pathname = usePathname()
    const isActive = (href === '/' && pathname === '/') || (href !== '/' && pathname.startsWith(href))


    return (
        <Link className={cn("text-primary", className, isActive && "underline underline-offset-4")} href={href} {...props}>
            {children}
        </Link>
    )
}

export default NavLink