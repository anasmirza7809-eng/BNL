import { s as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as useReveal3D, t as TiltCard } from "./tilt-card-KEc7MmGm.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Header } from "./header-Boyy3Tyj.mjs";
import { t as Footer } from "./footer-DKq7yCTl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blogs-Bg70H-NN.js
var import_jsx_runtime = require_jsx_runtime();
var hero_blogs_default = "/assets/hero-blogs-0wgUrk3X.jpg";
var blog_hero_luxury_webp_asset_default = {
	version: 1,
	asset_id: "fbbc9bc1-4a87-4756-b84f-b61d2bd2f882",
	project_id: "69f98387-551c-4301-9e08-a8b384c5d4e2",
	url: "/__l5e/assets-v1/fbbc9bc1-4a87-4756-b84f-b61d2bd2f882/blog-hero-luxury.webp",
	r2_key: "a/v1/69f98387-551c-4301-9e08-a8b384c5d4e2/fbbc9bc1-4a87-4756-b84f-b61d2bd2f882/blog-hero-luxury.webp",
	original_filename: "blog-hero-luxury.webp",
	size: 100056,
	content_type: "image/webp",
	created_at: "2026-07-21T12:13:31Z"
};
var damac_blog_jpg_asset_default = {
	version: 1,
	asset_id: "dd3c5cb3-2395-4bfa-a72e-8dd958644e88",
	project_id: "69f98387-551c-4301-9e08-a8b384c5d4e2",
	url: "/__l5e/assets-v1/dd3c5cb3-2395-4bfa-a72e-8dd958644e88/damac-blog.jpg",
	r2_key: "a/v1/69f98387-551c-4301-9e08-a8b384c5d4e2/dd3c5cb3-2395-4bfa-a72e-8dd958644e88/damac-blog.jpg",
	original_filename: "damac-blog.jpg",
	size: 610515,
	content_type: "image/jpeg",
	created_at: "2026-07-21T12:17:56Z"
};
var bloom_blog_jpg_asset_default = {
	version: 1,
	asset_id: "f2fbf8fc-d921-4b61-a73b-1bc09cd44b5e",
	project_id: "69f98387-551c-4301-9e08-a8b384c5d4e2",
	url: "/__l5e/assets-v1/f2fbf8fc-d921-4b61-a73b-1bc09cd44b5e/bloom-blog.jpg",
	r2_key: "a/v1/69f98387-551c-4301-9e08-a8b384c5d4e2/f2fbf8fc-d921-4b61-a73b-1bc09cd44b5e/bloom-blog.jpg",
	original_filename: "bloom-blog.jpg",
	size: 56068,
	content_type: "image/jpeg",
	created_at: "2026-07-21T12:19:32Z"
};
var golden_visa_blog_webp_asset_default = {
	version: 1,
	asset_id: "1860eb09-6e9c-4b6b-a9c3-a89c87096dad",
	project_id: "69f98387-551c-4301-9e08-a8b384c5d4e2",
	url: "/__l5e/assets-v1/1860eb09-6e9c-4b6b-a9c3-a89c87096dad/golden-visa-blog.webp",
	r2_key: "a/v1/69f98387-551c-4301-9e08-a8b384c5d4e2/1860eb09-6e9c-4b6b-a9c3-a89c87096dad/golden-visa-blog.webp",
	original_filename: "golden-visa-blog.webp",
	size: 147010,
	content_type: "image/webp",
	created_at: "2026-07-21T12:21:03Z"
};
function Reveal({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: useReveal3D(),
		className: `reveal-3d ${className}`,
		children
	});
}
var BLOGS = [
	{
		name: "Property Finder Blog",
		url: "https://www.propertyfinder.ae/blog",
		domain: "propertyfinder.ae/blog",
		tag: "Neutral · Data-backed",
		description: "Dubai's leading property portal. Publishes neutral, data-backed guides on neighborhoods, mortgages, and new regulations (like tenant credit-check rules). Reads as journalistic rather than promotional.",
		image: blog_hero_luxury_webp_asset_default.url
	},
	{
		name: "DAMAC Properties Blog",
		url: "https://www.damacproperties.com/en/blog",
		domain: "damacproperties.com/en/blog",
		tag: "Developer · Market Insight",
		description: "From an established, decades-old developer with strong social proof (nearly 1M Facebook followers). Content frames Dubai's growth story positively while staying informational about projects and market shifts.",
		image: damac_blog_jpg_asset_default.url
	},
	{
		name: "Bloom Luxury Signature Blog",
		url: "https://luxurysignature.net",
		domain: "luxurysignature.net",
		tag: "Investor · Stats-led",
		description: "Focuses on data points like population growth, Golden Visa expansion, and market maturity — builds confidence through stats rather than hype.",
		image: golden_visa_blog_webp_asset_default.url
	},
	{
		name: "K Estates Blog",
		url: "https://kestates.ae/blog",
		domain: "kestates.ae/blog",
		tag: "Educational · Lifestyle",
		description: "Covers market insights and lifestyle trends in a straightforward, educational tone aimed at helping buyers understand Dubai rather than just pushing listings.",
		image: bloom_blog_jpg_asset_default.url
	}
];
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative min-h-[55vh] w-full overflow-hidden bg-primary",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hero_blogs_default,
				alt: "Dubai skyline",
				className: "absolute inset-0 h-full w-full object-cover opacity-40"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto flex min-h-[55vh] max-w-7xl flex-col justify-center px-6 pt-32 pb-16 lg:px-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl text-background reveal-3d is-visible",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "eyebrow text-accent",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule mr-3 !bg-accent" }), "Blogs"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-4 font-serif text-5xl leading-[1.05] sm:text-6xl",
							children: ["Insights we ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-accent",
								children: "recommend"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-2xl text-base leading-relaxed text-background/80",
							children: "A hand-picked shortlist of Dubai real estate blogs we trust — market data, neighborhood guides, regulation updates and long-view investor perspective."
						})
					]
				})
			})
		]
	});
}
function BlogGrid() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "eyebrow text-accent",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule mr-3 !bg-accent" }), "Recommended Reading"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-serif text-4xl lg:text-5xl",
							children: "Trusted Voices on Dubai Real Estate"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto mt-4 flex items-center justify-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-accent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rotate-45 bg-accent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-accent" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-5 max-w-2xl text-sm text-muted-foreground",
							children: "While our own editorial is on the way, these are the outlets we lean on for grounded market context."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-6 md:grid-cols-2",
					children: BLOGS.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						className: "h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, {
							max: 6,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: b.url,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "group flex h-full flex-col justify-between rounded-sm bg-card p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.15)] transition hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									b.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mb-6 overflow-hidden rounded-sm",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: b.image,
											alt: b.name,
											className: "h-48 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[10px] tracking-[0.28em] uppercase text-accent",
											children: [
												"0",
												i + 1,
												" · ",
												b.tag
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-muted-foreground group-hover:text-accent transition",
											children: "↗"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-5 font-serif text-2xl text-foreground group-hover:text-accent transition-colors",
										children: b.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-sm leading-relaxed text-muted-foreground",
										children: b.description
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex items-center gap-3 border-t border-border/60 pt-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] tracking-[0.22em] uppercase text-foreground/70",
										children: b.domain
									})]
								})]
							})
						})
					}, b.url))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "mt-16 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted-foreground",
						children: [
							"Want tailored guidance instead? ",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "text-accent underline-offset-4 hover:underline",
								children: "Speak with an experienced broker →"
							})
						]
					})
				})
			]
		})
	});
}
function BlogsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlogGrid, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { BlogsPage as component };
