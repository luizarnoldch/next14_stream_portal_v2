import { Button } from '@/components/ui/button'
import Facebook from '@/icons/Facebook'
import Telegram from '@/icons/Telegram'
import React from 'react'
type Props = {}

const TelegramButton = (props: Props) => {
    return (
        <Button variant={'outline'} className=''>
            <Telegram className='size-5 mr-2' />
            <span>
                Telegram
            </span>
        </Button>
    )
}

export default TelegramButton