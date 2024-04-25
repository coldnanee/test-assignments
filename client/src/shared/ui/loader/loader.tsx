import { Spin, type SpinProps } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export const Loader = ({
	iconSize,
	...props
}: SpinProps & { iconSize: number }) => {
	return (
		<Spin
			indicator={<LoadingOutlined style={{ fontSize: iconSize + "px" }} />}
			{...props}
		/>
	);
};
