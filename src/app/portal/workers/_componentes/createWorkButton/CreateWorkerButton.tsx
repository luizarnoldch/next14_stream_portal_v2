"use client"

import * as React from "react"
import { useMediaQuery } from 'usehooks-ts'

import DesktopCreateWorkButton from "./DesktopCreateWorkerButton"
import MobileCreateWorkButton from "./MobileCreateWorkerButton"

export default function DrawerDialogDemo() {
  const [open, setOpen] = React.useState(false)

  const mobile = useMediaQuery('(max-width: 1024px)')

  if (mobile) {
    return (<MobileCreateWorkButton open={open} setOpen={setOpen} />)
  }

  return (
    <DesktopCreateWorkButton open={open} setOpen={setOpen} />
  )
}

