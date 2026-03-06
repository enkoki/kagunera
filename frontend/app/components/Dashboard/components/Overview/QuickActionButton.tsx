const QuickActionButton = ({ label, icon, desc }: { label: string, icon: string, desc: string }) => (
    <button className="flex flex-col items-start p-4 bg-neutral-900 border border-neutral-800 rounded-2xl hover:border-purple-500/50 transition-all group text-left">
        <span className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">{icon}</span>
        <span className="text-sm font-bold text-neutral-100">{label}</span>
        <span className="text-[11px] text-neutral-500">{desc}</span>
    </button>
)
export default QuickActionButton