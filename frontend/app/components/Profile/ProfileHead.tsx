import React from 'react'
import ProfileBanner from './ProfileBanner'
import ProfileHeader from './ProfileHeader'
import ProfileStatCards from './ProfileStatCard'

const ProfileHead = ({username = ""}) => {
  return (
    <>
        <div className='bg-[#16131d] px-8 -mt-[78px] rounded-bl-2xl rounded-br-2xl mb-6'>
            {/* <ProfileBanner /> */}
            <ProfileHeader username={username} joinedDate='today'/>
            <div className='py-6'>
            <ProfileStatCards aura={4} comments={4} bookmarks={14} />
            </div>
        </div>
    </>
  )
}

export default ProfileHead