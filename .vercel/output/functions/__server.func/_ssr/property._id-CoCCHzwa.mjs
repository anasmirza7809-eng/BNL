import { r as __toESM } from "../_runtime.mjs";
import { c as require_react, r as useSuspenseQuery, s as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as india_residential_jpg_asset_default } from "./india-residential.jpg.asset-ptUwFqSh.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Header } from "./header-Boyy3Tyj.mjs";
import { t as Footer } from "./footer-DKq7yCTl.mjs";
import { t as supabase } from "./client-Bx01nVAt.mjs";
import { t as dubai_apartment_jpg_asset_default } from "./dubai-apartment.jpg.asset-gIOVSZZQ.mjs";
import { n as usePropertyImageSrc } from "./property-image-CaaPqeFA.mjs";
import { n as india_commercial_jpg_asset_default, r as india_land_default, t as dubai_villa_jpg_asset_default } from "./india-commercial.jpg.asset-NRd216K6.mjs";
import { t as dubai_rental_default } from "./dubai-rental-CCvlqigc.mjs";
import { t as hero_dubai_default } from "./hero-dubai-B8guiSvw.mjs";
import { n as propertyQuery, t as Route } from "./property._id-De6P0S6X.mjs";
import { n as ChevronLeft, t as ChevronRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/property._id-CoCCHzwa.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FALLBACKS = {
	"dubai-apartments": dubai_apartment_jpg_asset_default.url,
	"dubai-villas": dubai_villa_jpg_asset_default.url,
	"dubai-commercial": dubai_rental_default,
	"india-commercial": india_commercial_jpg_asset_default.url,
	"india-residential": india_residential_jpg_asset_default.url,
	"india-land": india_land_default
};
var CATEGORY_LABEL = {
	"dubai-apartments": {
		label: "Luxury Apartments",
		region: "Dubai"
	},
	"dubai-villas": {
		label: "Luxury Villas",
		region: "Dubai"
	},
	"dubai-commercial": {
		label: "Commercial",
		region: "Dubai"
	},
	"india-commercial": {
		label: "Commercial",
		region: "India"
	},
	"india-residential": {
		label: "Residential",
		region: "India"
	},
	"india-land": {
		label: "Land Investment",
		region: "India"
	}
};
function useGalleryUrls(paths) {
	const [urls, setUrls] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		if (!paths.length) {
			setUrls([]);
			return;
		}
		Promise.all(paths.map((path) => path.startsWith("http") ? Promise.resolve(path) : supabase.storage.from("property-images").createSignedUrl(path, 3600 * 24).then(({ data }) => data?.signedUrl ?? ""))).then((r) => {
			if (!cancelled) setUrls(r.filter(Boolean));
		});
		return () => {
			cancelled = true;
		};
	}, [paths.join("|")]);
	return urls;
}
function PropertyPage() {
	const { data: p } = useSuspenseQuery(propertyQuery(Route.useParams().id));
	const fallback = FALLBACKS[p.category] ?? dubai_apartment_jpg_asset_default;
	const cat = CATEGORY_LABEL[p.category] ?? {
		label: "Property",
		region: ""
	};
	const heroSrc = usePropertyImageSrc(p.image_path, p.image_url, fallback, p.gallery);
	const galleryUrls = useGalleryUrls(p.gallery ?? []);
	const allImages = (galleryUrls.length ? galleryUrls : [heroSrc]).filter(Boolean);
	const [active, setActive] = (0, import_react.useState)(0);
	const count = allImages.length;
	const go = (dir) => setActive((i) => count ? (i + dir + count) % count : 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative bg-primary text-primary-foreground border-b border-background/10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, { className: "relative inset-x-auto top-auto z-[60]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-6 pb-3 lg:px-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/properties/$category",
						params: { category: p.category },
						className: "inline-flex items-center gap-2 text-[11px] tracking-[0.24em] uppercase text-background/70 hover:text-accent",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								children: "←"
							}),
							" Back to ",
							cat.label
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-secondary/40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl grid gap-10 px-6 py-14 lg:grid-cols-5 lg:px-10 lg:py-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative overflow-hidden rounded-sm bg-primary shadow-[0_20px_60px_-30px_rgba(0,0,0,0.2)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: allImages[active] ?? fallback,
									alt: "",
									"aria-hidden": true,
									className: "absolute inset-0 h-full w-full object-cover scale-110 blur-2xl opacity-40"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: allImages[active] ?? fallback,
									alt: p.title,
									className: "relative h-[380px] w-full object-contain sm:h-[460px] lg:h-[540px]"
								}),
								p.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute left-4 top-4 rounded-sm bg-accent px-3 py-1.5 text-[10px] tracking-[0.24em] uppercase text-primary",
									children: "Featured"
								}),
								count > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": "Previous photo",
										onClick: () => go(-1),
										className: "absolute left-3 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-primary/70 text-primary-foreground backdrop-blur-sm transition hover:bg-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": "Next photo",
										onClick: () => go(1),
										className: "absolute right-3 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-primary/70 text-primary-foreground backdrop-blur-sm transition hover:bg-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "absolute bottom-4 right-4 rounded-sm bg-primary/70 px-3 py-1 text-[11px] tracking-[0.18em] text-primary-foreground",
										children: [
											active + 1,
											" / ",
											count
										]
									})
								] })
							]
						}), count > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 grid grid-cols-4 gap-3 sm:grid-cols-5 lg:grid-cols-6",
							children: allImages.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setActive(i),
								className: `overflow-hidden rounded-sm border transition ${i === active ? "border-accent ring-1 ring-accent" : "border-transparent opacity-70 hover:opacity-100"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src,
									alt: "",
									className: "h-16 w-full object-cover sm:h-20"
								})
							}, src + i))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "lg:col-span-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[11px] tracking-[0.32em] uppercase text-accent",
								children: [
									cat.region,
									" · ",
									cat.label
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-3 font-serif text-3xl leading-tight sm:text-4xl",
								children: p.title
							}),
							p.location && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm tracking-[0.18em] uppercase text-muted-foreground",
								children: p.location
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 rounded-sm bg-card p-6 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.15)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] tracking-[0.24em] uppercase text-muted-foreground",
										children: "Starting"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 font-serif text-3xl text-foreground",
										children: p.price || "Price on Request"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 grid grid-cols-2 gap-4 border-t border-muted-foreground/10 pt-5 text-sm",
										children: [p.bedrooms && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] tracking-[0.24em] uppercase text-muted-foreground",
											children: "Bedrooms"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-1 font-serif text-lg",
											children: p.bedrooms
										})] }), p.area && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] tracking-[0.24em] uppercase text-muted-foreground",
											children: "Area"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-1 font-serif text-lg",
											children: p.area
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/contact",
										className: "mt-6 block rounded-sm bg-accent px-6 py-3 text-center text-[12px] tracking-[0.24em] uppercase font-medium text-primary hover:bg-accent/90",
										children: "Enquire About This"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/",
										hash: "contact",
										className: "mt-3 block text-center text-[10px] tracking-[0.24em] uppercase text-muted-foreground hover:text-accent",
										children: "Or request a viewing"
									})
								]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl grid gap-12 px-6 py-16 lg:grid-cols-5 lg:px-10 lg:py-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] tracking-[0.28em] uppercase text-accent",
								children: "Overview"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-serif text-3xl",
								children: "About this property"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground",
								children: (p.full_description || p.description || "Details for this listing will be shared on request.").split(/\n+/).map((para, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: para }, i))
							})
						]
					}), p.highlights && p.highlights.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] tracking-[0.28em] uppercase text-accent",
								children: "Highlights"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-serif text-3xl",
								children: "Key features"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 space-y-3",
								children: p.highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3 text-sm text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-accent",
										"aria-hidden": true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: h })]
								}, h))
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden bg-primary text-primary-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_dubai_default,
					alt: "",
					"aria-hidden": true,
					className: "absolute inset-0 h-full w-full object-cover opacity-15"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-4xl px-6 py-16 text-center lg:py-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-serif text-3xl lg:text-4xl",
							children: [
								"Interested in ",
								p.title,
								"?"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-background/75",
							children: "Speak with an experienced broker for pricing, availability and a private viewing."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "mt-8 inline-flex items-center gap-3 rounded-sm bg-accent px-8 py-3.5 text-[12px] tracking-[0.24em] uppercase font-medium text-primary hover:bg-accent/90 transition",
							children: "Get in touch"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { PropertyPage as component };
