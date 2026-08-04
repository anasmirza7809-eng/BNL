import { r as __toESM } from "../_runtime.mjs";
import { a as QueryClientProvider, c as require_react, s as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { M as redirect, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as supabase } from "./client-Bx01nVAt.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as careersQuery } from "./careers-DKSTlFP8.mjs";
import { n as Route$12 } from "./properties._category-yOijgMqy.mjs";
import { t as Route$13 } from "./property._id-De6P0S6X.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-C3CFwnwl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CPoLaav6.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$11 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Bricks & Legacy — Luxury Real Estate in Dubai & India" },
			{
				name: "description",
				content: "Bricks & Legacy — your investment for luxury living. Buy, sell and rent apartments and land in Dubai, and secure prime Indian land for NRIs."
			},
			{
				name: "author",
				content: "Bricks & Legacy"
			},
			{
				property: "og:title",
				content: "Bricks & Legacy — Luxury Real Estate in Dubai & India"
			},
			{
				property: "og:description",
				content: "Bricks & Legacy — your investment for luxury living. Buy, sell and rent apartments and land in Dubai, and secure prime Indian land for NRIs."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Bricks & Legacy — Luxury Real Estate in Dubai & India"
			},
			{
				name: "twitter:description",
				content: "Bricks & Legacy — your investment for luxury living. Buy, sell and rent apartments and land in Dubai, and secure prime Indian land for NRIs."
			},
			{
				property: "og:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/45b58e9e-8b84-450b-a71c-2c4c350c9721/id-preview-b0f0f141--69f98387-551c-4301-9e08-a8b384c5d4e2.lovable.app-1784222154791.png"
			},
			{
				name: "twitter:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/45b58e9e-8b84-450b-a71c-2c4c350c9721/id-preview-b0f0f141--69f98387-551c-4301-9e08-a8b384c5d4e2.lovable.app-1784222154791.png"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$11.useRouteContext();
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		let observer = null;
		let raf = 0;
		const apply = () => {
			const sections = document.querySelectorAll("section");
			const targets = [];
			sections.forEach((s) => {
				if (s.closest(".reveal-up, .reveal-3d")) return;
				if (s.querySelector(".reveal-up, .reveal-3d, .reveal-words")) return;
				if (!s.classList.contains("auto-reveal")) {
					s.classList.add("auto-reveal");
					targets.push(s);
				}
			});
			if (!observer) observer = new IntersectionObserver((entries) => {
				entries.forEach((e) => {
					if (e.isIntersecting) {
						e.target.classList.add("is-visible");
						observer?.unobserve(e.target);
					}
				});
			}, {
				rootMargin: "0px 0px -10% 0px",
				threshold: .05
			});
			targets.forEach((el) => {
				if (el.getBoundingClientRect().top < window.innerHeight * .95) el.classList.add("is-visible");
				else observer.observe(el);
			});
		};
		const schedule = () => {
			cancelAnimationFrame(raf);
			raf = requestAnimationFrame(() => {
				setTimeout(apply, 50);
			});
		};
		schedule();
		const unsub = router.subscribe("onResolved", schedule);
		return () => {
			cancelAnimationFrame(raf);
			observer?.disconnect();
			unsub();
		};
	}, [router]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})]
	});
}
var $$splitComponentImporter$10 = () => import("./services-D9oOqYgE.mjs");
var Route$10 = createFileRoute("/services")({
	head: () => ({ meta: [
		{ title: "Services — Bricks & Legacy" },
		{
			name: "description",
			content: "Full-service luxury real estate across Dubai and India — buy, sell, rent, short-term rentals, mortgage advisory, and property management for HNIs and NRIs."
		},
		{
			property: "og:title",
			content: "Services — Bricks & Legacy"
		},
		{
			property: "og:description",
			content: "Buy, sell, rent, short-term rent, mortgage advisory, and property management across Dubai and India — handled by senior brokers."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./gallery-C1Olcayi.mjs");
var Route$9 = createFileRoute("/gallery")({
	head: () => ({ meta: [
		{ title: "Gallery — Bricks & Legacy" },
		{
			name: "description",
			content: "A visual portfolio of Bricks & Legacy properties across Dubai and India — luxury apartments, villas and landmark developments."
		},
		{
			property: "og:title",
			content: "Gallery — Bricks & Legacy"
		},
		{
			property: "og:description",
			content: "A visual portfolio of Bricks & Legacy across Dubai and India."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./contact-9pFYa9c1.mjs");
var Route$8 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact — Bricks & Legacy" },
		{
			name: "description",
			content: "Speak with an experienced broker at Bricks & Legacy. Offices in Dubai serving investors across Dubai and India."
		},
		{
			property: "og:title",
			content: "Contact — Bricks & Legacy"
		},
		{
			property: "og:description",
			content: "Get in touch with our team for premium property advice across Dubai and India."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./careers-DsuUuyFG.mjs");
var Route$7 = createFileRoute("/careers")({
	head: () => ({ meta: [
		{ title: "Careers — Bricks & Legacy" },
		{
			name: "description",
			content: "Join Bricks & Legacy. Explore open roles and apply to be part of a luxury real estate team connecting Dubai and India."
		},
		{
			property: "og:title",
			content: "Careers — Bricks & Legacy"
		},
		{
			property: "og:description",
			content: "Join Bricks & Legacy. Explore open roles and apply to be part of a luxury real estate team connecting Dubai and India."
		}
	] }),
	loader: async ({ context }) => {
		await context.queryClient.ensureQueryData(careersQuery());
	},
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./blogs-Bg70H-NN.mjs");
var Route$6 = createFileRoute("/blogs")({
	head: () => ({ meta: [
		{ title: "Blogs — Bricks & Legacy" },
		{
			name: "description",
			content: "Curated Dubai real estate reads — trusted blogs and market insights we recommend for buyers, investors, and NRIs."
		},
		{
			property: "og:title",
			content: "Blogs — Bricks & Legacy"
		},
		{
			property: "og:description",
			content: "Curated Dubai real estate reads — trusted blogs and market insights we recommend for buyers, investors, and NRIs."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./auth-PcDnnHEm.mjs");
var Route$5 = createFileRoute("/auth")({
	ssr: false,
	head: () => ({ meta: [{ title: "Admin Sign In — Bricks & Legacy" }, {
		name: "robots",
		content: "noindex,nofollow"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./about-us-DmHIG0Xp.mjs");
var Route$4 = createFileRoute("/about-us")({
	head: () => ({ meta: [
		{ title: "About Us — Bricks & Legacy" },
		{
			name: "description",
			content: "Learn about Bricks & Legacy — a boutique luxury real estate firm connecting Dubai and India through trusted advisory, curated properties, and end-to-end services."
		},
		{
			property: "og:title",
			content: "About Us — Bricks & Legacy"
		},
		{
			property: "og:description",
			content: "Boutique luxury real estate advisory across Dubai & India — who we are, why clients choose us, and the people behind the legacy."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./route-Di7iQBCH.mjs");
var Route$3 = createFileRoute("/_authenticated")({
	ssr: false,
	beforeLoad: async () => {
		const { data, error } = await supabase.auth.getUser();
		if (error || !data.user) throw redirect({ to: "/auth" });
		return { user: data.user };
	},
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./routes-aDJIeGP6.mjs");
var Route$2 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./properties.index-FhRXFQiR.mjs");
var Route$1 = createFileRoute("/properties/")({
	head: () => ({ meta: [
		{ title: "Properties in Dubai & India — Bricks & Legacy" },
		{
			name: "description",
			content: "Explore Bricks & Legacy's curated portfolio of luxury apartments, villas, commercial spaces, and land investments across Dubai and India."
		},
		{
			property: "og:title",
			content: "Properties in Dubai & India — Bricks & Legacy"
		},
		{
			property: "og:description",
			content: "Curated luxury apartments, villas, commercial spaces, and land investments across Dubai and India."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./admin-D9R8zGwQ.mjs");
var Route = createFileRoute("/_authenticated/admin")({
	head: () => ({ meta: [{ title: "Admin — Bricks & Legacy" }, {
		name: "robots",
		content: "noindex,nofollow"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var ServicesRoute = Route$10.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$11
});
var GalleryRoute = Route$9.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$11
});
var ContactRoute = Route$8.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$11
});
var CareersRoute = Route$7.update({
	id: "/careers",
	path: "/careers",
	getParentRoute: () => Route$11
});
var BlogsRoute = Route$6.update({
	id: "/blogs",
	path: "/blogs",
	getParentRoute: () => Route$11
});
var AuthRoute = Route$5.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$11
});
var AboutUsRoute = Route$4.update({
	id: "/about-us",
	path: "/about-us",
	getParentRoute: () => Route$11
});
var AuthenticatedRouteRoute = Route$3.update({
	id: "/_authenticated",
	getParentRoute: () => Route$11
});
var IndexRoute = Route$2.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$11
});
var PropertiesIndexRoute = Route$1.update({
	id: "/properties/",
	path: "/properties/",
	getParentRoute: () => Route$11
});
var PropertyIdRoute = Route$13.update({
	id: "/property/$id",
	path: "/property/$id",
	getParentRoute: () => Route$11
});
var PropertiesCategoryRoute = Route$12.update({
	id: "/properties/$category",
	path: "/properties/$category",
	getParentRoute: () => Route$11
});
var AuthenticatedRouteRouteChildren = { AuthenticatedAdminRoute: Route.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => AuthenticatedRouteRoute
}) };
var rootRouteChildren = {
	IndexRoute,
	AuthenticatedRouteRoute: AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren),
	AboutUsRoute,
	AuthRoute,
	BlogsRoute,
	CareersRoute,
	ContactRoute,
	GalleryRoute,
	ServicesRoute,
	PropertiesCategoryRoute,
	PropertyIdRoute,
	PropertiesIndexRoute
};
var routeTree = Route$11._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
