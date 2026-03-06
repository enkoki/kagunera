"use client"
import React from "react"
import { statsData, quickActionsData, activityLogsData, systemMetricsData } from "../components/Overview/data"
import StatCard from "../components/Overview/StatCard"
import QuickActionButton from "../components/Overview/QuickActionButton"
import PerformanceMonitor from "../components/Overview/PerformanceMonitor"
import ActivityFeed from "../components/Overview/ActivityFeed"
import SystemInsights from "../components/Overview/SystemInsights"

const Overview = () => {
    return (
        <div className="text-white space-y-10">
            <header className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
                    <p className="text-neutral-400 mt-1">Real-time metrics and system controls.</p>
                </div>
                <div className="hidden md:block text-right">
                    <p className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold">Server Status</p>
                    <p className="text-sm font-mono text-green-500 flex items-center justify-end gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        Operational
                    </p>
                </div>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {statsData.map((stat, i) => <StatCard key={i} {...stat} />)}
            </div>

            <section>
                <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {quickActionsData.map((action, i) => <QuickActionButton key={i} {...action} />)}
                </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <PerformanceMonitor />
                </div>
                <ActivityFeed logs={activityLogsData} />
            </div>

            <SystemInsights metrics={systemMetricsData} />
        </div>
    )
}

export default Overview