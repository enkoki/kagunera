import Image from 'next/image'
import React, { useState } from 'react'
import Dropdown from './Dropdown'
import useAvatar from '@/app/hooks/useAvatar'
import useAuth from '@/app/hooks/useAuth'
import Link from 'next/link'
import CodeIcon from '@/app/assets/icons/sidebar_icons/Code'

const LoggedIn = () => {
  const { avatar } = useAvatar()
  const { role_id } = useAuth()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='flex justify-center items-center gap-5 relative'>
        <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <Image 
            width="36" 
            height="36" 
            src={avatar} 
            alt="user profile picture" 
            className='rounded-full w-10 h-10 border-2 border-transparent hover:border-white/20 transition-all'
          />
        </div>

        <Dropdown isOpen={isOpen} setIsOpen={setIsOpen} />
        
        {role_id <= 1 && (
          <Link href="/dashboard">
            <CodeIcon width={24} height={24}/> 
          </Link>
        )}
    </div>
  )
}

export default LoggedIn