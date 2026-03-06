"use client"
import React, { useEffect, useState } from "react"
import AdminCard from "./AdminCard"
import PromoteAdminModal from "./PromoteModel" 
import { getAdmins } from "@/lib/user"
import useAuth from "@/app/hooks/useAuth"

const MainAdminPanel = () => {
    const { authLoading, isLoggedIn } = useAuth()
    const [admins, setAdmins] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const fetchStaff = async () => {
        const token = window.localStorage.getItem("anisync_token")

        if (authLoading) return
        
        if (!token || !isLoggedIn) {
            setError("Session expired or unauthorized. Please log in.")
            setIsLoading(false)
            return
        }

        setIsLoading(true)
        const result = await getAdmins(token)

        if (result.success) {
            setAdmins(result.data)
            setError(null)
        } else {
            setError(result.message)
        }
        setIsLoading(false)
    }

    useEffect(() => {
        fetchStaff()
    }, [authLoading, isLoggedIn])

    return (
        <div className="text-white">
            <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <div className="flex items-center gap-3">
                        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Admin Hierarchy</h1>
                        <span className="bg-[#6200ED]/20 text-[#6200ED] border border-[#6200ED]/30 text-[10px] px-2 py-0.5 rounded-md uppercase font-black tracking-wider">
                            Staff Only
                        </span>
                    </div>
                    <p className="text-neutral-400 mt-1 text-sm md:text-base">Manage privileged accounts and system access levels.</p>
                </div>
                
                <button 
                    onClick={fetchStaff}
                    className="text-xs font-bold text-neutral-500 hover:text-white transition-colors flex items-center gap-2"
                >
                    <span className={isLoading ? "animate-spin" : ""}>🔄</span> Refresh List
                </button>
            </header>

            {isLoading ? (
                <div className="grid grid-cols-1 gap-4">
                    {[1, 2, 3].map((n) => (
                        <div key={n} className="h-[104px] w-full bg-neutral-900/50 border border-neutral-800 rounded-2xl animate-pulse" />
                    ))}
                </div>
            ) : error ? (
                <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-2xl text-center">
                    <p className="text-red-400 text-sm font-medium">{error}</p>
                    <button onClick={fetchStaff} className="mt-3 text-xs bg-red-500/20 px-4 py-1.5 rounded-lg hover:bg-red-500/30 transition-all">
                        Try Again
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-4">
                    {admins.length > 0 ? (
                        admins.map((admin) => (
                            <AdminCard 
                                key={admin.uuid} 
                                admin={admin} 
                                onRefresh={fetchStaff}
                            />
                        ))
                    ) : (
                        <div className="py-20 text-center border border-dashed border-neutral-800 rounded-2xl">
                            <p className="text-neutral-500 italic text-sm">No administrative staff found in database.</p>
                        </div>
                    )}
                </div>
            )}

            <div className="mt-8 p-8 border-2 border-dashed border-neutral-800 rounded-2xl flex flex-col items-center justify-center text-center bg-neutral-900/30 group hover:border-neutral-700 transition-colors">
                <div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center mb-4 text-xl group-hover:scale-110 transition-transform">
                    🔐
                </div>
                <p className="text-neutral-400 text-sm mb-4 font-medium max-w-xs">
                    Need to grant system access to a new staff member?
                </p>
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-white text-black px-8 py-2.5 rounded-xl font-bold hover:bg-neutral-200 transition-all active:scale-95 shadow-lg"
                >
                    + Add New Admin
                </button>
            </div>

            <PromoteAdminModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                onSuccess={fetchStaff} 
            />
        </div>
    )
}

export default MainAdminPanel