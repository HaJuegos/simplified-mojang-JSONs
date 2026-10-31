import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const MovingBlockAlphaSeasons = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "moving_block_alpha_seasons",
            idMaterialReference: "moving_block_seasons",
            "+defines": ["ALPHA_TEST"],
            "+states": ["DisableCulling", "EnableAlphaToCoverage"]
        }
    ]
});
