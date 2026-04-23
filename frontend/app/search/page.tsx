"use client";
import React, { useEffect, useState, Suspense } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Search from '../components/Search/Search';
import { useSearchParams } from 'next/navigation';
import { Anime, fetchSearchAnime, fetchAllTimePopularAnime } from '../lib/fetchAnimes';
import AnimeGrid from '../components/Cards/HomeGrid';
import Spinner from '../assets/icons/Spinner';

const SearchResults = () => {
    const searchParams = useSearchParams();
    const query = searchParams.get("q");

    const [anime, setAnime] = useState<Anime[]>([]);
    const [loading, setLoading] = useState(false);
    const [pageNum, setPageNum] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const loadAnime = async () => {
            setLoading(true);
            let res;
            if (!query) {
                res = await fetchAllTimePopularAnime(pageNum, 24);
            } else {
                res = await fetchSearchAnime(query, pageNum, 12);
            }
            setAnime(res.data);
            setTotalPages(res.pagination.last_visible_page);
            setLoading(false);
        };

        loadAnime();
    }, [query, pageNum]);

    return (
        <>
            <div className="px-4 sm:px-6 md:px-20 text-[#adc0d2] flex flex-col justify-center items-start">
                {!query && <h2 className="text-xl mb-4 font-bold self-start">Most Popular Anime</h2>}
                {query && (
                    <h2 className="text-xl mb-4 font-bold self-start">
                        Results for <span className='bg-[#1b1922] text-white px-2 py-1 rounded-md font-semibold'>{query}</span>
                    </h2>
                )}
                {loading && <Spinner />}
                {!loading && <AnimeGrid animes={anime} />}
            </div>

            {!loading && (
                <div className='flex justify-center items-center gap-5 mb-5'>
                    <button
                        onClick={() => setPageNum(prev => Math.max(prev - 1, 1))}
                        disabled={pageNum === 1 || loading}
                        className={`w-24 cursor-pointer transition-all duration-200 flex justify-center items-center text-white font-bold px-6 py-2 rounded-md border ${
                            pageNum === 1 || loading ? "bg-[#1b1922] cursor-not-allowed border-white/5" : "bg-[#1b1922] hover:bg-[#4a2a8a] border-[#4a2a8a]"
                        }`}
                    >
                        Previous
                    </button>

                    <button
                        onClick={() => setPageNum(prev => Math.min(prev + 1, totalPages))}
                        disabled={pageNum === totalPages || loading}
                        className={`w-24 cursor-pointer transition-all duration-200 flex justify-center items-center text-white font-bold px-6 py-2 rounded-md  border ${
                            pageNum === totalPages || loading ?"bg-[#1b1922] cursor-not-allowed border-white/5" : "bg-[#1b1922] hover:bg-[#4a2a8a] border-[#4a2a8a]"
                        }`}
                    >
                        Next
                    </button>
                </div>
            )}
        </>
    );
};

const SearchPage = () => {
    return (
        <>
            <Navbar />
            <div className='h-[60px] md:h-[80px]'></div>            
            <Suspense fallback={<div className="flex justify-center p-10"><Spinner /></div>}>
                <SearchResults />
            </Suspense>
        </>
    );
};

export default SearchPage;