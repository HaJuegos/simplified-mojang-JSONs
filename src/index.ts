export { BPEntityComponents } from "./components/behaviors/entities";

export { BPEntityTemplates } from "./templates/behaviors/entities";

export { createBPEntityTemplate } from "./builders/behaviors/entities/EntityTemplateBuilder";
export { createBPManifest } from "./builders/behaviors/ManifestTemplateBuilder";
export { createBPAnimController } from "./builders/behaviors/animControllers/AnimControllerTemplateBuilter";

export type { BPEntitiesTemplateDef, BPEntitiesTemplateOverride } from "./types/behaviors/entities/EntitiesTemplate";
export type { BPFinalDefinitionManifest } from "./types/behaviors/ManifestTemplate";
export type { BPAnimControllerFinalDefinition } from "./types/behaviors/animContollers/AnimControllerTemplate";