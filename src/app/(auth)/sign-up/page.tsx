import React from 'react'
import SignUpHeader from './_components/SignUpHeader'
import SignUpForm from './_components/SignUpForm'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

type Props = {}

const SignUp = (props: Props) => {
  return (
    <Card className="max-w-4xl w-full">
      <CardHeader>
        <SignUpHeader />
      </CardHeader>
      <CardContent>
        <SignUpForm />
      </CardContent>
    </Card>
  )
}

export default SignUp