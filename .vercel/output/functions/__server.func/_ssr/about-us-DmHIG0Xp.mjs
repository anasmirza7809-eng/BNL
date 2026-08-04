import "../_runtime.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as useReveal3D, t as TiltCard } from "./tilt-card-KEc7MmGm.mjs";
import { t as india_residential_jpg_asset_default } from "./india-residential.jpg.asset-ptUwFqSh.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Header } from "./header-Boyy3Tyj.mjs";
import { t as Footer } from "./footer-DKq7yCTl.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
var hero_about_default = "/assets/hero-about--OzcbtK8.jpg";
var about_dubai_skyline_jpg_asset_default = {
	version: 1,
	asset_id: "e0624522-4764-41e3-a5ce-4babf7adf65f",
	project_id: "69f98387-551c-4301-9e08-a8b384c5d4e2",
	url: "/__l5e/assets-v1/e0624522-4764-41e3-a5ce-4babf7adf65f/about-dubai-skyline.jpg",
	r2_key: "a/v1/69f98387-551c-4301-9e08-a8b384c5d4e2/e0624522-4764-41e3-a5ce-4babf7adf65f/about-dubai-skyline.jpg",
	original_filename: "about-dubai-skyline.jpg",
	size: 170086,
	content_type: "image/jpeg",
	created_at: "2026-07-23T11:21:54Z"
};
var testimonials_bg_default = "/assets/testimonials-bg-Cl-HD0Yi.jpg";
function Reveal({ children, className = "", delay = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: useReveal3D(),
		className: `reveal-up ${className}`,
		style: { ["--reveal-delay"]: `${delay}ms` },
		children
	});
}
function RevealWords({ text, className = "", wordDelay = 70, className2 = "" }) {
	const ref = useReveal3D();
	const words = text.split(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		ref,
		className: `reveal-words ${className}`,
		children: words.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `reveal-word ${className2}`,
			style: { marginRight: "0.28em" },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				style: { ["--word-delay"]: `${i * wordDelay}ms` },
				children: w
			})
		}, i))
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative min-h-[70vh] w-full overflow-hidden bg-primary",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_about_default,
					alt: "Dubai skyline",
					className: "absolute inset-0 h-full w-full object-cover opacity-40 hero-zoom"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/70 to-primary" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-center px-6 pt-32 pb-20 lg:px-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl text-background",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "eyebrow text-accent flex items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "gold-rule draw-x is-visible mr-3 !bg-accent",
								style: { ["--reveal-delay"]: "0ms" }
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "reveal-up is-visible",
								style: { ["--reveal-delay"]: "150ms" },
								children: "About Bricks & Legacy"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-4 font-serif text-5xl leading-[1.05] sm:text-6xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealWords, { text: "A boutique real estate firm" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-accent",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealWords, {
										text: "built on trust & legacy",
										wordDelay: 80
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "reveal-up is-visible mt-6 max-w-2xl text-base leading-relaxed text-background/80",
							style: { ["--reveal-delay"]: "900ms" },
							children: "We are a modern advisory bridging Dubai's iconic skyline with India's most promising land and residential opportunities — delivering discreet, personal service to a global clientele."
						})
					]
				})
			})
		]
	});
}
function ServiceIcon({ type }) {
	const common = {
		width: 28,
		height: 28,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: 1.5,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	};
	if (type === "buy") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		...common,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 11.5 12 4l9 7.5" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 10v10h14V10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 20v-6h4v6" })
		]
	});
	if (type === "sell") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		...common,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 12c1.5-1.5 3-1 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 15l3-3 3 2 3-4 3 3" })]
	});
	if (type === "rent") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		...common,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "8",
				cy: "15",
				r: "4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m11 12 9-9" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17 3h4v4" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m15 5 4 4" })
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		...common,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "3",
				y: "5",
				width: "18",
				height: "16",
				rx: "2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 10h18" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 3v4M16 3v4" })
		]
	});
}
function DubaiIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		width: "72",
		height: "88",
		viewBox: "0 0 72 88",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 84V38l8-10 8 10v46" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M34 84V22l8-14 8 14v62" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M50 84V44l6-8 6 8v40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 84h60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 46h6M22 54h6M22 62h6M22 70h6M38 30h8M38 40h8M38 50h8M38 60h8M38 70h8M54 50h6M54 60h6M54 70h6" })
		]
	});
}
function IndiaIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		width: "86",
		height: "72",
		viewBox: "0 0 86 72",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M43 6l-3 6 3 4 3-4z" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M43 16v6" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 30c0-6 5-8 11-8s11 2 11 8" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M30 30h26v6H30z" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M28 36h30v4H28z" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 40v22M40 40v22M46 40v22M54 40v22" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 62h38" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 62v-10c0-3 2-5 5-5M68 62v-10c0-3-2-5-5-5" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 47l-2 4M68 47l2 4" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 66h74" })
		]
	});
}
function ServicePill({ type, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center gap-2 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-accent",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceIcon, { type })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[10px] font-medium tracking-[0.18em] uppercase text-foreground/80",
			children: label
		})]
	});
}
function RegionCard({ variant, label, description }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group flex h-full overflow-hidden rounded-md border border-foreground/10 bg-card shadow-[0_20px_60px_-30px_rgba(0,0,0,0.18)] transition hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.28)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `${variant === "dubai" ? "bg-primary text-background" : "bg-accent text-primary"} flex w-24 sm:w-28 shrink-0 items-center justify-center p-4 transition-transform duration-500 group-hover:scale-[1.02]`,
			children: variant === "dubai" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DubaiIcon, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndiaIcon, {})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col justify-center gap-4 p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `font-serif text-2xl tracking-[0.24em] ${variant === "dubai" ? "text-primary" : "text-accent"}`,
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted-foreground",
				children: [
					"We help you with end-to-end solutions for",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-foreground",
						children: "Buy, Sell, Rent & Short Rental"
					}),
					" ",
					description
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-4 gap-2 pt-2 border-t border-foreground/10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicePill, {
						type: "buy",
						label: "Buy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicePill, {
						type: "sell",
						label: "Sell"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicePill, {
						type: "rent",
						label: "Rent"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicePill, {
						type: "short",
						label: "Short Rental"
					})
				]
			})]
		})]
	});
}
function FeatureItem({ label, icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center text-center gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-primary/80",
			children: icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm font-medium text-foreground/80 leading-snug max-w-[10rem]",
			children: label
		})]
	});
}
function WhoWeAre() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 lg:grid-cols-2 lg:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "eyebrow text-accent flex items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "reveal-up is-visible",
								children: "Who We Are"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ml-3 h-px w-16 bg-accent" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-6 font-serif text-5xl leading-[1.05] lg:text-6xl text-primary",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealWords, { text: "Building Connections." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-accent",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealWords, {
										text: "Creating Value.",
										wordDelay: 80
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-6 block h-px w-16 bg-accent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground",
							children: "We are a global real estate advisory firm, helping clients buy, sell, rent & invest in the right properties across Dubai and India."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative perspective-scene h-[360px] lg:h-[420px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-y-0 left-0 w-[62%] overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]",
								style: { clipPath: "polygon(0 0, 100% 0, 82% 100%, 0 100%)" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: about_dubai_skyline_jpg_asset_default.url,
									alt: "Dubai skyline",
									className: "h-full w-full object-cover"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-y-0 right-0 w-[46%] overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]",
								style: { clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0 100%)" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: india_residential_jpg_asset_default.url,
									alt: "India skyline",
									className: "h-full w-full object-cover"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -inset-6 -z-10 rounded-sm bg-gradient-to-tr from-accent/20 via-transparent to-primary/20 blur-2xl" })
						]
					}) })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 grid gap-6 lg:grid-cols-2 perspective-scene",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegionCard, {
						variant: "dubai",
						label: "DUBAI",
						description: "properties in Dubai."
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 120,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegionCard, {
							variant: "india",
							label: "INDIA",
							description: "properties in India."
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex flex-col gap-6 overflow-hidden rounded-md border border-foreground/10 bg-secondary/60 p-6 sm:flex-row sm:items-center sm:gap-8 sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex shrink-0 items-center gap-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-16 w-16 shrink-0 place-items-center rounded-full bg-primary text-accent",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
										width: "26",
										height: "26",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "1.5",
										strokeLinecap: "round",
										strokeLinejoin: "round",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "12",
											cy: "10",
											r: "2.5"
										})]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hidden h-16 w-px bg-foreground/15 sm:block" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "font-serif text-xl sm:text-2xl tracking-[0.14em] uppercase text-primary",
									children: ["Exclusively for ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-accent",
										children: "NRI Clients"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground max-w-2xl",
									children: [
										"We specialize in ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold text-foreground",
											children: "Land Investment"
										}),
										" opportunities across India, curated exclusively for NRI investors."
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								className: "hidden md:block shrink-0 text-primary/40",
								width: "140",
								height: "70",
								viewBox: "0 0 140 70",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "1",
								strokeLinecap: "round",
								strokeLinejoin: "round",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 56c14-4 28 6 42 2s22-14 36-14 30 10 54 8" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 50l4-8 4 8M60 42l4-8 4 8M104 40l4-8 4 8" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M92 20c0 6-6 10-6 10s-6-4-6-10a6 6 0 0 1 12 0Z" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "86",
										cy: "20",
										r: "2"
									})
								]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 grid grid-cols-2 gap-8 md:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureItem, {
							label: "Trusted Advisory",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								width: "36",
								height: "36",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "1.4",
								strokeLinecap: "round",
								strokeLinejoin: "round",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2 4 5v7c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V5l-8-3Z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m9 12 2 2 4-4" })]
							})
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 80,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureItem, {
								label: "NRI-Focused Solutions",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									width: "36",
									height: "36",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "1.4",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "12",
										cy: "8",
										r: "4"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 22c0-4.4 3.6-8 8-8s8 3.6 8 8" })]
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 160,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureItem, {
								label: "End-to-End Support",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									width: "36",
									height: "36",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "1.4",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 14v-2a8 8 0 0 1 16 0v2" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
											x: "3",
											y: "14",
											width: "4",
											height: "6",
											rx: "1"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
											x: "17",
											y: "14",
											width: "4",
											height: "6",
											rx: "1"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17 20a4 4 0 0 1-4 3h-1" })
									]
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 240,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureItem, {
								label: "Global Reach, Local Expertise",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									width: "36",
									height: "36",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "1.4",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "12",
										cy: "12",
										r: "10"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2 12h20M12 2c3 3.5 4.5 7.5 4.5 10S15 18.5 12 22c-3-3.5-4.5-7.5-4.5-10S9 5.5 12 2Z" })]
								})
							})
						})
					]
				})
			]
		})
	});
}
function MissionVision() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-secondary/50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "eyebrow text-accent",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule mr-3 !bg-accent" }), "Purpose & Direction"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-serif text-4xl lg:text-5xl",
						children: "Our Mission & Vision"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto mt-4 flex items-center justify-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-accent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rotate-45 bg-accent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-accent" })
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-6 md:grid-cols-2 perspective-scene",
				children: [{
					eyebrow: "Our Mission",
					title: "Redefining trust in real estate",
					points: [
						"Empower families to invest, live and grow with confidence.",
						"Bridge Dubai and India through expert cross-border guidance.",
						"Deliver personalised, end-to-end real estate solutions.",
						"Turn aspirations into action — from first inquiry to final deal."
					]
				}, {
					eyebrow: "Our Vision",
					title: "A future built with trusted partners",
					points: [
						"Be the most trusted advisory between Dubai and India.",
						"Remove the guesswork from every property transaction.",
						"Create a seamless journey from inquiry to ownership.",
						"Build lifelong relationships that outlast the deal."
					]
				}].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 120,
					className: "h-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, {
						max: 8,
						className: "h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "group relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-sm bg-card p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.18)] tilt-lift-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-accent/20 blur-3xl transition-opacity duration-500 group-hover:opacity-80" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "eyebrow text-accent",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule mr-2 !bg-accent" }), c.eyebrow]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-serif text-2xl lg:text-3xl text-foreground",
									children: c.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-5 space-y-3",
									children: c.points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-3 text-sm leading-relaxed text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent/15 text-accent",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
												width: "10",
												height: "10",
												viewBox: "0 0 24 24",
												fill: "none",
												stroke: "currentColor",
												strokeWidth: "3",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12l5 5L20 7" })
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p })]
									}, p))
								})
							]
						})
					})
				}, c.eyebrow))
			})]
		})
	});
}
function OurCommitment() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "eyebrow text-accent",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule mr-3 !bg-accent" }), "Our Commitment"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-serif text-4xl lg:text-5xl",
						children: "More than brokers — your partners"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-5 max-w-2xl text-sm text-muted-foreground",
						children: "Whether you're a first-time buyer, a seasoned investor, or a long-term partner, our promise remains the same."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3",
				children: [
					"Fair practices over fast profits",
					"Complete transparency in every transaction",
					"A platform where clients and partners are respected and rewarded",
					"Continuous learning and evolving to serve you better every day",
					"Integrity over incentives — service, not sales targets",
					"One-stop solutions across buying, selling, leasing, mortgage & management"
				].map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 70,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group flex h-full items-start gap-4 rounded-sm border border-accent/20 bg-card p-6 transition hover:border-accent hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.18)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 flex h-8 w-8 flex-none items-center justify-center rounded-full bg-accent/15 text-accent transition group-hover:bg-accent group-hover:text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								width: "14",
								height: "14",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12l5 5L20 7" })
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-foreground",
							children: p
						})]
					})
				}, p))
			})]
		})
	});
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-primary text-primary-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-cover bg-center opacity-30",
				style: { backgroundImage: `url(${testimonials_bg_default})` },
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/85 to-primary/95",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "eyebrow text-accent",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule mr-3 !bg-accent" }), "Testimonials"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-serif text-4xl lg:text-5xl text-background",
							children: "What our clients say"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-5 max-w-2xl text-sm text-background/75",
							children: "Real stories from clients across Dubai and India who trusted us with their homes and investments."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch perspective-scene",
					children: [
						{
							name: "Omar Khalifa",
							location: "",
							quote: "Found our dream family villa in Dubai Hills Estate thanks to the amazing team. Incredibly helpful and made the entire process so easy."
						},
						{
							name: "Layla Mansoori",
							location: "",
							quote: "Thrilled with the support in finding our new office space in DIFC. The team understood our business needs perfectly."
						},
						{
							name: "Nikhil Patel",
							location: "",
							quote: "Excellent guidance and helped us find the perfect investment in Dubai Creek Harbour. Highly recommend for anyone buying in Dubai."
						},
						{
							name: "Priya Sharma",
							location: "",
							quote: "From the initial property viewings to the final registration, the team was incredibly supportive and professional. Seamless throughout."
						},
						{
							name: "Sunita Kumar",
							location: "",
							quote: "Transparent and honest approach. Realistic valuation, no hidden charges, and excellent negotiation on my ancestral property sale."
						},
						{
							name: "Sarah Mitchell",
							location: "",
							quote: "Their property management has been a lifesaver. Proactive on maintenance and tenants — full peace of mind as an expat."
						}
					].map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 90,
						className: "h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, {
							max: 6,
							className: "h-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "group relative flex h-full min-h-[280px] flex-col rounded-sm bg-background/[0.04] p-8 backdrop-blur-sm border border-background/10 transition hover:border-accent/60 hover:bg-background/[0.07] tilt-lift-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										className: "h-8 w-8 shrink-0 text-accent",
										viewBox: "0 0 24 24",
										fill: "currentColor",
										"aria-hidden": true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7.17 6C4.87 6 3 7.87 3 10.17V18h7v-7.83H6.5c0-1.47 1.2-2.67 2.67-2.67V6H7.17zm10 0c-2.3 0-4.17 1.87-4.17 4.17V18h7v-7.83H16.5c0-1.47 1.2-2.67 2.67-2.67V6h-2z" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-5 text-sm leading-relaxed text-background/90",
										children: [
											"\"",
											r.quote,
											"\""
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-auto flex items-center gap-3 pt-6 border-t border-background/10",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-primary font-serif text-sm",
											children: r.name.split(" ").map((n) => n[0]).join("").slice(0, 2)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "min-w-0",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "truncate font-serif text-sm text-background",
												children: r.name
											})
										})]
									})
								]
							})
						})
					}, r.name))
				})]
			})
		]
	});
}
function MeetTheTeam() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "eyebrow text-accent",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule mr-3 !bg-accent" }), "Meet the Team"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-serif text-4xl lg:text-5xl",
						children: "The people behind the legacy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-5 max-w-xl text-sm text-muted-foreground",
						children: "Senior advisors with deep local roots in Dubai and India — and a global outlook shaped by the clients they serve."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 perspective-scene",
				children: [
					{
						name: "Founder & Managing Director",
						role: "Dubai & India Advisory",
						bio: "Over a decade advising HNIs and NRIs on cross-border real estate. Leads every senior mandate personally.",
						initials: "BL"
					},
					{
						name: "Head of Dubai Sales",
						role: "Luxury Apartments & Villas",
						bio: "Specialist in Palm Jumeirah, Downtown, and Emirates Hills. Deep relationships with every top developer.",
						initials: "DS"
					},
					{
						name: "Head of India Desk",
						role: "NRI Land & Residential",
						bio: "Focused on Delhi NCR, Mumbai, and emerging tier-1 corridors. Guides NRIs through legal and tax nuances.",
						initials: "ID"
					},
					{
						name: "Head of Property Management",
						role: "Dubai & India Operations",
						bio: "Runs the day-to-day for owners abroad — tenants, maintenance, and reporting, handled end to end.",
						initials: "PM"
					}
				].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, {
					max: 8,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "flex h-full flex-col items-center rounded-sm bg-card p-8 text-center shadow-[0_20px_60px_-30px_rgba(0,0,0,0.15)] tilt-lift-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-24 w-24 items-center justify-center rounded-full bg-primary text-2xl font-serif text-primary-foreground",
								children: m.initials
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "mt-5 font-serif text-lg text-foreground",
								children: m.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[10px] tracking-[0.24em] uppercase text-accent",
								children: m.role
							})
						]
					})
				}, m.name))
			})]
		})
	});
}
function CTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-primary text-primary-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-cover bg-center opacity-25",
				style: { backgroundImage: `url(${testimonials_bg_default})` },
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/95",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto max-w-4xl px-6 py-20 lg:px-10 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-3xl lg:text-4xl",
						children: "Ready to build your legacy?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-4 max-w-xl text-sm text-background/75",
						children: "Speak with a senior broker — a tailored shortlist across Dubai and India, within four business hours."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						className: "mt-8 inline-flex items-center gap-3 rounded-sm bg-accent px-8 py-3.5 text-[12px] tracking-[0.24em] uppercase font-medium text-primary hover:bg-accent/90 transition",
						children: ["Get in touch ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							children: "→"
						})]
					})
				] })
			})
		]
	});
}
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhoWeAre, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MissionVision, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OurCommitment, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MeetTheTeam, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { AboutPage as component };
