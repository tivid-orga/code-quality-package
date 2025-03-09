```markdown
# Tivid Code Quality Package

## 🚀 Overview
Tivid Code Quality Package is an easy-to-use **npm package** that sets up **Biome** and **Prettier** with pre-configured settings. When installed, it automatically generates configuration files (`biome.json` and `.prettierrc.mjs`) in your project, extending the settings from the package.

## 📦 Installation

To install the package, run:

```sh
npm install tivid-code-quality --save-dev
```

Once installed, it will automatically create:
- `biome.json`
- `.prettierrc.mjs`

These files will extend the configurations from `node_modules/tivid-code-quality`.

## 🛠 Configuration

The package generates the following configuration files:

### `biome.json`
```json
{
  "$schema": "https://biomejs.dev/schemas/1.9.4/schema.json",
  "extends": ["./node_modules/tivid-code-quality/biome-config.jsonc"]
}
```

### `.prettierrc.mjs`
```js
export {default} from 'tivid-code-quality/prettier-config.mjs';
```

If these files already exist in your project, they will **not** be overwritten.

## 🔧 Usage

### Formatting Code
Run the following command to format your code using **Biome** and **Prettier**:

```sh
npm run format
```

To manually format using each tool:

```sh
npx biome format .
npx prettier --write .
```

## 🔄 Updating the Package
To get the latest configurations, update the package:

```sh
npm update tivid-code-quality
```

If needed, delete the old `biome.json` and `.prettierrc.mjs`, then reinstall the package to regenerate them.