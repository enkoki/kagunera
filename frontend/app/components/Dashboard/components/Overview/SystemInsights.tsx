"use client"
import React from "react"

interface Metric { 
    label: string; 
    value: string; 
    color: string; 
}

const SystemInsights = ({ metrics }: { metrics: Metric[] }) => (
    <div className="relative overflow-hidden bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-2xl">
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-600/5 blur-[120px] pointer-events-none" />
        
        <h2 className="text-xl font-bold mb-4 relative z-10">System Insights</h2>
        
        <div className="flex flex-col lg:flex-row gap-6 relative z-10">
            <div className="flex-1 h-64 bg-neutral-950 rounded-xl border border-neutral-800 flex items-center justify-center relative overflow-hidden group/chart">
                
                <div className="absolute inset-0 opacity-20"
                     style={{ 
                        backgroundImage: `linear-gradient(to right, #262626 1px, transparent 1px), linear-gradient(to bottom, #262626 1px, transparent 1px)`,
                        backgroundSize: '40px 40px' 
                     }} 
                />

                <div className="absolute w-40 h-40 bg-[#6200ED] opacity-20 blur-[80px] rounded-full animate-pulse group-hover/chart:opacity-40 transition-opacity duration-700" />
                <div className="absolute w-32 h-32 bg-blue-500 opacity-10 blur-[60px] rounded-full translate-x-10 -translate-y-5" />

                <div className="relative flex flex-col items-center gap-2">
                    <span className="text-neutral-400 text-xs font-mono tracking-[0.4em] uppercase font-bold">
                        Resource Usage
                    </span>
                    <div className="h-px w-12 bg-linear-to-r from-transparent via-purple-500 to-transparent" />
                </div>
            </div>

            <div className="flex flex-col justify-between gap-3 min-w-[260px]">
                {metrics.map((m, i) => (
                    <div key={i} className="bg-white/2 p-4 rounded-xl border border-white/5 flex justify-between items-center group hover:border-purple-500/30 transition-all duration-300">
                        <div className="flex flex-col">
                            <span className="font-bold text-[10px] uppercase tracking-widest text-neutral-500 mb-0.5">{m.label}</span>
                            <div className="h-1 w-full bg-neutral-800 rounded-full mt-1 overflow-hidden">
                                <div 
                                    className={`h-full opacity-60 rounded-full ${m.color.replace('text', 'bg')}`} 
                                    style={{ width: m.value.includes('%') ? m.value : '40%' }}
                                />
                            </div>
                        </div>
                        <span className={`font-mono text-sm font-bold ${m.color} group-hover:scale-110 transition-transform`}>
                            {m.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    </div>
)

export default SystemInsights