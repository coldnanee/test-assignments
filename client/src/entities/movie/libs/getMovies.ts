import { $api, type TGetList } from "@/shared";
import { useQuery } from "@tanstack/react-query";
import { TMovie } from "../types/movie.type";

export const getMovies = async () => {
	const { data } = await $api.get<TGetList<TMovie>>("/movie");
	return data;
};

export const useGetMovies = () =>
	useQuery({
		queryFn: () => getMovies(),
		queryKey: ["mvoies"]
	});
