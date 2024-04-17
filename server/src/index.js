import express from "express";

import { axiosMiddleware } from "./middlewares/axios.js";

import { redisClient } from "./redis/client.js";

import { Config } from "./config/config.js";

const app = express();

const API_PORT = Config.get("API_PORT");

app.use(axiosMiddleware);

const start = async () => {
	try {
		await redisClient.connect();

		app.listen(API_PORT, () => {
			console.log(`Server is starting on port ${Config.get("API_PORT")}`);
		});
	} catch (e) {
		console.log(e);
	}
};

start();
