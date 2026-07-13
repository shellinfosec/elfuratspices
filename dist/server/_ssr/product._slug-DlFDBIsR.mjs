import { i as getProduct, r as getCategory } from "./products-DxXtmdB1.mjs";
import { j as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._slug-DlFDBIsR.js
var $$splitComponentImporter = () => import("./product._slug-BSTxKKSI.mjs");
var $$splitNotFoundComponentImporter = () => import("./product._slug-CeX7SBi0.mjs");
var Route = createFileRoute("/product/$slug")({
	loader: ({ params }) => {
		const p = getProduct(params.slug);
		if (!p) throw notFound();
		return {
			p,
			cat: getCategory(p.category)
		};
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Product - Elfurat Spices" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { p } = loaderData;
		return {
			meta: [
				{ title: `${p.name} - ${p.origin} | Elfurat Spices` },
				{
					name: "description",
					content: p.description
				},
				{
					property: "og:title",
					content: `${p.name} - Elfurat Spices`
				},
				{
					property: "og:description",
					content: p.description
				},
				{
					property: "og:image",
					content: `https://elfuratspices.com${p.image}`
				},
				{
					property: "og:image:width",
					content: "800"
				},
				{
					property: "og:image:height",
					content: "1000"
				},
				{
					property: "og:url",
					content: `https://elfuratspices.com/product/${p.slug}`
				},
				{
					property: "og:type",
					content: "product"
				},
				{
					name: "twitter:card",
					content: "summary_large_image"
				},
				{
					name: "twitter:image",
					content: `https://elfuratspices.com${p.image}`
				}
			],
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Product",
					name: p.name,
					image: p.image,
					description: p.description,
					category: loaderData.cat.name,
					brand: {
						"@type": "Brand",
						name: "Elfurat Spices"
					},
					countryOfOrigin: p.origin,
					offers: {
						"@type": "AggregateOffer",
						availability: "https://schema.org/InStock",
						priceCurrency: "USD",
						priceSpecification: {
							"@type": "PriceSpecification",
							eligibleQuantity: {
								"@type": "QuantitativeValue",
								minValue: p.moq
							}
						},
						seller: {
							"@type": "Organization",
							name: "Elfurat Spices"
						}
					}
				})
			}]
		};
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
