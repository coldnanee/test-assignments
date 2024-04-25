import { Input } from "antd";
import {
	ChangeEvent,
	useCallback,
	useState,
	type Dispatch,
	type SetStateAction
} from "react";
import debounce from "lodash.debounce";

export const Search = ({
	setSearch
}: {
	setSearch: Dispatch<SetStateAction<string>>;
}) => {
	const [value, setValue] = useState<string>("");

	const updateSearchValue = useCallback(
		debounce((str) => {
			setSearch(str);
		}, 500),
		[]
	);

	const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
		updateSearchValue(e.target.value);
	};

	return (
		<Input
			value={value}
			onChange={changeInput}
		/>
	);
};
