import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const EntityChangeColor = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "entity_change_color",
            idMaterialReference: "entity_nocull",
            "+defines": ["USE_OVERLAY", "USE_COLOR_MASK"]
        }
    ]
});
