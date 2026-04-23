"use client";
import React, { useState, useEffect } from "react";
import { useParams, notFound } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import useAuth from "@/app/hooks/useAuth";
import ProfileBanner from "@/components/Profile/ProfileBanner";
import ProfileTabs from "@/components/Profile/ProfileTabs";
import ProfileOverview from "@/components/Profile/ProfileOverview";
import ProfileComments from "@/components/Profile/ProfileComments";
import ProfileHead from "@/app/components/Profile/ProfileHead";
import { getUserByUsername } from "@/lib/user";

const ProfilePage = () => {
	const params = useParams();
	const urlUsername = Array.isArray(params?.username)
		? params.username[0]
		: params?.username;

	const { isLoggedIn, authLoading } = useAuth();

	const [activeTab, setActiveTab] = useState<"Overview" | "Comments">(
		"Overview",
	);
	const [isValidating, setIsValidating] = useState(true);
	const [userExists, setUserExists] = useState(true);
	const [user, setUser] = useState<any>(null);

	useEffect(() => {
		const checkUser = async () => {
			if (!urlUsername) return;

			setIsValidating(true);

			const result = await getUserByUsername(urlUsername);

			if (!result.success) {
				setUserExists(false);
			} else {
				setUser(result.user);
				setUserExists(true);
			}

			setIsValidating(false);
		};

		checkUser();
	}, [urlUsername]);

	if (!isValidating && !userExists) {
		notFound();
	}

	useEffect(() => {
		if (user?.username) {
			document.title = `${user.username}'s profile · Kagunera`;
		}
	}, [user]);

	if (authLoading || isValidating) {
		return (
			<div className="flex justify-center items-center h-screen bg-[#100f17] text-gray-500">
				<div className="animate-pulse text-xl">Loading Profile...</div>
			</div>
		);
	}

	return (
		<>
			<Navbar isloggedin={isLoggedIn} />
			<div className="bg-[#100f17] text-white pt-[80px] md:pt-[75px]">
				<div className="max-w-[1280px] mx-auto px-4 pb-20 mt-[25px]">
					<ProfileBanner />
					<ProfileHead username={urlUsername || ""} userData={user} />
					<ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />

					<div className="mt-6">
						{activeTab === "Overview" && <ProfileOverview />}
						{activeTab === "Comments" && <ProfileComments />}
					</div>
				</div>
			</div>
		</>
	);
};

export default ProfilePage;
