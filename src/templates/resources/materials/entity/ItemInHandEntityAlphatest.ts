import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const ItemInHandEntityAlphatest = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "item_in_hand_entity_alphatest",
            idMaterialReference: "entity_alphatest",
            msaaSupport: "Both"
        }
    ]
});
