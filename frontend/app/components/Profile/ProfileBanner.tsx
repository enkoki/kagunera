import useAvatar from "@/app/hooks/useAvatar";
import Image from "next/image";

function ProfileBanner() {
	const { banner } = useAvatar();

	return (
		<div className="relative h-[192px] w-full overflow-hidden rounded-tl-2xl rounded-tr-2xl">
			<div
				className="absolute inset-0"
				style={{
					background:
						"linear-gradient(135deg, #2a1a4e 0%, #1a1030 60%, #3d1a6e 100%)",
				}}
			/>
			{banner && (
				<Image
					src={banner}
					alt="banner"
					fill
					className="object-cover object-center"
				/>
			)}
			<div className="absolute inset-0 bg-linear-to-t from-[#16131d] to-transparent" />
		</div>
	);
}

export default ProfileBanner;
