"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { usePathname } from 'next/navigation';

import SiteLogoL from '@/app/assets/images/anisync_light.png'
import SiteLogoD from '@/app/assets/images/anisync_dark.png'
import Variant from '../Button/Variant';
import LoggedIn from '../LoggedIn/LoggedIn';
import Hamburger from '@/app/assets/icons/Hamburger';
import Sidebar from '../Sidebar/Sidebar';
const Navbar = ({isloggedin = false}) => {

    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname();

    return (
        <>
            <header className='w-screen h-[70px] md:h-[75px] py-2 px-10 xl:px-25 flex justify-between items-center bg-[#040404] shadow-2xl fixed z-40'>
                <Image src={SiteLogoD} alt="anisync-logo" className='w-10 h-10 xl:w-11 xl:h-11'/>
                <nav className='hidden xl:flex'>
                    <ul className='flex gap-10 font-bold text-[20px] justify-center items-center'>
                        <li className={pathname === '/about' ? 'text-[#6200ED]' : ''}><Link href="/about">About</Link></li>
                        <li className={pathname === '/profile' ? 'text-[#6200ED]' : ''}><Link href="/profile">Profile</Link></li>
                        <li className={pathname === '/' ? 'text-[#6200ED]' : ''}><Link href="/">Home</Link></li>
                    </ul>
                </nav>
                {isloggedin ? <div className='hidden xl:flex'> <LoggedIn/> </div> : <div className='hidden xl:flex'><Variant content="Log In"/></div>}
                {isOpen ? null : <Hamburger width = {32} height ={32} className='xl:hidden cursor-pointer relative right-0' onClick = {() => setIsOpen(true)}/>}
            </header>
           {isOpen && <Sidebar setIsOpen={setIsOpen} isOpen={isOpen} />}
                       
        </>
    );
}

export default Navbar