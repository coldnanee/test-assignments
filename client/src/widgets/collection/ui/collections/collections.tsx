import { useGetCollectionsQuery, CollectionList } from "@/entities/collection";

import { Loader, Container } from "@/shared";

export const Collections = () => {
	const { data, isLoading, isError } = useGetCollectionsQuery();

	if (isLoading) {
		return (
			<Loader
				className="my-[100px] flex justify-center"
				spinning
				iconSize={50}
			/>
		);
	}

	if (!data) {
		return;
	}

	if (isError) {
		return;
	}

	return (
		<>
			<Container>
				<CollectionList list={data.docs} />
			</Container>
		</>
	);
};
