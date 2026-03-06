"use client"
import Person from '@/app/assets/icons/Person'
import Lock from '@/app/assets/icons/Lock'
import { useState, useEffect } from 'react'
import { loginHandling, verify_session } from '@/app/lib/auth'
import { useRouter } from 'next/navigation'
import useAuth from '@/app/hooks/useAuth'


export default function LoginContainer() {
    const [username, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const router = useRouter()
    const {isLoggedIn, setIsLoggedIn, authLoading, setUUID, setRoleID, setUsername} = useAuth()

    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault()
        // if (username === "user" && password === "user") {
        //     setIsLoggedIn(true)
        //     return
        // }
        if (errorHandling()) return
        setLoading(true)
        try {
            const result = await loginHandling(username.trim(), password.trim())
            if (!result.success) {
                setError(result.message)
                setLoading(false)
                return
            }

            // Save JWT token
            window.localStorage.setItem("anisync_token", result.data.access_token)
            const session = await verify_session(result.data.access_token)
            if (!session.success) {
                setError("Login failed: could not fetch session")
                setLoading(false)
                return
            }

            setUsername(session.data.username)
            setUUID(session.data.uuid)
            setRoleID(session.data.role_id)
            setIsLoggedIn(true)

        } catch (err: any) {
            setError(err?.message || "Login failed. Please try again.")
        } finally {
            setLoading(false)
        }
    }


    function errorHandling() {
        if (!username && !password) {
            setError("Fields cannot be empty")
            return true;
        }
        if (!username) {
            setError("Username cannot be empty")
            return true;
        }
        if (!password) {
            setError("Password cannot be empty")
            return true;
        }
        setError("")
        return false;
    }

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => setError(""), 3000)
            return () => clearTimeout(timer)
        }
    }, [error])

    useEffect(() => {
        if(!authLoading && isLoggedIn) router.replace("/profile")
        return 
    }, [router, isLoggedIn, authLoading, username])

    if (isLoggedIn) return null

    return (
        <div className="flex w-full h-screen sm:lg:h-full sm:lg:w-[50%] flex-col items-center justify-center p-4 sm:p-8 min-h-full bg-white sm:lg:rounded-tr-[85px] sm:lg:rounded-br-[85px]">
            <div className="w-full max-w-[280px] sm:max-w-md">

                <h2 className="mb-6 sm:mb-8 text-center text-xl sm:text-2xl 2xl:text-4xl font-bold text-[#6200ED]">LOG IN</h2>
                <form className="flex flex-col justify-center items-center" onSubmit={(e) => handleSubmit(e)}>
                    <div className="flex flex-col gap-3 sm:gap-5 w-full">
                        <div className={`${loading ? "border-gray-400" : "border-[#6200ED]"} flex items-center border-2 rounded-[12px] sm:rounded-[15px] overflow-hidden w-full`}>
                            <div className={`${loading ? 'bg-gray-400 border-gray-400' : 'bg-[#6200ED] border-[#6200ED]'} p-2 sm:p-3 border-2 border-[#6200ED] h-full flex justify-center items-center`}>
                                <Person color={loading ? "gray" : "white"} />
                            </div>
                            <input disabled={loading} type="text" className="px-3 sm:px-4 h-10 sm:h-12 outline-none w-full placeholder-[#6200ED] text-base sm:text-lg 2xl:text-xl text-black" placeholder="Username" value={username} onChange={(e) => setUser(e.target.value)}  />
                        </div>
                        <div className={`${loading ? "border-gray-400" : "border-[#6200ED]"} flex items-center border-2 rounded-[12px] sm:rounded-[15px] overflow-hidden w-full`}>
                            <div className={`${loading ? 'bg-gray-400 border-gray-400' : 'bg-[#6200ED] border-[#6200ED]'} p-2 sm:p-3 border-2 border-[#6200ED] h-full flex justify-center items-center`}>
                                <Lock color={loading ? "gray" : "white"}/>
                            </div>
                            <input disabled={loading} type="password" className="px-3 sm:px-4 h-10 sm:h-12 outline-none w-full placeholder-[#6200ED] text-base sm:text-lg 2xl:text-xl text-black" placeholder = "Password" value={password} onChange={(e) => setPassword(e.target.value)}/></div>
                    </div>

                    {error && (
                        <p className="text-red-500 text-center mt-2 sm:mt-3 text-sm sm:text-base">
                            {error}
                        </p>
                    )}
                    <p className="text-center text-xs sm:text-sm text-black text-bold p-3 sm:p-4">
                        Don't have an account?
                        <span className="text-[#6200ED] font-bold cursor-pointer ml-1" onClick={() => router.push("/register")}>Register here</span>
                    </p>
                    <button className="rounded-[12px] sm:rounded-[15px] bg-[#6200ED] py-3 sm:py-4 text-sm sm:text-md 2xl:text-xl font-bold text-white cursor-pointer h-12 sm:h-14.75 w-full disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-70" type="submit" disabled={loading}>
                        {loading ? "Logging in..." : "Log In"}
                    </button>
                </form>
            </div>
        </div>
    )
}