import { defineConfig } from "vite";
import { resolve } from "path";

import analog from "@analogjs/platform";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
	resolve: {
		alias: {
			"@server": resolve(__dirname, "src/server"),
		},
	},
	css: {
		postcss: {
			plugins: [
				tailwindcss({
					content: ["./src/**/*.{html,ts}"],
					theme: { extend: {} },
					plugins: [],
				}),
				autoprefixer(),
			],
		},
	},
	server: {
		port: Number(process.env["PORT"]) || 3000,
		host: process.env["VITE_HOST"] || "localhost",
		strictPort: true,
		headers: {
			"Cross-Origin-Embedder-Policy": "credentialless",
			"Cross-Origin-Opener-Policy": "same-origin",
			"Cross-Origin-Resource-Policy": "cross-origin",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "*",
			"Access-Control-Allow-Headers": "*",
			"X-Frame-Options": "ALLOWALL",
		},
	},
	plugins: [
		analog({
			ssr: false,
			nitro: {
				alias: {
					"@server": resolve(__dirname, "src/server"),
				},
			},
		}),
		{
			name: "corp-headers",
			configureServer(server) {
				server.middlewares.use((req, res, next) => {
					res.setHeader("Cross-Origin-Embedder-Policy", "credentialless");
					res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
					res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
					res.setHeader("Access-Control-Allow-Origin", "*");
					res.setHeader("X-Frame-Options", "ALLOWALL");
					next();
				});
			},
		},
	],
});
