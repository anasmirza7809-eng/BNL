import { i as __toESM } from "../_runtime.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as require_react_dom, g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/header-Boyy3Tyj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom());
var bnl_icon_white_png_asset_default = {
	version: 1,
	asset_id: "6938c32a-241e-44e7-b933-ddf6b7462755",
	project_id: "69f98387-551c-4301-9e08-a8b384c5d4e2",
	url: "/__l5e/assets-v1/6938c32a-241e-44e7-b933-ddf6b7462755/bnl-icon-white.png",
	r2_key: "a/v1/69f98387-551c-4301-9e08-a8b384c5d4e2/6938c32a-241e-44e7-b933-ddf6b7462755/bnl-icon-white.png",
	original_filename: "bnl-icon-white.png",
	size: 38356,
	content_type: "image/png",
	created_at: "2026-07-18T16:04:49Z"
};
var links = [
	{
		label: "Home",
		to: "/"
	},
	{
		label: "About Us",
		to: "/about-us"
	},
	{
		label: "Properties",
		to: "/properties"
	},
	{
		label: "Services",
		to: "/services"
	},
	{
		label: "Careers",
		to: "/careers"
	},
	{
		label: "Gallery",
		to: "/gallery"
	},
	{
		label: "Blogs",
		to: "/blogs"
	},
	{
		label: "Contact",
		to: "/contact"
	}
];
function Header({ className = "absolute inset-x-0 top-0 z-[60]" }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [mounted, setMounted] = (0, import_react.useState)(false);
	const routerState = useRouterState();
	const pathname = routerState.location.pathname;
	const hash = routerState.location.hash;
	(0, import_react.useEffect)(() => setMounted(true), []);
	(0, import_react.useEffect)(() => {
		if (typeof document === "undefined") return;
		if (open) {
			const scrollBarComp = window.innerWidth - document.documentElement.clientWidth;
			const prevOverflow = document.body.style.overflow;
			const prevPadding = document.body.style.paddingRight;
			document.body.style.overflow = "hidden";
			if (scrollBarComp > 0) document.body.style.paddingRight = `${scrollBarComp}px`;
			return () => {
				document.body.style.overflow = prevOverflow;
				document.body.style.paddingRight = prevPadding;
			};
		}
	}, [open]);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname, hash]);
	const isActive = (to, linkHash) => {
		if (linkHash) return pathname === to && hash === linkHash;
		return pathname === to;
	};
	const linkBase = "text-[13px] tracking-[0.18em] uppercase text-background/90 transition-colors hover:text-accent";
	const linkActive = "text-accent";
	const Brand = ({ small = false, onClick }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		onClick,
		className: "flex items-center gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: bnl_icon_white_png_asset_default.url,
			alt: "Bricks & Legacy",
			className: small ? "h-9 w-9 shrink-0 object-contain" : "h-12 w-12 shrink-0 object-contain sm:h-[52px] sm:w-[52px]"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: small ? "leading-tight" : "hidden sm:block leading-tight",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `whitespace-nowrap font-serif text-background ${small ? "text-sm" : "text-lg"}`,
				children: "Bricks & Legacy"
			})
		})]
	});
	const MobileNav = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "lg:hidden fixed inset-x-0 top-0 z-[10000] bg-primary/90 backdrop-blur-md border-b border-background/10",
			style: { paddingTop: "env(safe-area-inset-top)" },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between px-5 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, { small: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setOpen((v) => !v),
					className: "lg:hidden relative z-[10000] grid h-11 w-11 place-items-center rounded-sm border border-background/20 text-background focus:outline-none focus:ring-2 focus:ring-accent",
					"aria-label": open ? "Close menu" : "Open menu",
					"aria-expanded": open,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: open ? "Close menu" : "Open menu"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute left-3 block h-0.5 w-5 bg-current transition-transform duration-300 ease-out ${open ? "rotate-45 translate-y-0" : "-translate-y-1.5"}` }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute left-3 block h-0.5 w-5 bg-current transition-opacity duration-300 ease-out ${open ? "opacity-0" : "opacity-100"}` }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute left-3 block h-0.5 w-5 bg-current transition-transform duration-300 ease-out ${open ? "-rotate-45 translate-y-0" : "translate-y-1.5"}` })
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			onClick: () => setOpen(false),
			className: `lg:hidden fixed inset-0 z-[9990] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
			"aria-hidden": "true"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			role: "dialog",
			"aria-modal": "true",
			"aria-hidden": !open,
			className: `lg:hidden fixed inset-x-0 bottom-0 z-[9999] w-screen bg-primary transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"}`,
			style: {
				top: "calc(env(safe-area-inset-top) + 68px)",
				paddingBottom: "env(safe-area-inset-bottom)"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex h-full flex-col px-6 pb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex flex-col",
					children: links.map((l, i) => {
						const active = isActive(l.to, l.hash);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: l.to,
							hash: l.hash,
							onClick: () => setOpen(false),
							className: `group flex items-center justify-between border-b border-background/10 py-4 text-sm tracking-[0.18em] uppercase transition-all duration-300 ${active ? "text-accent" : "text-background/90 hover:text-accent"}`,
							style: { transitionDelay: open ? `${i * 40}ms` : "0ms" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: l.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-px w-6 bg-accent transition-all duration-300 ${active ? "opacity-100" : "opacity-0 group-hover:opacity-100"}` })]
						}, l.label);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 pt-6 border-t border-background/10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "tel:+971543043949",
						className: "flex items-center gap-3 text-sm text-background/80 hover:text-accent transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							width: "16",
							height: "16",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "1.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" })
						}), "+971 54 304 3949"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "mailto:info@bricksandlegacy.com",
						className: "mt-3 flex items-center gap-3 text-sm text-background/80 hover:text-accent transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							width: "16",
							height: "16",
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
						}), "info@bricksandlegacy.com"]
					})]
				})]
			})
		})
	] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `hidden lg:block ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex items-center gap-8",
				children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					hash: l.hash,
					className: `${linkBase} ${isActive(l.to, l.hash) ? linkActive : ""}`,
					children: l.label
				}, l.label))
			})]
		})
	}), mounted && (0, import_react_dom.createPortal)(MobileNav, document.body)] });
}
//#endregion
export { bnl_icon_white_png_asset_default as n, Header as t };
