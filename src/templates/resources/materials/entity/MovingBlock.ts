import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const MovingBlock = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "moving_block",
            vertexShader: "shaders/renderchunk.vertex",
            vrGeometryShader: "shaders/renderchunk.geometry",
            fragmentShader: "shaders/renderchunk.fragment",
            "+defines": ["LOW_PRECISION", "TEXEL_AA", "ATLAS_TEXTURE", "AS_ENTITY_RENDERER"],
            "+samplerStates": [
                {
                    samplerIndex: 0,
                    textureFilter: "TexelAA"
                },
                {
                    samplerIndex: 1,
                    textureFilter: "Bilinear"
                }
            ],
            vertexFields: [
                { field: "Position" },
                { field: "Color" },
                { field: "UV1" },
                { field: "UV0" }
            ],
            variants: [
                {
                    skinning: {
                        "+defines": ["USE_SKINNING"],
                        vertexFields: [
                            { field: "Position" },
                            { field: "BoneId0" },
                            { field: "Color" },
                            { field: "UV1" },
                            { field: "UV0" }
                        ]
                    }
                }
            ],
            msaaSupport: "Both"
        }
    ]
});
