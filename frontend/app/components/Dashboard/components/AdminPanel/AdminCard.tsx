"use client"
import React, { useState } from "react"
import { updateAdminRole } from "@/lib/user"
import PowerIcon from "@/app/assets/icons/PowerIcon"
import AdminUI from "./AdminUI"
import ConfirmModal from "./Confirm"
import StatusModal from "./StatusModel"

const AdminCard = ({ admin, onRefresh }: { admin: any, onRefresh: () => void }) => {
    const [loading, setLoading] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)
    
    const [status, setStatus] = useState<{isOpen: boolean, type: 'success' | 'error', title: string, message: string}>({
        isOpen: false,
        type: 'success',
        title: '',
        message: ''
    })

    const isSuperAdmin = admin.roleId === 0

    const handleDemote = async () => {
        const token = window.localStorage.getItem("anisync_token")
        if (!token) return

        setLoading(true)
        setShowConfirm(false)

        const res = await updateAdminRole(token, admin.username, 2) 
        
        if (res.success) {
            setStatus({
                isOpen: true,
                type: 'success',
                title: 'Role Revoked',
                message: `${admin.username} has been demoted successfully.`
            })
            onRefresh()
        } else {
            setStatus({
                isOpen: true,
                type: 'error',
                title: 'Update Failed',
                message: res.message
            })
        }
        setLoading(false)
    }

    return (
        <>
            <AdminUI
                username={admin.username}
                id={admin.id}
                uuid={admin.uuid}
                role={admin.role}
                isSuperAdmin={isSuperAdmin}
                isLoading={loading}
                actions={
                    !isSuperAdmin && (
                        <button 
                            onClick={() => setShowConfirm(true)}
                            disabled={loading}
                            className="h-11 w-11 flex items-center justify-center rounded-xl bg-neutral-800 border border-neutral-700 hover:bg-red-500/10 hover:border-red-500 hover:text-red-500 transition-all active:scale-90 relative"
                        >
                            <PowerIcon width={18} height={18} className="relative z-10" />
                        </button>
                    )
                }
            />

            <ConfirmModal 
                isOpen={showConfirm}
                title="Confirm Revocation"
                message={`Are you sure? ${admin.username} will lose all dashboard access.`}
                onCancel={() => setShowConfirm(false)}
                onConfirm={handleDemote}
                isLoading={loading}
            />

            <StatusModal 
                isOpen={status.isOpen}
                type={status.type}
                title={status.title}
                message={status.message}
                onClose={() => setStatus(prev => ({ ...prev, isOpen: false }))}
            />
        </>
    )
}

export default AdminCard