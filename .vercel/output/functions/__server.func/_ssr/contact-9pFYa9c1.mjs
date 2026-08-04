import { i as __toESM } from "../_runtime.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Header } from "./header-Boyy3Tyj.mjs";
import { t as Footer } from "./footer-DKq7yCTl.mjs";
import { t as supabase } from "./client-Bx01nVAt.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-9pFYa9c1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_contact_default = "/assets/hero-contact-DqdDTID-.jpg";
function InfoRow({ icon, label, value, href, external }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-background/20 text-accent",
			children: icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[10px] tracking-[0.24em] uppercase text-background/60",
			children: label
		}), href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href,
			target: external ? "_blank" : void 0,
			rel: external ? "noopener noreferrer" : void 0,
			className: "mt-1 block text-sm text-background/85 hover:text-accent",
			children: value
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 font-serif text-base leading-snug text-background/90",
			children: value
		})] })]
	});
}
function OfficeCard({ title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "h-full rounded-sm bg-primary p-8 text-primary-foreground lg:p-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[11px] tracking-[0.28em] uppercase text-accent",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
					label: "Office",
					value: "Office No. 4, Al Khabeesi Building, Dubai, UAE",
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						width: "20",
						height: "20",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "12",
							cy: "10",
							r: "3"
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
					label: "Call",
					value: "+971 54 304 3949",
					href: "tel:+971543043949",
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						width: "20",
						height: "20",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "1.5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
					label: "WhatsApp",
					value: "+971 54 304 3949",
					href: "https://wa.me/971543043949",
					external: true,
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						width: "20",
						height: "20",
						viewBox: "0 0 24 24",
						fill: "currentColor",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.5 0 .18 5.32.18 11.88c0 2.09.55 4.13 1.6 5.93L0 24l6.34-1.66a11.9 11.9 0 0 0 5.72 1.46h.01c6.56 0 11.88-5.32 11.88-11.88 0-3.17-1.23-6.15-3.43-8.44zM12.07 21.7h-.01a9.83 9.83 0 0 1-5.01-1.37l-.36-.21-3.76.99 1-3.67-.23-.38a9.82 9.82 0 0 1-1.51-5.19c0-5.44 4.43-9.86 9.87-9.86 2.64 0 5.12 1.03 6.98 2.9a9.8 9.8 0 0 1 2.89 6.97c0 5.44-4.43 9.82-9.86 9.82zm5.4-7.36c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.91-2.19-.24-.57-.48-.5-.66-.5l-.56-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47 0 1.45 1.06 2.86 1.21 3.06.15.2 2.09 3.2 5.07 4.49.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.09 1.75-.71 2-1.4.25-.7.25-1.29.17-1.4-.07-.11-.27-.17-.57-.32z" })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
					label: "Email",
					value: "info@bricksandlegacy.com",
					href: "mailto:info@bricksandlegacy.com",
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						width: "20",
						height: "20",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: "2",
							y: "4",
							width: "20",
							height: "16",
							rx: "2"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
					label: "Instagram",
					value: "@bricksandlegacy",
					href: "https://www.instagram.com/bricksandlegacy?igsh=Y3ZvbnBpc2J3NGk5&utm_source=qr",
					external: true,
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						width: "20",
						height: "20",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
								x: "2",
								y: "2",
								width: "20",
								height: "20",
								rx: "5"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "12",
								cy: "12",
								r: "4"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "17.5",
								cy: "6.5",
								r: "1",
								fill: "currentColor",
								stroke: "none"
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
					label: "LinkedIn",
					value: "Bricks & Legacy",
					href: "https://www.linkedin.com/company/bricks-and-legacy/",
					external: true,
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						width: "20",
						height: "20",
						viewBox: "0 0 24 24",
						fill: "currentColor",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.54 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V22h-4.56v-6.61c0-1.58-.03-3.6-2.19-3.6-2.19 0-2.53 1.71-2.53 3.48V22H7.76V8z" })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
					label: "Hours",
					value: "Mon – Sat, 9:00 AM – 7:00 PM (GST)",
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						width: "20",
						height: "20",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "12",
							cy: "12",
							r: "9"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 7v5l3 2" })]
					})
				})
			]
		})]
	});
}
function EnquiryForm() {
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		phone: "",
		interest: "Dubai — Buy",
		message: ""
	});
	const set = (k) => (e) => setForm((f) => ({
		...f,
		[k]: e.target.value
	}));
	const onSubmit = async (e) => {
		e.preventDefault();
		if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
			toast.error("Please fill in your name, email, and message.");
			return;
		}
		setLoading(true);
		const { error } = await supabase.from("contact_submissions").insert({
			name: form.name.trim(),
			email: form.email.trim(),
			phone: form.phone.trim() || null,
			interest: form.interest,
			message: form.message.trim()
		});
		setLoading(false);
		if (error) {
			toast.error("Could not send. Please try again or email info@bricksandlegacy.com.");
			return;
		}
		toast.success("Thank you — an experienced broker will be in touch shortly.");
		setForm({
			name: "",
			email: "",
			phone: "",
			interest: "Dubai — Buy",
			message: ""
		});
	};
	const inputCls = "w-full rounded-sm border border-background/20 bg-background/5 px-4 py-3 text-sm text-background placeholder:text-background/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition";
	const labelCls = "text-[10px] tracking-[0.24em] uppercase text-background/60";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "h-full rounded-sm bg-primary p-8 text-primary-foreground lg:p-10 space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[11px] tracking-[0.28em] uppercase text-accent",
				children: "Send Us an Enquiry"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-background/70 -mt-3",
				children: "Share a few details and an experienced broker will respond within four business hours."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: labelCls,
						htmlFor: "cf-name",
						children: "Full Name"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "cf-name",
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
						htmlFor: "cf-email",
						children: "Email"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "cf-email",
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
						htmlFor: "cf-phone",
						children: "Phone / WhatsApp"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "cf-phone",
						type: "tel",
						maxLength: 30,
						value: form.phone,
						onChange: set("phone"),
						className: `${inputCls} mt-2`,
						placeholder: "+971 …"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: labelCls,
						htmlFor: "cf-interest",
						children: "I'm interested in"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						id: "cf-interest",
						value: form.interest,
						onChange: set("interest"),
						className: `${inputCls} mt-2 appearance-none`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Dubai — Buy" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Dubai — Sell" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Dubai — Rent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "India — Residential" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "India — Commercial" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "India — Land Investment" })
						]
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: labelCls,
				htmlFor: "cf-message",
				children: "Message"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				id: "cf-message",
				required: true,
				maxLength: 2e3,
				rows: 5,
				value: form.message,
				onChange: set("message"),
				className: `${inputCls} mt-2 resize-none`,
				placeholder: "Tell us what you're looking for…"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				disabled: loading,
				className: "w-full rounded-sm bg-accent px-7 py-3.5 text-[12px] tracking-[0.24em] uppercase font-medium text-primary hover:bg-accent/90 transition disabled:opacity-60",
				children: loading ? "Sending…" : "Send Enquiry"
			})
		]
	});
}
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative min-h-[52vh] w-full overflow-hidden bg-primary",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_contact_default,
						alt: "Dubai skyline",
						className: "absolute inset-0 h-full w-full object-cover opacity-70"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-primary via-primary/70 to-primary/20" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto flex min-h-[52vh] max-w-7xl flex-col justify-center px-6 pt-32 pb-16 lg:px-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "eyebrow text-accent flex items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "gold-rule draw-x is-visible mr-3 !bg-accent",
									style: { ["--reveal-delay"]: "0ms" }
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "reveal-up is-visible",
									style: { ["--reveal-delay"]: "150ms" },
									children: "Contact"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-4 max-w-2xl font-serif text-4xl leading-tight text-background sm:text-5xl lg:text-6xl",
								children: [
									"Let's build your ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-accent",
										children: "legacy"
									}),
									" together."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-xl text-base leading-relaxed text-background/85",
								children: "Whether you're buying, selling, renting, or investing across Dubai and India — our team is here to help."
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-secondary/50",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] tracking-[0.32em] uppercase text-accent",
								children: "Get in Touch"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 font-serif text-3xl lg:text-4xl",
								children: "Speak with an Experienced Broker"
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
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 grid gap-8 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfficeCard, { title: "Head Office — Dubai" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiryForm, {})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { ContactPage as component };
