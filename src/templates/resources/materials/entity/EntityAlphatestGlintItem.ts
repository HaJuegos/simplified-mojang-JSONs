import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const EntityAlphatestGlintItem = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "entity_alphatest_glint_item",
            idMaterialReference: "entity_alphatest",
            "+defines": ["GLINT"],
            "+samplerStates": [
                {
                    samplerIndex: 1,
                    textureWrap: "Repeat"
                }
            ]
        }
    ]
});
