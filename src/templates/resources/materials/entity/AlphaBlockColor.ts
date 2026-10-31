import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const AlphaBlockColor = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "alpha_block_color",
            idMaterialReference: "alpha_block",
            "+defines": ["ALPHA_TEST"],
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
