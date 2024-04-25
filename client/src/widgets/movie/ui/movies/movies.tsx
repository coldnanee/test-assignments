import { Container, Loader } from "@/shared";
import { MovieList, useGetMovies } from "@/entities/movie";

export const Movies = () => {
	const { data, isError, isLoading } = useGetMovies();

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
			<Container className="py-[20px]">
				<MovieList list={data.docs} />
			</Container>
		</>
	);
};
