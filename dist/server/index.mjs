globalThis.__nitro_main__ = import.meta.url;
import { a as toEventHandler, c as serve, i as defineLazyEventHandler, n as HTTPError, r as defineHandler, s as NodeResponse, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/.htaccess": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"d6-uCGM/aWSby4OafxcQnLurhDUWcE\"",
		"mtime": "2026-07-13T13:24:29.511Z",
		"size": 214,
		"path": "../public/.htaccess"
	},
	"/auth.md": {
		"type": "text/markdown; charset=utf-8",
		"etag": "\"1ca-/kCKFi2xDtidDDDMwWHhaAjcZ4g\"",
		"mtime": "2026-07-13T22:31:00.026Z",
		"size": 458,
		"path": "../public/auth.md"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"10be-UaJjss2SF031GTtyZsZgxaqWCSs\"",
		"mtime": "2026-07-13T17:22:25.116Z",
		"size": 4286,
		"path": "../public/favicon.ico"
	},
	"/index.md": {
		"type": "text/markdown; charset=utf-8",
		"etag": "\"14a-loABUBFn8mQXbQ6nVo3AoDrtkr4\"",
		"mtime": "2026-07-13T22:31:50.817Z",
		"size": 330,
		"path": "../public/index.md"
	},
	"/llms.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"2c5-d9LkS6MOuNmSqcl1jGcxAgBtAzE\"",
		"mtime": "2026-07-13T15:32:07.521Z",
		"size": 709,
		"path": "../public/llms.txt"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"47-Apu96HIW3poQB8bAhZyGWDwsIDY\"",
		"mtime": "2026-07-13T13:24:16.293Z",
		"size": 71,
		"path": "../public/robots.txt"
	},
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"279c-7SDTYQ6jzQWdLeyiKbpVGvqAnfk\"",
		"mtime": "2026-07-13T18:53:53.088Z",
		"size": 10140,
		"path": "../public/sitemap.xml"
	},
	"/sw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fd-y5Om7bXpgURHze7KW8dv7NGkfRE\"",
		"mtime": "2026-07-13T18:07:00.320Z",
		"size": 253,
		"path": "../public/sw.js"
	},
	"/.well-known/api-catalog": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"18c-WV54/RY8xf3ONpqkI1Y87LMg7sw\"",
		"mtime": "2026-07-13T22:30:11.110Z",
		"size": 396,
		"path": "../public/.well-known/api-catalog"
	},
	"/.well-known/oauth-authorization-server": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"1bc-I/ItniqUBaJ+YAsh51LdS7jfSx8\"",
		"mtime": "2026-07-13T22:30:29.016Z",
		"size": 444,
		"path": "../public/.well-known/oauth-authorization-server"
	},
	"/.well-known/oauth-protected-resource": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"9d-DOS3JU57G9ijefMVqDUVEf22ubU\"",
		"mtime": "2026-07-13T22:30:45.350Z",
		"size": 157,
		"path": "../public/.well-known/oauth-protected-resource"
	},
	"/favicons/apple-touch-icon.png": {
		"type": "image/png",
		"etag": "\"715b-BZ4S0fg/JM81EWJTtxHW6y2atBM\"",
		"mtime": "2026-07-13T17:58:22.901Z",
		"size": 29019,
		"path": "../public/favicons/apple-touch-icon.png"
	},
	"/favicons/favicon-96x96.png": {
		"type": "image/png",
		"etag": "\"3986-kAoK/r3qyCSVkOT8bTeB1z1/k2I\"",
		"mtime": "2026-07-13T17:58:22.096Z",
		"size": 14726,
		"path": "../public/favicons/favicon-96x96.png"
	},
	"/favicons/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"3aee-mMQ2YzkO4fracnbgVseGfVCtRt4\"",
		"mtime": "2026-07-13T17:58:22.468Z",
		"size": 15086,
		"path": "../public/favicons/favicon.ico"
	},
	"/favicons/site.webmanifest": {
		"type": "application/manifest+json",
		"etag": "\"223-og9GeHqAlXXQP5JH0lAS9mptRHg\"",
		"mtime": "2026-07-13T18:18:54.240Z",
		"size": 547,
		"path": "../public/favicons/site.webmanifest"
	},
	"/favicons/web-app-manifest-192x192.png": {
		"type": "image/png",
		"etag": "\"a892-OMxF+cubPB1e2IxiG6Pv22VPe84\"",
		"mtime": "2026-07-13T17:58:23.311Z",
		"size": 43154,
		"path": "../public/favicons/web-app-manifest-192x192.png"
	},
	"/favicons/web-app-manifest-512x512.png": {
		"type": "image/png",
		"etag": "\"33c08-4OLtNMu6qpKfgZr1n37i2ZT54co\"",
		"mtime": "2026-07-13T17:58:24.674Z",
		"size": 211976,
		"path": "../public/favicons/web-app-manifest-512x512.png"
	},
	"/assets/03A.webp": {
		"type": "image/webp",
		"etag": "\"783ec-1LLGel1QcIDrC8kLk27avRd2UxA\"",
		"mtime": "2026-07-13T14:54:24.525Z",
		"size": 492524,
		"path": "../public/assets/03A.webp"
	},
	"/assets/04B.webp": {
		"type": "image/webp",
		"etag": "\"45498-ByauNA109ZLA8gcTj47y0aQdIRw\"",
		"mtime": "2026-07-13T14:54:28.087Z",
		"size": 283800,
		"path": "../public/assets/04B.webp"
	},
	"/assets/04A.webp": {
		"type": "image/webp",
		"etag": "\"75562-jcluhCqneCQAXXGqbVx8WMcElJo\"",
		"mtime": "2026-07-13T14:54:26.477Z",
		"size": 480610,
		"path": "../public/assets/04A.webp"
	},
	"/assets/04C.webp": {
		"type": "image/webp",
		"etag": "\"42b44-N9dyN9mUJiHOhb5T4nhDrWHX0e0\"",
		"mtime": "2026-07-13T14:54:29.494Z",
		"size": 273220,
		"path": "../public/assets/04C.webp"
	},
	"/assets/01.webp": {
		"type": "image/webp",
		"etag": "\"b2660-Hgkvff9fY1IAKxiE4gcieKm9/ck\"",
		"mtime": "2026-07-13T14:54:22.591Z",
		"size": 730720,
		"path": "../public/assets/01.webp"
	},
	"/assets/04D.webp": {
		"type": "image/webp",
		"etag": "\"8b240-0X1gAb8cIojZ8hsOKOWJVHRHH2U\"",
		"mtime": "2026-07-13T14:54:31.138Z",
		"size": 569920,
		"path": "../public/assets/04D.webp"
	},
	"/og-image.png": {
		"type": "image/png",
		"etag": "\"11e716-Zr0++1pwoOEv3wKfIcQwh6IiCKk\"",
		"mtime": "2026-07-13T17:38:52.222Z",
		"size": 1173270,
		"path": "../public/og-image.png"
	},
	"/favicons/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"113a3b-4RsEayQ+8fcfT5GMFjBqrZTZxtM\"",
		"mtime": "2026-07-13T17:58:20.539Z",
		"size": 1129019,
		"path": "../public/favicons/favicon.svg"
	},
	"/assets/05B.webp": {
		"type": "image/webp",
		"etag": "\"4f0ba-Y0UxVujL+efSXLZGt409bwN3F24\"",
		"mtime": "2026-07-13T14:54:33.820Z",
		"size": 323770,
		"path": "../public/assets/05B.webp"
	},
	"/assets/05C.webp": {
		"type": "image/webp",
		"etag": "\"3c08a-us7o4WIoOPeqXySjBt5I3KRoFOo\"",
		"mtime": "2026-07-13T14:54:34.936Z",
		"size": 245898,
		"path": "../public/assets/05C.webp"
	},
	"/assets/06B.webp": {
		"type": "image/webp",
		"etag": "\"1ff58-E+OWqtNYb36T3SvTgSVG8rBNfhA\"",
		"mtime": "2026-07-13T14:54:38.341Z",
		"size": 130904,
		"path": "../public/assets/06B.webp"
	},
	"/assets/06A.webp": {
		"type": "image/webp",
		"etag": "\"4d1c0-sgYb23eXHFG+FnPR1z9XVItnObA\"",
		"mtime": "2026-07-13T14:54:37.993Z",
		"size": 315840,
		"path": "../public/assets/06A.webp"
	},
	"/assets/06C.webp": {
		"type": "image/webp",
		"etag": "\"4e368-Dm2zD0Dw4GpLC+0IHx+nRVNJa/E\"",
		"mtime": "2026-07-13T14:54:39.507Z",
		"size": 320360,
		"path": "../public/assets/06C.webp"
	},
	"/assets/07A.webp": {
		"type": "image/webp",
		"etag": "\"2414c-odEC04N+ytoKEe8DWaAtz3Co75w\"",
		"mtime": "2026-07-13T14:54:41.139Z",
		"size": 147788,
		"path": "../public/assets/07A.webp"
	},
	"/assets/06D.webp": {
		"type": "image/webp",
		"etag": "\"5b5d2-jD6Zh/+4MP07h2hgWvftIls4mdY\"",
		"mtime": "2026-07-13T14:54:40.729Z",
		"size": 374226,
		"path": "../public/assets/06D.webp"
	},
	"/assets/07B.webp": {
		"type": "image/webp",
		"etag": "\"209fe-pnKhvAs/sdhlo0Fp+dHvPo3n83w\"",
		"mtime": "2026-07-13T14:54:41.643Z",
		"size": 133630,
		"path": "../public/assets/07B.webp"
	},
	"/assets/07C.webp": {
		"type": "image/webp",
		"etag": "\"2eb00-BB/ojXr9xxmKWJwdGslk405MB2o\"",
		"mtime": "2026-07-13T14:54:42.076Z",
		"size": 191232,
		"path": "../public/assets/07C.webp"
	},
	"/assets/11A.webp": {
		"type": "image/webp",
		"etag": "\"23d6c-mZSXJ+4AK6Wjg5/n6RooLf7EMXg\"",
		"mtime": "2026-07-13T14:54:42.502Z",
		"size": 146796,
		"path": "../public/assets/11A.webp"
	},
	"/assets/11B.webp": {
		"type": "image/webp",
		"etag": "\"1f108-Pq5Hxgkk7dr3viynMNBXnCkqJk8\"",
		"mtime": "2026-07-13T14:54:42.887Z",
		"size": 127240,
		"path": "../public/assets/11B.webp"
	},
	"/assets/11C.webp": {
		"type": "image/webp",
		"etag": "\"24b3c-bI1WPQPldl9FGgC4PKcps2dojps\"",
		"mtime": "2026-07-13T14:54:43.262Z",
		"size": 150332,
		"path": "../public/assets/11C.webp"
	},
	"/assets/11D.webp": {
		"type": "image/webp",
		"etag": "\"2953a-vBjV15tjHGHG7GPUcV0uNwtMV84\"",
		"mtime": "2026-07-13T14:54:43.705Z",
		"size": 169274,
		"path": "../public/assets/11D.webp"
	},
	"/assets/12A.webp": {
		"type": "image/webp",
		"etag": "\"6ea60-swCzCmXjtSOuhmNMatnZYY1hMTA\"",
		"mtime": "2026-07-13T14:54:45.165Z",
		"size": 453216,
		"path": "../public/assets/12A.webp"
	},
	"/assets/12B.webp": {
		"type": "image/webp",
		"etag": "\"4b622-Q2v7TJsbEP5c1c5wvpioL6aYZ70\"",
		"mtime": "2026-07-13T14:54:46.512Z",
		"size": 308770,
		"path": "../public/assets/12B.webp"
	},
	"/assets/12C.webp": {
		"type": "image/webp",
		"etag": "\"25aac-8SGHQq9YXleWCKNb97E3EaNW+F4\"",
		"mtime": "2026-07-13T14:54:46.969Z",
		"size": 154284,
		"path": "../public/assets/12C.webp"
	},
	"/assets/13A.webp": {
		"type": "image/webp",
		"etag": "\"539d6-azlGj9AtKks7dsHFjv8rE1uzRdg\"",
		"mtime": "2026-07-13T14:54:48.492Z",
		"size": 342486,
		"path": "../public/assets/13A.webp"
	},
	"/assets/13B.webp": {
		"type": "image/webp",
		"etag": "\"21348-t0wMqLfvmk75f6BSyDrSkQMRXrs\"",
		"mtime": "2026-07-13T14:54:48.848Z",
		"size": 136008,
		"path": "../public/assets/13B.webp"
	},
	"/assets/05D.webp": {
		"type": "image/webp",
		"etag": "\"db870-qTyNfopWawgMXUlTqjii97Et1+E\"",
		"mtime": "2026-07-13T14:54:36.814Z",
		"size": 899184,
		"path": "../public/assets/05D.webp"
	},
	"/assets/14A.webp": {
		"type": "image/webp",
		"etag": "\"4e8d4-Fr2Wn0kr8EpdHJZK6IZwMsJ1uPI\"",
		"mtime": "2026-07-13T14:54:49.911Z",
		"size": 321748,
		"path": "../public/assets/14A.webp"
	},
	"/assets/14B.webp": {
		"type": "image/webp",
		"etag": "\"170c8-6+4dKtv3qWn4kDTBbCcDJnV36xg\"",
		"mtime": "2026-07-13T14:54:50.196Z",
		"size": 94408,
		"path": "../public/assets/14B.webp"
	},
	"/assets/15A.webp": {
		"type": "image/webp",
		"etag": "\"7fb52-QsBo6c495ZHaIGKj63RSd5emKF0\"",
		"mtime": "2026-07-13T14:54:51.721Z",
		"size": 523090,
		"path": "../public/assets/15A.webp"
	},
	"/assets/15B.webp": {
		"type": "image/webp",
		"etag": "\"217f8-0QVYkIu1gEF0l8XireotjNE0s1A\"",
		"mtime": "2026-07-13T14:54:52.024Z",
		"size": 137208,
		"path": "../public/assets/15B.webp"
	},
	"/assets/15C.webp": {
		"type": "image/webp",
		"etag": "\"276b0-IEQgA3gMJ4nYpoRNaKqz8j49hzE\"",
		"mtime": "2026-07-13T14:54:52.410Z",
		"size": 161456,
		"path": "../public/assets/15C.webp"
	},
	"/assets/16A.webp": {
		"type": "image/webp",
		"etag": "\"23d2a-E+quN1tqcMLRHEfVvZllBgGus3M\"",
		"mtime": "2026-07-13T14:54:52.828Z",
		"size": 146730,
		"path": "../public/assets/16A.webp"
	},
	"/assets/16B.webp": {
		"type": "image/webp",
		"etag": "\"217f8-0QVYkIu1gEF0l8XireotjNE0s1A\"",
		"mtime": "2026-07-13T14:54:53.135Z",
		"size": 137208,
		"path": "../public/assets/16B.webp"
	},
	"/assets/18A.webp": {
		"type": "image/webp",
		"etag": "\"40d80-kvsIqEfcdMGM/Qq+lt8EA8zfDAc\"",
		"mtime": "2026-07-13T14:54:54.152Z",
		"size": 265600,
		"path": "../public/assets/18A.webp"
	},
	"/assets/about-suOuFh9O.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"241d-MMnDIkiulG36UNgSaF+d8AxGTgY\"",
		"mtime": "2026-07-13T22:37:27.262Z",
		"size": 9245,
		"path": "../public/assets/about-suOuFh9O.js"
	},
	"/assets/Almonds.webp": {
		"type": "image/webp",
		"etag": "\"25db2-+qP1C7SgrGg5CX2jL/lvYCz0fBs\"",
		"mtime": "2026-07-13T14:54:56.650Z",
		"size": 155058,
		"path": "../public/assets/Almonds.webp"
	},
	"/assets/APEDA Logo.webp": {
		"type": "image/webp",
		"etag": "\"1f8a-R8IHWuQvx8ZCeIAq4x7noBrhWOE\"",
		"mtime": "2026-07-13T14:54:58.543Z",
		"size": 8074,
		"path": "../public/assets/APEDA Logo.webp"
	},
	"/assets/arrow-left-D2cKDzTy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-FybXh3UkiEiws+ofq8KnyZqtAvM\"",
		"mtime": "2026-07-13T22:37:27.262Z",
		"size": 154,
		"path": "../public/assets/arrow-left-D2cKDzTy.js"
	},
	"/assets/Asafoetida.webp": {
		"type": "image/webp",
		"etag": "\"24c3c-HRIFxnYwUWFh06L7krPNYK5KGnI\"",
		"mtime": "2026-07-13T14:54:59.348Z",
		"size": 150588,
		"path": "../public/assets/Asafoetida.webp"
	},
	"/assets/Bamboo Shoot Powder.webp": {
		"type": "image/webp",
		"etag": "\"35bdc-I7+6yDuFMsuhhH2Q86S6ZHxWjOM\"",
		"mtime": "2026-07-13T14:55:00.313Z",
		"size": 220124,
		"path": "../public/assets/Bamboo Shoot Powder.webp"
	},
	"/assets/Bay Leaves.webp": {
		"type": "image/webp",
		"etag": "\"2b85e-sZz30O+t0YBdLtcdLAqblk2mI0U\"",
		"mtime": "2026-07-13T14:55:01.399Z",
		"size": 178270,
		"path": "../public/assets/Bay Leaves.webp"
	},
	"/assets/Black Cardamom.webp": {
		"type": "image/webp",
		"etag": "\"3b29a-KDVTeRLRdMdwz6qg6F5S9c6L/38\"",
		"mtime": "2026-07-13T14:55:02.513Z",
		"size": 242330,
		"path": "../public/assets/Black Cardamom.webp"
	},
	"/assets/Black Pepper Powder.webp": {
		"type": "image/webp",
		"etag": "\"35fa2-l1/OwcyfKYh2WkriNtsdMkWNKcY\"",
		"mtime": "2026-07-13T14:55:03.690Z",
		"size": 221090,
		"path": "../public/assets/Black Pepper Powder.webp"
	},
	"/assets/Black Salt.webp": {
		"type": "image/webp",
		"etag": "\"23cd6-/dGr3BnTsmquI9NoriVZ0Eysd0U\"",
		"mtime": "2026-07-13T14:55:04.496Z",
		"size": 146646,
		"path": "../public/assets/Black Salt.webp"
	},
	"/assets/brand-B-vREtoI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7a9-ZK6F7uUCWok2UknrSAYc/t4aI24\"",
		"mtime": "2026-07-13T22:37:27.262Z",
		"size": 1961,
		"path": "../public/assets/brand-B-vREtoI.js"
	},
	"/assets/Carom Seeds.webp": {
		"type": "image/webp",
		"etag": "\"3ce60-lnDYF8phJYj7gblZXPgFx5+q7M4\"",
		"mtime": "2026-07-13T14:55:05.483Z",
		"size": 249440,
		"path": "../public/assets/Carom Seeds.webp"
	},
	"/assets/20A.webp": {
		"type": "image/webp",
		"etag": "\"ad6d8-/CztF50/jh2KiRwnuqpHGTn9DKs\"",
		"mtime": "2026-07-13T14:54:55.735Z",
		"size": 710360,
		"path": "../public/assets/20A.webp"
	},
	"/assets/Black Cumin Seeds.webp": {
		"type": "image/webp",
		"etag": "\"e3f22-2xR1UC22JTWWzMJ4DIvPlccNcpg\"",
		"mtime": "2026-07-13T17:59:05.559Z",
		"size": 933666,
		"path": "../public/assets/Black Cumin Seeds.webp"
	},
	"/assets/Cashews.webp": {
		"type": "image/webp",
		"etag": "\"16c38-7MTmyY5Ntf3SUJdm6KL2JwsPDc4\"",
		"mtime": "2026-07-13T14:55:06.246Z",
		"size": 93240,
		"path": "../public/assets/Cashews.webp"
	},
	"/assets/Chaat Masala.webp": {
		"type": "image/webp",
		"etag": "\"3a7c0-A228JtQDz4KQPtEiruO5kfTc51c\"",
		"mtime": "2026-07-13T14:55:07.241Z",
		"size": 239552,
		"path": "../public/assets/Chaat Masala.webp"
	},
	"/assets/check-mFD7HnOo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"71-DRyQQz6Su3WZIw7R+0lx4WYSDOg\"",
		"mtime": "2026-07-13T22:37:27.262Z",
		"size": 113,
		"path": "../public/assets/check-mFD7HnOo.js"
	},
	"/assets/Cheese.webp": {
		"type": "image/webp",
		"etag": "\"14bbc-fOv5Xd5L/9s44CtIaMXRp9Pr9uY\"",
		"mtime": "2026-07-13T14:55:07.998Z",
		"size": 84924,
		"path": "../public/assets/Cheese.webp"
	},
	"/assets/Black Cumin Seeds.png": {
		"type": "image/png",
		"etag": "\"185b72-vdj/BckEn9gE9X2I+B7sWGTRSro\"",
		"mtime": "2026-07-13T17:51:16.465Z",
		"size": 1596274,
		"path": "../public/assets/Black Cumin Seeds.png"
	},
	"/assets/05A.webp": {
		"type": "image/webp",
		"etag": "\"442df0-ZtLhkQuBZKsrXbOHfir13CiGumM\"",
		"mtime": "2026-07-13T17:59:04.487Z",
		"size": 4468208,
		"path": "../public/assets/05A.webp"
	},
	"/assets/Cinnamon.webp": {
		"type": "image/webp",
		"etag": "\"2d8c0-DdRijygZN05fcpfLH9xI0Qqv44o\"",
		"mtime": "2026-07-13T14:55:09.723Z",
		"size": 186560,
		"path": "../public/assets/Cinnamon.webp"
	},
	"/assets/Cloves.webp": {
		"type": "image/webp",
		"etag": "\"3dfb4-VBzbOxosuCeIOwAuDGOkFI1lDh0\"",
		"mtime": "2026-07-13T14:55:10.831Z",
		"size": 253876,
		"path": "../public/assets/Cloves.webp"
	},
	"/assets/contact-98FMZ2QB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e26-ze74qcrbhyTUGyYfQ6K2yCWBs/0\"",
		"mtime": "2026-07-13T22:37:27.262Z",
		"size": 3622,
		"path": "../public/assets/contact-98FMZ2QB.js"
	},
	"/assets/Coriander Powder.webp": {
		"type": "image/webp",
		"etag": "\"35ad0-1ZcvK1PeuBtwV4x+6UadieAx0g0\"",
		"mtime": "2026-07-13T14:55:11.807Z",
		"size": 219856,
		"path": "../public/assets/Coriander Powder.webp"
	},
	"/assets/Coriander Seeds.webp": {
		"type": "image/webp",
		"etag": "\"35a92-lyx7c72QALRb/SeLBDY4j4z9QKw\"",
		"mtime": "2026-07-13T14:55:13.023Z",
		"size": 219794,
		"path": "../public/assets/Coriander Seeds.webp"
	},
	"/assets/Curd.webp": {
		"type": "image/webp",
		"etag": "\"bcea-5HV0GdC2/gaZcTPPJ5D8xJ8Pr5M\"",
		"mtime": "2026-07-13T14:55:15.647Z",
		"size": 48362,
		"path": "../public/assets/Curd.webp"
	},
	"/assets/Cumin Powder.webp": {
		"type": "image/webp",
		"etag": "\"34362-zf4wC1DW4RydL4BWKbTgt0p2+3A\"",
		"mtime": "2026-07-13T14:55:13.987Z",
		"size": 213858,
		"path": "../public/assets/Cumin Powder.webp"
	},
	"/assets/Curry Leaves.webp": {
		"type": "image/webp",
		"etag": "\"1e5a2-TJ+mSti0zYN9czcIEbAIWnfPgFA\"",
		"mtime": "2026-07-13T14:55:16.476Z",
		"size": 124322,
		"path": "../public/assets/Curry Leaves.webp"
	},
	"/assets/Cumin Seeds.webp": {
		"type": "image/webp",
		"etag": "\"4aca4-gvB2fpSSTwHIuR8EShFdCBWh7+8\"",
		"mtime": "2026-07-13T14:55:15.033Z",
		"size": 306340,
		"path": "../public/assets/Cumin Seeds.webp"
	},
	"/assets/Curry Powder.webp": {
		"type": "image/webp",
		"etag": "\"37c3a-KphKog2jq1z5xJktC2hA0o8KmMQ\"",
		"mtime": "2026-07-13T14:55:17.430Z",
		"size": 228410,
		"path": "../public/assets/Curry Powder.webp"
	},
	"/assets/Dried Fenugreek Leaves.webp": {
		"type": "image/webp",
		"etag": "\"1f9c8-pduIR8Aht5foABlcmOpaMyFs1AM\"",
		"mtime": "2026-07-13T14:55:18.218Z",
		"size": 129480,
		"path": "../public/assets/Dried Fenugreek Leaves.webp"
	},
	"/assets/Dried Ginger.webp": {
		"type": "image/webp",
		"etag": "\"3d9de-pMU774uGJ9xGS3dFQ1UaSNODiWU\"",
		"mtime": "2026-07-13T14:55:19.266Z",
		"size": 252382,
		"path": "../public/assets/Dried Ginger.webp"
	},
	"/assets/Dry Mango Powder.webp": {
		"type": "image/webp",
		"etag": "\"2fa86-qA0aWRthfLorwXnt/3R7/sYpq8g\"",
		"mtime": "2026-07-13T14:55:20.316Z",
		"size": 195206,
		"path": "../public/assets/Dry Mango Powder.webp"
	},
	"/assets/export-inquiries-78DduEd8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2115-fnVtGAN26gHkv8aveQN7wAZ868k\"",
		"mtime": "2026-07-13T22:37:27.262Z",
		"size": 8469,
		"path": "../public/assets/export-inquiries-78DduEd8.js"
	},
	"/assets/FDA-Emblem-logo.webp": {
		"type": "image/webp",
		"etag": "\"9e42-d3lV0jNxdxcD48AfaQNh6Fzwprk\"",
		"mtime": "2026-07-13T14:55:26.831Z",
		"size": 40514,
		"path": "../public/assets/FDA-Emblem-logo.webp"
	},
	"/assets/Fenugrek Seeds.webp": {
		"type": "image/webp",
		"etag": "\"2a118-u4KqzpUHeH4DOebM+Wb3b6NnJK0\"",
		"mtime": "2026-07-13T14:55:28.727Z",
		"size": 172312,
		"path": "../public/assets/Fenugrek Seeds.webp"
	},
	"/assets/Fennel Seeds.webp": {
		"type": "image/webp",
		"etag": "\"3886c-Pydb8ByqdfGOMAeNn6wtjS8E11U\"",
		"mtime": "2026-07-13T14:55:27.805Z",
		"size": 231532,
		"path": "../public/assets/Fennel Seeds.webp"
	},
	"/assets/Foxnut.webp": {
		"type": "image/webp",
		"etag": "\"15ede-oOtp+q7Uu3Gei2N8r74doDPQsHc\"",
		"mtime": "2026-07-13T14:55:29.411Z",
		"size": 89822,
		"path": "../public/assets/Foxnut.webp"
	},
	"/assets/FSSAI Logo.webp": {
		"type": "image/webp",
		"etag": "\"7266-YMRyMYI8ZxDoQqVmZjY8L5K47Fk\"",
		"mtime": "2026-07-13T14:55:33.989Z",
		"size": 29286,
		"path": "../public/assets/FSSAI Logo.webp"
	},
	"/assets/Garam Masala.webp": {
		"type": "image/webp",
		"etag": "\"3b6de-7qzsgTDuoKhcwK1fPGy+wzZf970\"",
		"mtime": "2026-07-13T14:55:34.889Z",
		"size": 243422,
		"path": "../public/assets/Garam Masala.webp"
	},
	"/assets/Garlic Powder.webp": {
		"type": "image/webp",
		"etag": "\"1121c-P/QAMyqlXwwbmqPwsZee+snj6/w\"",
		"mtime": "2026-07-13T14:55:35.138Z",
		"size": 70172,
		"path": "../public/assets/Garlic Powder.webp"
	},
	"/assets/Ginger Powder.webp": {
		"type": "image/webp",
		"etag": "\"36b86-pF/Z3BikpXFDoqTrVC3jp5GGkN8\"",
		"mtime": "2026-07-13T14:55:36.058Z",
		"size": 224134,
		"path": "../public/assets/Ginger Powder.webp"
	},
	"/assets/Green Cardamom.webp": {
		"type": "image/webp",
		"etag": "\"3e428-iWPZpSuhyZ322KWlv/NGmYod9gI\"",
		"mtime": "2026-07-13T14:55:36.991Z",
		"size": 255016,
		"path": "../public/assets/Green Cardamom.webp"
	},
	"/assets/index-PTugdkvS.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"654d-iQIovGZuRnxkHQvmCFeuKSU/Lxw\"",
		"mtime": "2026-07-13T22:37:27.277Z",
		"size": 25933,
		"path": "../public/assets/index-PTugdkvS.css"
	},
	"/assets/ISO Logo.webp": {
		"type": "image/webp",
		"etag": "\"10a90-wb+HExi8MFyU1d4KenZ5lVWN7Ss\"",
		"mtime": "2026-07-13T14:55:46.521Z",
		"size": 68240,
		"path": "../public/assets/ISO Logo.webp"
	},
	"/assets/jsx-runtime-D8nDyRPw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2210-qrBAUPDOR8ROKpBVNEla8AGnGKU\"",
		"mtime": "2026-07-13T22:37:27.262Z",
		"size": 8720,
		"path": "../public/assets/jsx-runtime-D8nDyRPw.js"
	},
	"/assets/Kokum.webp": {
		"type": "image/webp",
		"etag": "\"2a980-KNQI66/01V6mM26rm2uqkciogUI\"",
		"mtime": "2026-07-13T14:55:47.816Z",
		"size": 174464,
		"path": "../public/assets/Kokum.webp"
	},
	"/assets/link-BIDXvZM8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5b4c-iVm6i5LCkUCKZAaKgCJPhS6imrA\"",
		"mtime": "2026-07-13T22:37:27.262Z",
		"size": 23372,
		"path": "../public/assets/link-BIDXvZM8.js"
	},
	"/assets/Mace.webp": {
		"type": "image/webp",
		"etag": "\"31770-Uu6F53BUZ3lJVZRfIlnowat0yGs\"",
		"mtime": "2026-07-13T14:55:50.302Z",
		"size": 202608,
		"path": "../public/assets/Mace.webp"
	},
	"/assets/message-circle-D7hoGjQX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e6-VsRGCwLuhPTMsk0/rMb8/sa5XRI\"",
		"mtime": "2026-07-13T22:37:27.262Z",
		"size": 230,
		"path": "../public/assets/message-circle-D7hoGjQX.js"
	},
	"/assets/index-D5BPseub.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"84f5e-VfeXMwZMb1R0gbCb4lhhKIUfQ9I\"",
		"mtime": "2026-07-13T22:37:27.262Z",
		"size": 544606,
		"path": "../public/assets/index-D5BPseub.js"
	},
	"/assets/Multicolor 3x1 Logo.webp": {
		"type": "image/webp",
		"etag": "\"3c8fc-S86k5Z5wZETFg+F9yf+EuDHvBW4\"",
		"mtime": "2026-07-13T14:56:00.999Z",
		"size": 248060,
		"path": "../public/assets/Multicolor 3x1 Logo.webp"
	},
	"/assets/Multicolor Icon.webp": {
		"type": "image/webp",
		"etag": "\"dc12-uvpGuEqc/ZmiaFSdeFydiYo7DEE\"",
		"mtime": "2026-07-13T14:56:02.699Z",
		"size": 56338,
		"path": "../public/assets/Multicolor Icon.webp"
	},
	"/assets/Multicolor Round Logo.webp": {
		"type": "image/webp",
		"etag": "\"a53c-XWeazQiuHaqvxYAPAtLQTgts6y4\"",
		"mtime": "2026-07-13T14:56:09.710Z",
		"size": 42300,
		"path": "../public/assets/Multicolor Round Logo.webp"
	},
	"/assets/05A.png": {
		"type": "image/png",
		"etag": "\"7565ab-4GohFY/ylXiTnOlZE61QPIuqupo\"",
		"mtime": "2026-07-13T17:44:09.277Z",
		"size": 7693739,
		"path": "../public/assets/05A.png"
	},
	"/assets/Multicolor Square Logo.webp": {
		"type": "image/webp",
		"etag": "\"16378-hFGxmHxs099XxXkqkPoVxQrW+Vo\"",
		"mtime": "2026-07-13T14:56:18.301Z",
		"size": 91e3,
		"path": "../public/assets/Multicolor Square Logo.webp"
	},
	"/assets/Chia Seeds.webp": {
		"type": "image/webp",
		"etag": "\"331a22-GFYjo+7qqXPXwTzOljXdBLE+BGo\"",
		"mtime": "2026-07-13T17:58:46.488Z",
		"size": 3349026,
		"path": "../public/assets/Chia Seeds.webp"
	},
	"/assets/Mustard Seeds.webp": {
		"type": "image/webp",
		"etag": "\"2c294-C3FQRW+3pg1bUeKLtML44Iu46oo\"",
		"mtime": "2026-07-13T14:56:19.153Z",
		"size": 180884,
		"path": "../public/assets/Mustard Seeds.webp"
	},
	"/assets/Nigella Seeds.webp": {
		"type": "image/webp",
		"etag": "\"24802-mJj9ZPswK+DZwv1IAwxnYGSLaB8\"",
		"mtime": "2026-07-13T14:56:19.977Z",
		"size": 149506,
		"path": "../public/assets/Nigella Seeds.webp"
	},
	"/assets/Nutmeg.webp": {
		"type": "image/webp",
		"etag": "\"151fe-DpuozKzZLXUfOw5RGdrbnlwcAS4\"",
		"mtime": "2026-07-13T14:56:20.269Z",
		"size": 86526,
		"path": "../public/assets/Nutmeg.webp"
	},
	"/assets/Panch Phoron.webp": {
		"type": "image/webp",
		"etag": "\"3996a-EEVfEhcY5XNYonIyVZ2e2dkTZpc\"",
		"mtime": "2026-07-13T14:56:21.156Z",
		"size": 235882,
		"path": "../public/assets/Panch Phoron.webp"
	},
	"/assets/Paneer.webp": {
		"type": "image/webp",
		"etag": "\"4788-TuZsUzjU485yNaNVK+ZPthTBQBY\"",
		"mtime": "2026-07-13T14:56:21.325Z",
		"size": 18312,
		"path": "../public/assets/Paneer.webp"
	},
	"/assets/Peanuts.webp": {
		"type": "image/webp",
		"etag": "\"18ad4-Xn3eRo8yrCjW78wJXYXOispd5/c\"",
		"mtime": "2026-07-13T14:56:22.038Z",
		"size": 101076,
		"path": "../public/assets/Peanuts.webp"
	},
	"/assets/Pistachio.webp": {
		"type": "image/webp",
		"etag": "\"975e-P0o2oz3r4IOKP+YA8jvLxVAX5Ec\"",
		"mtime": "2026-07-13T14:56:22.278Z",
		"size": 38750,
		"path": "../public/assets/Pistachio.webp"
	},
	"/assets/Pomegranate Seed Powder.webp": {
		"type": "image/webp",
		"etag": "\"327b6-a9uuCRn9FIF4HjVn8UnrFJ4Vf1Y\"",
		"mtime": "2026-07-13T14:56:23.132Z",
		"size": 206774,
		"path": "../public/assets/Pomegranate Seed Powder.webp"
	},
	"/assets/product._slug-BYLDBfQW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ed-rhzTjPJocGBu8dCh/hdNh/TRUdQ\"",
		"mtime": "2026-07-13T22:37:27.262Z",
		"size": 493,
		"path": "../public/assets/product._slug-BYLDBfQW.js"
	},
	"/assets/product._slug-CF2X3mdZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2266-tz3OEwEGgWEFWyXrPG6BPjRy6+c\"",
		"mtime": "2026-07-13T22:37:27.262Z",
		"size": 8806,
		"path": "../public/assets/product._slug-CF2X3mdZ.js"
	},
	"/assets/ProductCard-BrHtcPTq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"58a-Dz76k8Xtt5CW2LTVUlkXKSwE4vw\"",
		"mtime": "2026-07-13T22:37:27.262Z",
		"size": 1418,
		"path": "../public/assets/ProductCard-BrHtcPTq.js"
	},
	"/assets/products.index-DS_V7da5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b8f-d7nLQfeJRLXrX+m3zirHOFYk4Po\"",
		"mtime": "2026-07-13T22:37:27.277Z",
		"size": 7055,
		"path": "../public/assets/products.index-DS_V7da5.js"
	},
	"/assets/Honey.webp": {
		"type": "image/webp",
		"etag": "\"2f8126-vy65ZgEXgMmJmjkWiT61WW1W5wM\"",
		"mtime": "2026-07-13T18:48:40.857Z",
		"size": 3113254,
		"path": "../public/assets/Honey.webp"
	},
	"/assets/products._category-BjnoWkBt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a02-RLZ0Z8QhdtSc3YZS7zVX+Hmm7vo\"",
		"mtime": "2026-07-13T22:37:27.277Z",
		"size": 2562,
		"path": "../public/assets/products._category-BjnoWkBt.js"
	},
	"/assets/products._category-DQm1YZjY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ee-7n3s1NSiwOjMp4yS1rVHkhpBZiE\"",
		"mtime": "2026-07-13T22:37:27.277Z",
		"size": 494,
		"path": "../public/assets/products._category-DQm1YZjY.js"
	},
	"/assets/Pure Ghee.webp": {
		"type": "image/webp",
		"etag": "\"b38c-tcALunKbyC6blJIpaTg0221tjEk\"",
		"mtime": "2026-07-13T14:56:23.773Z",
		"size": 45964,
		"path": "../public/assets/Pure Ghee.webp"
	},
	"/assets/react-dom-CrK8yE57.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dda-TYAl7GnUPUCbV+AVNcbJobxY8L4\"",
		"mtime": "2026-07-13T22:37:27.277Z",
		"size": 3546,
		"path": "../public/assets/react-dom-CrK8yE57.js"
	},
	"/assets/Red Chilli Powder.webp": {
		"type": "image/webp",
		"etag": "\"325f2-bU4xTDgAby/ABQvkwtvwOnl6x0s\"",
		"mtime": "2026-07-13T14:56:24.644Z",
		"size": 206322,
		"path": "../public/assets/Red Chilli Powder.webp"
	},
	"/assets/Reveal-B5FlXgoM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"233-qlnldQ0UQpoVhvhj7RlhC32ACJw\"",
		"mtime": "2026-07-13T22:37:27.262Z",
		"size": 563,
		"path": "../public/assets/Reveal-B5FlXgoM.js"
	},
	"/assets/Rock Salt.webp": {
		"type": "image/webp",
		"etag": "\"1bce6-j1bti1jXZJXGMRUi/9+IAt2p7+8\"",
		"mtime": "2026-07-13T14:56:25.573Z",
		"size": 113894,
		"path": "../public/assets/Rock Salt.webp"
	},
	"/assets/Chia Seeds.png": {
		"type": "image/png",
		"etag": "\"5b5d1b-zl6O3PnDWYaghWF3+/XhpfCEZ6w\"",
		"mtime": "2026-07-13T17:41:57.619Z",
		"size": 5987611,
		"path": "../public/assets/Chia Seeds.png"
	},
	"/assets/Mamra Almonds.webp": {
		"type": "image/webp",
		"etag": "\"33a95e-Q51l8ksrjP1jyNw0VW5QloNsacQ\"",
		"mtime": "2026-07-13T17:58:52.245Z",
		"size": 3385694,
		"path": "../public/assets/Mamra Almonds.webp"
	},
	"/assets/routes-qJcamGMT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b031-gTGSaRQiWwkqSY0iYTFbyLpzVFI\"",
		"mtime": "2026-07-13T22:37:27.277Z",
		"size": 45105,
		"path": "../public/assets/routes-qJcamGMT.js"
	},
	"/assets/Saffron.webp": {
		"type": "image/webp",
		"etag": "\"1a1c6-kjMQ6q+PgxSQiwWXQaVDqtWsdWU\"",
		"mtime": "2026-07-13T14:56:26.392Z",
		"size": 106950,
		"path": "../public/assets/Saffron.webp"
	},
	"/assets/select-CfSBciQ8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"136e7-j0Qubih836YdOzumtDtv5GXFvFY\"",
		"mtime": "2026-07-13T22:37:27.277Z",
		"size": 79591,
		"path": "../public/assets/select-CfSBciQ8.js"
	},
	"/assets/Sesame Seeds.webp": {
		"type": "image/webp",
		"etag": "\"1bd06-T0EKXelvKniRouNYCU4LuORzfaY\"",
		"mtime": "2026-07-13T14:56:27.261Z",
		"size": 113926,
		"path": "../public/assets/Sesame Seeds.webp"
	},
	"/assets/ship-BeDZhu4K.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"414-/69d4R2QKlMloc2phVnldCKtMYY\"",
		"mtime": "2026-07-13T22:37:27.277Z",
		"size": 1044,
		"path": "../public/assets/ship-BeDZhu4K.js"
	},
	"/assets/Spice Board Logo.webp": {
		"type": "image/webp",
		"etag": "\"cb96-01kGrUGiJiLplr1Jg2onuByNX3M\"",
		"mtime": "2026-07-13T14:56:39.489Z",
		"size": 52118,
		"path": "../public/assets/Spice Board Logo.webp"
	},
	"/assets/Star Anise.webp": {
		"type": "image/webp",
		"etag": "\"16b02-ZIl+QnHlJE/9ieygViV9+mzbO3Q\"",
		"mtime": "2026-07-13T14:56:39.756Z",
		"size": 92930,
		"path": "../public/assets/Star Anise.webp"
	},
	"/assets/styles-Cy9CnqgT.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"19043-GzjNm9n4U/5bik82sdi9RJmystg\"",
		"mtime": "2026-07-13T22:37:27.277Z",
		"size": 102467,
		"path": "../public/assets/styles-Cy9CnqgT.css"
	},
	"/assets/Tamarind.webp": {
		"type": "image/webp",
		"etag": "\"2dad0-lDQFOyQfekxdFHodxBM+TU49nG4\"",
		"mtime": "2026-07-13T14:56:40.533Z",
		"size": 187088,
		"path": "../public/assets/Tamarind.webp"
	},
	"/assets/Long Pepper.webp": {
		"type": "image/webp",
		"etag": "\"41fa84-zgNYwLIo2EhFTBOZTbH09jtmbvs\"",
		"mtime": "2026-07-13T17:59:14.938Z",
		"size": 4323972,
		"path": "../public/assets/Long Pepper.webp"
	},
	"/assets/Turmeric Powder.webp": {
		"type": "image/webp",
		"etag": "\"18382-JG5/lb/qOecIqVS6O28UQm5bSig\"",
		"mtime": "2026-07-13T14:56:40.789Z",
		"size": 99202,
		"path": "../public/assets/Turmeric Powder.webp"
	},
	"/assets/Walnuts.webp": {
		"type": "image/webp",
		"etag": "\"24252-E90+ITcytcCNNvml5N4CxK4x2z0\"",
		"mtime": "2026-07-13T14:56:41.532Z",
		"size": 148050,
		"path": "../public/assets/Walnuts.webp"
	},
	"/assets/Watermelon Seeds.webp": {
		"type": "image/webp",
		"etag": "\"1166e-2mxDU82Vw/HeY9OoJoWdJZftyRQ\"",
		"mtime": "2026-07-13T14:56:42.166Z",
		"size": 71278,
		"path": "../public/assets/Watermelon Seeds.webp"
	},
	"/assets/whatsapp.webp": {
		"type": "image/webp",
		"etag": "\"31bc-W74S+rrT9JXHC4abKVAPvm6uVec\"",
		"mtime": "2026-07-13T14:56:47.948Z",
		"size": 12732,
		"path": "../public/assets/whatsapp.webp"
	},
	"/assets/White 3x1 Logo.webp": {
		"type": "image/webp",
		"etag": "\"26e38-QeweDFuKjfY0DR0dhrsfUt+a7/A\"",
		"mtime": "2026-07-13T14:57:03.241Z",
		"size": 159288,
		"path": "../public/assets/White 3x1 Logo.webp"
	},
	"/assets/White Icon.webp": {
		"type": "image/webp",
		"etag": "\"15398-FhylJNhKh0kExKHrfgwFqNA8rQM\"",
		"mtime": "2026-07-13T14:57:15.282Z",
		"size": 86936,
		"path": "../public/assets/White Icon.webp"
	},
	"/assets/Honey.png": {
		"type": "image/png",
		"etag": "\"55552a-kLN63JcHKlFJXKz5AWrB9qD2wJo\"",
		"mtime": "2026-07-13T18:29:49.708Z",
		"size": 5592362,
		"path": "../public/assets/Honey.png"
	},
	"/assets/White Round logo.webp": {
		"type": "image/webp",
		"etag": "\"ac28-1NsYKYMVg8CU7SEDRzmGXzEnxKM\"",
		"mtime": "2026-07-13T14:57:23.717Z",
		"size": 44072,
		"path": "../public/assets/White Round logo.webp"
	},
	"/assets/White Square logo.webp": {
		"type": "image/webp",
		"etag": "\"dad2-N91pUUgv96uBWwH+t6NJtpicvGw\"",
		"mtime": "2026-07-13T14:57:31.756Z",
		"size": 56018,
		"path": "../public/assets/White Square logo.webp"
	},
	"/.well-known/agent-skills/index.json": {
		"type": "application/json",
		"etag": "\"161-8PRUiNSaERlC5J2rfIgiOjRYzTU\"",
		"mtime": "2026-07-13T22:31:38.298Z",
		"size": 353,
		"path": "../public/.well-known/agent-skills/index.json"
	},
	"/.well-known/mcp/server-card.json": {
		"type": "application/json",
		"etag": "\"13a-m0Z8dEe8+VPLhmPMa7H+oniOaZo\"",
		"mtime": "2026-07-13T22:31:18.668Z",
		"size": 314,
		"path": "../public/.well-known/mcp/server-card.json"
	},
	"/assets/Mamra Almonds.png": {
		"type": "image/png",
		"etag": "\"5b3651-zGGbk8c0c7XPz+TJvuFj+ve7OVY\"",
		"mtime": "2026-07-13T17:49:11.995Z",
		"size": 5977681,
		"path": "../public/assets/Mamra Almonds.png"
	},
	"/assets/Long Pepper.png": {
		"type": "image/png",
		"etag": "\"6d4f9e-KzGV1aXluF67fpRcYXYru7jPhiM\"",
		"mtime": "2026-07-13T17:53:08.341Z",
		"size": 7163806,
		"path": "../public/assets/Long Pepper.png"
	},
	"/assets/White Pepper.webp": {
		"type": "image/webp",
		"etag": "\"30bf02-6FXAOjG9z0qCGVP5bH/n8S1yoAs\"",
		"mtime": "2026-07-13T17:58:57.851Z",
		"size": 3194626,
		"path": "../public/assets/White Pepper.webp"
	},
	"/assets/White Pepper.png": {
		"type": "image/png",
		"etag": "\"55875c-FqQVp+J8EFRTixNENJpF28eQ6ug\"",
		"mtime": "2026-07-13T17:50:24.411Z",
		"size": 5605212,
		"path": "../public/assets/White Pepper.png"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_2V0UPk = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_2V0UPk
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
