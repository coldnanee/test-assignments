import { useGetCollectionsQuery } from "@/entities/collection";

export const Collections = () => {
	const { data, isLoading, isError } = useGetCollectionsQuery();

	return <></>;
};
