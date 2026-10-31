import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const EntityEmissiveAlphaOneSided = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "entity_emissive_alpha_one_sided",
            idMaterialReference: "entity",
            "+defines": ["ALPHA_TEST", "USE_EMISSIVE"]
        }
    ]
});
