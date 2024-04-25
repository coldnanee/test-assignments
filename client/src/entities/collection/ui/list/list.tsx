import type { TCollection } from "../../types";
import { CollectionItem } from "../item";

export const CollectionList = ({ list }: { list: TCollection[] }) => {
	return (
		<div>
			{list
				.filter((i) => i?.cover?.url)
				.map((i) => (
					<CollectionItem
						key={i.id}
						{...i}
					/>
				))}
		</div>
	);
};
