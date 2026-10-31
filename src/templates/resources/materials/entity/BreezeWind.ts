import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const BreezeWind = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "breeze_wind",
            idMaterialReference: "entity_static",
            "+defines": ["USE_UV_ANIM", "ALPHA_TEST"],
            "+states": ["Blending", "DisableCulling", "DisableDepthWrite"],
            msaaSupport: "Both",
            "+samplerStates": [
                {
                    samplerIndex: 0,
                    textureFilter: "Point",
                    textureWrap: "Repeat"
                }
            ]
        }
    ]
});
