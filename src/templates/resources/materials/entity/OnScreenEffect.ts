import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const OnScreenEffect = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "on_screen_effect",
            idMaterialReference: "entity_alphatest",
            "+defines": ["COLOR_BASED"],
            "+states": ["Blending"],
            vertexFields: [
                { field: "Position" },
                { field: "Normal" },
                { field: "Color" },
                { field: "UV0" }
            ]
        }
    ]
});
