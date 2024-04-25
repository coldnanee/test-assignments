import { $api } from "@/shared";
import { useQuery } from "@tanstack/react-query";
import type { TGetList } from "@/shared";
import type { TCollection } from "../types";

export const getCollections = async () => {
	const { data } = await $api.get<TGetList<TCollection>>("/list");
	return data;
};

export const useGetCollectionsQuery = () =>
	useQuery({
		queryKey: ["collections"],
		queryFn: () => getCollections()
	});
