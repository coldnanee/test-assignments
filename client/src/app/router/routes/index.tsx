import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: () => {
		console.log(import.meta.env.VITE_API_URL);
		return <div>Hello /!</div>;
	}
});
