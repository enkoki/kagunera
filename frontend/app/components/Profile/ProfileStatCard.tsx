interface ProfileStatCardsProps {
  aura: number
  comments: number
  bookmarks: number
}

const ProfileStatCards = ({ aura, comments, bookmarks }: ProfileStatCardsProps) => {
  const stats = [
    {
      value: aura,
      label: 'AURA',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#f97316">
          <path d="M12 2C9 7 4 9 4 14a8 8 0 0016 0c0-5-5-7-8-12z"/>
        </svg>
      ),
      valueColor: 'text-orange-400',
    },
    {
      value: comments,
      label: 'COMMENTS',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9b7fe8" strokeWidth="2">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
        </svg>
      ),
      valueColor: 'text-white',
    },
    {
      value: bookmarks,
      label: 'BOOKMARKS',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#9b7fe8">
          <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/>
        </svg>
      ),
      valueColor: 'text-white',
    },
  ]

  return (
    <div className="flex justify-between gap-5">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="w-[308px] flex items-center gap-3 px-4 py-3 rounded-xl border-2 border-[#312f40] bg-[#1b1922]"
        >
          <div className="shrink-0">{stat.icon}</div>
          <div>
            <div className={`text-lg font-bold leading-tight ${stat.valueColor}`}>
              {stat.value}
            </div>
            <div className="text-[10px] text-gray-500 tracking-widest font-medium">
              {stat.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProfileStatCards