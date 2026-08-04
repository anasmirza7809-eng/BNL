import { n as queryOptions } from "../_libs/react+tanstack__react-query.mjs";
import { t as supabase } from "./client-Bx01nVAt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/careers-DKSTlFP8.js
var careersQuery = () => queryOptions({
	queryKey: ["careers"],
	queryFn: async () => {
		const { data, error } = await supabase.from("careers").select("*").eq("published", true).order("created_at", { ascending: false });
		if (error) throw error;
		return data;
	}
});
//#endregion
export { careersQuery as t };
