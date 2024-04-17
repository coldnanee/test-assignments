import { useEffect } from "react";

export const HomePage = () => {
	useEffect(() => {
		document.title = "Главная";
	}, []);

	return <></>;
};
