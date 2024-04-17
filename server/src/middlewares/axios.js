import axios, { AxiosError } from "axios";

import { Config } from "../config/config.js";

import { redisClient } from "../redis/client.js";

export const axiosMiddleware = async (req, res, next) => {
	if (req.method !== "GET") {
		return res.status(400).json({ message: 'Can use only "GET" method' });
	}

	const cacheData = await redisClient.get(req.originalUrl);

	if (cacheData) {
		const parsedData = JSON.parse(cacheData);
		return res.json({ ...parsedData });
	}

	return axios
		.get(`https://api.kinopoisk.dev/v1.4${req.originalUrl}`, {
			headers: {
				"X-API-KEY": Config.get("API_KEY")
			}
		})
		.then(({ status, data }) =>
			redisClient
				.setEx(req.originalUrl, 600, JSON.stringify(data))
				.then(() => res.status(status).json({ ...data }))
				.catch((e) => res.status(500).json({ message: "Can't setup cache" }))
		)
		.catch((e) => {
			if (e instanceof AxiosError) {
				const err = e.response.data;
				return res
					.status(err.statusCode ?? 500)
					.json({ message: err.message ?? "Unexpected error" });
			}

			return res.status(500).json({ message: "Unexpected error" });
		});
};
