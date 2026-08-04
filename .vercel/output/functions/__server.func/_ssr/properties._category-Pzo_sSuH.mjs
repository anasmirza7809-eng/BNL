import { r as useSuspenseQuery, s as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as TiltCard } from "./tilt-card-KEc7MmGm.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Header } from "./header-Boyy3Tyj.mjs";
import { t as Footer } from "./footer-DKq7yCTl.mjs";
import { t as PropertyImage } from "./property-image-CPGMeRam.mjs";
import { t as hero_dubai_default } from "./hero-dubai-B8guiSvw.mjs";
import { t as cta_bg_default } from "./cta-bg-CIrHiDma.mjs";
import { a as Route, i as CATEGORIES, o as isCategory, s as propertiesQuery } from "./router-LgY5_HiF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/properties._category-Pzo_sSuH.js
var import_jsx_runtime = require_jsx_runtime();
function CategoryPage() {
	const { category } = Route.useParams();
	if (!isCategory(category)) return null;
	const meta = CATEGORIES[category];
	const { data: properties } = useSuspenseQuery(propertiesQuery(category));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden bg-primary text-primary-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_dubai_default,
						alt: "",
						"aria-hidden": true,
						className: "absolute inset-0 h-full w-full object-cover opacity-25"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-primary/80 to-primary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[11px] tracking-[0.32em] uppercase text-accent",
								children: [meta.region, " Properties"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-4 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl",
								children: meta.title.toUpperCase()
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-accent" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rotate-45 bg-accent" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-accent" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-xl text-sm text-background/80",
								children: meta.blurb
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								className: "mt-8 inline-flex items-center gap-2 text-[11px] tracking-[0.24em] uppercase text-background/80 hover:text-accent",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": true,
									children: "←"
								}), " Back to all categories"]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-secondary/50",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24",
					children: properties.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-lg rounded-sm bg-card p-10 text-center shadow-[0_20px_60px_-30px_rgba(0,0,0,0.15)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] tracking-[0.28em] uppercase text-accent",
								children: "Coming Soon"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-serif text-2xl",
								children: "New listings are being curated"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: "Contact our senior brokers for an off-market shortlist tailored to your goals."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								hash: "contact",
								className: "mt-6 inline-block rounded-sm bg-accent px-6 py-3 text-[12px] tracking-[0.24em] uppercase font-medium text-primary hover:bg-accent/90",
								children: "Enquire Now"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-3 perspective-scene",
						children: properties.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, {
							max: 7,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/property/$id",
								params: { id: p.id },
								className: "group flex h-full flex-col overflow-hidden rounded-sm bg-card shadow-[0_20px_60px_-30px_rgba(0,0,0,0.15)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative h-56 overflow-hidden bg-primary/90",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PropertyImage, {
										imagePath: p.image_path,
										imageUrl: p.image_url,
										gallery: p.gallery,
										fallback: meta.fallbackImg,
										alt: p.title,
										className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
									}), p.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute left-3 top-3 rounded-sm bg-accent px-2 py-1 text-[10px] tracking-[0.22em] uppercase text-primary",
										children: "Featured"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-1 flex-col p-6 tilt-lift-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] tracking-[0.24em] uppercase text-muted-foreground",
											children: p.location || meta.region
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-2 font-serif text-xl",
											children: p.title
										}),
										p.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm text-muted-foreground line-clamp-3",
											children: p.description
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[11px] tracking-[0.18em] uppercase text-foreground/80",
											children: [p.bedrooms && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.bedrooms }), p.area && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.area })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-auto flex items-end justify-between pt-6",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[10px] tracking-[0.24em] uppercase text-muted-foreground",
												children: "Starting"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-serif text-lg text-foreground",
												children: p.price || "On Request"
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "inline-flex items-center gap-2 rounded-sm border border-primary/20 px-4 py-2 text-[10px] tracking-[0.24em] uppercase group-hover:bg-primary group-hover:text-primary-foreground transition",
												children: "View Details →"
											})]
										})
									]
								})]
							})
						}, p.id))
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden bg-primary text-primary-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 bg-cover bg-center opacity-25",
						style: { backgroundImage: `url(${cta_bg_default})` },
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/95",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto max-w-4xl px-6 py-16 text-center lg:py-20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-serif text-3xl lg:text-4xl",
								children: "Looking for something specific?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm text-background/75",
								children: "Share your requirements and a senior broker will curate a private shortlist within four business hours."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								hash: "contact",
								className: "mt-8 inline-flex items-center gap-3 rounded-sm bg-accent px-8 py-3.5 text-[12px] tracking-[0.24em] uppercase font-medium text-primary hover:bg-accent/90 transition",
								children: "Get in touch"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { CategoryPage as component };
