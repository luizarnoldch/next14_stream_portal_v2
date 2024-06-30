import { Button } from '@/components/ui/button'
import Facebook from '@/icons/Facebook'
import WhatsApp from '@/icons/WhatsApp'
import React from 'react'

type Props = {}

const WhatsAppButton = (props: Props) => {
    return (
        <Button variant={'outline'} className=''>
            <WhatsApp className='size-5 mr-2' />
            <span>
                WhatsApp
            </span>
        </Button>
    )
}

export default WhatsAppButton