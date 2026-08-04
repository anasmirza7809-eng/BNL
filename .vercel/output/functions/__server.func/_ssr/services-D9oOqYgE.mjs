import { s as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as useReveal3D, t as TiltCard } from "./tilt-card-KEc7MmGm.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Header } from "./header-Boyy3Tyj.mjs";
import { t as Footer } from "./footer-DKq7yCTl.mjs";
import { t as cta_bg_default } from "./cta-bg-CIrHiDma.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-D9oOqYgE.js
var import_jsx_runtime = require_jsx_runtime();
var hero_services_default = "/assets/hero-services-D2gApdmy.jpg";
function Reveal({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: useReveal3D(),
		className: `reveal-3d ${className}`,
		children
	});
}
var dubaiServices = [
	{
		title: "Buy",
		icon: "🏠",
		summary: "Acquire luxury apartments, villas, land, and commercial assets across Dubai's most sought-after communities.",
		points: [
			"Off-plan and ready inventory from every top developer",
			"Off-market opportunities via our private network",
			"End-to-end paperwork, DLD, and handover support",
			"Golden Visa eligibility guidance for qualifying purchases"
		]
	},
	{
		title: "Sell",
		icon: "🤝",
		summary: "Position your Dubai property in front of the right buyer with premium marketing and qualified matchmaking.",
		points: [
			"Professional photography, video, and staging",
			"Global reach across UAE, India, GCC and Europe",
			"Discreet, off-market listings when required",
			"Negotiation and closing handled by a senior broker"
		]
	},
	{
		title: "Rent",
		icon: "🔑",
		summary: "Long-term rental solutions for families, executives, and investors — on both sides of the transaction.",
		points: [
			"Curated shortlists matched to your lifestyle",
			"Tenant vetting, Ejari, and contract management",
			"Renewal, rent review, and RERA-compliant advice",
			"Landlord representation across prime communities"
		]
	},
	{
		title: "Short-term Rent",
		icon: "🧳",
		summary: "Fully managed holiday homes and short-stay rentals in Dubai's most desirable addresses.",
		points: [
			"DTCM licensing and compliance handled for you",
			"Multi-channel listing (Airbnb, Booking, Direct)",
			"Housekeeping, guest support, and dynamic pricing",
			"Transparent monthly owner statements"
		]
	}
];
var indiaServices = [
	{
		title: "Buy",
		icon: "🏡",
		summary: "Curated residential, commercial, and land opportunities for NRIs investing back home with confidence.",
		points: [
			"Vetted projects from India's most trusted developers",
			"Legal due diligence, title checks, and RERA verification",
			"NRI-focused documentation (POA, remittance, taxation)",
			"On-ground site visits and construction updates"
		]
	},
	{
		title: "Sell",
		icon: "📈",
		summary: "Global buyer reach with local expertise to position your Indian property for the best possible outcome.",
		points: [
			"Fair market valuation and pricing strategy",
			"NRI-friendly repatriation and TDS guidance",
			"Buyer sourcing across UAE, GCC, UK, and US",
			"End-to-end closing coordination remotely"
		]
	},
	{
		title: "Rent",
		icon: "🗝️",
		summary: "Reliable long-term leasing support for your Indian residential and commercial assets.",
		points: [
			"Tenant sourcing, background checks, and agreements",
			"Rent collection and remittance to your NRE / NRO account",
			"Society and municipal compliance handled locally",
			"Annual inspections and condition reports"
		]
	},
	{
		title: "Short-term Rent",
		icon: "🧳",
		summary: "Hassle-free short-stay and corporate rentals in India's most sought-after cities.",
		points: [
			"Serviced apartments and holiday homes",
			"Corporate leasing tie-ups for consistent occupancy",
			"Housekeeping and guest management",
			"Monthly earnings statements with full transparency"
		]
	}
];
var additionalServices = [{
	title: "Mortgage Advisory",
	icon: "📑",
	summary: "Expert guidance across UAE and Indian lenders to structure the right financing for you.",
	points: [
		"Pre-approvals and rate comparisons across leading banks",
		"NRI-specific mortgage structuring for Indian assets",
		"UAE mortgage guidance for residents and non-residents",
		"Refinancing, top-ups, and equity release advisory"
	]
}, {
	title: "Property Management",
	icon: "⚙️",
	summary: "Complete care for your assets — so your investment keeps working while you focus elsewhere.",
	points: [
		"Tenant sourcing, screening, and lease renewals",
		"Preventive maintenance and 24/7 emergency response",
		"Rent collection, remittance, and reconciliation",
		"Transparent quarterly reporting to owners"
	]
}];
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative min-h-[55vh] w-full overflow-hidden bg-primary",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hero_services_default,
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
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule mr-3 !bg-accent" }), "Our Services"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-4 font-serif text-5xl leading-[1.05] sm:text-6xl",
							children: [
								"One trusted partner ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-accent",
									children: "across two markets"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-2xl text-base leading-relaxed text-background/80",
							children: "From your first home in Dubai to a multi-generational land portfolio in India — we handle every stage of the journey with the discretion and standards you expect."
						})
					]
				})
			})
		]
	});
}
function ServiceCard({ s }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, {
		max: 6,
		className: "h-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "group flex h-full flex-col rounded-sm bg-card p-7 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.15)] transition tilt-lift-sm hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.22)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-2xl text-accent transition group-hover:bg-accent group-hover:text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s.icon })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-5 font-serif text-2xl text-foreground",
					children: s.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted-foreground",
					children: s.summary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-auto space-y-2.5 border-t border-border/60 pt-5",
					children: s.points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-2.5 text-xs leading-relaxed text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p })]
					}, p))
				})
			]
		})
	});
}
function MarketSection({ eyebrow, title, description, services, tone = "light" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: tone === "muted" ? "bg-secondary/50" : "bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "eyebrow text-accent",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule mr-3 !bg-accent" }), eyebrow]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-serif text-4xl lg:text-5xl",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-sm leading-relaxed text-muted-foreground",
						children: description
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 perspective-scene items-stretch",
				children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "h-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, { s })
				}, s.title))
			})]
		})
	});
}
function AdditionalServicesSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "eyebrow text-accent",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule mr-3 !bg-accent" }), "Beyond the Transaction"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-serif text-4xl lg:text-5xl",
						children: "Additional Services"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-5 max-w-2xl text-sm text-muted-foreground",
						children: "Long-term support that goes beyond the sale — so your investment keeps working for you."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-6 md:grid-cols-2 perspective-scene",
				children: additionalServices.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, { s }) }, s.title))
			})]
		})
	});
}
function ProcessSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-secondary/50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "eyebrow text-accent",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule mr-3 !bg-accent" }), "How We Work"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-serif text-4xl lg:text-5xl",
					children: "A four-step process"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					{
						n: "01",
						title: "Discovery",
						body: "A private consultation to understand your goals, timelines, and risk appetite."
					},
					{
						n: "02",
						title: "Curated Shortlist",
						body: "A tailored selection across Dubai and India — on and off-market — within four business hours."
					},
					{
						n: "03",
						title: "Due Diligence",
						body: "Legal, financial, and physical verification so you buy or sell with complete clarity."
					},
					{
						n: "04",
						title: "Close & Beyond",
						body: "We handle handover, financing, and long-term management — the relationship outlasts the deal."
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "h-full rounded-sm bg-card p-7 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.12)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-serif text-4xl text-accent",
							children: s.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-serif text-xl text-foreground",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs leading-relaxed text-muted-foreground",
							children: s.body
						})
					]
				}) }, s.n))
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
				style: { backgroundImage: `url(${cta_bg_default})` },
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
						children: "Speak with an experienced broker"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-4 max-w-xl text-sm text-background/75",
						children: "Tell us what you're looking for and we'll get back within four business hours with a tailored plan."
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
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarketSection, {
				eyebrow: "Dubai Services",
				title: "Dubai — Buy, Sell, Rent & Beyond",
				description: "From Palm Jumeirah villas to Downtown penthouses and commercial floors — full-cycle advisory led by senior brokers with deep developer relationships.",
				services: dubaiServices
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarketSection, {
				eyebrow: "India Services",
				title: "India — Built for the NRI Investor",
				description: "Residential, commercial, and land opportunities across India's key corridors — with legal, tax, and remittance guidance built for NRIs.",
				services: indiaServices,
				tone: "muted"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdditionalServicesSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { ServicesPage as component };
