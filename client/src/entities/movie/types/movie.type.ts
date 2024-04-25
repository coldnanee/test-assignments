type TCountry = {
	name: string;
};

type TPoster = {
	previewUrl: string;
	url: string;
};

type TRating = {
	filmCritics: number;
	imdb: number;
	kp: number;
};

export type TMovie = {
	poster: TPoster;
	countries: TCountry[];
	id: number;
	name: string;
	year: number;
	description: string;
	isSeries: boolean;
	ageRating: number;
	moviesLength: number;
	rating: TRating;
	shortDescription: string;
};
