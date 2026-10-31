import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const BeaconBeam = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "beacon_beam",
            idMaterialReference: "entity_nocull",
            "+defines": ["COLOR_BASED", "USE_COLOR_BLEND", "USE_UV_ANIM"],
            "+samplerStates": [
                {
                    samplerIndex: 0,
                    textureWrap: "Repeat"
                }
            ],
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
            ]
        }
    ]
});
