"use client";

import Navbar from "./components/Navbar/Navbar"
import HomeBody from "./components/HomePage/home";
import Picture from "./assets/icons/title";
import Buttons from "./assets/icons/homebutton";
import useAuth from "./hooks/useAuth";
import Landing from "./components/Landing/Landing";
import Spinner from "./assets/icons/Spinner";
import Trending from "./components/Anime/Trending";
import AllTimePopular from "./components/Anime/AllTimePopular";
import Upcoming from "./components/Anime/Upcoming";
import LB from "./components/Leaderboard/LB";


export default function Home() {
  const {isLoggedIn} = useAuth()
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
