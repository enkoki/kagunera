"use client"
import React, { useEffect }  from 'react'
import Navbar from '../components/Navbar/Navbar'
import { useRouter } from 'next/navigation'
import useAuth from '../hooks/useAuth'
import User from '../components/User/User'
import Watching from '../components/Watching/Watching'
import useAvatar from '../hooks/useAvatar'
import Image from 'next/image'
const Profile = () => {

    const router = useRouter()
    const { isLoggedIn, authLoading, role_id } = useAuth()
    useEffect(() => {
        if(!authLoading && role_id > 1) router.replace("/")
    }, [router, isLoggedIn, authLoading])
    const {banner} = useAvatar()

    if(!isLoggedIn || role_id > 1) return null

    return (
    <>
        {authLoading ? <div className='flex justify-center items-center font-bold pt-[75px] h-screen text-[42px]'>Loading...</div> : <>
            <div className=''>
            </div>
        </>
        }
    </>
    )
}

export default Profile