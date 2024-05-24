import { cn } from '@/lib/utils'
import React from 'react'

type Props = {}

type PortalSidebarNavbarProps = {
    className?: string
}

const PortalSidebarNavbar = ({ className }: PortalSidebarNavbarProps) => {
    return (
        <nav className={cn('', className)}>

        </nav>
    )
}

export default PortalSidebarNavbar