import { useEffect } from "react";

import { Collections } from "@/widgets/collection";

export const HomePage = () => {
	useEffect(() => {
		document.title = "Главная";
	}, []);

	return (
		<>
			<Collections />
		</>
	);
};
