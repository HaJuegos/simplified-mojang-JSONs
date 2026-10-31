import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const CopperGolemEyes = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "copper_golem_eyes",
            idMaterialReference: "entity_emissive_layer_alpha_test"
        }
    ]
});
