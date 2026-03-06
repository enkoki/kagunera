const SidebarItem = ({ item, isActive, onClick }: { item: any, isActive: boolean, onClick: () => void }) => (
    <button
        onClick={onClick}
        className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-200 group
        ${isActive 
            ? "bg-[#6200ED] text-white shadow-[0_0_20px_rgba(98,0,237,0.3)]" 
            : "text-neutral-400 hover:bg-neutral-800 hover:text-white"}`}
    >
        <div className="text-xl flex items-center justify-center w-6 h-6 transition-transform group-hover:scale-110">
            {item.icon}
        </div>
        <span className="font-semibold text-base">{item.label}</span>
    </button>
)
export default SidebarItem