import path from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
	base: "./",
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			$: path.resolve(__dirname, "./"),
		},
	},
	server: {
		host: true,
		port: 3000,
		open: false,
		strictPort: true,
		cors: true,
	},
	build: {
		outDir: "dist",
		target: "esnext",
		assetsInlineLimit: 4096,
		chunkSizeWarningLimit: 1000,
	},
});
