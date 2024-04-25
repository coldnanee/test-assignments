import cl from "./list.module.css";

import { TMovie } from "../../types/movie.type";
import { MovieItem } from "../item";

export const MovieList = ({ list }: { list: TMovie[] }) => {
	return (
		<div className={cl.layout}>
			{list.map((i) => (
				<MovieItem
					{...i}
					key={String(i.id)}
				/>
			))}
		</div>
	);
};
