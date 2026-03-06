export const statsData = [
    { label: "Total Users", value: "2,143", growth: "+12%" },
    { label: "Tracked Anime", value: "8,412", growth: "+3%" },
    { label: "API Requests", value: "45.2k", growth: "Stable" }, 
    { label: "Active Watchlists", value: "3,980", growth: "+18%" }
];

export const quickActionsData = [
    { label: "Add New Anime", icon: "➕", desc: "Manual entry" },
    { label: "Clear Cache", icon: "🧹", desc: "Flush Redis" },
    { label: "Global Notice", icon: "📣", desc: "Push notification" },
    { label: "System Logs", icon: "📜", desc: "View raw errors" },
];

export const activityLogsData = [
    { id: 1, user: "enkokii", action: "updated watchlist", time: "2m ago", color: "text-yellow-400" },
    { id: 2, user: "yepMizu", action: "synced 'Oshi no Ko'", time: "15m ago", color: "text-purple-400" },
    { id: 3, user: "Zekken", action: "new registration", time: "1h ago", color: "text-blue-400" },
];

export const systemMetricsData = [
    { label: "CPU Usage", value: "32%", color: "text-green-400" },
    { label: "Memory Usage", value: "7.8 / 16 GB", color: "text-yellow-400" },
    { label: "Disk Usage", value: "120 / 500 GB", color: "text-red-400" }
];