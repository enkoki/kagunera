"use client";

import Navbar from "./components/Navbar/Navbar";
import useAuth from "./hooks/useAuth";
import Trending from "./components/Anime/Trending";
import AllTimePopular from "./components/Anime/AllTimePopular";
import Upcoming from "./components/Anime/Upcoming";
import LB from "./components/Leaderboard/LB";

export default function Home() {
	const { isLoggedIn } = useAuth();
	return (
		<>
			<Navbar isloggedin={isLoggedIn} />
			<Trending />
			<AllTimePopular />
			<Upcoming />
			<LB />
		</>
	);
}
