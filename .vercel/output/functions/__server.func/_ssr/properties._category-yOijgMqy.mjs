import { n as queryOptions } from "../_libs/react+tanstack__react-query.mjs";
import { t as india_residential_jpg_asset_default } from "./india-residential.jpg.asset-ptUwFqSh.mjs";
import { F as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as supabase } from "./client-Bx01nVAt.mjs";
import { t as dubai_apartment_jpg_asset_default } from "./dubai-apartment.jpg.asset-gIOVSZZQ.mjs";
import { n as india_commercial_jpg_asset_default, r as india_land_default, t as dubai_villa_jpg_asset_default } from "./india-commercial.jpg.asset-NRd216K6.mjs";
import { t as dubai_rental_default } from "./dubai-rental-CCvlqigc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/properties._category-yOijgMqy.js
var CATEGORIES = {
	"dubai-apartments": {
		title: "Luxury Apartments",
		region: "Dubai",
		blurb: "Modern residences in Dubai's most iconic addresses.",
		fallbackImg: dubai_apartment_jpg_asset_default.url
	},
	"dubai-villas": {
		title: "Luxury Villas",
		region: "Dubai",
		blurb: "Exclusive villas and estates for elevated living.",
		fallbackImg: dubai_villa_jpg_asset_default.url
	},
	"dubai-commercial": {
		title: "Commercial Spaces",
		region: "Dubai",
		blurb: "High-ROI offices and retail in prime commercial districts.",
		fallbackImg: dubai_rental_default
	},
	"india-commercial": {
		title: "Commercial",
		region: "India",
		blurb: "Grade-A offices and retail assets across India's top cities.",
		fallbackImg: india_commercial_jpg_asset_default.url
	},
	"india-residential": {
		title: "Residential",
		region: "India",
		blurb: "Luxury homes for a discerning lifestyle.",
		fallbackImg: india_residential_jpg_asset_default.url
	},
	"india-land": {
		title: "Land Investment",
		region: "India",
		blurb: "Titled plots and land banks with strong growth potential.",
		fallbackImg: india_land_default
	}
};
var isCategory = (s) => s in CATEGORIES;
var propertiesQuery = (category) => queryOptions({
	queryKey: ["properties", category],
	queryFn: async () => {
		const { data, error } = await supabase.from("properties").select("*").eq("category", category).eq("published", true).order("featured", { ascending: false }).order("created_at", { ascending: false });
		if (error) throw error;
		return data;
	}
});
var $$splitComponentImporter = () => import("./properties._category-CB4l_Vq-.mjs");
var $$splitErrorComponentImporter = () => import("./properties._category-VRywQAjM.mjs");
var $$splitNotFoundComponentImporter = () => import("./properties._category-lhLPbWu2.mjs");
var Route = createFileRoute("/properties/$category")({
	loader: async ({ params, context }) => {
		if (!isCategory(params.category)) throw notFound();
		await context.queryClient.ensureQueryData(propertiesQuery(params.category));
	},
	head: ({ params }) => {
		const meta = isCategory(params.category) ? CATEGORIES[params.category] : null;
		const title = meta ? `${meta.title} in ${meta.region} — Bricks & Legacy` : "Properties — Bricks & Legacy";
		const description = meta?.blurb ?? "Explore premium properties in Dubai and India.";
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
export { propertiesQuery as i, Route as n, isCategory as r, CATEGORIES as t };
