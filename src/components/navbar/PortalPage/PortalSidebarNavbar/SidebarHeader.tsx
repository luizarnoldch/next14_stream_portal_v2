import React from 'react'
import CompanyIcon from "@/icons/Company"

type SidebarHeaderProps = {
  className?: string
  isOpen?: boolean
}

const SidebarHeader = ({className, isOpen}: SidebarHeaderProps) => {
  return (
    <div className='h-32'>
      <div>
        <CompanyIcon className='size-8'/>
        <h3>Company Name</h3>
      </div>
    </div>
  )
}

export default SidebarHeader