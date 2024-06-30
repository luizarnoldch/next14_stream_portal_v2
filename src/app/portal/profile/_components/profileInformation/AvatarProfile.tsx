import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

export default function AvatarProfile() {
    return (
        <Avatar className="w-full h-full">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className="rounded-md" />
            <AvatarFallback className="rounded-md" >CN</AvatarFallback>
        </Avatar>
    )
}
