import { o as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/image-CP_LfseE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Image({ className, containerClassName, skeletonClassName, alt, priority = false, ...props }) {
	const [isLoaded, setIsLoaded] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative overflow-hidden w-full h-full", containerClassName, className),
		children: [!isLoaded && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("absolute inset-0 bg-muted animate-spice-pulse z-0", skeletonClassName) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			...props,
			alt: alt || "Elfurat Spices Image",
			loading: priority ? "eager" : "lazy",
			fetchPriority: priority ? "high" : "auto",
			className: cn("h-full w-full object-cover transition-opacity duration-300 ease-elfurat z-10 relative", isLoaded ? "opacity-100" : "opacity-0"),
			onLoad: () => setIsLoaded(true)
		})]
	});
}
//#endregion
export { Image as t };
