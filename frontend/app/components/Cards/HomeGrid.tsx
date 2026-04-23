"use client";

import Image from 'next/image';
import React from 'react';
import { Anime } from '@/app/lib/fetchAnimes';
import { usePathname } from 'next/navigation';

interface AnimeGridProps {
    animes: Anime[];
    className?: String;
}

const AnimeGrid: React.FC<AnimeGridProps> = ({ animes, className }) => {
    const pathname = usePathname()
    const style = `grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 ${pathname == "/" ? "xl:grid-cols-8" : "2xl:grid-cols-8"} gap-x-6 gap-y-8 mb-16 xl:mb-5`

    if (!animes || animes.length === 0) return <p className="text-gray-400">No anime found.</p>;

    return (
        <div className={`${className ? className : style}`}>
            {animes.map((anime) => (
                <div key={anime.mal_id} className='transition-all duration-200 cursor-pointer flex flex-col items-center hover:scale-105 hover:text-[#79c3ef]'>
                    <div className='w-[185px] h-[265px] relative'>
                        <Image
                            src={anime.images.jpg.image_url}
                            alt={anime.title}
                            fill
                            className='rounded-md object-cover'
                        />
                    </div>
                    <span className='mt-3 text-center text-sm md:text-base font-semibold'>
                        {anime.title_english ?? anime.title}
                    </span>
                </div>
            ))}
        </div>
    );
}

export default AnimeGrid;