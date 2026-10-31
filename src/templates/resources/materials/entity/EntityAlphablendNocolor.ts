import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const EntityAlphablendNocolor = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "entity_alphablend_nocolor",
            idMaterialReference: "entity_alphablend",
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
            ]
        }
    ]
});
