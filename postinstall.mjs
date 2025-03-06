// biome-ignore lint/correctness/noNodejsModules: we need the node module here
import {existsSync, writeFileSync} from 'node:fs';
// biome-ignore lint/correctness/noNodejsModules: we need the node module here
import {resolve} from 'node:path';

const rootPath = resolve(__dirname, '..');

const files = {
	'biome.json': '{ "extends": "./node_modules/tivid-code-quality/biome-config.json" }',
	'.prettierrc.json': '{ "extends": "./node_modules/tivid-code-quality/prettier-config.json" }'
};

for (const [fileName, content] of Object.entries(files)) {
	const filePath = resolve(rootPath, fileName);

	if (existsSync(filePath)) {
		writeFileSync(filePath, content); // writes the config files into the root of the project
	}
}
