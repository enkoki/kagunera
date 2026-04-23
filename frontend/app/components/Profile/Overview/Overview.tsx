const Overview = () => {
    return (
        <div className="flex flex-col gap-8 w-full animate-in fade-in duration-500">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { label: "Total Watched", value: "124" },
                    { label: "Manga Read", value: "45" },
                    { label: "Days Active", value: "240" }
                ].map((stat, i) => (
                    <div key={i} className="bg-[#0a0a0a] border border-[#1a1a1a] p-8 rounded-2xl">
                        <div className="text-4xl font-extrabold text-white">{stat.value}</div>
                        <div className="text-sm font-medium text-gray-400 uppercase tracking-widest mt-2">{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Main Insights Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Genre Breakdown */}
                <div className="bg-[#0a0a0a] border border-[#1a1a1a] p-8 rounded-2xl">
                    <h3 className="text-xl font-bold text-white mb-8">Genre Distribution</h3>
                    <div className="space-y-6">
                        {[
                            { name: "Shonen", val: "75%", color: "bg-indigo-500" },
                            { name: "Seinen", val: "40%", color: "bg-purple-500" },
                            { name: "Slice of Life", val: "60%", color: "bg-emerald-500" }
                        ].map((genre) => (
                            <div key={genre.name}>
                                <div className="flex justify-between text-base mb-3">
                                    <span className="text-gray-300 font-medium">{genre.name}</span>
                                    <span className="text-white font-bold">{genre.val}</span>
                                </div>
                                <div className="w-full h-3 bg-[#1a1a1a] rounded-full overflow-hidden">
                                    <div className={`${genre.color} h-full rounded-full`} style={{ width: genre.val }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Achievements Section */}
                <div className="bg-[#0a0a0a] border border-[#1a1a1a] p-8 rounded-2xl">
                    <h3 className="text-xl font-bold text-white mb-8">Latest Achievements</h3>
                    <div className="space-y-6">
                        {[
                            { title: "Binge Watcher", desc: "Watched 10 episodes in one day" },
                            { title: "Manga Collector", desc: "Read 50+ chapters this week" },
                            { title: "Early Bird", desc: "Watched 5 series at 6 AM" }
                        ].map((ach, i) => (
                            <div key={i} className="flex items-start gap-4 p-4 bg-[#111] rounded-xl border border-white/5">
                                <div className="text-2xl">🏆</div>
                                <div>
                                    <div className="text-base font-bold text-white">{ach.title}</div>
                                    <div className="text-sm text-gray-400 mt-1">{ach.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Time Tracking Section */}
            <div className="bg-[#0a0a0a] border border-[#1a1a1a] p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4">Total Time Invested</h3>
                <div className="text-5xl font-extrabold text-indigo-500">4,280 <span className="text-2xl text-gray-500">Hours</span></div>
                <p className="text-base text-gray-400 mt-4 leading-relaxed max-w-2xl">
                    You have spent approximately 178 days of your life immersed in anime and manga. That's a significant dedication to the craft!
                </p>
            </div>
        </div>
    );
};

export default Overview