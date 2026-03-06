import Image from "next/image"
import useAuth from "@/app/hooks/useAuth"
import useAvatar from "@/app/hooks/useAvatar"

const ProfileSection = () => {
    const { username, uuid } = useAuth()
    const { avatar } = useAvatar()

    return (
        <div className="flex items-center gap-4 mb-8 p-2 bg-neutral-800/30 rounded-2xl border border-neutral-800/50">
            <div className="relative shrink-0">
                <Image src={avatar} width={50} height={50} alt="profile" className='rounded-full border-2 border-[#6200ED]' />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-neutral-900 rounded-full"></div>
            </div>
            <div className="flex flex-col min-w-0">
                <p className="text-white text-sm font-bold truncate">{username}</p>
                <p className="text-neutral-500 text-[10px] font-mono truncate uppercase tracking-tighter">
                    {uuid?.split('-')[0]}...
                </p>
            </div>
        </div>
    )
}
export default ProfileSection