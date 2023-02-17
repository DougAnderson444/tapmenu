import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: preprocess({
		postcss:
			process.env.NODE_ENV === 'development'
				? true // use app.css when developing to preview the styles
				: {
						// use @import when building packages for distribution
						configFilePath: path.resolve(__dirname, './postcss.config.js'),
						prependData: `@import '${path.resolve('./src/app.css')}';`
				  }
	}),

	kit: {
		adapter: adapter()
	}
};

export default config;
