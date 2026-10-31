import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const ItemInHand = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "item_in_hand",
            idMaterialReference: "entity",
            "+defines": ["COLOR_BASED", "NO_TEXTURE", "ITEM_IN_HAND"],
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
            msaaSupport: "Both"
        }
    ]
});
