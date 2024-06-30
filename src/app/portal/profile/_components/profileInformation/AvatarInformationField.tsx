"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Pencil, Save, XIcon } from "lucide-react"

import { useState } from "react"

type Props = {
    field: string
    icon: React.ReactNode
}

const AvatarInformationField = ({ field, icon }: Props) => {
    const [saveMode, setSaveMode] = useState<boolean>(false)

    const submitAction = () => {
        console.log("save")
        setSaveMode(false)
    }

    return (
        <form className="flex justify-start items-center h-10">
            <div className="flex items-center">
                <div className="flex justify-center items-center size-10 mr-4">
                    {icon}
                </div>
                <div className="h-10 flex justify-start items-center min-w-48 w-full">
                    { !saveMode ? <span className="h-8 flex justify-center items-center text-base">{field}</span> : <Input defaultValue={field} className="h-8 text-base w-48"/>}
                </div>
            </div>
            <Button 
                type="button" 
                size="icon" 
                variant="ghost" 
                className={cn("size-6 ml-4 rounded-full", saveMode && "hidden")} 
                onClick={() => setSaveMode(true)}
            >
                <Pencil />
            </Button>
            <Button 
                type="button" 
                size="icon" 
                variant="ghost" 
                className={cn("size-6 ml-4 rounded-full", !saveMode && "hidden")} 
                onClick={submitAction}
            >
                <Save />
            </Button>
            <Button 
                type="button" 
                size="icon" 
                variant="ghost" 
                className={cn("size-6 ml-4 rounded-full", !saveMode && "hidden")} 
                onClick={() => setSaveMode(false)}
            >
                <XIcon />
            </Button>
        </form>
    )
}

export default AvatarInformationField
