import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const MovingBlockAlphaSingleSide = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "moving_block_alpha_single_side",
            idMaterialReference: "moving_block",
            "+defines": ["ALPHA_TEST"],
            "+states": ["EnableAlphaToCoverage"]
        }
    ]
});
