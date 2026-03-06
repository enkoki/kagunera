"use client"
import React, { useState } from "react"
import MainDashboardSidebar from "./components/DBSidebar/MainDashboard"

interface SidebarProps {
    active: string
    setActive: (id: string) => void
}

const DashboardSidebar: React.FC<SidebarProps> = ({ active, setActive }) => {
    return(<MainDashboardSidebar active = {active} setActive={setActive}/>)
}

export default DashboardSidebar