"use client"
import React from "react"

interface AdminCardUIProps {
    username: string;
    id: number;
    uuid: string;
    role: string;
    isSuperAdmin: boolean;
    isLoading?: boolean;
    actions?: React.ReactNode;
}

const AdminUI = ({ 
    username, id, uuid, role, isSuperAdmin, isLoading, actions 
}: AdminCardUIProps) => {
    
    const roleStyles = isSuperAdmin 
        ? "bg-amber-500/10 text-amber-400 border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.05)] group-hover:border-amber-500/50 group-hover:bg-amber-500/20" 
        : "bg-blue-500/10 text-blue-400 border-blue-500/20 group-hover:border-blue-500/50 group-hover:bg-blue-500/20";

    const borderHover = isSuperAdmin 
        ? "hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)]" 
        : "hover:border-[#6200ED]/50 hover:shadow-[0_0_30px_rgba(98,0,237,0.1)]";

    return (
        <div className={`
            group relative bg-neutral-900 border transition-all duration-500 ease-out p-5 rounded-2xl 
            flex flex-col md:flex-row md:items-center justify-between gap-4 
            ${isSuperAdmin ? 'border-amber-500/30' : 'border-neutral-800'} 
            ${borderHover} 
            hover:-translate-y-1 active:scale-[0.99]
            ${isLoading ? 'opacity-50 pointer-events-none' : 'cursor-default'}
        `}>
            
            <div className="absolute inset-0 bg-linear-to-br from-white/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

            {isSuperAdmin && (
                <div className="absolute inset-0 bg-amber-500/2 pointer-events-none rounded-2xl" />
            )}

            <div className="flex items-center gap-4 relative z-10">
                <div className={`
                    w-12 h-12 rounded-xl flex items-center justify-center font-black text-xl border 
                    transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 
                    ${roleStyles}
                `}>
                    {username.charAt(0).toUpperCase()}
                </div>
                
                <div>
                    <h3 className="font-bold text-lg flex items-center gap-2 group-hover:text-white transition-colors">
                        {username} 
                        {isSuperAdmin && (
                            <span className="text-amber-500 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">
                                ⭐
                            </span>
                        )}
                    </h3>
                    <code className="text-[10px] text-neutral-500 uppercase tracking-tighter group-hover:text-neutral-400 transition-colors">
                        UUID: {uuid.split('-')[0]}...
                    </code>
                </div>
            </div>

            <div className="flex items-center justify-between md:justify-end gap-6 relative z-10">
                <div className="flex flex-col items-start md:items-end">
                    <span className="text-[10px] uppercase text-neutral-500 font-bold tracking-wider mb-1">Rank</span>
                    <span className={`
                        text-[10px] px-3 py-1 rounded-lg border font-black uppercase tracking-widest 
                        transition-all duration-500 
                        ${roleStyles}
                    `}>
                        {role}
                    </span>
                </div>
                
                <div className="transition-transform duration-300 group-hover:translate-x-1">
                    {actions}
                </div>
            </div>
        </div>
    )
}

export default AdminUI