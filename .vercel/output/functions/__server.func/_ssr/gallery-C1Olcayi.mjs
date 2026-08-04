import { r as __toESM } from "../_runtime.mjs";
import { c as require_react, i as useQuery, s as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Header } from "./header-Boyy3Tyj.mjs";
import { t as supabase } from "./client-Bx01nVAt.mjs";
import { i as listPublicGallery, o as useServerFn } from "./gallery.functions-CZvJJJYj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-C1Olcayi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_gallery_default = "/assets/hero-gallery-GtBUZw-2.jpg";
function useGalleryImageSrc(image_path, image_url) {
	const [signed, setSigned] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		if (!image_path) {
			setSigned(null);
			return;
		}
		supabase.storage.from("gallery-images").createSignedUrl(image_path, 3600 * 24).then(({ data }) => {
			if (!cancelled && data?.signedUrl) setSigned(data.signedUrl);
		});
		return () => {
			cancelled = true;
		};
	}, [image_path]);
	if (image_path && signed) return signed;
	return image_url || "";
}
function GalleryTile({ row, index }) {
	const src = useGalleryImageSrc(row.image_path, row.image_url);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "group relative overflow-hidden rounded-sm border border-primary/10 bg-secondary transition-transform duration-500 hover:-translate-y-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "aspect-[4/3] overflow-hidden",
			children: src ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt: row.title ?? "Gallery image",
				loading: "lazy",
				className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-full animate-pulse bg-primary/10" })
		}), (row.title || row.caption) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
			className: "absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-primary/95 via-primary/80 to-transparent p-5 text-background transition-transform duration-500 group-hover:translate-y-0",
			children: [row.title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-serif text-lg",
				children: row.title
			}), row.caption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-[12px] leading-relaxed text-background/80",
				children: row.caption
			})]
		})]
	});
}
function GalleryPage() {
	const fn = useServerFn(listPublicGallery);
	const { data, isLoading } = useQuery({
		queryKey: ["public-gallery"],
		queryFn: () => fn()
	});
	const rows = data ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-background text-primary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-primary text-background",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_gallery_default,
					alt: "",
					"aria-hidden": true,
					className: "absolute inset-0 h-full w-full object-cover opacity-35"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-7xl px-6 pb-24 pt-32 lg:px-10 lg:pb-32 lg:pt-40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "eyebrow text-accent flex items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "gold-rule draw-x is-visible mr-3 !bg-accent",
								style: { ["--reveal-delay"]: "0ms" }
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "reveal-up is-visible",
								style: { ["--reveal-delay"]: "150ms" },
								children: "Gallery"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl",
							children: "Moments & Milestones"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-2xl text-sm leading-relaxed text-background/70 sm:text-base",
							children: "A visual journal of the residences, developments and experiences that define our portfolio across Dubai and India."
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 sm:py-20 lg:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-6 lg:px-10",
				children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "aspect-[4/3] animate-pulse rounded-sm bg-primary/10" }, i))
				}) : rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-sm border border-primary/10 bg-secondary p-16 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] tracking-[0.28em] uppercase text-accent",
							children: "Coming soon"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-serif text-2xl",
							children: "Our gallery is being curated."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-primary/70",
							children: "Please check back shortly."
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: rows.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryTile, {
						row,
						index: i
					}, row.id))
				})
			})
		})]
	});
}
//#endregion
export { GalleryPage as component };
