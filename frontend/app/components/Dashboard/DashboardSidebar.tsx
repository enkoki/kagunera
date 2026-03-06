"use client"
import Image from "next/image"
import React from "react"
import siteLogo from "@/app/assets/images/anisync_dark.png"
import useAuth from "@/app/hooks/useAuth"
import useAvatar from "@/app/hooks/useAvatar"

import { sidebarItems } from "./SideItems" 

interface SidebarProps {
    active: string
    setActive: (id: string) => void
}

const DashboardSidebar: React.FC<SidebarProps> = ({ active, setActive }) => {
    const { username, uuid } = useAuth()
    const { avatar } = useAvatar()

    return (
        <aside className="fixed flex flex-col justify-start items-start h-screen bg-neutral-900 w-72 shadow-lg p-6">
            <div className="flex items-center mb-10">
                <Image src={siteLogo} alt="site logo" width={52} height={52}/>
                <span className="ml-4 text-2xl font-bold text-[#6200ED]">
                    Anime Admin
                </span>
            </div>

            <div className="flex items-center gap-4 mb-8">
                <Image src={avatar} width="60" height="60"  alt="profile picture" className='w-15 h-15 sm:w-20 sm:h-20 rounded-full shadow-2xl' />
                <div className="flex flex-col">
                    <p className="text-white text-lg font-semibold">{username}</p>
                    <p className="text-gray-400 text-sm">{uuid}</p>
                </div>
            </div>

            <div className="flex flex-col gap-2 w-full">
                {sidebarItems.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-colors duration-200
                        ${active === item.id ? "bg-[#6200ED]" : "hover:bg-neutral-800"}`}
                    >
                        <div className="text-xl flex items-center justify-center w-6 h-6">
                            {item.icon}
                        </div>
                        <span className="text-white font-semibold text-lg">{item.label}</span>
                    </div>
                ))}
            </div>

            <div className="mt-auto w-full">
                <button className="w-full flex items-center justify-center p-3 rounded-xl border border-gray-500 text-white hover:bg-[#6200ED] hover:border-[#6200ED] transition-all duration-150">
                    Log Out
                </button>
            </div>
        </aside>
    )
}

export default DashboardSidebar