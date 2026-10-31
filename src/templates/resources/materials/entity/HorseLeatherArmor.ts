import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const HorseLeatherArmor = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "horse_leather_armor",
            idMaterialReference: "entity_multitexture_alpha_test_color_mask"
        }
    ]
});
