import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig(() => {
	const env = loadEnv(null, process.cwd());

	return {
		plugins: [
		],
		css: {
			postcss: {
				plugins: [
					tailwindcss(),
					autoprefixer(),
				],
			},
		},
		publicDir: 'dist',
		build: {
			emptyOutDir: false,
			outDir: 'public',
			assetsDir: env?.VITE_BUILD_DIR,
			chunkSizeWarningLimit: 1600,
			manifest: true,
			rollupOptions: {
				input: [
					`./${env?.VITE_RESOURCES_DIR}/${env?.VITE_ENTRY_FILE}`,
					`./${env?.VITE_RESOURCES_DIR}/editor.js`,
				],
				output: {
					entryFileNames: `dist/js/[name].js`,
					assetFileNames: `dist/css/[name].css`
				},
			},
		},

		resolve: {
			alias: {
				"@": path.resolve(__dirname, `./${env.VITE_RESOURCES_DIR}`),
			},
		},
	};
});
