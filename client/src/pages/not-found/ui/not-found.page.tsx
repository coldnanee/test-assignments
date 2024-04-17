import { Button } from "@/shared";

export const NotFoundPage = () => {
	return (
		<div className="fullScreenWithHeader flex items-center justify-center text-[20px] flex-col">
			<p>404. Page Not Found</p>
			<Button to="/">На главную</Button>
		</div>
	);
};
