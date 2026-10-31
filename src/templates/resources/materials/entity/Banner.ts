import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const Banner = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "banner",
            "+defines": ["ENABLE_FOG", "ENABLE_LIGHT"],
            vertexShader: "shaders/banner.vertex",
            vrGeometryShader: "shaders/banner.geometry",
            fragmentShader: "shaders/banner.fragment",
            depthFunc: "LessEqual",
            "+states": ["Blending"],
            vertexFields: [
                { field: "Position" },
                { field: "Color" },
                { field: "Normal" },
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
                            { field: "Normal" },
                            { field: "UV0" }
                        ]
                    }
                }
            ],
            msaaSupport: "Both",
            "+samplerStates": [
                {
                    samplerIndex: 0,
                    textureFilter: "Point"
                }
            ]
        }
    ]
});
