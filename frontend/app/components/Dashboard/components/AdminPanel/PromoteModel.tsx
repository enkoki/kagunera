"use client"
import React, { useState } from "react"
import { updateAdminRole } from "@/lib/user"

interface PromoteModelProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
}

const PromoteModel = ({ isOpen, onClose, onSuccess }: PromoteModelProps) => {
    const [identifier, setIdentifier] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    if (!isOpen) return null

    const handlePromote = async (e: React.FormEvent) => {
        e.preventDefault()
        setError(null)
        setLoading(true)

        const token = window.localStorage.getItem("kagunera_token")
        if (!token) {
            setError("Session expired.")
            setLoading(false)
            return
        }

        const result = await updateAdminRole(token, identifier, 1)

        if (result.success) {
            setIdentifier("")
            onSuccess()
            onClose()
        } else {
            setError(result.message)
        }
        setLoading(false)
    }

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-neutral-900 border border-neutral-800 w-full max-w-md rounded-2xl p-6 shadow-2xl">
                <h2 className="text-xl font-bold text-white mb-2">Promote Staff</h2>
                <p className="text-neutral-400 text-sm mb-6">Enter a user's ID or Username to grant them administrative privileges.</p>

                <form onSubmit={handlePromote} className="space-y-4">
                    <div>
                        <input
                            autoFocus
                            type="text"
                            placeholder="e.g. 102 or username_here"
                            className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#6200ED] transition-colors"
                            value={identifier}
                            onChange={(e) => setIdentifier(e.target.value)}
                        />
                    </div>

                    {error && <p className="text-red-500 text-xs font-medium">{error}</p>}

                    <div className="flex gap-3 mt-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-4 py-2.5 rounded-xl border border-neutral-800 text-neutral-400 font-bold hover:bg-neutral-800 transition-all"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading || !identifier}
                            className="flex-1 px-4 py-2.5 rounded-xl bg-[#6200ED] text-white font-bold hover:bg-[#7722FF] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                            {loading ? "Processing..." : "Grant Access"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PromoteModel