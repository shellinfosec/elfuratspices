import { r as getCategory } from "./products-CJXz9X5J.mjs";
import { j as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._category-DxcMd7Ld.js
var $$splitComponentImporter = () => import("./products._category-DX0LXPrQ.mjs");
var $$splitNotFoundComponentImporter = () => import("./products._category-BUWSi27T.mjs");
var Route = createFileRoute("/products/$category")({
	loader: ({ params }) => {
		const c = getCategory(params.category);
		if (!c) throw notFound();
		return { c };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Category - Elfurat Spices" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { c } = loaderData;
		return { meta: [
			{ title: `${c.name} - Elfurat Spices` },
			{
				name: "description",
				content: `${c.tagline} ${c.description}`
			},
			{
				property: "og:title",
				content: `${c.name} - Elfurat Spices`
			},
			{
				property: "og:description",
				content: c.tagline
			},
			{
				property: "og:image",
				content: c.hero
			}
		] };
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
