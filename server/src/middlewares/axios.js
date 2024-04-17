import axios, { AxiosError } from "axios";

export const axiosMiddleware = (req, res, next) => {
	if (req.method !== "GET") {
		return res.status(400).json({ message: 'Can use only "GET" method' });
	}

	return axios
		.get(`https://api.kinopoisk.dev/v1.4${req.originalUrl}`, {
			headers: {
				"X-API-KEY": process.env.API_KEY
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
};
