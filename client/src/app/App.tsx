import { RouterProvider } from "./providers/router.provider";
import { AntdProvider } from "./providers/antd.provider";
import { ReactQueryProvider } from "./providers/react-query.provider";

export const App = () => {
	return (
		<>
			<ReactQueryProvider>
				<AntdProvider>
					<RouterProvider />
				</AntdProvider>
			</ReactQueryProvider>
		</>
	);
};
