import type { TCollection } from "../../types";
import { CollectionItem } from "../item";
import { useAlertStore } from "@/shared";

export const CollectionList = ({ list }: { list: TCollection[] }) => {
	const { addAlert, alerts } = useAlertStore();

	return (
		<div>
			<button
				onClick={() =>
					addAlert({ message: `Message ${alerts.length + 1}`, type: "success" })
				}>
				Добавить уведомление
			</button>
			{list.map((i) => (
				<CollectionItem
					key={i.id}
					{...i}
				/>
			))}
		</div>
	);
};
