import { useAlertStore, Alert } from "@/shared";
import { ReactNode } from "react";
import { Space } from "antd";

export const AlertProvider = ({ children }: { children: ReactNode }) => {
	const { alerts } = useAlertStore();

	return (
		<>
			<Space
				direction="vertical"
				className="w-[400px] left-[10px] absolute bottom-[10px]">
				{alerts.map((i) => (
					<Alert
						key={i.id}
						{...i}
					/>
				))}
			</Space>
			{children}
		</>
	);
};
