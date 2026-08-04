import { i as __toESM } from "../_runtime.mjs";
import { c as require_react, r as useSuspenseQuery, s as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as useReveal3D, t as TiltCard } from "./tilt-card-KEc7MmGm.mjs";
import { t as Header } from "./header-Boyy3Tyj.mjs";
import { t as Footer } from "./footer-DKq7yCTl.mjs";
import { t as supabase } from "./client-Bx01nVAt.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { c as careersQuery } from "./router-LgY5_HiF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/careers-BJ9_4bTT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_careers_default = "/assets/hero-careers-B22vUxjb.jpg";
function Reveal({ children, className = "" }) {
	const ref = useReveal3D();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: `reveal-3d ${className}`,
		children
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative min-h-[60vh] w-full overflow-hidden bg-primary",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hero_careers_default,
				alt: "Dubai skyline",
				className: "absolute inset-0 h-full w-full object-cover opacity-40"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto flex min-h-[60vh] max-w-7xl flex-col justify-center px-6 pt-32 pb-16 lg:px-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl text-background reveal-3d is-visible",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "eyebrow text-accent flex items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "gold-rule draw-x is-visible mr-3 !bg-accent",
								style: { ["--reveal-delay"]: "0ms" }
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "reveal-up is-visible",
								style: { ["--reveal-delay"]: "150ms" },
								children: "Careers"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-4 font-serif text-5xl leading-[1.05] sm:text-6xl",
							children: [
								"Build your career",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-accent",
									children: "with a legacy brand"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-2xl text-base leading-relaxed text-background/80",
							children: "Join a team that connects Dubai's iconic skyline with India's finest opportunities. We are always looking for driven people who believe in trust, discretion, and long-term relationships."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#apply",
							className: "mt-8 inline-flex rounded-sm bg-accent px-7 py-3.5 text-[12px] tracking-[0.24em] uppercase font-medium text-primary hover:bg-accent/90 transition",
							children: "Submit Application"
						})
					]
				})
			})
		]
	});
}
function JobList() {
	const { data: careers } = useSuspenseQuery(careersQuery());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "eyebrow text-accent",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule mr-3 !bg-accent" }), "Open Positions"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-serif text-4xl lg:text-5xl",
						children: "Join the Team"
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
						children: "Browse current openings. If you don't see a perfect fit, send a general application — we review every one."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 space-y-5",
				children: careers.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JobCard, { career: c }, c.id))
			})]
		})
	});
}
function JobCard({ career }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, {
		max: 5,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-sm bg-card p-6 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.15)] lg:p-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-serif text-2xl text-foreground",
						children: career.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex flex-wrap gap-2 text-[11px] tracking-[0.18em] uppercase text-muted-foreground",
						children: [
							career.department && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-sm border border-muted-foreground/20 px-2 py-1",
								children: career.department
							}),
							career.location && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-sm border border-muted-foreground/20 px-2 py-1",
								children: career.location
							}),
							career.type && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-sm border border-muted-foreground/20 px-2 py-1",
								children: career.type
							})
						]
					}),
					career.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground",
						children: career.description
					}),
					career.requirements && career.requirements.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 grid gap-2 sm:grid-cols-2",
						children: career.requirements.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-2 text-sm text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-accent",
								"aria-hidden": true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: r })]
						}, r))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#apply",
					className: "shrink-0 rounded-sm border border-primary/30 px-6 py-2.5 text-[11px] tracking-[0.24em] uppercase text-foreground hover:bg-primary hover:text-primary-foreground transition",
					children: "Apply Now"
				})]
			})
		})
	}) });
}
function ApplyForm() {
	const { data: careers } = useSuspenseQuery(careersQuery());
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)({
		career_id: "",
		name: "",
		email: "",
		phone: "",
		linkedin_url: "",
		experience: "",
		cover_letter: ""
	});
	const set = (k) => (e) => setForm((f) => ({
		...f,
		[k]: e.target.value
	}));
	const onSubmit = async (e) => {
		e.preventDefault();
		if (!form.name.trim() || !form.email.trim()) {
			toast.error("Please enter your name and email.");
			return;
		}
		setLoading(true);
		const { error } = await supabase.from("career_applications").insert({
			career_id: form.career_id || null,
			name: form.name.trim(),
			email: form.email.trim(),
			phone: form.phone.trim() || null,
			linkedin_url: form.linkedin_url.trim() || null,
			experience: form.experience.trim() || null,
			cover_letter: form.cover_letter.trim() || null
		});
		setLoading(false);
		if (error) {
			toast.error("Could not submit. Please try again or email info@bricksandlegacy.com.");
			return;
		}
		toast.success("Application received — we'll be in touch soon.");
		setForm({
			career_id: "",
			name: "",
			email: "",
			phone: "",
			linkedin_url: "",
			experience: "",
			cover_letter: ""
		});
	};
	const inputCls = "w-full rounded-sm border border-background/20 bg-background/5 px-4 py-3 text-sm text-background placeholder:text-background/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition";
	const labelCls = "text-[10px] tracking-[0.24em] uppercase text-background/60";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "apply",
		className: "bg-secondary/50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-6 py-24 lg:px-10 lg:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "eyebrow text-accent",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule mr-3 !bg-accent" }), "Apply"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-serif text-4xl lg:text-5xl",
						children: "Send Your Application"
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
						children: "Tell us about yourself, your experience, and why you want to join Bricks & Legacy."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "mt-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, {
					max: 4,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit,
						className: "rounded-sm bg-primary p-8 text-primary-foreground lg:p-10 space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: labelCls,
										htmlFor: "ca-name",
										children: "Full Name"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "ca-name",
										type: "text",
										required: true,
										maxLength: 100,
										value: form.name,
										onChange: set("name"),
										className: `${inputCls} mt-2`,
										placeholder: "Your name"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: labelCls,
										htmlFor: "ca-email",
										children: "Email"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "ca-email",
										type: "email",
										required: true,
										maxLength: 255,
										value: form.email,
										onChange: set("email"),
										className: `${inputCls} mt-2`,
										placeholder: "you@example.com"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: labelCls,
										htmlFor: "ca-phone",
										children: "Phone / WhatsApp"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "ca-phone",
										type: "tel",
										maxLength: 30,
										value: form.phone,
										onChange: set("phone"),
										className: `${inputCls} mt-2`,
										placeholder: "+971 …"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: labelCls,
										htmlFor: "ca-linkedin",
										children: "LinkedIn / Portfolio URL"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "ca-linkedin",
										type: "url",
										maxLength: 500,
										value: form.linkedin_url,
										onChange: set("linkedin_url"),
										className: `${inputCls} mt-2`,
										placeholder: "https://…"
									})] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: labelCls,
								htmlFor: "ca-position",
								children: "Position (optional)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								id: "ca-position",
								value: form.career_id,
								onChange: set("career_id"),
								className: `${inputCls} mt-2 appearance-none`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "General application"
								}), careers.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: c.id,
									children: c.title
								}, c.id))]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: labelCls,
								htmlFor: "ca-experience",
								children: "Relevant Experience"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								id: "ca-experience",
								maxLength: 1e3,
								rows: 3,
								value: form.experience,
								onChange: set("experience"),
								className: `${inputCls} mt-2 resize-none`,
								placeholder: "Briefly describe your experience…"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: labelCls,
								htmlFor: "ca-cover",
								children: "Cover Letter / Message"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								id: "ca-cover",
								maxLength: 2e3,
								rows: 4,
								value: form.cover_letter,
								onChange: set("cover_letter"),
								className: `${inputCls} mt-2 resize-none`,
								placeholder: "Why do you want to join Bricks & Legacy?"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: loading,
								className: "w-full rounded-sm bg-accent px-7 py-3.5 text-[12px] tracking-[0.24em] uppercase font-medium text-primary hover:bg-accent/90 transition disabled:opacity-60",
								children: loading ? "Submitting…" : "Submit Application"
							})
						]
					})
				})
			})]
		})
	});
}
function CareersPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JobList, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApplyForm, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { CareersPage as component };
