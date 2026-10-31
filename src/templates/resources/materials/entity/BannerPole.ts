import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const BannerPole = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "banner_pole",
            idMaterialReference: "banner",
            "+defines": ["ENABLE_FOG", "ENABLE_LIGHT", "DISABLE_TINTING"],
            "-states": ["Blending"]
        }
    ]
});
