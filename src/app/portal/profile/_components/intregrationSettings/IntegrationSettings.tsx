import React from 'react'

import FacebookButton from './integrationButtons/FacebookButton';
import TelegramButton from './integrationButtons/TelegramButton';
import WhatsAppButton from './integrationButtons/WhatsAppButton';
import { cn } from '@/lib/utils';

type Props = {
    className?: string
}

const IntegrationSettings = ({ className }: Props) => {
    return (
        <div className={cn("w-full h-full", className)} >
            <div className="w-full flex flex-col gap-4">
                <FacebookButton />
                <TelegramButton />
                <WhatsAppButton />
            </div>
        </div >

    )
}

export default IntegrationSettings