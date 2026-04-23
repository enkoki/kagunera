interface Achievement {
  name: string
  desc: string
  rarity: 'Common' | 'Rare' | 'Epic' | 'Mythic' | string
}

const rarityColors: Record<string, string> = {
  Mythic: 'bg-red-900/40 text-red-400 border-red-800/50',
  Epic: 'bg-purple-900/40 text-purple-400 border-purple-800/50',
  Rare: 'bg-blue-900/40 text-blue-400 border-blue-800/50',
  Common: 'bg-gray-800/40 text-gray-400 border-gray-700/50',
}

const AchievementsList = ({ achievements }: { achievements: Achievement[] }) => (
  <div>
    <p className="text-[11px] font-bold tracking-[0.15em] text-gray-500 uppercase mb-4">Achievements</p>
    <div className="flex flex-col gap-3">
      {achievements.map((ach, i) => (
        <div
          key={i}
          className="flex items-center gap-4 px-4 py-3 rounded-xl bg-[#13101e] border border-[#2a2440]"
        >
          <div className="w-10 h-10 rounded-lg bg-[#1e1a2e] border border-[#3a2a5a] flex items-center justify-center shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#9b7fe8">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-bold text-white">{ach.name}</div>
            <div className="text-xs text-gray-500 mt-0.5">{ach.desc}</div>
          </div>
          <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md border tracking-wide ${rarityColors[ach.rarity] || rarityColors.Common}`}>
            {ach.rarity}
          </span>
        </div>
      ))}
    </div>
  </div>
)

export default AchievementsList