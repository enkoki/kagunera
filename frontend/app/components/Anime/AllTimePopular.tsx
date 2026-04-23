"use client";
import React, { useEffect, useState } from 'react';
import { Anime, fetchAllTimePopularAnime } from '@/app/lib/fetchAnimes';
import HomeGrid from '@/app/components/Cards/HomeGrid';
import Spinner from '@/app/assets/icons/Spinner';

const AllTimePopular = () => {
    const [animes, setAnimes] = useState<Anime[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const loadAllTimePopular = async () => {
        setLoading(true);
        const res = await fetchAllTimePopularAnime(1, 8); 
        setAnimes(res.data);
        setLoading(false);
    }
    const timer = setTimeout(() => {
        loadAllTimePopular();
    }, 1000);
    }, []);

    return (
        <>
            <div className='w-full flex justify-center'>
                <div className='text-[#adc0d2] w-full max-w-[1700px] px-4 sm:px-6 md:px-8 flex flex-col'>
                    <div className='flex justify-between items-center mb-4'>
                        <span className='md:text-xl font-bold'>ALL TIME POPULAR</span>
                        <span className='text-[10px] md:text-[15px] font-bold text-[#576877]'>View All</span>
                    </div>

                    {loading 
                        ? <Spinner />
                        : <HomeGrid animes={animes} />}
                </div>
            </div>
        </>
    )
}

export default AllTimePopular;