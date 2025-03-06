// biome-ignore lint/correctness/noNodejsModules: we need the node module here
import {existsSync, writeFileSync} from 'node:fs';
// biome-ignore lint/correctness/noNodejsModules: we need the node module here
import {resolve} from 'node:path';
// biome-ignore lint/correctness/noNodejsModules: we need the node module here
import {fileURLToPath} from 'node:url';

const Dirname = fileURLToPath(new URL('.', import.meta.url));
const rootPath = resolve(Dirname, '../..');
const files = {
	'biome.json': '{ "extends": "./node_modules/tivid-code-quality/biome-config.jsonc" }',
	'.prettierrc.json': '{ "extends": "./node_modules/tivid-code-quality/prettier-config.jsonc" }'
};

for (const [fileName, content] of Object.entries(files)) {
	const filePath = resolve(rootPath, fileName);

	if (!existsSync(filePath)) {
		writeFileSync(filePath, content); // writes the config files into the root of the project
	}
}
