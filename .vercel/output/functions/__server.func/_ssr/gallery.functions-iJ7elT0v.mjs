import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-F0vtjePk.mjs";
import { a as objectType, i as numberType, n as booleanType, o as stringType } from "../_libs/zod.mjs";
import { t as createServerRpc } from "./createServerRpc-MBa5GZ-L.mjs";
import { a as createServerFn } from "./server-BRsgnlxe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery.functions-iJ7elT0v.js
var mockGallery = [{
	id: "e9747eee-6cc2-42b4-9749-b5173614cd54",
	title: "Luxury Villa Exterior",
	caption: "A view of the infinity pool and exterior design of our villa project in Dubai.",
	image_url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=80",
	image_path: null,
	sort_order: 1,
	published: true,
	created_at: (/* @__PURE__ */ new Date()).toISOString()
}, {
	id: "a57c7b3b-2ef8-48db-88c7-d8cf71b349be",
	title: "Modern Office Reception",
	caption: "Elegant marble reception and lobby area in Business Bay.",
	image_url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80",
	image_path: null,
	sort_order: 2,
	published: true,
	created_at: (/* @__PURE__ */ new Date()).toISOString()
}];
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
var listPublicGallery_createServerFn_handler = createServerRpc({
	id: "1fcae9e91c68fa2a0ca731cda98f572c9c5aed40159a35696f1ff31790b23841",
	name: "listPublicGallery",
	filename: "src/lib/gallery.functions.ts"
}, (opts) => listPublicGallery.__executeServer(opts));
var listPublicGallery = createServerFn({ method: "GET" }).handler(listPublicGallery_createServerFn_handler, async () => {
	if (isMock) return mockGallery.filter((g) => g.published);
	const key = process.env.SUPABASE_PUBLISHABLE_KEY;
	const { data, error } = await createClient(process.env.SUPABASE_URL, key, {
		auth: {
			persistSession: false,
			autoRefreshToken: false
		},
		global: { fetch: (input, init) => {
			const h = new Headers(init?.headers);
			if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) h.delete("Authorization");
			h.set("apikey", key);
			return fetch(input, {
				...init,
				headers: h
			});
		} }
	}).from("gallery_images").select("id, title, caption, image_url, image_path, sort_order").eq("published", true).order("sort_order", { ascending: true }).order("created_at", { ascending: false });
	if (error) throw new Error(error.message);
	return data ?? [];
});
var listAdminGallery_createServerFn_handler = createServerRpc({
	id: "07720c655a1eda1cb3ae37d8e25474963c8e10a8de8b04ffd25f13c3c55f4046",
	name: "listAdminGallery",
	filename: "src/lib/gallery.functions.ts"
}, (opts) => listAdminGallery.__executeServer(opts));
var listAdminGallery = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(listAdminGallery_createServerFn_handler, async ({ context }) => {
	await assertAdmin(context);
	if (isMock) return mockGallery;
	const { data, error } = await context.supabase.from("gallery_images").select("*").order("sort_order", { ascending: true }).order("created_at", { ascending: false });
	if (error) throw new Error(error.message);
	return data;
});
var galleryInput = objectType({
	id: stringType().uuid().optional().nullable(),
	title: stringType().trim().max(200).optional().nullable(),
	caption: stringType().trim().max(600).optional().nullable(),
	image_url: stringType().trim().max(500).optional().nullable(),
	image_path: stringType().trim().max(500).optional().nullable(),
	sort_order: numberType().int().min(0).max(9999).optional().default(0),
	published: booleanType()
});
var upsertGalleryImage_createServerFn_handler = createServerRpc({
	id: "af3e33fbcfbd5fa89bf9a6e6b40da4742ad002de066c73b59fa96de1617b747b",
	name: "upsertGalleryImage",
	filename: "src/lib/gallery.functions.ts"
}, (opts) => upsertGalleryImage.__executeServer(opts));
var upsertGalleryImage = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).validator((raw) => galleryInput.parse(raw)).handler(upsertGalleryImage_createServerFn_handler, async ({ data, context }) => {
	await assertAdmin(context);
	const payload = {
		id: data.id || crypto.randomUUID(),
		title: data.title || null,
		caption: data.caption || null,
		image_url: data.image_url || null,
		image_path: data.image_path || null,
		sort_order: data.sort_order ?? 0,
		published: data.published,
		updated_at: (/* @__PURE__ */ new Date()).toISOString()
	};
	if (isMock) {
		if (data.id) mockGallery = mockGallery.map((g) => g.id === data.id ? {
			...g,
			...payload
		} : g);
		else mockGallery.push({
			...payload,
			created_at: (/* @__PURE__ */ new Date()).toISOString()
		});
		return { id: payload.id };
	}
	if (data.id) {
		const { error } = await context.supabase.from("gallery_images").update(payload).eq("id", data.id);
		if (error) throw new Error(error.message);
		return { id: data.id };
	}
	const { data: inserted, error } = await context.supabase.from("gallery_images").insert(payload).select("id").single();
	if (error) throw new Error(error.message);
	return { id: inserted.id };
});
var deleteGalleryImage_createServerFn_handler = createServerRpc({
	id: "c5b12a6b46461630cbf631c3fa3b5ff9bb2edce2fb7c22c32d1bd2163a11e99c",
	name: "deleteGalleryImage",
	filename: "src/lib/gallery.functions.ts"
}, (opts) => deleteGalleryImage.__executeServer(opts));
var deleteGalleryImage = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).validator((raw) => objectType({ id: stringType().uuid() }).parse(raw)).handler(deleteGalleryImage_createServerFn_handler, async ({ data, context }) => {
	await assertAdmin(context);
	if (isMock) {
		mockGallery = mockGallery.filter((g) => g.id !== data.id);
		return { ok: true };
	}
	const { error } = await context.supabase.from("gallery_images").delete().eq("id", data.id);
	if (error) throw new Error(error.message);
	return { ok: true };
});
//#endregion
export { deleteGalleryImage_createServerFn_handler, listAdminGallery_createServerFn_handler, listPublicGallery_createServerFn_handler, upsertGalleryImage_createServerFn_handler };
