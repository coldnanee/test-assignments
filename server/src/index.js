import { config } from "dotenv";
import express from "express";
import axios, { AxiosError } from "axios";

config({ path: "./.env" });

const { API_PORT, API_KEY } = process.env;

const app = express();

app.use((req, res, next) => {
	if (req.method !== "GET") {
		return res.status(400).json({ message: 'Can use only "GET" method' });
	}

	return axios
		.get(`https://api.kinopoisk.dev/v1.4${req.originalUrl}`, {
			headers: {
				"X-API-KEY": API_KEY
			}
		})
		.then(({ status, data }) => {
			return res.status(status).json({ ...data });
		})
		.catch((e) => {
			if (e instanceof AxiosError) {
				const err = e.response.data;
				return res
					.status(err.statusCode ?? 500)
					.json({ message: err.message ?? "Unexpected error" });
			}

			return res.status(500).json({ message: "Unexpected error" });
		});
});

app.listen(API_PORT, () => {
	console.log(`Server is starting on port ${API_PORT}`);
});
