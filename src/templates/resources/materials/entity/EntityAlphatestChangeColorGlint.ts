import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const EntityAlphatestChangeColorGlint = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "entity_alphatest_change_color_glint",
            idMaterialReference: "entity_change_color",
            "+defines": ["ALPHA_TEST", "USE_COLOR_MASK", "GLINT"],
            "+samplerStates": [
                {
                    samplerIndex: 1,
                    textureWrap: "Repeat"
                }
            ]
        }
    ]
});
