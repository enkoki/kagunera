import Image from 'next/image'
import useAvatar from '@/app/hooks/useAvatar'

interface ProfileHeaderProps {
  username: string
  joinedDate: string
}

const ProfileHeader = ({ username, joinedDate }: ProfileHeaderProps) => {
  const { avatar } = useAvatar()

  return (
    <div className="flex items-end gap-5 mb-6 relative z-10">
      <div className="relative w-[112px] h-[112px] shrink-0 rounded-xl overflow-hidden shadow-2xl">
        <Image
          src={avatar || '/default-avatar.png'}
          fill
          alt="avatar"
          className="object-cover"
        />
      </div>
      <div className="pb-2">
        <h1 className="text-2xl font-bold text-white leading-tight">{username}</h1>
        <p className="text-sm text-gray-400 mt-1">Joined {joinedDate}</p>
      </div>
    </div>
  )
}

export default ProfileHeader