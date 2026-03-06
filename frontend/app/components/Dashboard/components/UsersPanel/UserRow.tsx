"use client"
import React from "react";
import { User } from "./MainUsersPanel"; 

interface UserRowProps {
    user: User;
}

const UserRow: React.FC<UserRowProps> = ({ user }) => {
    return (
        <tr className="hover:bg-neutral-800/40 transition-colors group">
            <td className="px-4 py-4">
                <div className="flex items-center gap-3">
                    <span className="text-neutral-400 font-mono text-xs font-bold w-6">{user.id}</span>
                    
                    <div className="w-8 h-8 rounded-full bg-linear-to-br from-[#6200ED] to-purple-400 flex items-center justify-center font-bold text-[10px] shrink-0 shadow-lg">
                        {user.username.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex flex-col min-w-0">
                        <span className="font-bold text-neutral-100 truncate text-sm">{user.username}</span>
                        <span className="hidden sm:block text-[11px] text-neutral-500 truncate max-w-[120px]">
                            {user.email}
                        </span>
                    </div>
                </div>
            </td>
            
            <td className="hidden md:table-cell px-6 py-4">
                <code className="text-[10px] text-neutral-400 font-mono bg-black/40 px-2 py-1 rounded border border-neutral-800">
                    {user.uuid.split('-')[0]}...
                </code>
            </td>
            
            <td className="hidden md:table-cell px-6 py-4">
                <span className={`text-[10px] px-2 py-1 rounded-md font-bold uppercase ${
                    user.status === 'Active' 
                    ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                    : 'bg-red-500/10 text-red-400 border border-red-500/20'
                }`}>
                    {user.status}
                </span>
            </td>
            
            <td className="hidden lg:table-cell px-6 py-4 text-sm text-neutral-400">
                {user.joined}
            </td>
            
            <td className="px-4 py-4 text-right">
                <button className="text-xs font-bold text-purple-400 hover:text-white bg-purple-500/10 hover:bg-[#6200ED] px-3 py-1.5 rounded-lg border border-purple-500/30 transition-all active:scale-95">
                    Manage
                </button>
            </td>
        </tr>
    );
};

export default UserRow;