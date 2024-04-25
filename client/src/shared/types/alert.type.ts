import type { AlertProps } from "antd";

export type TAlert = {
	id: string;
	message: AlertProps["message"];
	type: AlertProps["type"];
};
