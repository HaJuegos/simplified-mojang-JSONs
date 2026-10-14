// Archivos root de plantillas pre-creadas.
export { BPEntityComponents } from "./components/behaviors/entities";
export { BPEntityTemplates } from "./templates/behaviors/entities";
export { BPLootTableTemplates } from "./templates/behaviors/lootTables/index";
export { BPRecipesTemplates } from "./templates/behaviors/recipes/index";


// Exportacion de plantillas para la creacion custom.
export { createBPManifest } from "./builders/behaviors/ManifestTemplateBuilder";
export { createBPAnimController } from "./builders/behaviors/animControllers/AnimControllerTemplateBuilder";
export { createBPDialogue } from "./builders/behaviors/dialogues/DialogueTemplateBuilder";
export { createBPEntityTemplate } from "./builders/behaviors/entities/EntityTemplateBuilder";
export { createBPLootTable } from "./builders/behaviors/lootTables/LootTablesTemplateBuilder";
export { createBPRecipe } from "./builders/behaviors/recipes/RecipeTemplateBuilder";


// Tipados necesarios para las plantillas de creacion custom.
export type { BPFinalDefinitionManifest } from "./types/behaviors/ManifestTemplate";
export type { BPAnimControllerFinalDefinition } from "./types/behaviors/animContollers/AnimControllerTemplate";
export type { BPDialogueDefinition } from "./types/behaviors/dialogues/DialogueTemplate";
export type { BPEntitiesTemplateDef, BPEntitiesTemplateOverride } from "./types/behaviors/entities/EntitiesTemplate";
export type { BPLootTableTemplateDef, BPLootTableFinalOverDefinition, BPLootTableTemplateOver } from "./types/behaviors/lootTables/LootTablesTemplate";
export type { BPRecipeDefinition, BPRecipeOverrideDefinition } from "./types/behaviors/recipes/RecipeTemplate";