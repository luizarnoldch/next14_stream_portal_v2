import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type SidebarFooterProps = {
  className?: string
  isOpen?: boolean
}

const SidebarFooter = ({className, isOpen}: SidebarFooterProps) => {
  return (
    <div className='h-24 flex justify-center items-center'>
      <Link href={"/"} className='rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-zinc-100 dark:ring-offset-zinc-950 dark:focus:ring-zinc-300 dark:data-[state=open]:bg-zinc-800 flex gap-2 hover:cursor-pointer p-1'>
        <Button variant={'outline'} size={'lg'} className='flex gap-2 items-center transition-all duration-700'>
          <LogOut />
          {isOpen && <span>Log out</span>}
        </Button>
      </Link>
    </div>
  )
}

export default SidebarFooter