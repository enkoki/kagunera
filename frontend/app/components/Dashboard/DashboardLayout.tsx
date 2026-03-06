"use client"
import React, { useState } from "react"
import UsersPanel from "./sections/UsersPanel"
import Overview from "./sections/Overview"
import DashboardSidebar from "./DashboardSidebar"
import AdminsPanel from "./sections/AdminsPanel"

const DashboardLayout = () => {
    const [active, setActive] = useState("overview")

    const renderPanel = () => {
        switch (active) {
            case "users":
                return <UsersPanel />
            case "admins":
                return <AdminsPanel />
            default:
                return <Overview />
        }
    }

    return (
        <div className="flex min-h-screen bg-neutral-950 text-white">
            <DashboardSidebar active={active} setActive={setActive} />

            <main className="flex-1 transition-all duration-300 min-w-0
                             ml-0 lg:ml-72 
                             p-4 md:p-8 
                             mt-[80px] lg:mt-1">
                
                <div className="max-w-[1600px] mx-auto">
                    {renderPanel()}
                </div>
            </main>
        </div>
    )
}

export default DashboardLayout