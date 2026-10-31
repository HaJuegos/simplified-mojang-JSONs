import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const EntityAlphatestMulticolorTint = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "entity_alphatest_multicolor_tint",
            idMaterialReference: "entity",
            "+states": ["DisableAlphaWrite"],
            "+defines": ["ALPHA_TEST", "MULTI_COLOR_TINT"],
            "+samplerStates": [
                {
                    samplerIndex: 1,
                    textureWrap: "Repeat"
                }
            ]
        }
    ]
});
