import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const MovingBlockBlend = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "moving_block_blend",
            idMaterialReference: "moving_block",
            "+defines": ["BLEND"],
            "+states": ["Blending"]
        }
    ]
});
