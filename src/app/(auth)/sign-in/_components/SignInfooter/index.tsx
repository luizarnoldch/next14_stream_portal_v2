import { CardDescription, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import CompanyIcon from "@/icons/Company"
import Link from "next/link"
import GoogleButton from "./GoogleButton"
import NavLink from "@/components/navbar/NavLink"

type Props = {}

const SignInFooter = (props: Props) => {
    return (
        <div className="w-full flex flex-col">
            <Separator className="mb-6 dark:bg-primary  "/>
            <GoogleButton />
            <div className="flex gap-2 justify-center items-center mt-6 text-sm">
                <span>Don&lsquo;t have an account?</span>
                <Link href={"/sign-up"} className="font-bold">
                    Sing up
                </Link>
            </div>
        </div>
    )
}

export default SignInFooter