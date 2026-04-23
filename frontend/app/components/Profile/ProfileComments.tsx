const ProfileComments = () => (
	<div className="flex flex-col gap-4">
		{[1, 2, 3, 4].map((i) => (
			<div
				key={i}
				className="px-4 py-3 rounded-xl bg-[#13101e] border border-[#2a2440]"
			>
				<div className="flex items-center gap-2 mb-2">
					<div className="w-6 h-6 rounded-full bg-[#2a2440]" />
					<span className="text-xs text-gray-400">Manga Title</span>
					<span className="text-[10px] text-gray-600 ml-auto">2d Ago</span>
				</div>
				<p className="text-sm text-gray-300">Comment text goes here...</p>
			</div>
		))}
	</div>
);

export default ProfileComments;
