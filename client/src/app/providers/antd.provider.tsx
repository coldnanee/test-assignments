import { ConfigProvider } from "antd";
import { antdConfig } from "@/shared";
import type { ReactNode } from "react";

export const AntdProvider = ({ children }: { children: ReactNode }) => {
	return <ConfigProvider theme={antdConfig}>{children}</ConfigProvider>;
};
