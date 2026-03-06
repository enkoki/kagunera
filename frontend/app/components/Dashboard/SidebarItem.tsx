"use client"
import React from "react"

const SidebarItem = ({ id, label, active, setActive }: any) => {

    const isActive = active === id

    return (
        <button
            onClick={() => setActive(id)}
            className={`text-left px-4 py-3 rounded-lg transition
            ${isActive
                ? "bg-purple-600"
                : "hover:bg-neutral-800"
            }`}
        >
            {label}
        </button>
    )
}

export default SidebarItem