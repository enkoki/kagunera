"use client"
import { useState, createContext, useContext, ReactNode, useEffect } from "react"
import { verify_session } from "../lib/auth"

interface User {
	isLoggedIn: boolean
	username: string
	authLoading: boolean
	uuid: string
	role_id: number
}

interface AuthContextType extends User {
	setIsLoggedIn: (val: boolean) => void
	setUsername: (name: string) => void
	setUUID: (uuid: string) => void
	setRoleID: (id: number) => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export default function useAuth() {
	const context = useContext(AuthContext)
	if (!context) {
		throw new Error("useAuth must be used inside AuthProvider")
	}
	return context
}

export function AuthProvider({ children }: { children: ReactNode }) {
	const [uuid, setUUID] = useState("*********")
	const [username, setUsername] = useState("")
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [authLoading, setAuthLoading] = useState(true)
	const [role_id, setRoleID] = useState<number>(2)

useEffect(() => {
  const token = window.localStorage.getItem("kagunera_token")

  if (!token) {
    setAuthLoading(false)
    return
  }

	verify_session(token).then(res => {
			if (res.success) {
				setIsLoggedIn(true)
				setUsername(res.data.username)
				setUUID(res.data.uuid)
				setRoleID(res.data.role_id)
			} else {
				localStorage.removeItem("kagunera_token")
				setIsLoggedIn(false)
				setUsername("")
			}
			setAuthLoading(false)
		})
	}, [])


	return (
		<AuthContext.Provider value={{ uuid, username, isLoggedIn, authLoading, role_id, setUUID, setIsLoggedIn, setUsername, setRoleID}}> {children} </AuthContext.Provider>
	);
}
