import { $api } from "@/shared";

export const getMovies = () => $api.get("/movie");
