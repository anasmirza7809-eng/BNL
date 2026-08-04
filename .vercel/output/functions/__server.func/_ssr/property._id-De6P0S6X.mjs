import { n as queryOptions } from "../_libs/react+tanstack__react-query.mjs";
import { F as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as supabase } from "./client-Bx01nVAt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/property._id-De6P0S6X.js
var propertyQuery = (id) => queryOptions({
	queryKey: ["property", id],
	queryFn: async () => {
		const { data, error } = await supabase.from("properties").select("*").eq("id", id).eq("published", true).maybeSingle();
		if (error) throw error;
		if (!data) throw notFound();
		return data;
	}
});
var $$splitComponentImporter = () => import("./property._id-CoCCHzwa.mjs");
var $$splitErrorComponentImporter = () => import("./property._id-DLvhjpC6.mjs");
var $$splitNotFoundComponentImporter = () => import("./property._id-6ck4EJXh.mjs");
var Route = createFileRoute("/property/$id")({
	loader: ({ params, context }) => context.queryClient.ensureQueryData(propertyQuery(params.id)),
	head: ({ loaderData }) => {
		const p = loaderData;
		const title = p ? `${p.title} — Bricks & Legacy` : "Property — Bricks & Legacy";
		const description = p?.description ?? "Explore this premium listing with Bricks & Legacy.";
		return { meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			}
		] };
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { propertyQuery as n, Route as t };
