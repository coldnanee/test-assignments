import { Link } from "@tanstack/react-router";
import { Container } from "@/shared";

export const Header = () => {
	return (
		<header className="bg-[var(--accent-blue)] h-[60px] flex items-center px-[20px]">
			<Container className="flex w-full">
				<Link
					to="/"
					className="text-[#fff] text-[20px] font-bold">
					Кинопоиск
				</Link>
			</Container>
		</header>
	);
};
