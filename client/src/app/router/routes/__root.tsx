import { Outlet, createRootRoute } from "@tanstack/react-router";

import { NotFoundPage } from "@/pages/not-found";

import { Layout } from "@/layout";

export const Route = createRootRoute({
	component: () => (
		<>
			<Layout>
				<Outlet />
			</Layout>
		</>
	),
	notFoundComponent: () => <NotFoundPage />
});
