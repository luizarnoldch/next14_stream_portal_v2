import { cn } from '@/lib/utils'
import React from 'react'

type LandingNavbarProps = {
    className?: string
}

const LandingNavbar = ({ className }: LandingNavbarProps) => {
    return (
        <div className={cn("", className)}>
            LandingNavbar
        </div>
    )
}

export default LandingNavbar