import Image from "next/image";
import useAvatar from "@/app/hooks/useAvatar";

interface ProfileHeaderProps {
	username: string;
	joinedDate: string;
	role_id: number;
}

const ProfileHeader = ({
	username,
	joinedDate,
	role_id,
}: ProfileHeaderProps) => {
	const { avatar } = useAvatar();
	console.log(role_id)
	return (
		<div className="flex items-end gap-5 mb-6 relative z-10">
			<div className={`relative w-[112px] h-[112px] shrink-0 rounded-xl overflow-hidden ${role_id <= 1 ? "border-amber-500 border-3 shadow-amber-500/30} shadow-2xl" : "shadow-2xl" }`}>
				<Image
					src={avatar || "/default-avatar.png"}
					fill
					alt="avatar"
					className="object-cover"
				/>
			</div>
			<div className="pb-2">
				<div className="flex justify-center items-center gap-4">
					<h1 className="text-2xl font-bold text-white leading-tight">
						{username}
					</h1>
					{role_id <= 1 && (
						<div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-linear-to-r from-amber-500 to-orange-500 shadow-lg shadow-red-500/30">
							Admin
						</div>
					)}
				</div>
				<p className="text-sm text-gray-400 mt-1">Joined {joinedDate}</p>
			</div>
		</div>
	);
};

export default ProfileHeader;
