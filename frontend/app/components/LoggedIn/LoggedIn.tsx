import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import pfp from '@/app/assets/images/profilepic.png'
import Dropdown from './Dropdown'
import useAvatar from '@/app/hooks/useAvatar'
import useAuth from '@/app/hooks/useAuth'
import Link from 'next/link'
import CodeIcon from '@/app/assets/icons/sidebar_icons/Code'

const LoggedIn = () => {
  const { avatar } = useAvatar()
  const {username} = useAuth()
  const{role_id} = useAuth()
  return (
    <div className='flex justify-center items-center gap-5'>
        <p className='font-bold text-[18px]'>{username}</p>
        <Image width="40" height="40" src={avatar} alt="user profile picture" className='rounded-full w-10 h-10'></Image>
        <Dropdown />
        {role_id <= 1 ? <Link href="/dashboard"><CodeIcon width={24} height={24}/> </Link> : null}
    </div>
  )
}

export default LoggedIn