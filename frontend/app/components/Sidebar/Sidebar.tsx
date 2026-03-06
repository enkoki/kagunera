"use client";
import React, { useEffect } from 'react'
import Image from 'next/image';

import pfp from '@/app/assets/images/profilepic.png'
import SiteLogoD from '@/app/assets/images/anisync_dark.png'
import Cross from '@/app/assets/icons/Cross';
import HomeIcon from '@/app/assets/icons/sidebar_icons/Home';
import { usePathname } from 'next/navigation';
import SBItems from './SBItems';
import Link from 'next/link';
import useAuth from '@/app/hooks/useAuth';
import Variant from '../Button/Variant';
import PowerIcon from '@/app/assets/icons/PowerIcon';
import useAvatar from '@/app/hooks/useAvatar';

interface SidebarProps {
  setIsOpen: (open: boolean) => void,
  isOpen: boolean
}

const Sidebar = ({ setIsOpen, isOpen }: SidebarProps) => {
    const { avatar } = useAvatar()
    const {username, uuid, isLoggedIn, authLoading, role_id} = useAuth()
    const pathName = usePathname()

    if (authLoading) return <div className="flex justify-center items-center h-full w-full">Loading user...</div>
  return (
    <div className="fixed inset-0 z-50 flex">
        <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
            <div className='bg-[#040404] min-h-screen w-screen sm:w-100 relative overflow-y-auto z-50 xl:hidden'> {/*bg-[#040404]*/}
                <div className='h-[70px] md:h-[75px] shadow-xl bg-[#040404] flex justify-between items-center py-2 px-10'>
                <Image src={SiteLogoD} alt="anisync-logo" className='w-10 h-10 xl:w-11 xl:h-11'/>
                <Cross className='cursor-pointer' onclick={() => setIsOpen(false)}/>
            </div>
            <div className={`relative flex ${isLoggedIn ? 'justify-start' : 'justify-center'} items-center p-5 shadow-2xl rounded-xl`}>
                {!isLoggedIn && (<div className="absolute inset-0 z-50 flex justify-center items-center"><Variant content="Log In" /></div>)}
                <div className={`flex justify-start items-center gap-5 ${!isLoggedIn ? 'blur-lg pointer-events-none select-none' : ''}`}>
                <Image src={avatar} width="80" height="80"  alt="profile picture" className='w-15 h-15 sm:w-25 sm:h-25 rounded-full shadow-2xl' />
                <div className='flex justify-center items-start flex-col'>
                    <div className='font-black text-[20px]'>{username}</div>
                    <div className='text-[#9F9FA3] font-bold text-[12px]'>UUID: {uuid}</div>
                    <div className='cursor-pointer text-[#6200ED] font-bold flex flex-col justify-center items-center w-max h-max gap-2'>
                        <Link href="/profile">View Profile</Link>
                    </div>
                </div >
                {role_id <= 1 ? <Link href="/dashboard" className='border-3 border-gray-400 px-3 py-2 rounded-2xl'>Admin</Link> : null}
                </div>
            </div>
            <SBItems />
        </div>
    </div>
  )
}

export default Sidebar