const path = require('node:path');
const fs = require('fs');

// let asset = {
//     url: './files/permanent-marker-latin-400-normal.woff2',
//     originUrl: './files/permanent-marker-latin-400-normal.woff2',
//     pathname: './files/permanent-marker-latin-400-normal.woff2',
//     absolutePath: 'C:\\Users\\douga\\Documents2\\code\\pinboard\\node_modules\\@fontsource\\permanent-marker\\files\\permanent-marker-latin-400-normal.woff2',
//     relativePath: '..\\..\\..\\node_modules\\@fontsource\\permanent-marker\\files\\permanent-marker-latin-400-normal.woff2',
//     search: '',
//     hash: ''
//   }

const url = (asset) => {
	let dest = './package/components/files';
	let destDev = './static/files';
	const abspath = path.resolve(asset.absolutePath);
	const basename = path.basename(abspath);
	const destpath = path.resolve(dest, basename);

	if (!fs.existsSync(destpath)) {
		// copy abspath to destpath
		const file = fs.readFileSync(abspath);

		// make files folder in dest if it doesn't exist
		fs.mkdirSync(path.resolve(dest), { recursive: true });

		// write file to destination destpath
		fs.writeFileSync(destpath, file);
		fs.writeFileSync(path.resolve(destDev, basename), file);

		// fs.copyFileSync(abspath, destpath);
	}
	return `./files/${basename}`;
};

module.exports = {
	plugins: {
		'postcss-import': {},
		'postcss-url': {
			url,
			assetsPath: 'files',
			useHash: false
		},
		'tailwindcss/nesting': {},
		tailwindcss: {},
		autoprefixer: {}
	}
};
