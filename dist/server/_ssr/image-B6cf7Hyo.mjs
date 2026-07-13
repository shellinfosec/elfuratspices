import { t as cn } from "./utils-C_uf36nf.mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/image-B6cf7Hyo.js
var import_jsx_runtime = require_jsx_runtime();
function Image({ className, containerClassName, skeletonClassName, alt, priority = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		...props,
		alt: alt || "Elfurat Spices Image",
		loading: priority ? "eager" : "lazy",
		fetchPriority: priority ? "high" : "auto",
		className: cn("object-cover", className)
	});
}
//#endregion
export { Image as t };
