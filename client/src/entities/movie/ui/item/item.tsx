import { Link } from "@tanstack/react-router";
import type { TMovie } from "../../types/movie.type";
import { Typography } from "antd";

const { Text } = Typography;

export const MovieItem = ({ poster: { previewUrl }, name }: TMovie) => {
	return (
		<aside className="relative hover:scale-105 transition-all duration-500 group">
			<Link to="/">
				<div>
					<img
						className="rounded-[8px]"
						src={previewUrl}
						alt={name}
					/>
				</div>
				<div className="rounded-[8px] absolute w-full h-full top-0 left-0 z-10 opacity-0 bg-[#000] group-hover:visible group-hover:opacity-75 transition-all invisible duration-500"></div>
			</Link>
		</aside>
	);
};
