import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const Tadpole = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "tadpole",
            idMaterialReference: "entity_alphatest"
        }
    ]
});
