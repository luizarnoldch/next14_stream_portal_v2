"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

type ShadCnButtonVariants = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
type ShadCnButtonSizes = "default" | "sm" | "lg" | "icon" | null | undefined


type Props = {
    className?: string
    size?: ShadCnButtonSizes
    variant?: ShadCnButtonVariants
}

const ThemeButton = ({ size, variant, className }: Props) => {
    const { setTheme, theme } = useTheme()
    const toggleTheme = theme == "dark" ? "light" : "dark"
    return (
        <Button variant="outline" size="icon" onClick={() => setTheme(toggleTheme)} className={cn("", className)}>
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}


export default ThemeButton