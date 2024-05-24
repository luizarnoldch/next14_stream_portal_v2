'use client'

import { Button } from '@/components/ui/button'
import Google from '@/icons/Google'
import React from 'react'

type Props = {}

import { useRouter } from 'next/navigation'

const GoogleButtotn = (props: Props) => {
  const router = useRouter()
  const SignInAction = async () => {
    router.push('/portal')
  }

  return (
    <Button onClick={SignInAction} className='flex gap-4 items-center bg-primary-foreground hover:text-secondary text-secondary-foreground border border-primary dark:bg-zinc-950 dark:text-primary hover:dark:text-primary-foreground'>
      <Google className='size-6' />
      <span className='font-semibold'>Google</span>
    </Button>
  )
}

export default GoogleButtotn