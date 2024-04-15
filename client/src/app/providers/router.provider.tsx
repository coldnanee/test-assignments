import {
	RouterProvider as Provider,
	createRouter
} from "@tanstack/react-router";

import { routeTree } from "../routeTree.gen";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

export const RouterProvider = () => {
	return <Provider router={router} />;
};
