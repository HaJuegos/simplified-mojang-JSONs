// Archivos root de plantillas pre-creadas.
export { BPEntityComponents } from "./components/behaviors/entities";
export { BPEntityTemplates } from "./templates/behaviors/entities";


// Exportacion de plantillas para la creacion custom.
export { createBPManifest } from "./builders/behaviors/ManifestTemplateBuilder";
export { createBPAnimController } from "./builders/behaviors/animControllers/AnimControllerTemplateBuilder";
export { createBPDialogue } from "./builders/behaviors/dialogues/DialogueTemplateBuilder";
export { createBPEntityTemplate } from "./builders/behaviors/entities/EntityTemplateBuilder";


// Tipados necesarios para las plantillas de creacion custom.
export type { BPFinalDefinitionManifest } from "./types/behaviors/ManifestTemplate";
export type { BPAnimControllerFinalDefinition } from "./types/behaviors/animContollers/AnimControllerTemplate";
export type { BPDialogueDefinition } from "./types/behaviors/dialogues/DialogueTemplate";
export type { BPEntitiesTemplateDef, BPEntitiesTemplateOverride } from "./types/behaviors/entities/EntitiesTemplate";