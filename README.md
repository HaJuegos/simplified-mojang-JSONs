# 🛠️ Simplified Mojang JSONs

> [!WARNING]
> ⚠️ **WORK IN PROGRESS!** ⚠️
> This repository is constantly evolving and undergoing active updates, so some features or simplified methods may be missing or not yet implemented. Please keep this in mind when using it!

> [!WARNING]
> 🌐 **COMMENTS IN SPANISH!** 🌐
> All code comments in this repository are written in **Spanish** and I do not plan to translate them. Identifiers, documentation and public API names are in English.

A lightweight tool to mass-modify and update vanilla JSON files with automated/manual TypeScript export. Say goodbye to tedious bulk updates when vanilla changes break your custom setup—and hello to a cleaner, smarter way to script JSON addons.

## Install:

Just run this in your project root:

```bash
npm install simplified-mojang-jsons@latest
```

or via pnpm:

```bash
pnpm add simplified-mojang-jsons@latest
```

---

## Build Setup:

To start writing your JSON templates in TypeScript, you need to copy the base generator script into your project.

Add these scripts to your `package.json`:

```json
"scripts": {
    "setup:export": "node -e \"const fs = require('fs'); const path = require('path'); const src = require.resolve('simplified-mojang-jsons/exporttojson'); const dest = path.join('scripts', 'generatejsons.ts'); fs.mkdirSync(path.dirname(dest), { recursive: true }); fs.copyFileSync(src, dest); console.log('✅ Export script copied to scripts/generatejsons.ts!');\"",
    "export:json": "tsx scripts/generatejsons.ts"
}
```

Then, run the setup command once in your terminal:

```bash
npm run setup:export
```

or via pnpm:

```bash
pnpm setup:export
```

This will automatically create a `scripts/generatejsons.ts` file in your project structure.

---

### How to Use

1. Place your TypeScript template files inside your designated **input folder** (by default, the script looks in a `test/` folder or you can adjust it inside your copied `generatejsons.ts`).
2. Run the export command to compile your TS code and instantly output clean, formatted vanilla JSON files:

```bash
npm run export:json
```

or via pnpm:

```bash
pnpm export:json
```

---

## Available Modules & Components

The API is split up into several handy modules, components, and pre-made templates to fit whatever your development workflow needs. Here is what's currently available out of the box:

> [!NOTE]
> **⚠️ Vanilla Templates Notice:** Some pre-made vanilla templates might not be 100% valid or fully functional out of the box in the game due to Minecraft updates or internal structure shifts. Feel free to modify them once they are exported into their final format or tweak them directly in your code!

> [!NOTE]
> The wrapped modules might not have _every_ single edge case fully mapped out just yet. I'll be adding the rest and keeping things updated to make your dev experience as smooth as possible.

### 1. Custom Builders (`create...`)

Functions designed to programmatically build, structure, and customize your behavior pack JSONs using TypeScript type support and OOP:

```ts
import {
    // BP Manifest
    createBPManifest,

    // BP Stuff's
    createBPAnimController,
    createBPBiome,
    createBPBlock,
    createBPDialogue,
    createBPDimension,
    createBPEntity,
    createBPFeature,
    createBPFeatureRule,
    createBPItemCatalog,
    createBPItem,
    createBPLootTable,
    createBPRecipe,
    createBPSpawnRule,
    createBPTrading,
} from "simplified-mojang-jsons";
```

### 2. Root Components (`...Components`)

Modular configurations and property wrappers to fine-tune specific behavior features:

- **`BPBiomeComponents`**: Manage biome-specific components like fog, lighting, and sound settings.
- **`BPBlockComponents`**: Handle block traits, collision boxes, creative categories, and component definitions.
- **`BPDimensionComponents`**: Configure custom dimension behaviors and environment rules.
- **`BPEntityComponents`**: Set up entity components such as movement, component groups, and event triggers.
- **`BPItemComponents`**: Define custom item behaviors, hand actions, and attributes.
- **`BPSpawnRuleComponents`**: Adjust spawning conditions, mob caps, and herd rules.

```ts
import {
    BPBiomeComponents,
    BPBlockComponents,
    BPDimensionComponents,
    BPEntityComponents,
    BPItemComponents,
    BPSpawnRuleComponents,
} from "simplified-mojang-jsons";
```

### 3. Pre-made Templates (`...Templates`)

Ready-to-use base vanilla templates that you can quickly override, modify, and export:

- **`BPBiomeTemplates`**: Base vanilla biome configurations.
- **`BPEntityTemplates`**: Base vanilla entity files ready for modification.
- **`BPFeatureTemplates` & `BPFeatureRuleTemplates`**: World generation and feature rule blueprints.
- **`BPLootTableTemplates`**: Standard loot tables for blocks, entities, and fishing.
- **`BPRecipeTemplates`**: Crafting and smelting recipe templates.
- **`BPSpawnRuleTemplates`**: Default mob spawn rules.
- **`BPTradingTemplates`**: Villager and wandering trader trade offers.

```ts
import {
    BPBiomeTemplates,
    BPEntityTemplates,
    BPFeatureTemplates,
    BPFeatureRuleTemplates,
    BPLootTableTemplates,
    BPRecipeTemplates,
    BPSpawnRuleTemplates,
    BPTradingTemplates,
} from "simplified-mojang-jsons";
```

## Contributing

Got an idea, found a bug, or want to add support for missing vanilla JSON schemas or components? Contributions are more than welcome!

- **Getting Started:** Please check out our [Contributing Guide](.github/CONTRIBUTING.md) before opening a pull request.
- **Community Guidelines:** Be kind and respectful. See our [Code of Conduct](.github/CODE_OF_CONDUCT.md).
- **Security:** To report a security vulnerability, please follow the steps in our [Security Policy](.github/SECURITY.md).
- **Releases:** Check what's new in each update in the [Changelog](.github/CHANGELOG.md).

---

## Author & License

Developed by **[HaJuegos](https://github.com/HaJuegos)**.

This project is licensed under the **[MIT License](LICENSE.md)** — free to use, modify, and distribute in your own Minecraft Bedrock projects.
