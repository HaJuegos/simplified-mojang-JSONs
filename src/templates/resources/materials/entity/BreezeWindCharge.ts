import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const BreezeWindCharge = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "breeze_wind_charge",
            idMaterialReference: "entity_static",
            "+defines": ["USE_UV_ANIM", "ALPHA_TEST"],
            "+states": ["Blending", "DisableCulling", "DisableDepthWrite"],
            msaaSupport: "Both",
            blendSrc: "SourceAlpha",
            blendDst: "One",
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
