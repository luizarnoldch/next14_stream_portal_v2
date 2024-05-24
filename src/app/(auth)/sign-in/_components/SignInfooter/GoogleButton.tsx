import { Button } from '@/components/ui/button'
import Google from '@/icons/Google'
import React from 'react'

type Props = {}

const GoogleButtotn = (props: Props) => {
  return (
    <Button className='flex gap-4 items-center bg-primary-foreground hover:text-secondary text-secondary-foreground border border-primary dark:bg-zinc-950 dark:text-primary hover:dark:text-primary-foreground'>
      <Google className='size-6' />
      <span className='font-semibold'>Google</span>
    </Button>
  )
}

export default GoogleButtotn