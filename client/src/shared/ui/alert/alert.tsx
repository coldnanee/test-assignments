import { useAlertStore } from "../../libs";
import type { TAlert } from "../../types";
import { Alert as AntdAlert, type AlertProps } from "antd";
import clsx from "clsx";
import { useEffect, useState } from "react";

export const Alert = (props: AlertProps & TAlert) => {
	const { closeAlert } = useAlertStore();

	const [isRemoving, setIsRemoving] = useState<boolean>(false);

	const close = () => {
		setIsRemoving(true);
		setTimeout(() => {
			closeAlert(props.id);
		}, 500);
	};

	useEffect(() => {
		const removingTimer = setTimeout(() => {
			close();
		}, 5000);

		return () => {
			clearTimeout(removingTimer);
		};
	}, []);

	return (
		<AntdAlert
			showIcon
			closeIcon
			onClose={close}
			className={clsx(isRemoving ? "animate-hide-alert" : "animate-show-alert")}
			{...props}
		/>
	);
};
