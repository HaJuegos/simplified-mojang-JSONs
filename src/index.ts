// Variable root para obtener los componentes.
export { BPBiomeComponents } from "./components/behaviors/biomes";
export { BPBlockComponents } from "./components/behaviors/blocks";
export { BPDimensionComponents } from "./components/behaviors/dimensions";
export { BPEntityComponents } from "./components/behaviors/entities";
export { BPItemComponents } from "./components/behaviors/items";
export { BPSpawnRuleComponents } from "./components/behaviors/spawnRules";


// Variable root de plantillas pre-creadas para editar.
export { BPBiomeTemplates } from "./templates/behaviors/biomes";
export { BPEntityTemplates } from "./templates/behaviors/entities";
export { BPFeatureTemplates } from "./templates/behaviors/features";
export { BPFeatureRuleTemplates } from "./templates/behaviors/featureRules";
export { BPLootTableTemplates } from "./templates/behaviors/lootTables";
export { BPRecipeTemplates } from "./templates/behaviors/recipes";
export { BPSpawnRuleTemplates } from "./templates/behaviors/spawnRules";
export { BPTradingTemplates } from "./templates/behaviors/trading";


// Exportacion de plantillas para la creacion custom.
export { createBPManifest } from "./builders/behaviors/ManifestTemplateBuilder";

export { createBPAnimController } from "./builders/behaviors/animControllers/AnimControllerTemplateBuilder";
export { createBPBiome } from "./builders/behaviors/biomes/BiomeTemplateBuilder";
export { createBPBlock } from "./builders/behaviors/blocks/BlockTemplateBuilder";
export { createBPDialogue } from "./builders/behaviors/dialogues/DialogueTemplateBuilder";
export { createBPDimension } from "./builders/behaviors/dimensions/DimensionTemplateBuilder";
export { createBPEntity } from "./builders/behaviors/entities/EntityTemplateBuilder";
export { createBPFeature } from "./builders/behaviors/features/FeatureTemplateBuilder";
export { createBPFeatureRule } from "./builders/behaviors/featureRules/FeatureRuleTemplateBuilder";
export { createBPItemCatalog } from "./builders/behaviors/itemCatalog/ItemCatalogTemplateBuilder";
export { createBPItem } from "./builders/behaviors/items/ItemsTemplateBuilder";
export { createBPLootTable } from "./builders/behaviors/lootTables/LootTablesTemplateBuilder";
export { createBPRecipe } from "./builders/behaviors/recipes/RecipeTemplateBuilder";
export { createBPSpawnRule } from "./builders/behaviors/spawnRules/SpawnRuleTemplateBuilder";
export { createBPTrading } from "./builders/behaviors/trading/TradingTemplateBuilder";


export { createRPManifest } from "./builders/resources/ManifestTemplateBuilder";

export { createRPAnimController } from "./builders/resources/animControllers/AnimControllerTemplateBuilder";


// Tipados necesarios para las plantillas de creacion custom.
export type { BPFinalDefinitionManifest } from "./types/behaviors/ManifestTemplate";

export type { BPAnimControllerFinalDefinition } from "./types/behaviors/animContollers/AnimControllerTemplate";
export type { BPBiomeOverride, BPBiomeDefinition, BPBiomeTemplateInstance } from "./types/behaviors/biomes/BiomeTemplate";
export type { BPBlockDefinition, BPBlockOverride, BPBlockOverrideInstance } from "./types/behaviors/blocks/BlockTemplate";
export type { BPDialogueDefinition } from "./types/behaviors/dialogues/DialogueTemplate";
export type { BPDimensionDefinition, BPDimensionOverride, BPDimensionTemplateInstance } from "./types/behaviors/dimensions/DimensionTemplate";
export type { BPEntitiesTemplateDef, BPEntitiesTemplateOverride } from "./types/behaviors/entities/EntitiesTemplate";
export type { BPFeatureOverride, BPFeatureDefinition } from "./types/behaviors/features/FeatureTemplate";
export type { BPFeatureRuleDefinition, BPFeatureRuleOverride } from "./types/behaviors/featureRules/FeatureRuleTemplate";
export type { BPItemCatalogDefinition, BPItemCatalogTemplateInstance, BPItemCatalogOverride } from "./types/behaviors/itemCatalog/ItemCatalogTemplate";
export type { BPItemDefinition, BPItemDefinitionOver, BPItemTemplateInstance } from "./types/behaviors/items/ItemsTemplate";
export type { BPLootTableTemplateDef, BPLootTableFinalOverDefinition, BPLootTableTemplateOver } from "./types/behaviors/lootTables/LootTablesTemplate";
export type { BPRecipeDefinition, BPRecipeOverrideDefinition } from "./types/behaviors/recipes/RecipeTemplate";
export type { BPSpawnRuleDefinition, BPSpawnRuleOverride, BPSpawnRuleTemplateInstance } from "./types/behaviors/spawnRules/SpawnRuleTemplate";
export type { BPTradingDefinition, BPTradingOverInstance, BPTradingOverride } from "./types/behaviors/trading/TradingTemplate";


export type { RPManifestDefinition } from "./types/resources/ManifestTemplate";

export type { RPAnimControllerDefinition } from "./types/resources/animControllers/AnimControllerTemplate";


export { SpawnCategoryEntities, FormatVersionEntities } from "./types/behaviors/entities/EntitiesEnums";


// Otras exportaciones de la API.
export { EntityFilters } from './utils/EntityFilters';
export { MoLang } from './utils/MoLang';