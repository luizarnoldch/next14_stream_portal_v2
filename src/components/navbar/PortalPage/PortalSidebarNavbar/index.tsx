'use client'

import React, { useState } from 'react'
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import SidebarHeader from './SidebarHeader';
import SidebarBody from './SidebarBody';
import SidebarFooter from './SidebarFooter';

type SidebarToggleProps = {
    className?: string
}

const SidebarToggle = ({ className }: SidebarToggleProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={cn("sticky top-0 left-0 min-h-screen h-full transition-all duration-700 border-r-2 border-secondary", className, isOpen ? 'w-80' : 'w-40')}>
            <Button
                variant={'outline'}
                size={'icon'}
                className={cn('rounded-full absolute top-5 -right-5 transition-transform duration-700 rotate-180', isOpen && 'rotate-0')}
                onClick={toggleSidebar}
            >
                <ChevronLeft />
            </Button>
            <div className='flex justify-between flex-col gap-4 min-h-screen py-6 px-4'>
                <SidebarHeader isOpen={isOpen} />
                <SidebarBody isOpen={isOpen} />
                <SidebarFooter isOpen={isOpen} />
            </div>
        </nav>
    );
}

export default SidebarToggle