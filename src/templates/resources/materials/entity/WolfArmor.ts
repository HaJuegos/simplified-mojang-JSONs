import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const WolfArmor = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "wolf_armor",
            idMaterialReference: "entity_multitexture_multiplicative_blend"
        }
    ]
});
