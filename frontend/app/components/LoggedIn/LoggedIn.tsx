import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import pfp from '@/app/assets/images/profilepic.png'
import Dropdown from './Dropdown'
import useAvatar from '@/app/hooks/useAvatar'
import useAuth from '@/app/hooks/useAuth'
import Link from 'next/link'

const LoggedIn = () => {
  const { avatar } = useAvatar()
  const {username} = useAuth()
  const{role_id} = useAuth()
  return (
    <div className='flex justify-center items-center gap-5'>
        <p className='font-bold text-[18px]'>{username}</p>
        <Image width="40" height="40" src={avatar} alt="user profile picture" className='rounded-full w-10 h-10'></Image>
        <Dropdown />
        {role_id <= 1 ? <Link href="/dashboard"><div className='cursor-pointer hover:bg-gray-400 transition-all duration-200 active:opacity-80 font-bold border-gray-400 border-4 px-5 py-2 rounded-2xl'>Open Panel </div> </Link> : null}
    </div>
  )
}

export default LoggedIn