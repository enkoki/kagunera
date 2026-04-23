import { Anime } from '@/app/lib/fetchAnimes';
import Image from 'next/image';
import React, { useState } from 'react'

interface AnimeGridProps {
    animes: Anime[];
}

const LBCard: React.FC<AnimeGridProps> = ({ animes }) => {
  return (
    <div className="flex-col gap-3 hidden lg:flex">
      {animes.map((anime, index) => (
        <div key={anime.mal_id} className="flex items-center gap-3 w-full">
          
          <div className="w-10 text-right text-lg font-bold text-[#6f8293]">
            #{index + 1}
          </div>

          <div className="transition-all duration-200 flex items-center bg-[#1b1922] shadow-md rounded-lg px-5 py-3 gap-4 flex-1">
            <div className="w-[48px] h-[60px] relative">
              <Image
                src={anime.images.jpg.image_url}
                alt={anime.title}
                fill
                className="rounded-md object-cover"
              />
            </div>

            <div className="flex justify-between items-center flex-1">
              <div className="flex flex-col gap-1">
                <span className="text-sm md:text-base font-semibold">
                  {anime.title_english ?? anime.title}
                </span>

                <div className="flex gap-1 flex-wrap">
                  {anime.genres.slice(0, 3).map((genre) => (
                    <span
                      key={genre.mal_id}
                      className="text-xs text-[#9fadbd] bg-[#0f1724] px-2 py-0.5 rounded"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 text-sm text-[#9fadbd]">
                <div className='flex flex-col justify-center items-center'>
                  <span className='font-bold text-[#a9bbcc]'>Score</span>
				  <span className='text-[10px] text-[#748899] font-semibold'>{anime.score ?? "N/A"}</span>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <span className='font-bold text-[#a9bbcc]'>Episodes</span>
				  <span className='text-[10px] text-[#748899] font-semibold'>{anime.episodes ?? "?"}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default LBCard