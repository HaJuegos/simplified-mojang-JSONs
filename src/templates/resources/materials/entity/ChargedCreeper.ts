import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const ChargedCreeper = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "charged_creeper",
            idMaterialReference: "entity_static",
            "+defines": ["USE_UV_ANIM", "ALPHA_TEST"],
            "+states": ["Blending", "DisableCulling"],
            blendSrc: "One",
            blendDst: "One",
            "+samplerStates": [
                {
                    samplerIndex: 0,
                    textureWrap: "Repeat"
                }
            ]
        }
    ]
});
