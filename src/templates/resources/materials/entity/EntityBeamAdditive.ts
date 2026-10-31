import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const EntityBeamAdditive = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "entity_beam_additive",
            idMaterialReference: "entity_alphablend",
            "+defines": ["COLOR_BASED", "NO_TEXTURE"],
            "-defines": ["USE_OVERLAY"],
            "+states": ["Blending", "DisableDepthWrite"],
            blendSrc: "SourceAlpha",
            blendDst: "One"
        }
    ]
});
