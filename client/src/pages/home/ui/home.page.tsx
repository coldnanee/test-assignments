import { useEffect } from "react";

import { Movies } from "@/widgets/movie";

export const HomePage = () => {
	useEffect(() => {
		document.title = "Главная";
	}, []);

	return (
		<>
			<Movies />
		</>
	);
};
