// Archivos root de plantillas pre-creadas.
export { BPBiomeComponents } from "./components/behaviors/biomes";
export { BPEntityComponents } from "./components/behaviors/entities";
export { BPItemComponents } from "./components/behaviors/items";

export { BPEntityTemplates } from "./templates/behaviors/entities";
export { BPLootTableTemplates } from "./templates/behaviors/lootTables";
export { BPRecipesTemplates } from "./templates/behaviors/recipes";


// Exportacion de plantillas para la creacion custom.
export { createBPManifest } from "./builders/behaviors/ManifestTemplateBuilder";
export { createBPAnimController } from "./builders/behaviors/animControllers/AnimControllerTemplateBuilder";
export { createBPBiomeTemplate } from "./builders/behaviors/biomes/BiomeTemplateBuilder";
export { createBPDialogue } from "./builders/behaviors/dialogues/DialogueTemplateBuilder";
export { createBPEntityTemplate } from "./builders/behaviors/entities/EntityTemplateBuilder";
export { createBPItemTemplate } from "./builders/behaviors/items/ItemsTemplateBuilder";
export { createBPLootTable } from "./builders/behaviors/lootTables/LootTablesTemplateBuilder";
export { createBPRecipe } from "./builders/behaviors/recipes/RecipeTemplateBuilder";


// Tipados necesarios para las plantillas de creacion custom.
export type { BPFinalDefinitionManifest } from "./types/behaviors/ManifestTemplate";
export type { BPAnimControllerFinalDefinition } from "./types/behaviors/animContollers/AnimControllerTemplate";
export type { BPBiomeOverride, BPBiomeDefinition, BPBiomeTemplateInstance } from "./types/behaviors/biomes/BiomeTemplate";
export type { BPDialogueDefinition } from "./types/behaviors/dialogues/DialogueTemplate";
export type { BPEntitiesTemplateDef, BPEntitiesTemplateOverride } from "./types/behaviors/entities/EntitiesTemplate";
export type { BPItemDefinition, BPItemDefinitionOver, BPItemTemplateInstance } from "./types/behaviors/items/ItemsTemplate";
export type { BPLootTableTemplateDef, BPLootTableFinalOverDefinition, BPLootTableTemplateOver } from "./types/behaviors/lootTables/LootTablesTemplate";
export type { BPRecipeDefinition, BPRecipeOverrideDefinition } from "./types/behaviors/recipes/RecipeTemplate";