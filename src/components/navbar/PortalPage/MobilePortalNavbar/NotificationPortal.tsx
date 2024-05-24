import { Button } from '@/components/ui/button'
import Bell from '@/icons/Bell'
import React from 'react'

type Props = {}

const NotificationPortal = (props: Props) => {
    return (
        <Button variant="outline" size="icon">
            <Bell />
        </Button>
    )
}

export default NotificationPortal