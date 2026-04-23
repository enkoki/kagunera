"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import useAuth from "@/app/hooks/useAuth";
import ProfileBanner from "@/components/Profile/ProfileBanner";
import ProfileTabs from "@/components/Profile/ProfileTabs";
import ProfileOverview from "@/components/Profile/ProfileOverview";
import ProfileComments from "@/components/Profile/ProfileComments";
import ProfileHead from "@/app/components/Profile/ProfileHead";
import { useRouter } from "next/navigation";
import { getUserByUsername } from "../lib/user";

const Profile = () => {
	const router = useRouter();
	const [activeTab, setActiveTab] = useState<"Overview" | "Comments">(
		"Overview",
	);
	const { isLoggedIn, authLoading, username } = useAuth();
	const [isValidating, setIsValidating] = useState(false)
	const [userExists, setUserExists] = useState<boolean>()
	const [user, setUser] = useState()

	useEffect(() => {
		if (!isLoggedIn && !authLoading) router.replace("/login");
	}, [router, isLoggedIn, authLoading]);

	useEffect(() => {
		const checkUser = async () => {
			if (!username) return;

			setIsValidating(true);

			const result = await getUserByUsername(username);

			if (!result.success) {
				setUserExists(false);
			} else {
				setUser(result.user);
				setUserExists(true);
			}

			setIsValidating(false);
		};

		checkUser();
	}, [username]);

	if (authLoading)
		return (
			<div className="flex justify-center items-center h-screen bg-[#0d0b14] text-gray-500">
				Loading...
			</div>
		);
	if (!isLoggedIn) return null;

	return (
		<>
			<Navbar isloggedin={isLoggedIn} />
			<div className=" bg-[#0f0f1a] text-white pt-[80px] md:pt-[75px]">
				{/* Banner outside the padded container so it goes full width */}

				<div className="max-w-[1280px] mx-auto px-4 pb-20 mt-[25px]">
					<ProfileBanner />
					<ProfileHead username={username} userData={user}/>
					<ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />
					{activeTab === "Overview" && <ProfileOverview />}
					{activeTab === "Comments" && <ProfileComments />}
				</div>
			</div>
		</>
	);
};

export default Profile;
