import { u as createServerFn } from "./esm-DTf75a_C.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-ChCqRcqz.mjs";
import { a as objectType, n as booleanType, o as stringType, r as enumType, t as arrayType } from "../_libs/zod.mjs";
import { t as createServerRpc } from "./createServerRpc-CMkeCIdM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/careers.functions-BP1yvkKi.js
var mockCareers = [{
	id: "c9747eee-6cc2-42b4-9749-b5173614cd54",
	title: "Real Estate Broker",
	department: "Sales",
	location: "Dubai Marina Office",
	type: "Full-time",
	description: "Looking for an experienced broker with a track record in luxury sales.",
	requirements: [
		"3+ years experience in Dubai",
		"Strong communication skills",
		"Proven sales record"
	],
	published: true,
	created_at: (/* @__PURE__ */ new Date()).toISOString(),
	updated_at: (/* @__PURE__ */ new Date()).toISOString()
}];
var mockApplications = [{
	id: "a9747eee-6cc2-42b4-9749-b5173614cd54",
	career_id: "c9747eee-6cc2-42b4-9749-b5173614cd54",
	name: "John Doe",
	email: "john.doe@example.com",
	phone: "+971 50 123 4567",
	linkedin_url: "https://linkedin.com/in/johndoe",
	experience: "5 years in London and Dubai luxury sales.",
	cover_letter: "I would love to join your prestigious firm.",
	status: "new",
	created_at: (/* @__PURE__ */ new Date()).toISOString(),
	careers: { title: "Real Estate Broker" }
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
var careerInput = objectType({
	id: stringType().uuid().optional().nullable(),
	title: stringType().trim().min(1).max(200),
	department: stringType().trim().max(100).optional().nullable(),
	location: stringType().trim().max(100).optional().nullable(),
	type: stringType().trim().max(60).optional().nullable(),
	description: stringType().trim().max(3e3).optional().nullable(),
	requirements: arrayType(stringType().trim().max(500)).max(20).optional().default([]),
	published: booleanType().optional().default(true)
});
var listCareersAdmin_createServerFn_handler = createServerRpc({
	id: "a21fcbc230f9790d55556c8a1eb726090d8599d76f0dee447c065a77558662bb",
	name: "listCareersAdmin",
	filename: "src/lib/careers.functions.ts"
}, (opts) => listCareersAdmin.__executeServer(opts));
var listCareersAdmin = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(listCareersAdmin_createServerFn_handler, async ({ context }) => {
	await assertAdmin(context);
	if (isMock) return mockCareers;
	const { data, error } = await context.supabase.from("careers").select("*").order("published", { ascending: false }).order("created_at", { ascending: false });
	if (error) throw new Error(error.message);
	return data;
});
var upsertCareer_createServerFn_handler = createServerRpc({
	id: "2aea7d78267cd5052846b2db5649a19299ecbb5bf4a23dab88f025161a24fc4d",
	name: "upsertCareer",
	filename: "src/lib/careers.functions.ts"
}, (opts) => upsertCareer.__executeServer(opts));
var upsertCareer = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).validator((raw) => careerInput.parse(raw)).handler(upsertCareer_createServerFn_handler, async ({ data, context }) => {
	await assertAdmin(context);
	const payload = {
		id: data.id || crypto.randomUUID(),
		title: data.title,
		department: data.department || null,
		location: data.location || null,
		type: data.type || null,
		description: data.description || null,
		requirements: data.requirements ?? [],
		published: data.published ?? true,
		updated_at: (/* @__PURE__ */ new Date()).toISOString()
	};
	if (isMock) {
		if (data.id) mockCareers = mockCareers.map((c) => c.id === data.id ? {
			...c,
			...payload
		} : c);
		else mockCareers.push({
			...payload,
			created_at: (/* @__PURE__ */ new Date()).toISOString()
		});
		return { id: payload.id };
	}
	if (data.id) {
		const { error } = await context.supabase.from("careers").update(payload).eq("id", data.id);
		if (error) throw new Error(error.message);
		return { id: data.id };
	}
	const { data: inserted, error } = await context.supabase.from("careers").insert(payload).select("id").single();
	if (error) throw new Error(error.message);
	return { id: inserted.id };
});
var deleteCareer_createServerFn_handler = createServerRpc({
	id: "1c5ea22a1b719e031967c330ba1fdc096f5bbc66a099bb0f7a56201da8d42fbe",
	name: "deleteCareer",
	filename: "src/lib/careers.functions.ts"
}, (opts) => deleteCareer.__executeServer(opts));
var deleteCareer = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).validator((raw) => objectType({ id: stringType().uuid() }).parse(raw)).handler(deleteCareer_createServerFn_handler, async ({ data, context }) => {
	await assertAdmin(context);
	if (isMock) {
		mockCareers = mockCareers.filter((c) => c.id !== data.id);
		return { ok: true };
	}
	const { error } = await context.supabase.from("careers").delete().eq("id", data.id);
	if (error) throw new Error(error.message);
	return { ok: true };
});
var listApplications_createServerFn_handler = createServerRpc({
	id: "49e4b7dcacfd5df53c240b47a547c39745b57bc8e8824fff9ffe8923e9f0594e",
	name: "listApplications",
	filename: "src/lib/careers.functions.ts"
}, (opts) => listApplications.__executeServer(opts));
var listApplications = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(listApplications_createServerFn_handler, async ({ context }) => {
	await assertAdmin(context);
	if (isMock) return mockApplications;
	const { data, error } = await context.supabase.from("career_applications").select("*, careers(title)").order("created_at", { ascending: false });
	if (error) throw new Error(error.message);
	return data;
});
var updateApplicationStatus_createServerFn_handler = createServerRpc({
	id: "c82552885b116d510226b1e160577bfa0ab7a2643cb07f404bbaec0b190d4be7",
	name: "updateApplicationStatus",
	filename: "src/lib/careers.functions.ts"
}, (opts) => updateApplicationStatus.__executeServer(opts));
var updateApplicationStatus = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).validator((raw) => objectType({
	id: stringType().uuid(),
	status: enumType([
		"new",
		"reviewing",
		"shortlisted",
		"rejected",
		"hired"
	])
}).parse(raw)).handler(updateApplicationStatus_createServerFn_handler, async ({ data, context }) => {
	await assertAdmin(context);
	if (isMock) {
		mockApplications = mockApplications.map((a) => a.id === data.id ? {
			...a,
			status: data.status
		} : a);
		return { ok: true };
	}
	const { error } = await context.supabase.from("career_applications").update({ status: data.status }).eq("id", data.id);
	if (error) throw new Error(error.message);
	return { ok: true };
});
//#endregion
export { deleteCareer_createServerFn_handler, listApplications_createServerFn_handler, listCareersAdmin_createServerFn_handler, updateApplicationStatus_createServerFn_handler, upsertCareer_createServerFn_handler };
