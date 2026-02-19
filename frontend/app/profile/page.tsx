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
    const { isLoggedIn, authLoading } = useAuth()
    useEffect(() => {
        if(!isLoggedIn && !authLoading) router.replace("/login")
    }, [router, isLoggedIn, authLoading])
    const {banner} = useAvatar()

    if(!isLoggedIn) return null

    return (
    <>
        <Navbar isloggedin={isLoggedIn}/>
        {authLoading ? <div className='flex justify-center items-center font-bold pt-[75px] h-screen text-[42px]'>Loading...</div> : <>
            <div className={`bg-cover bg-center bg-no-repeat w-screen h-[150px] sm:h-[200px] md:h-[250px] lg:h-[350px] rounded-b-[30px] lg:rounded-b-[50px] shadow-2xl pt-[75px]`}
                     style={{ backgroundImage: `url(${banner})` }}></div>
            <div className='h-full flex flex-col lg:flex-row'>
                <User />
                <Watching/>
            </div>
        </>
        }
    </>
    )
}

export default Profile