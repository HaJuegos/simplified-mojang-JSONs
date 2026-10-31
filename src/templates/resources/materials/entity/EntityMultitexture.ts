import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const EntityMultitexture = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "entity_multitexture",
            idMaterialReference: "entity",
            "+defines": ["USE_MULTITEXTURE"],
            "+samplerStates": [
                {
                    samplerIndex: 0,
                    textureWrap: "Clamp"
                },
                {
                    samplerIndex: 1,
                    textureWrap: "Clamp"
                },
                {
                    samplerIndex: 2,
                    textureWrap: "Clamp"
                }
            ]
        }
    ]
});
