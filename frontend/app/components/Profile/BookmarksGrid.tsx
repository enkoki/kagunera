import Image, { StaticImageData } from "next/image";

interface Bookmark {
	title: string;
	thumbnail?: string | StaticImageData;
	cover?: string;
}

interface BookmarksGridProps {
	bookmarks: Bookmark[];
}

const BookmarksGrid = ({ bookmarks }: BookmarksGridProps) => (
	<div>
		<p className="text-[11px] font-bold tracking-[0.15em] text-gray-500 uppercase mb-4">
			Bookmarks ({bookmarks.length})
		</p>
		<div className="grid grid-cols-6 gap-4">
			{bookmarks.map((bm, i) => {
				const src = bm.thumbnail ?? bm.cover ?? null;
				return (
					<div key={i} className="flex flex-col gap-2 cursor-pointer group">
						<div className="relative w-[201px] h-[302px] rounded-lg overflow-hidden bg-[#1e1a2e] border border-[#2a2440] group-hover:opacity-60 transition-all">
							{src ? (
								<Image
									src={src}
									fill
									alt={bm.title}
									className="object-cover transition-transform duration-300"
								/>
							) : (
								<div className="absolute inset-0 flex items-center justify-center p-2">
									<span className="text-[9px] text-gray-600 text-center leading-tight group-hover:text-gray-400 transition-colors">
										{bm.title.slice(0, 24)}
									</span>
								</div>
							)}
						</div>
						<span className="text-[11px] text-gray-400 leading-tight line-clamp-2 group-hover:text-white transition-colors">
							{bm.title}
						</span>
					</div>
				);
			})}
		</div>
	</div>
);

export default BookmarksGrid;
