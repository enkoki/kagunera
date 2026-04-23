"use client";
import { useState, useEffect } from "react";
import ActivityFeed from "./ActivityFeed";
import BookmarksGrid from "./BookmarksGrid";
import AchievementsList from "./AcheivementsList";
import { fetchProfileAnime } from "@/lib/jikan/anime";

const ITEMS_PER_PAGE = 5;

const ACHIEVEMENTS: any = [];

const ProfileOverview = () => {
	const [page, setPage] = useState(1);
	const [activity, setActivity] = useState<any[]>([]);
	const [bookmarks, setBookmarks] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const load = async () => {
			try {
				const { activityItems, bookmarkItems } = await fetchProfileAnime();
				setActivity(activityItems);
				setBookmarks(bookmarkItems);
			} catch (err) {
				console.error("Jikan fetch failed:", err);
			} finally {
				setLoading(false);
			}
		};
		load();
	}, []);

	const totalPages = Math.ceil(activity.length / ITEMS_PER_PAGE);
	const pagedActivity = activity.slice(
		(page - 1) * ITEMS_PER_PAGE,
		page * ITEMS_PER_PAGE,
	);

	if (loading) {
		return (
			<div className="text-gray-500 text-sm py-10 text-center">Loading...</div>
		);
	}

	return (
		<div className="flex flex-col gap-8">
			<ActivityFeed
				items={pagedActivity}
				page={page}
				setPage={setPage}
				totalPages={totalPages}
			/>
			<BookmarksGrid bookmarks={bookmarks} />
			{/* <AchievementsList achievements={ACHIEVEMENTS} /> */}
		</div>
	);
};

export default ProfileOverview;
