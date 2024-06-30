import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import WorkForm from "./WorkerForm"
import { Button } from "@/components/ui/button"

type DesktopCreateWorkButtonProps = {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DesktopCreateWorkButton = ({ open, setOpen }: DesktopCreateWorkButtonProps) => {
    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogTrigger asChild>
                <Button>Add One!</Button>
            </DialogTrigger>
            <DialogContent className="lg:max-w-2xl">
                <DialogHeader>
                    <DialogTitle>Create a Worker</DialogTitle>
                    <DialogDescription>
                        Create a new Worker for you Company. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <WorkForm />
            </DialogContent>
        </Dialog>
    )
}

export default DesktopCreateWorkButton