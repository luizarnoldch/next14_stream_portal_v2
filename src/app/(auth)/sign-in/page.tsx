import React from 'react'
import SignInHeader from './_components/SignInHeader'
import SignInForm from './_components/SignInForm'
import SignInFooter from './_components/SignInfooter'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import Image from 'next/image'

type Props = {}

const SignIn = (props: Props) => {
    return (
        <aside className='lg:w-4/5 max-w-xl mx-auto lg:flex lg:max-w-none shadow-xl rounded-md min-w-4xl'>
            <div className='hidden lg:block lg:w-1/2 bg-primary-foreground lg:max-w-[50rem] lg:min-h-[50rem] ml-auto rounded-l-md'>
                <Image
                    src={"/new_york.webp"}
                    width={3000}
                    height={5000}
                    alt={"new_york"}
                    className='object-fill w-full h-full max-h-[50rem]'
                />
            </div>
            <Card className="lg:w-1/2 lg:max-w-[50rem] lg:min-h-[50rem] lg:flex lg:flex-col lg:justify-center lg:items-center mr-auto rounded-l-none">
                <CardHeader className='xl:w-4/5 w-full'>
                    <SignInHeader />
                </CardHeader>
                <CardContent className='xl:w-4/5 w-full'>
                    <SignInForm />
                </CardContent>
                <CardFooter className='xl:w-4/5 w-full'>
                    <SignInFooter />
                </CardFooter>
            </Card>
        </aside>
    )
}

export default SignIn