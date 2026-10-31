import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const ZombieVillagerV2Masked = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "zombie_villager_v2_masked",
            idMaterialReference: "entity_multitexture_masked",
            depthFunc: "LessEqual"
        }
    ]
});
