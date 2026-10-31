import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const GuardianGhost = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "guardian_ghost",
            idMaterialReference: "entity_alphablend_nocolor",
            "+defines": ["USE_COLOR_MASK"]
        }
    ]
});
