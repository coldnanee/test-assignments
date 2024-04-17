import { config } from "dotenv";

class ConfigService {
	config;

	constructor() {
		const result = config();

		if (result.error) {
			console.log("Parsing env config error");
		} else {
			this.config = result.parsed;
		}
	}

	get(key) {
		return this.config[key];
	}
}

export const Config = new ConfigService();
