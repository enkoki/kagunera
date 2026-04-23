"use client"
import React, { useState, useEffect, useMemo } from "react"
import { fetchUsers } from "@/lib/user"
import UserRow from "./UserRow"
import UserPagination from "./UserPagination"

export interface User {
    id: string
    uuid: string
    username: string
    email: string
    status: string
    joined: string
}

const USERS_PER_PAGE = 12

const MainUsersPanel: React.FC = () => {
    const [users, setUsers] = useState<User[]>([])
    const [searchTerm, setSearchTerm] = useState("")
    const [loading, setLoading] = useState(true)

    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        const loadUsers = async () => {
            setLoading(true)

            const token = localStorage
                .getItem("kagunera_token")
                ?.replace(/^"|"$/g, "")

            if (!token) {
                setLoading(false)
                return
            }

            const result = await fetchUsers(token)

            if (result.success) {
                const dataArray = Array.isArray(result.data)
                    ? result.data
                    : result.data.users || []

                const mappedUsers: User[] = dataArray.map((u: any) => ({
                    id: String(u.id),
                    uuid: u.uuid || "N/A",
                    username: u.username || "Unknown",
                    email: u.email || "No Email",
                    status: u.status || "Inactive",
                    joined: u.created_at
                        ? new Date(u.created_at).toLocaleDateString(
                              "en-US",
                              { month: "short", year: "numeric" }
                          )
                        : "N/A",
                }))

                setUsers(mappedUsers)
            }

            setLoading(false)
        }

        loadUsers()
    }, [])

    const filteredUsers = useMemo(() => {
        const query = searchTerm.toLowerCase()

        return users.filter(
            (u) =>
                u.username.toLowerCase().includes(query) ||
                u.email.toLowerCase().includes(query)
        )
    }, [searchTerm, users])

    useEffect(() => {
        setCurrentPage(1)
    }, [searchTerm])

    const totalPages = Math.ceil(filteredUsers.length / USERS_PER_PAGE)

    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(totalPages || 1)
        }
    }, [totalPages])

    const paginatedUsers = useMemo(() => {
        const start = (currentPage - 1) * USERS_PER_PAGE
        const end = start + USERS_PER_PAGE
        return filteredUsers.slice(start, end)
    }, [filteredUsers, currentPage])

    return (
        <div className="text-white p-4">
            <header className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold">User Management</h1>
                    <p className="text-neutral-400 text-sm">View and manage your community members.</p>
                </div>
                <input
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) =>
                        setSearchTerm(e.target.value)
                    }
                    className="w-full sm:w-auto bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2 outline-none focus:border-purple-500 transition-all"
                />
            </header>

            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-neutral-800/50 text-neutral-400 text-[11px] uppercase tracking-widest font-bold">
                            <tr>
                                <th className="px-6 py-5">User</th>
                                <th className="hidden md:table-cell px-6 py-5">UUID</th>
                                <th className="hidden md:table-cell px-6 py-5">Status</th>
                                <th className="hidden lg:table-cell px-6 py-5">Joined</th>
                                <th className="px-6 py-5 text-right">Settings</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-800">
                            {loading ? (
                                <tr>
                                    <td colSpan={5} className="p-16 text-center text-neutral-500">Loading members...</td>
                                </tr>
                            ) : paginatedUsers.length === 0 ? (
                                <tr>
                                    <td
                                        colSpan={5}
                                        className="p-16 text-center text-neutral-500"
                                    >
                                        No users found
                                    </td>
                                </tr>
                            ) : (
                                paginatedUsers.map((user) => (
                                    <UserRow
                                        key={user.id}
                                        user={user}
                                    />
                                ))
                            )}
                        </tbody>
                    </table>

                    {!loading && (
                        <UserPagination
                            count={filteredUsers.length}
                            currentPage={currentPage}
                            totalPages={totalPages}
                            setCurrentPage={setCurrentPage}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default MainUsersPanel