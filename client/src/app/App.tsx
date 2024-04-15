import { RouterProvider } from "./providers/router.provider";
import { AntdProvider } from "./providers/antd.provider";

export const App = () => {
	return (
		<>
			<AntdProvider>
				<RouterProvider />
			</AntdProvider>
		</>
	);
};
