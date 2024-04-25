import { create } from "zustand";
import type { TAlert } from "@/shared/types";
import { immer } from "zustand/middleware/immer";

type TAlertStore = {
	alerts: TAlert[];
	addAlert: (alert: Omit<TAlert, "id">) => void;
	closeAlert: (id: string) => void;
};

export const useAlertStore = create<TAlertStore>()(
	immer((set) => ({
		alerts: [],
		addAlert: (alert) =>
			set((state) => {
				const updatedAlerts = [
					...state.alerts,
					{ ...alert, id: new Date().toISOString() }
				];

				if (updatedAlerts.length > 5) {
					updatedAlerts.shift();
				}

				state.alerts = updatedAlerts;
			}),
		closeAlert: (id) =>
			set((state) => {
				state.alerts = state.alerts.filter((i) => i.id !== id);
			})
	}))
);
