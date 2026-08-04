import { i as __toESM } from "../_runtime.mjs";
import { c as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { k as isRedirect, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-F0vtjePk.mjs";
import { a as objectType, i as numberType, n as booleanType, o as stringType } from "../_libs/zod.mjs";
import { a as createServerFn, i as TSS_SERVER_FUNCTION, n as getServerFnById } from "./server-DAhzPYYF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery.functions-B1LoZhyg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var listPublicGallery = createServerFn({ method: "GET" }).handler(createSsrRpc("1fcae9e91c68fa2a0ca731cda98f572c9c5aed40159a35696f1ff31790b23841"));
var listAdminGallery = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("07720c655a1eda1cb3ae37d8e25474963c8e10a8de8b04ffd25f13c3c55f4046"));
var galleryInput = objectType({
	id: stringType().uuid().optional().nullable(),
	title: stringType().trim().max(200).optional().nullable(),
	caption: stringType().trim().max(600).optional().nullable(),
	image_url: stringType().trim().max(500).optional().nullable(),
	image_path: stringType().trim().max(500).optional().nullable(),
	sort_order: numberType().int().min(0).max(9999).optional().default(0),
	published: booleanType()
});
var upsertGalleryImage = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).validator((raw) => galleryInput.parse(raw)).handler(createSsrRpc("af3e33fbcfbd5fa89bf9a6e6b40da4742ad002de066c73b59fa96de1617b747b"));
var deleteGalleryImage = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).validator((raw) => objectType({ id: stringType().uuid() }).parse(raw)).handler(createSsrRpc("c5b12a6b46461630cbf631c3fa3b5ff9bb2edce2fb7c22c32d1bd2163a11e99c"));
//#endregion
export { upsertGalleryImage as a, listPublicGallery as i, deleteGalleryImage as n, useServerFn as o, listAdminGallery as r, createSsrRpc as t };
