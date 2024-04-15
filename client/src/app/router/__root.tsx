import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
	component: () => <Outlet />,
	notFoundComponent: () => <NotFound />
});

const NotFound = () => {
	return (
		<div className="h-[100dvh] flex items-center justify-center text-[20px]">
			404. Page Not Found
		</div>
	);
};
