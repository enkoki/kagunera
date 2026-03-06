"use client"
import React, { useState } from "react"
import MobileHeader from "./MobileHeader"
import ProfileSection from "./ProfileSection"
import SidebarItem from "./SidebarItem"
import LogoutButton from "./LogoutButton"
import { sidebarItems } from "./SideItems"
import Image from "next/image"
import siteLogo from "@/app/assets/images/anisync_dark.png"
import Cross from "@/app/assets/icons/Cross"

interface SidebarProps {
    active: string
    setActive: (id: string) => void
}

const MainDashboardSidebar: React.FC<SidebarProps> = ({ active, setActive }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <MobileHeader onOpen={() => setIsOpen(true)} />

            <aside className={`
                fixed top-0 left-0 z-50 h-screen bg-neutral-900 border-r border-neutral-800 p-6 shadow-2xl transition-transform duration-300 ease-in-out
                w-72 lg:translate-x-0 
                ${isOpen ? "translate-x-0" : "-translate-x-full"}
                flex flex-col
            `}>
                <div className="flex justify-between lg:justify-start items-center mb-10">
                    <Image src={siteLogo} alt="anisync-logo" className='w-10 h-10 xl:w-11 xl:h-11'/>
                    <span className="ml-4 text-2xl font-bold text-[#6200ED] tracking-tight hidden lg:flex">Anisync</span>
                    <div className="lg:hidden flex justify-end mb-4">
                        <button onClick={() => setIsOpen(false)} className="text-white p-2 hover:bg-neutral-800 rounded-lg">
                            <Cross />
                        </button>
                     </div>
                </div>

                <ProfileSection />

                <nav className="flex flex-col gap-1.5 w-full">
                    {sidebarItems.map((item) => (
                        <SidebarItem 
                            key={item.id} 
                            item={item} 
                            isActive={active === item.id} 
                            onClick={() => {
                                setActive(item.id)
                                setIsOpen(false)
                            }} 
                        />
                    ))}
                </nav>

                <div className="mt-auto pt-6 w-full">
                    <LogoutButton />
                </div>
            </aside>

            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    )
}

export default MainDashboardSidebar