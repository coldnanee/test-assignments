import { createClient } from "redis";

import { Config } from "../config/config.js";

const client = () => {
	const PORT = Config.get("REDIS_PORT");
	const PASSWORD = Config.get("REDIS_PASSWORD");

	const client = createClient({
		socket: {
			host: "localhost",
			port: PORT
		},
		password: PASSWORD
	});

	return () => client;
};

export const redisClient = client()();
