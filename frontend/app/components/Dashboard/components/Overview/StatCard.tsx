const StatCard = ({ label, value, growth }: { label: string, value: string, growth: string }) => (
    <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl hover:border-neutral-700 transition-all">
        <div className="flex justify-between items-start">
            <span className="text-sm text-neutral-400 font-medium">{label}</span>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${growth.startsWith('+') ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'}`}>
                {growth}
            </span>
        </div>
        <div className="text-3xl font-bold mt-3 tracking-tighter">{value}</div>
    </div>
)
export default StatCard