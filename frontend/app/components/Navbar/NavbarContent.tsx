"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import Variant from "../Button/Variant";
import LoggedIn from "../LoggedIn/LoggedIn";
import Hamburger from "@/app/assets/icons/Hamburger";
import Sidebar from "../Sidebar/Sidebar";
import SearchIcon from '@/app/assets/icons/SearchIcon'

const NavbarContent = ({ isloggedin = false }) => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    
    const urlQuery = searchParams.get("q") ?? "";
    const [query, setQuery] = useState(urlQuery);

    useEffect(() => {
        setQuery(urlQuery);
    }, [urlQuery]);

    // Debounced Search Logic
    useEffect(() => {
        if (!query.trim() && pathname !== "/search") return;

        const timer = setTimeout(() => {
            if (query.trim()) {
                router.push(`/search?q=${encodeURIComponent(query)}`);
            } else if (pathname === "/search") {
                router.push(`/search`);
            }
        }, 400);

        return () => clearTimeout(timer);
    }, [query, router, pathname]);

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            router.push(`/search?q=${encodeURIComponent(query)}`);
        }
    };

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
                                <Link href="/bookmarks">Bookmarks</Link>
                            </li>
                            <li className={pathname === "/profile" ? "text-[#4a2a8a]" : ""}>
                                <Link href="/search">Browse</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="flex gap-4 items-center">
                    <form onSubmit={handleSearchSubmit} className="hidden md:flex">
                        <div className="bg-[#1b1922] w-full min-w-[200px] lg:min-w-[300px] h-[40px] rounded-xl flex items-center px-3 border border-white/5 focus-within:border-[#4a2a8a]/50 transition-all">
                            <SearchIcon width="18" height="18" className="text-[#516170]" />
                            <input
                                type="search"
                                placeholder="Search anime..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="outline-none px-3 w-full bg-transparent text-sm text-gray-200 placeholder:text-[#516170]"
                            />
                        </div>
                    </form>

                    <div className="flex items-center justify-end">
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

export default NavbarContent;