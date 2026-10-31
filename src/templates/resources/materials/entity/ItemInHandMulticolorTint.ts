import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const ItemInHandMulticolorTint = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "item_in_hand_multicolor_tint",
            idMaterialReference: "item_in_hand",
            "+defines": ["COLOR_BASED", "NO_TEXTURE", "ITEM_IN_HAND", "MULTI_COLOR_TINT"],
            "-defines": ["USE_OVERLAY"]
        }
    ]
});
