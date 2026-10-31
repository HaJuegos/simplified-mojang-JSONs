import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const EntityCustom = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "entity_custom",
            idMaterialReference: "entity",
            "+states": ["Blending"],
            "+defines": ["ALPHA_TEST", "Blending", "USE_OVERLAY", "USE_MASK"]
        }
    ]
});
