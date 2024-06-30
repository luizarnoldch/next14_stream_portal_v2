import React from 'react'
import ProfileInformation from './_components/profileInformation/ProfileInformation'
import PlanMetrics from "./_components/PlanMetrics"
import IntegrationSettings from './_components/intregrationSettings/IntegrationSettings'



type Props = {}

const ProfilePortal = (props: Props) => {
  return (
    <aside className='w-full p-6 min-h-dvh pt-16'>
      <div className='max-w-3xl mx-auto pt-4 lg:container'>
        <h1>
          Profile
        </h1>
        <div className='w-full lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-8'>
          <ProfileInformation className='lg:col-span-2' />
          <IntegrationSettings className='lg:flex lg:justify-center lg:items-center'/>
          <PlanMetrics className='lg:flex lg:justify-center lg:items-center' />
        </div>
      </div>
    </aside>
  )
}

export default ProfilePortal