interface Log { 
    id: number; 
    user: string; 
    action: string; 
    time: string; 
    color: string; 
}

const ActivityFeed = ({ logs }: { logs: Log[] }) => (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-6">Live Activity</h2>
        <div className="space-y-6">
            {logs.map((log) => (
                <div key={log.id} className="relative pl-6 border-l-2 border-neutral-800 group">
                    <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.4)]" />
                    <p className="text-sm">
                        <span className={`font-bold ${log.color}`}>{log.user}</span>
                        <span className="text-neutral-400 ml-1">{log.action}</span>
                    </p>
                    <p className="text-[10px] text-neutral-500 mt-1 uppercase font-bold tracking-tighter">{log.time}</p>
                </div>
            ))}
        </div>
        <button className="w-full mt-8 py-2.5 text-xs font-bold text-neutral-400 bg-neutral-800/50 rounded-xl border border-neutral-800 hover:bg-neutral-800 transition-all">
            VIEW AUDIT LOG
        </button>
    </div>
)
export default ActivityFeed