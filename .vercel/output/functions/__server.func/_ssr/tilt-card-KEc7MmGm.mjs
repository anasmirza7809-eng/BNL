import { i as __toESM } from "../_runtime.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tilt-card-KEc7MmGm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Mouse-driven 3D tilt wrapper. Falls back gracefully on touch/reduced-motion. */
function TiltCard({ children, max = 10, scale = 1.02, className = "", ...rest }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		let raf = 0;
		const onMove = (e) => {
			const r = el.getBoundingClientRect();
			const px = (e.clientX - r.left) / r.width;
			const rx = (.5 - (e.clientY - r.top) / r.height) * max * 2;
			const ry = (px - .5) * max * 2;
			cancelAnimationFrame(raf);
			raf = requestAnimationFrame(() => {
				el.style.transform = `perspective(1000px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) scale(${scale})`;
			});
		};
		const onLeave = () => {
			cancelAnimationFrame(raf);
			el.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
		};
		el.addEventListener("mousemove", onMove);
		el.addEventListener("mouseleave", onLeave);
		return () => {
			cancelAnimationFrame(raf);
			el.removeEventListener("mousemove", onMove);
			el.removeEventListener("mouseleave", onLeave);
		};
	}, [max, scale]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: `tilt-3d ${className}`,
		...rest,
		children
	});
}
/** Adds `is-visible` when the element scrolls into view. Pair with `.reveal-3d`. */
function useReveal3D() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					e.target.classList.add("is-visible");
					io.unobserve(e.target);
				}
			});
		}, { threshold: .15 });
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return ref;
}
//#endregion
export { useReveal3D as n, TiltCard as t };
