import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const MovingBlockSeasons = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "moving_block_seasons",
            idMaterialReference: "moving_block",
            "+defines": ["SEASONS"],
            "+samplerStates": [
                {
                    samplerIndex: 0,
                    textureFilter: "TexelAA"
                },
                {
                    samplerIndex: 1,
                    textureFilter: "Bilinear"
                },
                {
                    samplerIndex: 2,
                    textureFilter: "Point"
                }
            ]
        }
    ]
});
