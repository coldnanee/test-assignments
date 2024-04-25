import { RouterProvider } from "./providers/router.provider";
import { AntdProvider } from "./providers/antd.provider";
import { ReactQueryProvider } from "./providers/react-query.provider";
import { AlertProvider } from "./providers/alert.provider";

export const App = () => {
	return (
		<>
			<ReactQueryProvider>
				<AntdProvider>
					<AlertProvider>
						<RouterProvider />
					</AlertProvider>
				</AntdProvider>
			</ReactQueryProvider>
		</>
	);
};
