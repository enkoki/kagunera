interface ActivityItem {
  title: string
  chapter: string
  time: string
  cover: string
}

interface ActivityFeedProps {
  items: ActivityItem[]
  page: number
  setPage: (p: number) => void
  totalPages: number
}

const CoverPlaceholder = ({ title }: { title: string }) => (
  <div className="w-[60px] h-[80px] rounded-md shrink-0 bg-[#1e1a2e] border border-[#2a2440] flex items-center justify-center overflow-hidden">
    <span className="text-[7px] text-gray-600 text-center px-1 leading-tight">{title.slice(0, 14)}</span>
  </div>
)

const ActivityFeed = ({ items, page, setPage, totalPages }: ActivityFeedProps) => (
  <div>
    <p className="text-[11px] font-bold tracking-[0.15em] text-gray-500 uppercase mb-4">Activity</p>
    <div className="flex flex-col">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex items-center gap-5 py-5 border-b border-[#1e1a2e] last:border-b-0"
        >
          <CoverPlaceholder title={item.title} />
          <div className="flex flex-col gap-1 min-w-0">
            <span className="text-sm font-semibold text-white truncate">{item.title}</span>
            <span className="text-xs text-gray-500">{item.chapter}</span>
            <div className="flex items-center gap-1.5 mt-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4a4468" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
              </svg>
              <span className="text-[11px] text-gray-600">{item.time}</span>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="flex items-center justify-center gap-2 mt-6">
      <button
        onClick={() => setPage(Math.max(1, page - 1))}
        className="w-8 h-8 rounded-md bg-[#13101e] border border-[#2a2440] text-gray-500 text-sm hover:text-white transition-colors flex items-center justify-center"
      >
        ←
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          onClick={() => setPage(p)}
          className={`w-8 h-8 rounded-md text-sm font-semibold transition-all ${
            page === p
              ? 'bg-[#7c4fe0] text-white'
              : 'bg-[#13101e] border border-[#2a2440] text-gray-500 hover:text-white'
          }`}
        >
          {p}
        </button>
      ))}
      <button
        onClick={() => setPage(Math.min(totalPages, page + 1))}
        className="w-8 h-8 rounded-md bg-[#13101e] border border-[#2a2440] text-gray-500 text-sm hover:text-white transition-colors flex items-center justify-center"
      >
        →
      </button>
    </div>
  </div>
)

export default ActivityFeed