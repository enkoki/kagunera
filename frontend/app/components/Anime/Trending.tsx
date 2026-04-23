"use client";
import React, { useEffect, useState } from "react";
import { Anime, fetchTrendingAnime } from "@/app/lib/fetchAnimes";
import HomeGrid from "@/app/components/Cards/HomeGrid";
import Spinner from "@/app/assets/icons/Spinner";

const Trending = () => {
	const [animes, setAnimes] = useState<Anime[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const loadTrending = async () => {
			setLoading(true);
			const data = await fetchTrendingAnime(8);
			setAnimes(data);

			setLoading(false);
		};

		const timer = setTimeout(() => {
			loadTrending();
		}, 1000);
	}, []);

	return (
		<>
			<div className="flex justify-center items-center relative bottom-5 bg-[#100f17] h-[40px] md:h-[55px] xl:h-[60px] z-0">
				<div className="font-semibold md:text-xl text-[10px] text-[#728aa1]"></div>
			</div>
			<div className="w-full flex justify-center flex-col items-center pt-10">
				<div className="text-[#adc0d2] w-full max-w-[1700px] px-4 sm:px-6 md:px-8 flex flex-col">
					<div className="flex justify-between items-center mb-4">
						<span className="md:text-xl font-bold">TRENDING NOW</span>
						<span className="text-[10px] md:text-[15px] font-bold text-[#576877]">
							View All
						</span>
					</div>

					{loading ? <Spinner /> : <HomeGrid animes={animes} />}
				</div>
			</div>
		</>
	);
};

export default Trending;
