import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const ItemInHandGlint = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "item_in_hand_glint",
            idMaterialReference: "item_in_hand",
            "+defines": ["GLINT"],
            "+samplerStates": [
                {
                    samplerIndex: 0,
                    textureFilter: "Point"
                },
                {
                    samplerIndex: 1,
                    textureWrap: "Repeat"
                }
            ]
        }
    ]
});
