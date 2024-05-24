"use client"

import FormInput from "@/components/form/FormInput"
import { FormSubmit } from "@/components/form/FormSubmitButton"

type Props = {}

interface FormInputProps {
    id: string
    label?: string
    type?: string
    placeholder?: string
    required?: boolean
    disabled?: boolean
    errors?: Record<string, string[] | undefined>
    className?: string
    defaultValue?: string
    onBlur?: () => void
}

const formInputFields: FormInputProps[] = [
    {
        label: "Name",
        id: "name",
        className: "rounded-xl",
        required: true,
    },
    {
        label: "Email",
        id: "email",
        type: "email",
        className: "rounded-xl",
        required: true,
    },
    {
        label: "Password",
        id: "password",
        type: "password",
        className: "rounded-xl",
        required: true,
    }
]

const SignUpForm = (props: Props) => {
    return (
        <form action="" className="flex flex-col gap-4">
            {formInputFields.map((field) => (
                <FormInput
                    key={field.id}
                    {...field}
                />
            ))}
            <FormSubmit className="mt-4 font-semibold">
                Sign Up
            </FormSubmit>
        </form>
    )
}

export default SignUpForm
