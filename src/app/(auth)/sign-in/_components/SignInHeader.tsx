import { CardDescription, CardTitle } from "@/components/ui/card"
import CompanyIcon from "@/icons/Company"
import Link from "next/link"

type Props = {}

const SignUpHeader = (props: Props) => {
    return (
        <div className="w-full flex flex-col">
            <div className="flex gap-4 items-center">
                <Link href={"/"}>
                    <CompanyIcon className="size-12" />
                </Link>
                <CardTitle>Company Name</CardTitle>
            </div>
            <CardTitle className="mt-2 mb-1">Sign Up to our application</CardTitle>
            <CardDescription>Keep enjoying our app...</CardDescription>
        </div>
    )
}

export default SignUpHeader