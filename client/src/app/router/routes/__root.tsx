import { Outlet, createRootRoute } from "@tanstack/react-router";

import { NotFoundPage } from "@/pages/not-found";

import { Header } from "@/widgets/header";

export const Route = createRootRoute({
	component: () => (
		<>
			<Header />
			<Outlet />
		</>
	),
	notFoundComponent: () => <NotFoundPage />
});
