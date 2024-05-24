"use client"

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button';

type Props = {
    href: string
    children: React.ReactNode
    className?: string
}

const NavLink = ({ href, className, children, ...props }: Props) => {
    const pathname = usePathname()
    const isActive = (href === '/' && pathname === '/') || (href !== '/' && pathname.startsWith(href))


    return (
        <Link className={cn("text-primary", className)} href={href} {...props}>
            <Button className={cn("w-full text-primary bg-primary-foreground hover:bg-primary hover:text-primary-foreground dark:text-primary dark:bg-primary-foreground dark:hover:bg-primary dark:hover:text-primary-foreground", isActive && "underline underline-offset-4")}>
                {children}
            </Button>


        </Link>
    )
}

export default NavLink