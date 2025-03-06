// biome-ignore lint/correctness/noNodejsModules: we need node imports here
import {existsSync, writeFileSync} from 'node:fs';
// biome-ignore lint/correctness/noNodejsModules: we need node imports here
import {resolve} from 'node:path';

const files = {
	'biome.jsonc': '{ "extends": "./node_modules/tivid-code-quality/biome-config.json" }',
	'.prettierrc.json': '{ "extends": "./node_modules/tivid-code-quality/prettier-config.json" }'
};

for (const [fileName, content] of Object.entries(files)) {
	const filePath = resolve(process.cwd(), fileName);

	if (existsSync(filePath)) {
		writeFileSync(filePath, content);
	}
}
