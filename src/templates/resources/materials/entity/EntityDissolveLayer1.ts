import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const EntityDissolveLayer1 = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "entity_dissolve_layer1",
            idMaterialReference: "entity",
            depthFunc: "Equal",
            "+defines": ["ALPHA_TEST"],
            "-defines": ["USE_OVERLAY"]
        }
    ]
});
