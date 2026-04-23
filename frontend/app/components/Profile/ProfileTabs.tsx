"use client"

interface ProfileTabsProps {
  activeTab: 'Overview' | 'Comments'
  setActiveTab: (tab: 'Overview' | 'Comments') => void
}

const ProfileTabs = ({ activeTab, setActiveTab }: ProfileTabsProps) => (
  <div className="flex rounded-xl overflow-hidden border border-[#2a2440] mb-6 bg-[#13101e]">
    <button
      onClick={() => setActiveTab('Overview')}
      className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-semibold transition-all ${
        activeTab === 'Overview'
          ? 'bg-[#4a2a8a] text-white'
          : 'text-gray-400 hover:text-white'
      }`}
    >
      <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
        <rect x="1" y="1" width="6" height="6" rx="1"/>
        <rect x="9" y="1" width="6" height="6" rx="1"/>
        <rect x="1" y="9" width="6" height="6" rx="1"/>
        <rect x="9" y="9" width="6" height="6" rx="1"/>
      </svg>
      Overview
    </button>
    <button
      onClick={() => setActiveTab('Comments')}
      className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-semibold transition-all ${
        activeTab === 'Comments'
          ? 'bg-[#4a2a8a] text-white'
          : 'text-gray-400 hover:text-white'
      }`}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
      Comments <span className="text-xs opacity-60">(4)</span>
    </button>
  </div>
)

export default ProfileTabs