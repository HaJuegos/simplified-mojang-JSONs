import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const LlamaSpit = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "llama_spit",
            idMaterialReference: "entity"
        }
    ]
});
