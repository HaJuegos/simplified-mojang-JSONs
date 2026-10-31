import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const EntityMultitextureMultiplicativeBlend = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "entity_multitexture_multiplicative_blend",
            idMaterialReference: "entity",
            "+states": ["DisableCulling"],
            "+samplerStates": [
                {
                    samplerIndex: 0,
                    textureWrap: "Clamp"
                },
                {
                    samplerIndex: 1,
                    textureWrap: "Clamp"
                }
            ],
            "+defines": ["ALPHA_TEST", "USE_COLOR_MASK", "MULTIPLICATIVE_TINT", "MULTIPLICATIVE_TINT_COLOR", "USE_OVERLAY"]
        }
    ]
});
