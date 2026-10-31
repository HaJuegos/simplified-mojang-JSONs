import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const MapMarker = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "map_marker",
            "+defines": ["ALPHA_TEST"],
            vertexShader: "shaders/color_uv.vertex",
            vrGeometryShader: "shaders/color_uv.geometry",
            fragmentShader: "shaders/color_texture.fragment",
            vertexFields: [
                { field: "Position" },
                { field: "Normal" },
                { field: "Color" },
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
                            { field: "Color" },
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
