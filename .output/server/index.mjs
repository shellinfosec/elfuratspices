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
	"/llms.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"1ee-9mCG1qwaAcdKeoHjZlIQKVBAnFg\"",
		"mtime": "2026-07-13T13:24:27.367Z",
		"size": 494,
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
		"etag": "\"4bf-dTm5dG4/JHMwIiJ9yk2munLWWrE\"",
		"mtime": "2026-07-13T13:24:08.596Z",
		"size": 1215,
		"path": "../public/sitemap.xml"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-07-13T12:26:05.000Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/assets/06B.png": {
		"type": "image/png",
		"etag": "\"1c829c-HdCvpoVD1uThKyFj5DCD8Q3HOxM\"",
		"mtime": "2026-03-05T11:30:57.853Z",
		"size": 1868444,
		"path": "../public/assets/06B.png"
	},
	"/assets/07A.png": {
		"type": "image/png",
		"etag": "\"1e5d86-tHdO/1Qx2EPL2xCawo473c5aq5E\"",
		"mtime": "2026-03-05T11:33:38.869Z",
		"size": 1990022,
		"path": "../public/assets/07A.png"
	},
	"/assets/07B.png": {
		"type": "image/png",
		"etag": "\"1db61e-rHItsXchrF4RhhsOzc3vvuSGloU\"",
		"mtime": "2026-03-05T11:34:30.679Z",
		"size": 1947166,
		"path": "../public/assets/07B.png"
	},
	"/assets/11A.png": {
		"type": "image/png",
		"etag": "\"1e5271-WP9362jy+XaAadXSALx9Jw55t4o\"",
		"mtime": "2026-07-12T20:21:54.877Z",
		"size": 1987185,
		"path": "../public/assets/11A.png"
	},
	"/assets/11B.png": {
		"type": "image/png",
		"etag": "\"1d0e71-SYwe17fHDl+IE3twTca/Anjextk\"",
		"mtime": "2026-03-05T11:36:57.576Z",
		"size": 1904241,
		"path": "../public/assets/11B.png"
	},
	"/assets/11C.png": {
		"type": "image/png",
		"etag": "\"1ebd88-Y/XH90gQxY+cfFujcUjnlY1uRi0\"",
		"mtime": "2026-03-05T11:37:30.751Z",
		"size": 2014600,
		"path": "../public/assets/11C.png"
	},
	"/assets/07C.png": {
		"type": "image/png",
		"etag": "\"213cd4-japP17ji8M1AHflPU/5jEubakQ8\"",
		"mtime": "2026-03-05T11:20:51.646Z",
		"size": 2178260,
		"path": "../public/assets/07C.png"
	},
	"/assets/12C.png": {
		"type": "image/png",
		"etag": "\"1e289f-Lu1mk4YF1DVM2dsFwUtJbLZZLko\"",
		"mtime": "2026-03-05T11:39:57.122Z",
		"size": 1976479,
		"path": "../public/assets/12C.png"
	},
	"/assets/11D.png": {
		"type": "image/png",
		"etag": "\"1f3735-I7msexHNWe+B6Hde7BM4shUlJ6k\"",
		"mtime": "2026-07-12T20:31:00.164Z",
		"size": 2045749,
		"path": "../public/assets/11D.png"
	},
	"/assets/15B.png": {
		"type": "image/png",
		"etag": "\"6f110-bUIiBTgqVzyoTFdFrshm5SyvU5k\"",
		"mtime": "2026-03-05T17:25:09.953Z",
		"size": 454928,
		"path": "../public/assets/15B.png"
	},
	"/assets/13B.png": {
		"type": "image/png",
		"etag": "\"1e0a7e-opxSvlY1oQEiFUrt7p71KAz/RWY\"",
		"mtime": "2026-03-05T11:41:05.353Z",
		"size": 1968766,
		"path": "../public/assets/13B.png"
	},
	"/assets/14B.png": {
		"type": "image/png",
		"etag": "\"1ac142-lBc2tslAhblF+cSD8MH664w8axM\"",
		"mtime": "2026-03-05T11:44:28.338Z",
		"size": 1753410,
		"path": "../public/assets/14B.png"
	},
	"/assets/15C.png": {
		"type": "image/png",
		"etag": "\"1f959f-xPc/gWbKjwhXKmTDaNUx5DXBGLM\"",
		"mtime": "2026-07-12T20:40:20.609Z",
		"size": 2069919,
		"path": "../public/assets/15C.png"
	},
	"/assets/16A.png": {
		"type": "image/png",
		"etag": "\"1efa9f-qGR4E1ASMynR1Qrn0ZDSaQFh1/g\"",
		"mtime": "2026-07-12T20:41:00.315Z",
		"size": 2030239,
		"path": "../public/assets/16A.png"
	},
	"/assets/16B.png": {
		"type": "image/png",
		"etag": "\"6f110-bUIiBTgqVzyoTFdFrshm5SyvU5k\"",
		"mtime": "2026-03-05T17:25:45.893Z",
		"size": 454928,
		"path": "../public/assets/16B.png"
	},
	"/assets/05C.png": {
		"type": "image/png",
		"etag": "\"6b0b76-HnAEmG0O+Imjfm8v2supck7Vxsk\"",
		"mtime": "2026-03-05T11:11:08.156Z",
		"size": 7015286,
		"path": "../public/assets/05C.png"
	},
	"/assets/06D.png": {
		"type": "image/png",
		"etag": "\"6df976-5eSbR8N8EwD0HC7J6hxwcRv/m/0\"",
		"mtime": "2026-03-05T11:32:14.190Z",
		"size": 7207286,
		"path": "../public/assets/06D.png"
	},
	"/assets/06A.png": {
		"type": "image/png",
		"etag": "\"6fdf47-h+Z3BNdh/P+0LvOLoXcZEYBD0M4\"",
		"mtime": "2026-03-05T11:29:24.751Z",
		"size": 7331655,
		"path": "../public/assets/06A.png"
	},
	"/assets/06C.png": {
		"type": "image/png",
		"etag": "\"6f25b3-UBmKP46znNmxgdwvWN9o2mYrv48\"",
		"mtime": "2026-03-05T11:31:23.350Z",
		"size": 7284147,
		"path": "../public/assets/06C.png"
	},
	"/assets/03A.png": {
		"type": "image/png",
		"etag": "\"774971-Qw7WGXN3OXID6O9ASFtNPW9SzGY\"",
		"mtime": "2026-03-05T10:54:46.062Z",
		"size": 7817585,
		"path": "../public/assets/03A.png"
	},
	"/assets/04B.png": {
		"type": "image/png",
		"etag": "\"704dd7-mIo2tenvu+XIt9QjJxourrYMO6A\"",
		"mtime": "2026-03-05T11:04:23.397Z",
		"size": 7359959,
		"path": "../public/assets/04B.png"
	},
	"/assets/04C.png": {
		"type": "image/png",
		"etag": "\"709df8-rGETKIm4kcDhbefHsCm0vnv9Cz4\"",
		"mtime": "2026-03-05T11:06:40.320Z",
		"size": 7380472,
		"path": "../public/assets/04C.png"
	},
	"/assets/about-oeoATU8e.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"241d-gr7ybyn8/IvgTauRw+sWzrvD9Cg\"",
		"mtime": "2026-07-13T14:38:35.189Z",
		"size": 9245,
		"path": "../public/assets/about-oeoATU8e.js"
	},
	"/assets/05B.png": {
		"type": "image/png",
		"etag": "\"705196-1E14HdXzA/ULyDXSPkjViyJyxUg\"",
		"mtime": "2026-03-05T11:10:07.376Z",
		"size": 7360918,
		"path": "../public/assets/05B.png"
	},
	"/assets/04A.png": {
		"type": "image/png",
		"etag": "\"7b6802-ti6q1FvG0uQM9FFomZPXFBxzRFI\"",
		"mtime": "2026-03-05T11:00:41.580Z",
		"size": 8087554,
		"path": "../public/assets/04A.png"
	},
	"/assets/05D.png": {
		"type": "image/png",
		"etag": "\"7d88e0-D07Y0YknDYdVBF/ygN4iAKla65Q\"",
		"mtime": "2026-03-05T11:29:01.347Z",
		"size": 8227040,
		"path": "../public/assets/05D.png"
	},
	"/assets/arrow-left-C8xLSuco.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-bL/VebSohLPvMIDpIYivB06m8ZE\"",
		"mtime": "2026-07-13T14:38:35.189Z",
		"size": 154,
		"path": "../public/assets/arrow-left-C8xLSuco.js"
	},
	"/assets/APEDA Logo.png": {
		"type": "image/png",
		"etag": "\"9d6a-fIerH2q7v2emBH51+7Q6a3Hydp0\"",
		"mtime": "2026-03-01T01:52:28.079Z",
		"size": 40298,
		"path": "../public/assets/APEDA Logo.png"
	},
	"/assets/01.png": {
		"type": "image/png",
		"etag": "\"84e87b-Lmgvom7vhs/JkR9/3keWTyPMxqM\"",
		"mtime": "2026-03-05T10:53:40.396Z",
		"size": 8710267,
		"path": "../public/assets/01.png"
	},
	"/assets/05A.png": {
		"type": "image/png",
		"etag": "\"83456d-3q0asVfpKvGwlon2QBykKETsgM4\"",
		"mtime": "2026-07-12T20:22:51.408Z",
		"size": 8602989,
		"path": "../public/assets/05A.png"
	},
	"/assets/13A.png": {
		"type": "image/png",
		"etag": "\"6d1ddb-jF6YP+hI5H82AcD6L0/NXGMZokc\"",
		"mtime": "2026-07-12T20:33:37.840Z",
		"size": 7151067,
		"path": "../public/assets/13A.png"
	},
	"/assets/12B.png": {
		"type": "image/png",
		"etag": "\"70078f-RDiAg1zrfZxrSlaOkWIS2XtTnMo\"",
		"mtime": "2026-03-05T11:39:13.987Z",
		"size": 7341967,
		"path": "../public/assets/12B.png"
	},
	"/assets/12A.png": {
		"type": "image/png",
		"etag": "\"768851-Aa1zD/606hchXoNQ6QHNv+nLR5w\"",
		"mtime": "2026-07-12T20:30:54.437Z",
		"size": 7768145,
		"path": "../public/assets/12A.png"
	},
	"/assets/brand-BjmfVDQI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"78a-laZANslfj7gPbneoJBodCkl22UY\"",
		"mtime": "2026-07-13T14:38:35.190Z",
		"size": 1930,
		"path": "../public/assets/brand-BjmfVDQI.js"
	},
	"/assets/04D.png": {
		"type": "image/png",
		"etag": "\"921584-czNuLDS6UgIy0VDSK1PWpSS3T9U\"",
		"mtime": "2026-07-12T20:21:13.765Z",
		"size": 9573764,
		"path": "../public/assets/04D.png"
	},
	"/assets/check-BtkRzlyb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"71-udVA6dSdXlj08qPPfTrVQIijm0k\"",
		"mtime": "2026-07-13T14:38:35.191Z",
		"size": 113,
		"path": "../public/assets/check-BtkRzlyb.js"
	},
	"/assets/14A.png": {
		"type": "image/png",
		"etag": "\"6db73c-Z8+6MpjX11eaqWxvTOMi4ZqJ7qw\"",
		"mtime": "2026-03-05T11:44:08.135Z",
		"size": 7190332,
		"path": "../public/assets/14A.png"
	},
	"/assets/Black Cumin Seeds.png": {
		"type": "image/png",
		"etag": "\"1b2196-l/veid2Vy7l2WdgIE9BL7qNcKss\"",
		"mtime": "2026-07-12T19:21:35.136Z",
		"size": 1778070,
		"path": "../public/assets/Black Cumin Seeds.png"
	},
	"/assets/contact-DbtuRM-I.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e26-wQabimkGZm9J68WIRXKQKKFNzT8\"",
		"mtime": "2026-07-13T14:38:35.191Z",
		"size": 3622,
		"path": "../public/assets/contact-DbtuRM-I.js"
	},
	"/assets/15A.png": {
		"type": "image/png",
		"etag": "\"7c55e8-kBR/+Fwe8qTLY9BpZJVQwGPH1cM\"",
		"mtime": "2026-07-12T20:36:04.039Z",
		"size": 8148456,
		"path": "../public/assets/15A.png"
	},
	"/assets/18A.png": {
		"type": "image/png",
		"etag": "\"6db1b0-oft3Vwvr3N3/YZu2UwhRNbDXlqs\"",
		"mtime": "2026-03-05T11:55:59.067Z",
		"size": 7188912,
		"path": "../public/assets/18A.png"
	},
	"/assets/Almonds.png": {
		"type": "image/png",
		"etag": "\"628dc8-OzV7jKr2PbJl0Z4N7nzPRdWXJYk\"",
		"mtime": "2026-07-12T19:18:50.346Z",
		"size": 6458824,
		"path": "../public/assets/Almonds.png"
	},
	"/assets/Bay Leaves.png": {
		"type": "image/png",
		"etag": "\"5b761b-Tic2yHGr05w74u/VXDIvzKrdwio\"",
		"mtime": "2026-03-19T08:49:58.763Z",
		"size": 5994011,
		"path": "../public/assets/Bay Leaves.png"
	},
	"/assets/Black Pepper Powder.png": {
		"type": "image/png",
		"etag": "\"5d3ddb-Ib+4i6cSlBovF5U9aWyCTFdBtyI\"",
		"mtime": "2026-03-19T09:16:28.326Z",
		"size": 6110683,
		"path": "../public/assets/Black Pepper Powder.png"
	},
	"/assets/Cashews.png": {
		"type": "image/png",
		"etag": "\"55347d-NXGX9Z5CVhJZLopQ6LpKSdgVsic\"",
		"mtime": "2026-07-12T19:14:00.396Z",
		"size": 5583997,
		"path": "../public/assets/Cashews.png"
	},
	"/assets/Black Salt.png": {
		"type": "image/png",
		"etag": "\"5da19d-psqkbUhqrKHXoKBUQ+omza5J+Gw\"",
		"mtime": "2026-03-19T09:50:11.565Z",
		"size": 6136221,
		"path": "../public/assets/Black Salt.png"
	},
	"/assets/Asafoetida.png": {
		"type": "image/png",
		"etag": "\"637007-PW68hiqOdXm63Ni3bVutuZE8eXI\"",
		"mtime": "2026-03-19T09:06:22.837Z",
		"size": 6516743,
		"path": "../public/assets/Asafoetida.png"
	},
	"/assets/20A.png": {
		"type": "image/png",
		"etag": "\"82f4b8-dt3sTiZ5eVWhePfCD5TSoM4PPOE\"",
		"mtime": "2026-03-05T12:05:09.112Z",
		"size": 8582328,
		"path": "../public/assets/20A.png"
	},
	"/assets/Black Cardamom.png": {
		"type": "image/png",
		"etag": "\"624941-sjKTniMHqT36iOkldikJeU58GJc\"",
		"mtime": "2026-03-19T08:49:15.580Z",
		"size": 6441281,
		"path": "../public/assets/Black Cardamom.png"
	},
	"/assets/Cheese.png": {
		"type": "image/png",
		"etag": "\"56c110-SBPVKDtE9q1Zpyi48/pXvveRCoE\"",
		"mtime": "2026-07-12T19:24:32.617Z",
		"size": 5685520,
		"path": "../public/assets/Cheese.png"
	},
	"/assets/Carom Seeds.png": {
		"type": "image/png",
		"etag": "\"606494-tLc8fh49ZsE7/5vPgCvHlvI04S0\"",
		"mtime": "2026-03-19T09:05:48.778Z",
		"size": 6317204,
		"path": "../public/assets/Carom Seeds.png"
	},
	"/assets/Bamboo Shoot Powder.png": {
		"type": "image/png",
		"etag": "\"6b5c11-S2Oj6A3CSz4g11V2ui2UPd2y9QY\"",
		"mtime": "2026-03-20T10:03:50.106Z",
		"size": 7035921,
		"path": "../public/assets/Bamboo Shoot Powder.png"
	},
	"/assets/Chaat Masala.png": {
		"type": "image/png",
		"etag": "\"5e3485-UHstXwOgfEgkNHqSs43/OrTCQck\"",
		"mtime": "2026-03-19T09:38:21.786Z",
		"size": 6173829,
		"path": "../public/assets/Chaat Masala.png"
	},
	"/assets/export-inquiries-Bgrn1qIV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2115-JXyYUMc6NeGNbhJwT52jbZX0qxU\"",
		"mtime": "2026-07-13T14:38:35.191Z",
		"size": 8469,
		"path": "../public/assets/export-inquiries-Bgrn1qIV.js"
	},
	"/assets/Cinnamon.png": {
		"type": "image/png",
		"etag": "\"5c5d53-D7FHjLJJbYVfEGkxrX8/hSDH/qw\"",
		"mtime": "2026-03-19T08:48:22.022Z",
		"size": 6053203,
		"path": "../public/assets/Cinnamon.png"
	},
	"/assets/Chia Seeds.png": {
		"type": "image/png",
		"etag": "\"65022e-EiABZCME5BUaT7cAx7JUslz9zoY\"",
		"mtime": "2026-07-12T19:23:07.060Z",
		"size": 6619694,
		"path": "../public/assets/Chia Seeds.png"
	},
	"/assets/FDA-Emblem-logo.png": {
		"type": "image/png",
		"etag": "\"20bfb-I9MuUSKuDEAie+54PZOZMgMsB40\"",
		"mtime": "2026-03-05T10:27:08.452Z",
		"size": 134139,
		"path": "../public/assets/FDA-Emblem-logo.png"
	},
	"/assets/Coriander Powder.png": {
		"type": "image/png",
		"etag": "\"5b39ae-gb0uqZR3Sohk1dr1ngcV705C5gs\"",
		"mtime": "2026-03-19T09:15:57.710Z",
		"size": 5978542,
		"path": "../public/assets/Coriander Powder.png"
	},
	"/assets/Cumin Powder.png": {
		"type": "image/png",
		"etag": "\"5d84d2-TmCb0oTcc2I+1tMfo93+daSgVcU\"",
		"mtime": "2026-03-19T09:19:20.950Z",
		"size": 6128850,
		"path": "../public/assets/Cumin Powder.png"
	},
	"/assets/FSSAI Logo.png": {
		"type": "image/png",
		"etag": "\"374d0-OMJipIUZMCFTAW0txByFMLxVTMA\"",
		"mtime": "2026-03-01T01:51:47.379Z",
		"size": 226512,
		"path": "../public/assets/FSSAI Logo.png"
	},
	"/assets/Curd.png": {
		"type": "image/png",
		"etag": "\"4e916f-fluZNBk6niuo7apUxVweT9evC3Q\"",
		"mtime": "2026-07-12T19:22:21.123Z",
		"size": 5149039,
		"path": "../public/assets/Curd.png"
	},
	"/assets/Coriander Seeds.png": {
		"type": "image/png",
		"etag": "\"64e272-iSIT71oL24+ASCZT5TDDaMNRh+Q\"",
		"mtime": "2026-03-19T08:54:14.757Z",
		"size": 6611570,
		"path": "../public/assets/Coriander Seeds.png"
	},
	"/assets/index-PTugdkvS.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"654d-iQIovGZuRnxkHQvmCFeuKSU/Lxw\"",
		"mtime": "2026-07-13T14:38:35.200Z",
		"size": 25933,
		"path": "../public/assets/index-PTugdkvS.css"
	},
	"/assets/Cloves.png": {
		"type": "image/png",
		"etag": "\"6bbc12-C7L7fMTX6MwlBuLc2Adg+BIj8so\"",
		"mtime": "2026-03-19T08:46:14.957Z",
		"size": 7060498,
		"path": "../public/assets/Cloves.png"
	},
	"/assets/ISO Logo.png": {
		"type": "image/png",
		"etag": "\"1f1c6-Mv+8xctuKiXBTX7fNUwIs1UxMmA\"",
		"mtime": "2026-03-01T01:47:29.706Z",
		"size": 127430,
		"path": "../public/assets/ISO Logo.png"
	},
	"/assets/index-CxL6E6xc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"840e6-mT86YQiIz8xm4rbx2RpMBdGnZYo\"",
		"mtime": "2026-07-13T14:38:35.188Z",
		"size": 540902,
		"path": "../public/assets/index-CxL6E6xc.js"
	},
	"/assets/jsx-runtime-D8nDyRPw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2210-qrBAUPDOR8ROKpBVNEla8AGnGKU\"",
		"mtime": "2026-07-13T14:38:35.191Z",
		"size": 8720,
		"path": "../public/assets/jsx-runtime-D8nDyRPw.js"
	},
	"/assets/Cumin Seeds.png": {
		"type": "image/png",
		"etag": "\"65758f-uqEr1zjDYfrCic9b7WrBw2VsKnQ\"",
		"mtime": "2026-03-19T08:51:11.826Z",
		"size": 6649231,
		"path": "../public/assets/Cumin Seeds.png"
	},
	"/assets/Curry Leaves.png": {
		"type": "image/png",
		"etag": "\"5d5104-H6Q4bKP8wQfY+u65AYAcyJnn6Bo\"",
		"mtime": "2026-03-19T09:50:43.559Z",
		"size": 6115588,
		"path": "../public/assets/Curry Leaves.png"
	},
	"/assets/Curry Powder.png": {
		"type": "image/png",
		"etag": "\"5f41c5-XLCE5cIikGawM9B2WBWqqgpH2Sg\"",
		"mtime": "2026-03-19T09:37:53.579Z",
		"size": 6242757,
		"path": "../public/assets/Curry Powder.png"
	},
	"/assets/link-BIDXvZM8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5b4c-iVm6i5LCkUCKZAaKgCJPhS6imrA\"",
		"mtime": "2026-07-13T14:38:35.191Z",
		"size": 23372,
		"path": "../public/assets/link-BIDXvZM8.js"
	},
	"/assets/Dried Fenugreek Leaves.png": {
		"type": "image/png",
		"etag": "\"58397f-4wBfE34N365tEACFDLiKkdTHluI\"",
		"mtime": "2026-03-19T09:51:11.681Z",
		"size": 5781887,
		"path": "../public/assets/Dried Fenugreek Leaves.png"
	},
	"/assets/Garlic Powder.png": {
		"type": "image/png",
		"etag": "\"1a3068-KCW0QkQ3VO5sZeuvwYFYZciGEyE\"",
		"mtime": "2026-03-19T09:25:12.428Z",
		"size": 1716328,
		"path": "../public/assets/Garlic Powder.png"
	},
	"/assets/message-circle-VWCJ1vX8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e6-SJJ3UqPNzN5XSK8ZahLDiF9hQAs\"",
		"mtime": "2026-07-13T14:38:35.194Z",
		"size": 230,
		"path": "../public/assets/message-circle-VWCJ1vX8.js"
	},
	"/assets/Dried Ginger.png": {
		"type": "image/png",
		"etag": "\"5fa48b-UuqMP4DSg3Ui2Sbc2kGRoB45JYc\"",
		"mtime": "2026-03-19T09:11:04.840Z",
		"size": 6268043,
		"path": "../public/assets/Dried Ginger.png"
	},
	"/assets/Multicolor Square Logo.png": {
		"type": "image/png",
		"etag": "\"4e985-zxIdzt5y/bf5XDgOrZDNFSJ8N3s\"",
		"mtime": "2026-07-12T20:06:29.019Z",
		"size": 321925,
		"path": "../public/assets/Multicolor Square Logo.png"
	},
	"/assets/Multicolor Round Logo.png": {
		"type": "image/png",
		"etag": "\"48511-iw6NH2i4R4+EdRkuWXBDH8pd/WE\"",
		"mtime": "2026-07-12T20:06:29.015Z",
		"size": 296209,
		"path": "../public/assets/Multicolor Round Logo.png"
	},
	"/assets/Multicolor Icon.png": {
		"type": "image/png",
		"etag": "\"a25c5-ORglmKfAd50+IhvJuaSqCM56Zx8\"",
		"mtime": "2026-07-12T20:06:29.018Z",
		"size": 665029,
		"path": "../public/assets/Multicolor Icon.png"
	},
	"/assets/Multicolor 3x1 Logo.png": {
		"type": "image/png",
		"etag": "\"16449c-R8MEE4/9px3WCeJLKLbo9wXMuoI\"",
		"mtime": "2026-07-12T20:05:31.388Z",
		"size": 1459356,
		"path": "../public/assets/Multicolor 3x1 Logo.png"
	},
	"/assets/Dry Mango Powder.png": {
		"type": "image/png",
		"etag": "\"60fb27-qyMaXwsottBPlP0B6t8F7FnZfEE\"",
		"mtime": "2026-03-19T09:21:22.409Z",
		"size": 6355751,
		"path": "../public/assets/Dry Mango Powder.png"
	},
	"/assets/product._slug-BYLDBfQW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ed-rhzTjPJocGBu8dCh/hdNh/TRUdQ\"",
		"mtime": "2026-07-13T14:38:35.194Z",
		"size": 493,
		"path": "../public/assets/product._slug-BYLDBfQW.js"
	},
	"/assets/product._slug-C8079kz5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2234-BoaJxuH9DFqXyhVHhnAiHE7IPnY\"",
		"mtime": "2026-07-13T14:38:35.195Z",
		"size": 8756,
		"path": "../public/assets/product._slug-C8079kz5.js"
	},
	"/assets/Paneer.png": {
		"type": "image/png",
		"etag": "\"1529b6-WLVwzovsXra7V0rVOcrFXIjyPKk\"",
		"mtime": "2026-07-12T19:20:14.900Z",
		"size": 1386934,
		"path": "../public/assets/Paneer.png"
	},
	"/assets/Foxnut.png": {
		"type": "image/png",
		"etag": "\"546bfe-30CQ22BYoM08EBhNtm8Igwrhpic\"",
		"mtime": "2026-07-12T19:15:32.075Z",
		"size": 5532670,
		"path": "../public/assets/Foxnut.png"
	},
	"/assets/ProductCard-yUFb5_s0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"58a-SOENZnDmuMiseGZCtcfaV4qB8Zg\"",
		"mtime": "2026-07-13T14:38:35.188Z",
		"size": 1418,
		"path": "../public/assets/ProductCard-yUFb5_s0.js"
	},
	"/assets/products.index-v3mN7OTO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b8f-61WO1Hm07b+pEdol2LT9ZYIbj58\"",
		"mtime": "2026-07-13T14:38:35.196Z",
		"size": 7055,
		"path": "../public/assets/products.index-v3mN7OTO.js"
	},
	"/assets/Nutmeg.png": {
		"type": "image/png",
		"etag": "\"1ba0ff-9ZQ4hd4KtyZCUotyD/alfcVyliM\"",
		"mtime": "2026-03-19T09:09:52.644Z",
		"size": 1810687,
		"path": "../public/assets/Nutmeg.png"
	},
	"/assets/products._category-DbMJkaKn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a02-IOvaAPkudjqn1CEWsf2HBeCqWiA\"",
		"mtime": "2026-07-13T14:38:35.196Z",
		"size": 2562,
		"path": "../public/assets/products._category-DbMJkaKn.js"
	},
	"/assets/products._category-DQm1YZjY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ee-7n3s1NSiwOjMp4yS1rVHkhpBZiE\"",
		"mtime": "2026-07-13T14:38:35.195Z",
		"size": 494,
		"path": "../public/assets/products._category-DQm1YZjY.js"
	},
	"/assets/Pistachio.png": {
		"type": "image/png",
		"etag": "\"180cf0-XK8GMnJC212eU7jitp3GtTeK+qY\"",
		"mtime": "2026-07-12T19:27:32.266Z",
		"size": 1576176,
		"path": "../public/assets/Pistachio.png"
	},
	"/assets/Fenugrek Seeds.png": {
		"type": "image/png",
		"etag": "\"5c3b47-qGelfrDIlRb6MpkgyPQ/jRWbuqU\"",
		"mtime": "2026-03-19T09:03:27.161Z",
		"size": 6044487,
		"path": "../public/assets/Fenugrek Seeds.png"
	},
	"/assets/Fennel Seeds.png": {
		"type": "image/png",
		"etag": "\"606c91-vcj8wEoTHaNdQneobMjIWvjWD4Q\"",
		"mtime": "2026-03-19T09:04:01.572Z",
		"size": 6319249,
		"path": "../public/assets/Fennel Seeds.png"
	},
	"/assets/react-dom-CrK8yE57.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dda-TYAl7GnUPUCbV+AVNcbJobxY8L4\"",
		"mtime": "2026-07-13T14:38:35.196Z",
		"size": 3546,
		"path": "../public/assets/react-dom-CrK8yE57.js"
	},
	"/assets/Garam Masala.png": {
		"type": "image/png",
		"etag": "\"608afc-pEPVkkgqw4awSJkDLjVWLFnhzac\"",
		"mtime": "2026-03-19T09:27:08.490Z",
		"size": 6327036,
		"path": "../public/assets/Garam Masala.png"
	},
	"/assets/Ginger Powder.png": {
		"type": "image/png",
		"etag": "\"6489ce-D9HzpD6xz/+zgTfeBbV54g/1seI\"",
		"mtime": "2026-03-19T09:24:52.389Z",
		"size": 6588878,
		"path": "../public/assets/Ginger Powder.png"
	},
	"/assets/Green Cardamom.png": {
		"type": "image/png",
		"etag": "\"618aab-tB/lj1udJePnxLq+wVDkoM4LqYk\"",
		"mtime": "2026-03-19T08:44:25.538Z",
		"size": 6392491,
		"path": "../public/assets/Green Cardamom.png"
	},
	"/assets/Reveal-B5FlXgoM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"233-qlnldQ0UQpoVhvhj7RlhC32ACJw\"",
		"mtime": "2026-07-13T14:38:35.189Z",
		"size": 563,
		"path": "../public/assets/Reveal-B5FlXgoM.js"
	},
	"/assets/routes-D_0K26kl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b029-qu1CKAE78FNMYllDmy9oVzzLUu0\"",
		"mtime": "2026-07-13T14:38:35.196Z",
		"size": 45097,
		"path": "../public/assets/routes-D_0K26kl.js"
	},
	"/assets/select-B5EDkdLD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"136e7-+Fi4wCbNUgUlpCfnfFf4opig130\"",
		"mtime": "2026-07-13T14:38:35.199Z",
		"size": 79591,
		"path": "../public/assets/select-B5EDkdLD.js"
	},
	"/assets/ship-BojK_taI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"414-vGSwDWXJD3nU6kcLsryF05Y5vJo\"",
		"mtime": "2026-07-13T14:38:35.199Z",
		"size": 1044,
		"path": "../public/assets/ship-BojK_taI.js"
	},
	"/assets/Spice Board Logo.png": {
		"type": "image/png",
		"etag": "\"3834a-Atl/NZ33Je40Gp1gh1nORqy/aYg\"",
		"mtime": "2026-03-01T01:49:39.050Z",
		"size": 230218,
		"path": "../public/assets/Spice Board Logo.png"
	},
	"/assets/Kokum.png": {
		"type": "image/png",
		"etag": "\"637892-TwY1nuyZIIE2l8HRKq1r4ItH2r4\"",
		"mtime": "2026-03-19T09:51:40.316Z",
		"size": 6518930,
		"path": "../public/assets/Kokum.png"
	},
	"/assets/Mace.png": {
		"type": "image/png",
		"etag": "\"5f5531-VpBA3IXzb4T0PBanst38Yq76WWw\"",
		"mtime": "2026-03-19T09:08:07.850Z",
		"size": 6247729,
		"path": "../public/assets/Mace.png"
	},
	"/assets/styles-BkcFNEzC.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"18ef0-WLN0qhT20PwQK0lp/p7L8KhXcag\"",
		"mtime": "2026-07-13T14:38:35.201Z",
		"size": 102128,
		"path": "../public/assets/styles-BkcFNEzC.css"
	},
	"/assets/Mamra Almonds.png": {
		"type": "image/png",
		"etag": "\"62aa63-PFTfdEdugENKm1tWiqpuxz1FzvA\"",
		"mtime": "2026-07-12T19:27:24.746Z",
		"size": 6466147,
		"path": "../public/assets/Mamra Almonds.png"
	},
	"/assets/Long Pepper.png": {
		"type": "image/png",
		"etag": "\"6d59c2-icZoO9IYgS9x4T0+Pi7HM1V9QV0\"",
		"mtime": "2026-03-20T10:02:37.954Z",
		"size": 7166402,
		"path": "../public/assets/Long Pepper.png"
	},
	"/assets/Mustard Seeds.png": {
		"type": "image/png",
		"etag": "\"5c7cd8-IGANYOjhOxUNTlESWjHoUzjKeDg\"",
		"mtime": "2026-03-19T08:57:57.846Z",
		"size": 6061272,
		"path": "../public/assets/Mustard Seeds.png"
	},
	"/assets/Nigella Seeds.png": {
		"type": "image/png",
		"etag": "\"588520-FTjcZb7ZOHwhU74mSDFh86uY7xE\"",
		"mtime": "2026-03-19T09:05:02.464Z",
		"size": 5801248,
		"path": "../public/assets/Nigella Seeds.png"
	},
	"/assets/Peanuts.png": {
		"type": "image/png",
		"etag": "\"55f9fd-p4y8sCvZ71NXY7wig+9iM+led08\"",
		"mtime": "2026-07-12T19:17:46.702Z",
		"size": 5634557,
		"path": "../public/assets/Peanuts.png"
	},
	"/assets/whatsapp.png": {
		"type": "image/png",
		"etag": "\"775f-ReqVdQkjhDZdj+3Ao7INq97GtVg\"",
		"mtime": "2026-07-13T12:11:23.723Z",
		"size": 30559,
		"path": "../public/assets/whatsapp.png"
	},
	"/assets/White Icon.png": {
		"type": "image/png",
		"etag": "\"2c16c-GsTqoNktyvSizqYJ4mP4hXe+vOE\"",
		"mtime": "2026-07-12T20:06:29.018Z",
		"size": 180588,
		"path": "../public/assets/White Icon.png"
	},
	"/assets/White 3x1 Logo.png": {
		"type": "image/png",
		"etag": "\"63f9b-Dotx0S/1+zH4jafHgN/TIbuQw70\"",
		"mtime": "2026-07-12T20:05:31.390Z",
		"size": 409499,
		"path": "../public/assets/White 3x1 Logo.png"
	},
	"/assets/Star Anise.png": {
		"type": "image/png",
		"etag": "\"1cefe5-tr0YV2xALccCW6D8hB9w9kyGXYI\"",
		"mtime": "2026-03-19T09:06:59.219Z",
		"size": 1896421,
		"path": "../public/assets/Star Anise.png"
	},
	"/assets/White Round logo.png": {
		"type": "image/png",
		"etag": "\"1fc60-wBNxFMuTWNzjw3gNe1+Ay5uBfWY\"",
		"mtime": "2026-07-12T20:06:29.015Z",
		"size": 130144,
		"path": "../public/assets/White Round logo.png"
	},
	"/assets/White Square logo.png": {
		"type": "image/png",
		"etag": "\"1aaba-bZGFNBJF/sTcW4NqXjCtJ8RsJo0\"",
		"mtime": "2026-07-12T20:06:29.020Z",
		"size": 109242,
		"path": "../public/assets/White Square logo.png"
	},
	"/assets/Turmeric Powder.png": {
		"type": "image/png",
		"etag": "\"1ce03a-+4uvD0fpoNuUo/TwmTxjJ7I4CyU\"",
		"mtime": "2026-03-19T09:11:53.632Z",
		"size": 1892410,
		"path": "../public/assets/Turmeric Powder.png"
	},
	"/assets/Panch Phoron.png": {
		"type": "image/png",
		"etag": "\"645f33-mTckxI5FhlyWX5ghvlJ8H53zK2M\"",
		"mtime": "2026-03-19T09:37:20.052Z",
		"size": 6577971,
		"path": "../public/assets/Panch Phoron.png"
	},
	"/assets/Pomegranate Seed Powder.png": {
		"type": "image/png",
		"etag": "\"5e7198-+7Q2qQhq9YeZI8qomoitPdPOADw\"",
		"mtime": "2026-03-19T09:22:34.871Z",
		"size": 6189464,
		"path": "../public/assets/Pomegranate Seed Powder.png"
	},
	"/assets/Pure Ghee.png": {
		"type": "image/png",
		"etag": "\"535d4a-2wY0mUxn4pnK/SNypQR/rsx1sQc\"",
		"mtime": "2026-07-12T19:21:52.576Z",
		"size": 5463370,
		"path": "../public/assets/Pure Ghee.png"
	},
	"/assets/Red Chilli Powder.png": {
		"type": "image/png",
		"etag": "\"5e2239-sRa4D5n588ahMp2NkwqJLENa99E\"",
		"mtime": "2026-03-19T09:15:11.771Z",
		"size": 6169145,
		"path": "../public/assets/Red Chilli Powder.png"
	},
	"/assets/Saffron.png": {
		"type": "image/png",
		"etag": "\"58cc71-Vr8nx5wqMd1y9ZxtZEnm5UkD9Fw\"",
		"mtime": "2026-03-19T09:40:04.775Z",
		"size": 5819505,
		"path": "../public/assets/Saffron.png"
	},
	"/assets/Sesame Seeds.png": {
		"type": "image/png",
		"etag": "\"587aef-GMuhpZyOa0EtEX2hnrO99cwTpRk\"",
		"mtime": "2026-07-12T19:28:20.203Z",
		"size": 5798639,
		"path": "../public/assets/Sesame Seeds.png"
	},
	"/assets/Rock Salt.png": {
		"type": "image/png",
		"etag": "\"65c4e1-zVe3gYRR9rIVDS7oS4aQZAYoilA\"",
		"mtime": "2026-03-19T09:52:02.328Z",
		"size": 6669537,
		"path": "../public/assets/Rock Salt.png"
	},
	"/assets/Watermelon Seeds.png": {
		"type": "image/png",
		"etag": "\"5545e1-lgcA6dgNSF7sADSSwF4e+BzfFIg\"",
		"mtime": "2026-07-12T19:28:09.613Z",
		"size": 5588449,
		"path": "../public/assets/Watermelon Seeds.png"
	},
	"/assets/Tamarind.png": {
		"type": "image/png",
		"etag": "\"5a9b31-KT8hUo437VecmCq5rgmiSLVV9fk\"",
		"mtime": "2026-03-19T09:39:30.546Z",
		"size": 5937969,
		"path": "../public/assets/Tamarind.png"
	},
	"/assets/Walnuts.png": {
		"type": "image/png",
		"etag": "\"598875-maqLILAOuloDDpAueS41EaETPMU\"",
		"mtime": "2026-07-12T20:14:14.786Z",
		"size": 5867637,
		"path": "../public/assets/Walnuts.png"
	},
	"/assets/White Pepper.png": {
		"type": "image/png",
		"etag": "\"5ee772-z5fCPTV+SMbcJrN+JOC5G8PSMnQ\"",
		"mtime": "2026-07-12T19:14:17.720Z",
		"size": 6219634,
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
