"use client"
import React from "react"

const PerformanceMonitor = () => (
    <div className="relative overflow-hidden bg-neutral-900 bg-linear-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-2xl p-6 h-full shadow-2xl">
        
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-600/10 blur-[100px] pointer-events-none" />

        <h2 className="text-xl font-bold mb-4 relative z-10">System Performance</h2>
        
        <div className="h-32 w-full bg-neutral-950 rounded-xl border border-neutral-800 flex items-center justify-center mb-6 overflow-hidden relative"
             style={{ 
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.02) 1px, transparent 0)`,
                backgroundSize: '24px 24px' 
             }}>
            <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-transparent to-transparent" />
            <span className="text-neutral-600 text-[10px] font-mono uppercase tracking-[0.3em] relative z-10 animate-pulse">
                Live Data Stream
            </span>
        </div>

        <div className="space-y-3 relative z-10">
            <StatusRow label="AniList API Sync" status="200 OK" active />
            <StatusRow label="Image Server (S3)" status="99.9% Uptime" />
        </div>
    </div>
)

const StatusRow = ({ label, status, active = false }: { label: string, status: string, active?: boolean }) => (
    <div className="flex items-center justify-between p-3 bg-white/3 hover:bg-white/5 rounded-xl border border-white/5 transition-colors group">
        <div className="flex items-center gap-3">
            <div className={`w-2 h-2 rounded-full ${active ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse' : 'bg-green-500'}`} />
            <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors">{label}</span>
        </div>
        <span className="text-[10px] text-neutral-400 font-mono bg-black/40 px-2 py-0.5 rounded border border-neutral-800">
            {status}
        </span>
    </div>
)

export default PerformanceMonitor