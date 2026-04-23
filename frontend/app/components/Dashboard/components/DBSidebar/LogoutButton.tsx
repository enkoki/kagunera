import PowerIcon from "@/app/assets/icons/PowerIcon"
import useAuth from "@/app/hooks/useAuth"
import React from 'react'

const LogoutButton = () => {
    const {setIsLoggedIn} = useAuth()

    const handleLogout = () => {
        localStorage.removeItem("kagunera_token")
        setIsLoggedIn(false)
        window.location.href = "/"
    }
  return (
    <button className="group w-full flex items-center justify-center gap-2 p-3 rounded-xl border border-neutral-700 text-neutral-400 hover:bg-red-500/10 hover:border-red-500/50 hover:text-red-500 transition-all duration-200" onClick={handleLogout}>
        <span className="text-lg"><PowerIcon width={24} height={24}/></span>
        <span className="font-bold">Log Out</span>
    </button>
  )
}

export default LogoutButton