import { i as __toESM } from "../_runtime.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as supabase } from "./client-Bx01nVAt.mjs";
import { t as bnl_logo_asset_default } from "./bnl-logo.asset-CplchhA0.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-PcDnnHEm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AuthPage() {
	const navigate = useNavigate();
	const [mode, setMode] = (0, import_react.useState)("signin");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [errorMsg, setErrorMsg] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		supabase.auth.getUser().then(({ data }) => {
			if (data.user) navigate({ to: "/admin" });
		});
	}, [navigate, false]);
	const onSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setErrorMsg(null);
		try {
			if (mode === "signin") {
				const { error } = await supabase.auth.signInWithPassword({
					email,
					password
				});
				if (error) throw error;
				toast.success("Welcome back.");
				navigate({ to: "/admin" });
			} else {
				const { data, error } = await supabase.auth.signUp({
					email,
					password,
					options: { emailRedirectTo: `${window.location.origin}/admin` }
				});
				if (error) throw error;
				if (data.session) {
					toast.success("Account created.");
					navigate({ to: "/admin" });
				} else {
					toast.success("Account created. You can sign in now.");
					setMode("signin");
				}
			}
		} catch (err) {
			const msg = err?.message ?? "Something went wrong.";
			setErrorMsg(msg);
			toast.error(msg);
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-primary text-primary-foreground flex flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: bnl_logo_asset_default.url,
					alt: "Bricks & Legacy",
					className: "h-10 w-10 rounded-sm object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "leading-tight",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-serif text-base text-background",
						children: "Bricks & Legacy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] tracking-[0.28em] uppercase text-background/70",
						children: "Admin Portal"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "text-[11px] tracking-[0.24em] uppercase text-background/70 hover:text-accent",
				children: "← Back to site"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-1 items-center justify-center px-6 py-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "w-full max-w-md rounded-sm bg-background/5 border border-background/10 p-8 backdrop-blur",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] tracking-[0.28em] uppercase text-accent",
						children: mode === "signin" ? "Sign in" : "Create account"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-serif text-3xl",
						children: "Admin Portal"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-background/70",
						children: "Manage property listings and careers for Bricks & Legacy."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-[10px] tracking-[0.24em] uppercase text-background/60",
							htmlFor: "email",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "email",
							type: "email",
							required: true,
							value: email,
							onChange: (e) => setEmail(e.target.value),
							className: "mt-2 w-full rounded-sm border border-background/20 bg-background/5 px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-[10px] tracking-[0.24em] uppercase text-background/60",
							htmlFor: "password",
							children: "Password"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "password",
							type: "password",
							required: true,
							minLength: 8,
							value: password,
							onChange: (e) => setPassword(e.target.value),
							className: "mt-2 w-full rounded-sm border border-background/20 bg-background/5 px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
						})] })]
					}),
					errorMsg ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 rounded-sm border border-red-400/40 bg-red-500/10 px-3 py-2 text-xs text-red-200",
						children: errorMsg
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: loading,
						className: "mt-6 w-full rounded-sm bg-accent px-7 py-3.5 text-[12px] tracking-[0.24em] uppercase font-medium text-primary hover:bg-accent/90 transition disabled:opacity-60",
						children: loading ? "Please wait…" : mode === "signin" ? "Sign In" : "Sign Up"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setMode(mode === "signin" ? "signup" : "signin"),
						className: "mt-4 w-full text-center text-[11px] tracking-[0.24em] uppercase text-background/60 hover:text-accent",
						children: mode === "signin" ? "Need to create an account?" : "Already have an account? Sign in"
					})
				]
			})
		})]
	});
}
//#endregion
export { AuthPage as component };
