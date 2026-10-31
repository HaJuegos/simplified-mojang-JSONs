import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const EntityAlphatestOneSided = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "entity_alphatest_one_sided",
            idMaterialReference: "entity",
            "+defines": ["ALPHA_TEST"],
            "+samplerStates": [
                {
                    samplerIndex: 1,
                    textureWrap: "Repeat"
                }
            ],
            msaaSupport: "Both"
        }
    ]
});
