import { Button } from "@/shared";
import { useEffect } from "react";

export const NotFoundPage = () => {
	useEffect(() => {
		document.title = "404";
	}, []);

	return (
		<div className="fullScreenWithHeader flex items-center justify-center text-[20px] flex-col">
			<p className="text-[40px]">404</p>
			<Button to="/">На главную</Button>
		</div>
	);
};
