import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const EntityDissolveLayer0 = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "entity_dissolve_layer0",
            idMaterialReference: "entity",
            "+defines": ["TINTED_ALPHA_TEST"],
            "+states": ["DisableColorWrite"]
        }
    ]
});
