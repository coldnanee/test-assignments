import type { ReactNode } from "react";
import clsx from "clsx";

export const Container = ({
	children,
	className
}: {
	children: ReactNode;
	className?: string;
}) => {
	return (
		<div className={clsx("max-w-[1440px] mx-auto my-0", className)}>
			{children}
		</div>
	);
};
