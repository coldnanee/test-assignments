import { TCollection } from "../../types";

export const CollectionItem = ({ cover }: TCollection) => {
	return (
		<aside>
			<img src={cover?.url} />
		</aside>
	);
};
