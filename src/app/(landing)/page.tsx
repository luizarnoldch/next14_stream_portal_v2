"use client"

import React from 'react'
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import CompanyIcon from "@/icons/Company"

type Props = {}

const Home = (props: Props) => {
  const { setTheme } = useTheme()

  return (
    <div className='container'>
      Hola mundo
      <div className='size-32 bg-primary'>
        <Button variant="outline" size="icon" onClick={() => setTheme("light")}>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
        <Button variant="outline" size="icon" onClick={() => setTheme("dark")}>

          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>

      <div className='size-16 bg-primary mt-16'>
        1
      </div>
      <div className='size-16 bg-primary-foreground'>
        1-fr
      </div>

      <div className='size-16 bg-secondary'>
        2
      </div>

      <div className='size-16 bg-secondary-foreground'>
        2-fr
      </div>

      <div className='size-16 bg-muted'>
        3
      </div>
      <div className='size-16 bg-muted-foreground'>
        3-fr
      </div>
      <div className='size-16 bg-accent'>
        4
      </div>
      <div className='size-16 bg-accent-foreground'>
        4-fr
      </div>
      <CompanyIcon className='size-8 '/>
    </div>
  )
}

export default Home