import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const EntityMultitextureMasked = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "entity_multitexture_masked",
            idMaterialReference: "entity_alphatest",
            "+defines": ["MASKED_MULTITEXTURE"],
            "+samplerStates": [
                {
                    samplerIndex: 0,
                    textureWrap: "Clamp"
                },
                {
                    samplerIndex: 1,
                    textureWrap: "Clamp"
                }
            ]
        }
    ]
});
