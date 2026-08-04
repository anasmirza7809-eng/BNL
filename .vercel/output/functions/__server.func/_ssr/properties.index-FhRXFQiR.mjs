import { s as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as TiltCard } from "./tilt-card-KEc7MmGm.mjs";
import { t as india_residential_jpg_asset_default } from "./india-residential.jpg.asset-ptUwFqSh.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Header } from "./header-Boyy3Tyj.mjs";
import { t as Footer } from "./footer-DKq7yCTl.mjs";
import { t as dubai_apartment_jpg_asset_default } from "./dubai-apartment.jpg.asset-gIOVSZZQ.mjs";
import { n as india_commercial_jpg_asset_default, r as india_land_default, t as dubai_villa_jpg_asset_default } from "./india-commercial.jpg.asset-NRd216K6.mjs";
import { t as cta_bg_default } from "./cta-bg-CIrHiDma.mjs";
import { t as dubai_commercial_jpg_asset_default } from "./dubai-commercial.jpg.asset-CSccr4cr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/properties.index-FhRXFQiR.js
var import_jsx_runtime = require_jsx_runtime();
var hero_properties_default = "/assets/hero-properties-QNrVLcDB.jpg";
var CATEGORIES = [
	{
		slug: "dubai-apartments",
		region: "Dubai",
		title: "Luxury Apartments",
		blurb: "Modern residences in Dubai's most iconic addresses.",
		image: dubai_apartment_jpg_asset_default.url
	},
	{
		slug: "dubai-villas",
		region: "Dubai",
		title: "Luxury Villas",
		blurb: "Exclusive villas and estates for elevated living.",
		image: dubai_villa_jpg_asset_default.url
	},
	{
		slug: "dubai-commercial",
		region: "Dubai",
		title: "Commercial Spaces",
		blurb: "High-ROI offices and retail in prime commercial districts.",
		image: dubai_commercial_jpg_asset_default.url
	},
	{
		slug: "india-residential",
		region: "India",
		title: "Residential",
		blurb: "Luxury homes for a discerning lifestyle across metro India.",
		image: india_residential_jpg_asset_default.url
	},
	{
		slug: "india-commercial",
		region: "India",
		title: "Commercial",
		blurb: "Grade-A offices and retail assets across India's top cities.",
		image: india_commercial_jpg_asset_default.url
	},
	{
		slug: "india-land",
		region: "India",
		title: "Land Investment",
		blurb: "Titled plots and land banks with strong growth potential.",
		image: india_land_default
	}
];
function CategoryCard({ cat }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, {
		max: 7,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/properties/$category",
			params: { category: cat.slug },
			className: "group flex h-full flex-col overflow-hidden rounded-sm bg-card shadow-[0_20px_60px_-30px_rgba(0,0,0,0.15)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-64 overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: cat.image,
						alt: cat.title,
						loading: "lazy",
						className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute left-4 top-4 rounded-sm bg-accent px-2.5 py-1 text-[10px] tracking-[0.24em] uppercase text-primary",
						children: cat.region
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col p-6 tilt-lift-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-serif text-2xl text-foreground",
						children: cat.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground",
						children: cat.blurb
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mt-auto inline-flex items-center gap-2 pt-6 text-[11px] tracking-[0.24em] uppercase text-primary group-hover:text-accent transition",
						children: ["View Listings ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							children: "→"
						})]
					})
				]
			})]
		})
	});
}
function PropertiesPage() {
	const dubai = CATEGORIES.filter((c) => c.region === "Dubai");
	const india = CATEGORIES.filter((c) => c.region === "India");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden bg-primary text-primary-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_properties_default,
						alt: "",
						"aria-hidden": true,
						className: "absolute inset-0 h-full w-full object-cover opacity-25"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-primary/80 to-primary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "eyebrow text-accent flex items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "gold-rule draw-x is-visible mr-3 !bg-accent",
									style: { ["--reveal-delay"]: "0ms" }
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "reveal-up is-visible",
									style: { ["--reveal-delay"]: "150ms" },
									children: "Our Portfolio"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-4 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl",
								children: "PROPERTIES IN DUBAI & INDIA"
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
								className: "mt-6 max-w-2xl text-sm text-background/80",
								children: "A curated selection of luxury apartments, villas, commercial assets and land investments across two of the world's most rewarding real estate markets."
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-secondary/40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] tracking-[0.28em] uppercase text-accent",
							children: "Dubai"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-serif text-3xl sm:text-4xl",
							children: "Dubai Properties"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden sm:block h-px flex-1 bg-primary/15" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 perspective-scene",
						children: dubai.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryCard, { cat: c }, c.slug))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] tracking-[0.28em] uppercase text-accent",
							children: "India"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-serif text-3xl sm:text-4xl",
							children: "India Properties"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden sm:block h-px flex-1 bg-primary/15" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 perspective-scene",
						children: india.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryCard, { cat: c }, c.slug))
					})]
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
								children: "Can't find what you're looking for?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm text-background/75",
								children: "Share your brief and an experienced broker will curate a private, off-market shortlist within four business hours."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "mt-8 inline-flex items-center gap-3 rounded-sm bg-accent px-8 py-3.5 text-[12px] tracking-[0.24em] uppercase font-medium text-primary hover:bg-accent/90 transition",
								children: "Speak with a Broker"
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
export { PropertiesPage as component };
