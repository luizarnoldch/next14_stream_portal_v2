import React from 'react'
import SignInHeader from './_components/SignInHeader'
import SignInForm from './_components/SignInForm'
import SignInFooter from './_components/SignInfooter'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

type Props = {}

const SignIn = (props: Props) => {
    return (
        <Card className="max-w-4xl w-full">
            <CardHeader>
                <SignInHeader />
            </CardHeader>
            <CardContent>
                <SignInForm />
            </CardContent>
            
            <CardFooter>
                <SignInFooter />
            </CardFooter>
        </Card>
    )
}

export default SignIn