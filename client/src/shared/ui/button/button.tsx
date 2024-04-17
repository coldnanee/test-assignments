import {
	Link,
	LinkProps,
	RoutePaths,
	RegisteredRouter
} from "@tanstack/react-router";
import clsx from "clsx";
import type { ReactNode } from "react";

export const Button = ({
	children,
	className,
	block,
	...props
}: LinkProps & {
	children: ReactNode;
	className?: string;
	block?: boolean;
	to: RoutePaths<RegisteredRouter["routeTree"]>;
}) => {
	const classNames = clsx(
		"text-[14px] text-[#fff] bg-[var(--accent-blue)] leading-[35px] text px-[15px] rounded-[6px] hover:opacity-[0.85] transition-all flex justify-center items-center",
		block ? "w-full" : "",
		className
	);

	if (props.to) {
		return (
			<Link
				className={classNames}
				{...props}>
				{children}
			</Link>
		);
	}

	return <button className={classNames}>{children}</button>;
};
