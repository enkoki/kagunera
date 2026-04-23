"use client"
import { useState } from 'react'
import ActivityFeed from './ActivityFeed'
import BookmarksGrid from './BookmarksGrid'
import AchievementsList from './AcheivementsList'
import {anime as BOOKMARKS} from './localdb'

const ACTIVITY = [
  { title: 'Reincarnation of the Fist King', chapter: 'Chapter 49', time: '1d Ago', cover: '' },
  { title: 'I Became the First Prince: Legend of Sword\'s Song', chapter: 'Chapter 32', time: '1d Ago', cover: '' },
  { title: 'Return of the Mount Hua Sect', chapter: 'Chapter 159', time: '1d Ago', cover: '' },
  { title: "Immortal's Way of Life", chapter: 'Chapter 8', time: '3d Ago', cover: '' },
  { title: "The Margrave's Worthless Mage", chapter: 'Chapter 1', time: '3d Ago', cover: '' },
]


const ACHIEVEMENTS = [
  { name: 'Joker', desc: 'Cleared the hidden April Fools quest', rarity: 'Mythic' },
]

const ProfileOverview = () => {
  const [page, setPage] = useState(1)
  const totalPages = 5

  return (
    <div className="flex flex-col gap-8">
      <ActivityFeed items={ACTIVITY} page={page} setPage={setPage} totalPages={totalPages} />
      <BookmarksGrid bookmarks={BOOKMARKS} />
      <AchievementsList achievements={ACHIEVEMENTS} />
    </div>
  )
}

export default ProfileOverview