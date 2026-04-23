import useAuth from "@/app/hooks/useAuth";
import React, { useEffect, useState } from "react";
import { User, History, Settings, ChevronRight, LogOut } from "lucide-react";
import useAvatar from "@/app/hooks/useAvatar";
import { getUserByUsername } from "@/app/lib/user";
import Link from "next/link";

interface Props {
	isOpen: boolean;
	setIsOpen: (value: boolean) => void;
	avatarUrl?: string;
}

interface UserData {
	username: string;
	email: string;
}

const Dropdown = ({ isOpen, setIsOpen }: Props) => {
	const { setIsLoggedIn, username: authUsername } = useAuth();
	const { avatar } = useAvatar();

	const [isValidating, setIsValidating] = useState(false);
	const [user, setUser] = useState<UserData | null>(null);
	const [userExists, setUserExists] = useState(true); 

	useEffect(() => {
		const checkUser = async () => {
			if (!authUsername || !isOpen) return;

			setIsValidating(true);
			const result = await getUserByUsername(authUsername);

			if (result.success) {
				setUser(result.user);
				setUserExists(true);
			} else {
				setUserExists(false);
			}
			setIsValidating(false);
		};

		checkUser();
	}, [authUsername, isOpen]);

	const handleLogout = () => {
		localStorage.removeItem("kagunera_token");
		setIsLoggedIn(false);
		window.location.href = "/";
	};

	if (!isOpen) return null;

	return (
		<div className="absolute top-14 right-0 mt-2 w-80 bg-[#1a1a24] rounded-xl text-white border border-white/5 shadow-2xl z-200 overflow-hidden p-4 flex flex-col gap-4">
			<div className="flex items-center gap-3 px-2 py-1">
				<img
					src={avatar}
					alt="Avatar"
					className="w-12 h-12 rounded-full border border-orange-500/50 object-cover"
				/>
				<div className="flex flex-col">
					{isValidating ? (
						<div className="h-4 w-24 bg-white/10 animate-pulse rounded mb-1" />
					) : !userExists ? (
						<span className="text-red-400 text-sm">User not found</span>
					) : (
						<>
							<span className="font-bold text-lg leading-none">
								{user?.username || "User"}
							</span>
							<span className="text-gray-400 text-sm">{user?.email || ""}</span>
						</>
					)}
				</div>
			</div>

			<div className="h-px bg-white/10 w-full" />

			<div className="flex flex-col gap-2" onClick={() => setIsOpen(false)}>
				<MenuLink
					icon={<User size={20} />}
					label="Profile"
					sublabel="View your public profile"
					route = "profile"
				/>
				<MenuLink
					icon={<History size={20} />}
					label="History"
					sublabel="Your reading history"
				/>
				<MenuLink
					icon={<Settings size={20} />}
					label="Settings"
					sublabel="Manage your account"
				/>
			</div>

			{/* Sign Out Button */}
			<button
				onClick={handleLogout}
				className="mt-2 flex items-center justify-center gap-2 w-full py-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-gray-300 font-medium"
			>
				<LogOut size={18} />
				Sign out
			</button>
		</div>
	);
};

const MenuLink = ({
	icon,
	label,
	sublabel,
	route,
}: {
	icon: React.ReactNode;
	label: string;
	sublabel: string;
	route?: string;
}) => (
	<Link href={`/${route}`}><div className="flex items-center justify-between p-2 hover:bg-white/5 rounded-lg cursor-pointer group transition-all">
		<div className="flex items-center gap-4">
			<div className="p-2 bg-white/10 rounded-lg group-hover:bg-purple-500/20 text-purple-400 transition-colors">
				{icon}
			</div>
			<div className="flex flex-col">
				<span className="text-sm font-semibold">{label}</span>
				<span className="text-xs text-gray-500">{sublabel}</span>
			</div>
		</div>
		<ChevronRight
			size={16}
			className="text-gray-600 group-hover:translate-x-1 transition-transform"
		/>
	</div></Link>
);

export default Dropdown;
