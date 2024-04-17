import type { TBaseEntity } from "@/shared";

type TCover = {
	url: string;
	previewUrl: string;
};

export type TCollection = TBaseEntity & {
	category: string;
	slug: string;
	moviesCount: number;
	cover?: TCover;
	name: string;
};
