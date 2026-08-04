import { r as __toESM } from "../_runtime.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as supabase } from "./client-Bx01nVAt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/property-image-CaaPqeFA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Resolves the best available image URL for a property row.
* - If image_path exists (uploaded to storage), generate a signed URL (24h).
* - Otherwise fall back to image_url (external), then a provided default.
*/
function usePropertyImageSrc(imagePath, imageUrl, fallback, gallery) {
	const galleryPath = gallery && gallery.length > 0 ? gallery[0] : null;
	const target = imagePath || (galleryPath && !galleryPath.startsWith("http") ? galleryPath : null);
	const [signed, setSigned] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		if (!target) {
			setSigned(null);
			return;
		}
		supabase.storage.from("property-images").createSignedUrl(target, 3600 * 24).then(({ data }) => {
			if (!cancelled && data?.signedUrl) setSigned(data.signedUrl);
		});
		return () => {
			cancelled = true;
		};
	}, [target]);
	if (target && signed) return signed;
	if (galleryPath && galleryPath.startsWith("http")) return galleryPath;
	if (imageUrl) return imageUrl;
	return fallback;
}
function PropertyImage({ imagePath, imageUrl, fallback, gallery, alt, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: usePropertyImageSrc(imagePath, imageUrl, fallback, gallery),
		alt,
		loading: "lazy",
		className
	});
}
//#endregion
export { usePropertyImageSrc as n, PropertyImage as t };
