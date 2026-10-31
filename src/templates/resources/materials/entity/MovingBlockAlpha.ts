import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const MovingBlockAlpha = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "moving_block_alpha",
            idMaterialReference: "moving_block_alpha_single_side",
            "+states": ["DisableCulling"],
            depthBias: 100.0,
            slopeScaledDepthBias: 0.1,
            depthBiasOGL: 0.5,
            slopeScaledDepthBiasOGL: 0.5
        }
    ]
});
