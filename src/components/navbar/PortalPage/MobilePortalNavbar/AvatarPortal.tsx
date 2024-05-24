import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

export default function AvatarPortal() {
    return (
        <Avatar className="rounded-md size-10">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className="rounded-md" />
            <AvatarFallback className="rounded-md" >CN</AvatarFallback>
        </Avatar>
    )
}
