"use client";
import React, { useEffect, useState } from "react";
import { Anime, fetchUpcoming } from "@/app/lib/fetchAnimes";
import HomeGrid from "@/app/components/Cards/HomeGrid";
import Spinner from "@/app/assets/icons/Spinner";

const Upcoming = () => {
	const [animes, setAnimes] = useState<Anime[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const loadUpcoming = async () => {
			setLoading(true);
			const data = await fetchUpcoming(8);
			setAnimes(data);
			setLoading(false);
		};
		const timer = setTimeout(() => {
			loadUpcoming();
		}, 1000);
	}, []);

	return (
		<>
			<div className="w-full flex justify-center">
				<div className="text-[#adc0d2] w-full max-w-[1700px] px-4 sm:px-6 md:px-8 flex flex-col">
					<div className="flex justify-between items-center mb-4">
						<span className="md:text-xl font-bold">UPCOMING</span>
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

export default Upcoming;
