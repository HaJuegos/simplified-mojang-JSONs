import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const EntityStatic = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "entity_static",
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
                },
                {
                    skinningColor: {
                        "+defines": ["USE_SKINNING", "USE_OVERLAY"],
                        "+states": ["Blending"],
                        vertexFields: [
                            { field: "Position" },
                            { field: "BoneId0" },
                            { field: "Color" },
                            { field: "Normal" },
                            { field: "UV0" }
                        ]
                    }
                },
                {
                    skinningAlphatest: {
                        "+defines": ["USE_SKINNING", "ALPHA_TEST"],
                        "+states": ["DisableCulling"],
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
