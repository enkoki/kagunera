import useAuth from '@/app/hooks/useAuth';
import React, { useState } from 'react'

const Dropdown = () => {
	const [isOpen, setIsOpen] = useState(false);
	const {isLoggedIn, setIsLoggedIn} = useAuth()

	const handleLogout = () => {
		localStorage.removeItem("kagunera_token")
		setIsLoggedIn(false)
		window.location.href = "/"
	}

  return (
    <div className='relative w-max'>
       <div onClick={() => setIsOpen(!isOpen)} className={`cursor-pointer w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}> 
     </div>

    {isOpen && (
         <div className='absolute left-1/2 -translate-x-1/2 mt-2 flex flex-col justify-center items-center bg-[#040404] px-5 py-2 rounded-2xl text-xl w-max text-white border border-white/10 shadow-xl z-200'>
            <div className='flex flex-col gap-5 justify-center items-center px-5 py-2'>
                <span className="hover:text-gray-400 cursor-pointer">My Account</span>
                <span className="hover:text-gray-400 cursor-pointer">Settings</span>
                <span className="hover:text-gray-400 cursor-pointer">Notifications</span>
            </div>
            <div onClick={handleLogout} className='flex justify-center items-center border-t border-t-white/20 w-full py-2 mt-2 hover:text-red-400 cursor-pointer'>
                Log Out
            </div>
         </div>
       )}
    </div>
  )
}

export default Dropdown