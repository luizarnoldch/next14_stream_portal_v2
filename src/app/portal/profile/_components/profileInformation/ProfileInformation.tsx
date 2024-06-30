import React from 'react'

import AvatarProfile from './AvatarProfile';
import AvatarInformation from './AvatarInformation';
import { cn } from '@/lib/utils';

type Props = {
    className?: string
}

const user = {
    name: "James",
    phone: "1234567891",
    email: "james012@gmail.com",
    status: "Active",
    integration_whatsapp: true,
    integration_facebook: true,
    integration_telegram: true,
    created_at: "2023-01-01",
    last_edit: "2023-06-01",
    last_activity: "2023-06-02",
    is_admin: true
};


const ProfileInformation = ({ className }: Props) => {
    return (
        <section className={cn("lg:flex w-full lg:justify-center lg:items-center", className)}>
            <div className='lg:w-3/5'>
                <div className='size-48 mx-auto rounded-full'>
                    <AvatarProfile />
                </div>
            </div>
            <AvatarInformation user={user} />
        </section>
    )
}

export default ProfileInformation