import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const EntityEmissive = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "entity_emissive",
            idMaterialReference: "entity",
            "+defines": ["USE_EMISSIVE"]
        }
    ]
});
