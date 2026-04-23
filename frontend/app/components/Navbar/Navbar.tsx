"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

import Variant from "../Button/Variant";
import LoggedIn from "../LoggedIn/LoggedIn";
import Hamburger from "@/app/assets/icons/Hamburger";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = ({ isloggedin = false }) => {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	return (
		<>
			<header className="w-full h-[58px] md:h-[64px] px-6 xl:px-20 flex items-center bg-[#100f17] shadow-2xl fixed z-40">
				
				<div className="flex items-center gap-6 flex-1">
					<div className="flex items-center gap-3">
						<div className="text-[28px] font-extrabold text-[#4a2a8a]">
							Kagunera
						</div>
						<div className="text-[#ffbf00] bg-[#ba9627]/50 px-2 py-1 rounded-2xl text-[11px]">
							Educational
						</div>
					</div>

					<nav className="hidden xl:flex">
						<ul className="flex gap-6 font-medium text-[16px] items-center">
							<li className={pathname === "/" ? "text-[#4a2a8a]" : ""}>
								<Link href="/">Home</Link>
							</li>
							<li className={pathname === "/about" ? "text-[#4a2a8a]" : ""}>
								<Link href="/about">Bookmarks</Link>
							</li>
							<li className={pathname === "/profile" ? "text-[#4a2a8a]" : ""}>
								<Link href="/profile">Browse</Link>
							</li>
						</ul>
					</nav>
				</div>

                <div className="flex gap-4">
				<div className="hidden md:flex">
					<div className="bg-[#1b1922] w-full max-w-[720px] h-[44px] rounded-xl flex items-center px-2">
						<input
							type="search"
							placeholder="Search..."
							className="outline-none px-3 w-full bg-transparent text-sm"
						/>
					</div>
				</div>

				<div className="flex items-center justify-end flex-1">
					{isloggedin ? (
						<div className="hidden xl:flex">
							<LoggedIn />
						</div>
					) : (
						<div className="hidden xl:flex">
							<Variant content="Log In" />
						</div>
					)}

					{!isOpen && (
						<Hamburger
							width={30}
							height={30}
							className="xl:hidden cursor-pointer ml-4"
							onClick={() => setIsOpen(true)}
						/>
					)}
				</div>
                </div>
			</header>

			{isOpen && <Sidebar setIsOpen={setIsOpen} isOpen={isOpen} />}
		</>
	);
};

export default Navbar;