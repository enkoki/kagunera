const CHAPTERS = [
	"Chapter 1",
	"Chapter 8",
	"Chapter 32",
	"Chapter 49",
	"Chapter 80",
	"Chapter 120",
	"Chapter 159",
	"Episode 1",
	"Episode 7",
	"Episode 12",
];

const TIMES = ["1d Ago", "2d Ago", "3d Ago", "1w Ago", "2w Ago"];

function shuffle<T>(arr: T[]): T[] {
	const a = [...arr];
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}

function rand<T>(arr: T[]): T {
	return arr[Math.floor(Math.random() * arr.length)];
}

export async function fetchProfileAnime() {
	const randomPage = Math.ceil(Math.random() * 5);
	const res = await fetch(
		`https://api.jikan.moe/v4/top/anime?page=${randomPage}&limit=25`,
	);
	const json = await res.json();
	const data: any[] = json.data || [];
	const shuffled = shuffle(data);

	const activityItems = shuffled.slice(0, 25).map((anime) => ({
		title: anime.title,
		chapter: rand(CHAPTERS),
		time: rand(TIMES),
		cover: anime.images?.jpg?.image_url || "",
	}));

	const bookmarkItems = shuffled.slice(0, 12).map((anime) => ({
		title: anime.title,
		cover: anime.images?.jpg?.image_url || "",
		mal_id: anime.mal_id,
		score: anime.score,
	}));

	return { activityItems, bookmarkItems };
}
