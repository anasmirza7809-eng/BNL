import { u as createServerFn } from "./esm-DTf75a_C.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-ChCqRcqz.mjs";
import { a as objectType, n as booleanType, o as stringType, r as enumType, t as arrayType } from "../_libs/zod.mjs";
import { t as createServerRpc } from "./createServerRpc-CMkeCIdM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-properties.functions-B51SlmZs.js
var propertyInput = objectType({
	id: stringType().uuid().optional().nullable(),
	category: enumType([
		"dubai-apartments",
		"dubai-villas",
		"dubai-commercial",
		"india-commercial",
		"india-residential",
		"india-land"
	]),
	title: stringType().trim().min(1).max(200),
	location: stringType().trim().max(200).optional().nullable(),
	price: stringType().trim().max(80).optional().nullable(),
	bedrooms: stringType().trim().max(60).optional().nullable(),
	area: stringType().trim().max(60).optional().nullable(),
	description: stringType().trim().max(2e3).optional().nullable(),
	full_description: stringType().trim().max(5e3).optional().nullable(),
	image_url: stringType().trim().max(500).optional().nullable(),
	image_path: stringType().trim().max(500).optional().nullable(),
	gallery: arrayType(stringType().trim().max(500)).max(12).optional().default([]),
	highlights: arrayType(stringType().trim().max(140)).max(12).optional().default([]),
	featured: booleanType(),
	published: booleanType()
});
var mockProperties = [
	{
		id: "d9747eee-6cc2-42b4-9749-b5173614cd54",
		category: "dubai-apartments",
		title: "Marina View Residences",
		location: "Dubai Marina",
		price: "AED 2.4M",
		bedrooms: "2 BR",
		area: "1,250 sqft",
		description: "Panoramic marina views with premium finishes and resort-style amenities.",
		full_description: "Enjoy luxurious living in the heart of Dubai Marina. This stunning 2-bedroom apartment offers breathtaking panoramic views of the water, a state-of-the-art kitchen with integrated appliances, and a spacious balcony perfect for entertaining. Residents gain exclusive access to a temperature-controlled infinity pool, modern gym, and 24/7 concierge services.",
		image_url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=80",
		image_path: null,
		gallery: ["https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=80"],
		highlights: [
			"Panoramic Marina Views",
			"Infinity Pool Access",
			"24/7 Concierge",
			"Integrated Kitchen Appliances"
		],
		featured: true,
		published: true,
		created_at: (/* @__PURE__ */ new Date()).toISOString(),
		updated_at: (/* @__PURE__ */ new Date()).toISOString()
	},
	{
		id: "f57c7b3b-2ef8-48db-88c7-d8cf71b349be",
		category: "dubai-commercial",
		title: "Business Bay Tower Floor",
		location: "Business Bay",
		price: "AED 6.2M",
		bedrooms: null,
		area: "4,500 sqft",
		description: "Full-floor Grade-A office with skyline views and secure parking.",
		full_description: "A premium full-floor commercial space located in the bustling business district of Business Bay. Fully fitted with partitions, executive offices, meeting rooms, and open workstations. Offers panoramic canal and Burj Khalifa views, dedicated server room, private pantry, and 8 secure parking bays.",
		image_url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
		image_path: null,
		gallery: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80"],
		highlights: [
			"Burj Khalifa Views",
			"Grade-A Fitting",
			"8 Parking Spaces",
			"Canal Frontage"
		],
		featured: false,
		published: true,
		created_at: (/* @__PURE__ */ new Date()).toISOString(),
		updated_at: (/* @__PURE__ */ new Date()).toISOString()
	},
	{
		id: "97bb159b-0de3-44b6-bbfb-21738772351b",
		category: "india-land",
		title: "Alibaug Sea-Facing Plot",
		location: "Alibaug, Maharashtra",
		price: "₹ 3.2 Cr",
		bedrooms: null,
		area: "12,000 sqft",
		description: "Titled sea-view plot ideal for a private villa or boutique retreat.",
		full_description: "A pristine 12,000 sqft sea-facing plot in Alibaug, the premium getaway destination. Clear title, demarcated boundary wall, and fully sanctioned for a luxurious second home. Boasts mature coconut groves and direct road access.",
		image_url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80",
		image_path: null,
		gallery: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80"],
		highlights: [
			"Clear Sea Views",
			"Demarcated Boundary",
			"Second Home Sanctions",
			"Mature Coconut Groves"
		],
		featured: true,
		published: true,
		created_at: (/* @__PURE__ */ new Date()).toISOString(),
		updated_at: (/* @__PURE__ */ new Date()).toISOString()
	}
];
var isMock = !process.env.SUPABASE_URL;
async function assertAdmin(context) {
	if (isMock) return;
	const { data, error } = await context.supabase.rpc("has_role", {
		_user_id: context.userId,
		_role: "admin"
	});
	if (error) throw new Error(error.message);
	if (!data) throw new Error("Forbidden: admin access required.");
}
var listAdminProperties_createServerFn_handler = createServerRpc({
	id: "c706c02de4b9ac647ff5702a13040fd7e6e5cf04adc040131333cd3bef0bbc84",
	name: "listAdminProperties",
	filename: "src/lib/admin-properties.functions.ts"
}, (opts) => listAdminProperties.__executeServer(opts));
var listAdminProperties = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(listAdminProperties_createServerFn_handler, async ({ context }) => {
	await assertAdmin(context);
	if (isMock) return mockProperties;
	const { data, error } = await context.supabase.from("properties").select("*").order("category").order("created_at", { ascending: false });
	if (error) throw new Error(error.message);
	return data;
});
var upsertProperty_createServerFn_handler = createServerRpc({
	id: "0dbfff667478277cf1ea80217e1fd15b826ac57e627ccec11b1ad120656580d9",
	name: "upsertProperty",
	filename: "src/lib/admin-properties.functions.ts"
}, (opts) => upsertProperty.__executeServer(opts));
var upsertProperty = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).validator((raw) => propertyInput.parse(raw)).handler(upsertProperty_createServerFn_handler, async ({ data, context }) => {
	await assertAdmin(context);
	const payload = {
		id: data.id || crypto.randomUUID(),
		category: data.category,
		title: data.title,
		location: data.location || null,
		price: data.price || null,
		bedrooms: data.bedrooms || null,
		area: data.area || null,
		description: data.description || null,
		full_description: data.full_description || null,
		image_url: data.image_url || null,
		image_path: data.image_path || null,
		gallery: data.gallery ?? [],
		highlights: data.highlights ?? [],
		featured: data.featured,
		published: data.published,
		updated_at: (/* @__PURE__ */ new Date()).toISOString()
	};
	if (isMock) {
		if (data.id) mockProperties = mockProperties.map((p) => p.id === data.id ? {
			...p,
			...payload
		} : p);
		else {
			const newProp = {
				...payload,
				created_at: (/* @__PURE__ */ new Date()).toISOString()
			};
			mockProperties.push(newProp);
		}
		return { id: payload.id };
	}
	if (data.id) {
		const { error } = await context.supabase.from("properties").update(payload).eq("id", data.id);
		if (error) throw new Error(error.message);
		return { id: data.id };
	}
	const { data: inserted, error } = await context.supabase.from("properties").insert(payload).select("id").single();
	if (error) throw new Error(error.message);
	return { id: inserted.id };
});
var deleteProperty_createServerFn_handler = createServerRpc({
	id: "aa2c26a83fd863d1d75d08347b56bc0b43f0e133c7a18007a940ac08139453a1",
	name: "deleteProperty",
	filename: "src/lib/admin-properties.functions.ts"
}, (opts) => deleteProperty.__executeServer(opts));
var deleteProperty = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).validator((raw) => objectType({ id: stringType().uuid() }).parse(raw)).handler(deleteProperty_createServerFn_handler, async ({ data, context }) => {
	await assertAdmin(context);
	if (isMock) {
		mockProperties = mockProperties.filter((p) => p.id !== data.id);
		return { ok: true };
	}
	const { data: existing } = await context.supabase.from("properties").select("image_path, gallery").eq("id", data.id).maybeSingle();
	const { error } = await context.supabase.from("properties").delete().eq("id", data.id);
	if (error) throw new Error(error.message);
	const toRemove = [];
	if (existing?.image_path) toRemove.push(existing.image_path);
	if (Array.isArray(existing?.gallery)) toRemove.push(...existing.gallery);
	if (toRemove.length) await context.supabase.storage.from("property-images").remove(toRemove);
	return { ok: true };
});
//#endregion
export { deleteProperty_createServerFn_handler, listAdminProperties_createServerFn_handler, upsertProperty_createServerFn_handler };
