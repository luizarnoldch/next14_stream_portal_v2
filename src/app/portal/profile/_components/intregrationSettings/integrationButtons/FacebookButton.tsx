import { Button } from '@/components/ui/button'
import Facebook from '@/icons/Facebook'
import React from 'react'

type Props = {}

const FacebookButton = (props: Props) => {
    return (
        <Button variant={'outline'} className=''>
            <Facebook className='size-5 mr-2' />
            <span>
                Facebook
            </span>
        </Button>
    )
}

export default FacebookButton