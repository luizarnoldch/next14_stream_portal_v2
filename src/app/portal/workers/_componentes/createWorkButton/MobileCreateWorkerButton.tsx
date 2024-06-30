import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import WorkForm from "./WorkerForm"

type MobileCreateWorkButtonProps = {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileCreateWorkButton = ({ open, setOpen }: MobileCreateWorkButtonProps) => {
    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button className="px-6">Add One!</Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>Create a Worker</DrawerTitle>
                    <DrawerDescription>
                        Create a new Worker for you Company. Click save when you're done.
                    </DrawerDescription>
                </DrawerHeader>
                <WorkForm className="px-4" />
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default MobileCreateWorkButton