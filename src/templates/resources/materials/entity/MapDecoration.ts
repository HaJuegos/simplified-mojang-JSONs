import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const MapDecoration = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "map_decoration",
            "+defines": ["ALPHA_TEST", "TINTED"],
            vertexShader: "shaders/entity.vertex",
            vrGeometryShader: "shaders/entity.geometry",
            fragmentShader: "shaders/entity.fragment",
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
                    textureFilter: "Point"
                }
            ]
        }
    ]
});
