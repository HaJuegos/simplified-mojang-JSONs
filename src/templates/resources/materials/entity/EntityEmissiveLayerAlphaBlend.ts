import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const EntityEmissiveLayerAlphaBlend = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "entity_emissive_layer_alpha_blend",
            idMaterialReference: "entity_nocull",
            "+defines": ["USE_COLOR_MASK", "ALPHA_TEST"],
            "+states": ["Blending"],
            depthFunc: "Equal",
            blendSrc: "SourceAlpha",
            blendDst: "OneMinusSrcAlpha"
        }
    ]
});
