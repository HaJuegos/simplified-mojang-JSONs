import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const Entity = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "entity",
            idMaterialReference: "entity_static",
            "+defines": ["USE_OVERLAY"],
            msaaSupport: "Both"
        }
    ]
});
