import { c as createMiddleware } from "./esm-DTf75a_C.mjs";
import { t as getRequest } from "./request-response-BEPp1C2k.mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-middleware-ChCqRcqz.js
function isNewSupabaseApiKey(value) {
	return value.startsWith("sb_publishable_") || value.startsWith("sb_secret_");
}
function createSupabaseFetch(supabaseKey) {
	return (input, init) => {
		const headers = new Headers(typeof Request !== "undefined" && input instanceof Request ? input.headers : void 0);
		if (init?.headers) new Headers(init.headers).forEach((value, key) => headers.set(key, value));
		if (isNewSupabaseApiKey(supabaseKey) && headers.get("Authorization") === `Bearer ${supabaseKey}`) headers.delete("Authorization");
		headers.set("apikey", supabaseKey);
		return fetch(input, {
			...init,
			headers
		});
	};
}
var requireSupabaseAuth = createMiddleware({ type: "function" }).server(async ({ next }) => {
	const SUPABASE_URL = process.env.SUPABASE_URL;
	const SUPABASE_PUBLISHABLE_KEY = process.env.SUPABASE_PUBLISHABLE_KEY;
	if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
		console.warn("[Auth Middleware] Missing environment variables. Injecting mock auth context.");
		const mockPostgrest = {
			select: () => mockPostgrest,
			eq: () => mockPostgrest,
			neq: () => mockPostgrest,
			gt: () => mockPostgrest,
			lt: () => mockPostgrest,
			order: () => mockPostgrest,
			limit: () => mockPostgrest,
			single: () => Promise.resolve({
				data: null,
				error: null
			}),
			maybeSingle: () => Promise.resolve({
				data: null,
				error: null
			}),
			then: (onfulfilled) => Promise.resolve({
				data: [],
				error: null
			}).then(onfulfilled)
		};
		return next({ context: {
			supabase: {
				rpc: async () => ({
					data: true,
					error: null
				}),
				from: () => mockPostgrest,
				storage: { from: () => ({
					createSignedUrl: async (path) => ({
						data: { signedUrl: path },
						error: null
					}),
					upload: async () => ({
						data: { path: "mock-path" },
						error: null
					}),
					remove: async () => ({ error: null })
				}) }
			},
			userId: "mock-user-id",
			claims: { sub: "mock-user-id" }
		} });
	}
	const request = getRequest();
	if (!request?.headers) throw new Error("Unauthorized: No request headers available");
	const authHeader = request.headers.get("authorization");
	if (!authHeader) throw new Error("Unauthorized: No authorization header provided");
	if (!authHeader.startsWith("Bearer ")) throw new Error("Unauthorized: Only Bearer tokens are supported");
	const token = authHeader.replace("Bearer ", "");
	if (!token) throw new Error("Unauthorized: No token provided");
	if (token.split(".").length !== 3) throw new Error("Unauthorized: Invalid token");
	const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
		global: {
			fetch: createSupabaseFetch(SUPABASE_PUBLISHABLE_KEY),
			headers: { Authorization: `Bearer ${token}` }
		},
		auth: {
			storage: void 0,
			persistSession: false,
			autoRefreshToken: false
		}
	});
	const { data, error } = await supabase.auth.getClaims(token);
	if (error || !data?.claims) throw new Error("Unauthorized: Invalid token");
	if (!data.claims.sub) throw new Error("Unauthorized: No user ID found in token");
	return next({ context: {
		supabase,
		userId: data.claims.sub,
		claims: data.claims
	} });
});
//#endregion
export { requireSupabaseAuth as t };
