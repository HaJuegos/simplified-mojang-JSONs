import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const WardenBioluminescentLayer = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "warden_bioluminescent_layer",
            idMaterialReference: "entity_emissive_layer_alpha_blend"
        }
    ]
});
