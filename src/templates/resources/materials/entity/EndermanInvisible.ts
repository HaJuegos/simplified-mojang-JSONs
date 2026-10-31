import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const EndermanInvisible = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "enderman_invisible",
            idMaterialReference: "entity_emissive_alpha",
            "+defines": ["USE_ONLY_EMISSIVE"]
        }
    ]
});
