import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const Pattern = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "pattern",
            "+defines": ["ENABLE_FOG", "ENABLE_LIGHT"],
            vertexShader: "shaders/pattern.vertex",
            fragmentShader: "shaders/pattern.fragment",
            depthFunc: "LessEqual",
            vertexFields: [
                { field: "Position" },
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
                    textureWrap: "Clamp"
                },
                {
                    samplerIndex: 2,
                    textureWrap: "Clamp"
                }
            ]
        }
    ]
});
