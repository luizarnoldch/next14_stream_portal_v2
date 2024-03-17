import React from 'react'
import ThemeButton from '../buttons/themeButton/ThemeButton'
import LogoutButton from '../buttons/auth/LogoutButton'
import ProfileDropdown from '../dropdown/ProfileDropdown'
import ButtonNavigationBack from '../buttons/navigtion/ButtonNavigationBack'

type Props = {}

const LandingNavbar = (props: Props) => {
  return (
    <div className='w-full'>
        {/* Inner Navbar */}
        <div className='max-w-[1440px] h-16 mx-auto flex items-center justify-between'>
            {/* Return Admin Portal */}
              <ButtonNavigationBack />
            {/* Nav Page */}
            <div>Nav</div>
            {/* Extra Buttons */}
            <div className='flex items-center justify-center gap-4'>
                {/* Theme Button */}
                <ThemeButton />
                {/* Profile Button */}
                <ProfileDropdown />
                {/* Login Button */}
                <LogoutButton/>
            </div>
        </div>
    </div>
  )
}

export default LandingNavbar