# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.10] - 2026-10-28

### Added

- General adjustments to some files.
- The base template for creating an Animation Controller in an RP is created.

## [0.0.9] - 2026-10-27

### Added

- Post-editing a base template for a new LootTable now includes the "remove" parameter, which allows you to remove a specific property without rewriting the entire template.
- Modules have been updated to MC version 26.60.

## [0.0.8] - 2026-10-27

### Added

- Implementation of additional missing vanilla feature templates.
- Implementation of additional missing vanilla feature rules templates.

## [0.0.7] - 2026-10-26

### Added

- The FormatVersion and SpawnCategory enums are now exposed when a new entity is created.
- The “pushable by entity” property has been removed from the TNT entity. It is not part of the vanilla file.

## [0.0.6] - 2026-10-26

### Added

- When adding a new component group to an entity during post-editing. This action clears all fixed data from the base template for no apparent reason.
- The “remove” argument has been added to post-editing to allow for faster removal of specific data from the base template in entities.

## [0.0.5] - 2026-10-26

### Added

- Changes can no longer be added to the base template when it is completely cleared in a LootTable template.
- Missing data in base template entities is no longer validated when dealing with vanilla files.

## [0.0.4] - 2026-10-25

### Added

- A minor fix

## [0.0.3] - 2026-10-25

### Added

- The EntityFilters class is now exposed to the API for use.
- The MoLang class is now exposed to the API for use.

## [0.0.2] - 2026-10-25

### Added

- In the BP manifest, the “language” parameter is no longer required.
- More vanilla dependencies for the modules were needed.

## [0.0.1] - 2026-10-25

### Added

- Initial public release of `simplified-mojang-jsons`.
- Support for Behavior Pack (BP) builders: Entities, Blocks, Items, Biomes, Dimensions, Recipes, Loot Tables, Feature Rules, Features, Spawn Rules, Dialogues, Trading, and Manifests.
- Modular exports for root components (`BPBiomeComponents`, `BPBlockComponents`, etc.).
- Pre-made vanilla template definitions.
- Automated TypeScript to JSON export script utility (`exporttojson`).
