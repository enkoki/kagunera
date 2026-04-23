"use client";

import Navbar from "./components/Navbar/Navbar"
import HomeBody from "./components/HomePage/home";
import Picture from "./assets/icons/title";
import Buttons from "./assets/icons/homebutton";
import useAuth from "./hooks/useAuth";


export default function Home() {
  const {isLoggedIn} = useAuth()
  return (
    <>
      <Navbar isloggedin={isLoggedIn} />
      <div className="relative w-screen h-screen bg-black pt-[70px] md:pt-[75px]">
        <HomeBody >
          <Picture />
          <div className="z-20 flex flex-col justify-center items-center lg:items-start gap-5">
            <h4 className=" text-[15px] sm:text-[18px] text-[#807f7f] font-black text-center">
              Start Tracking your watch list from today
            </h4>
            <Buttons />
          </div>
        </HomeBody>

      </div>
    </>
  );
}
