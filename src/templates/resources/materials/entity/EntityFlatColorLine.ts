import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const EntityFlatColorLine = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "entity_flat_color_line",
            vertexShader: "shaders/position.vertex",
            vrGeometryShader: "shaders/position.geometry",
            fragmentShader: "shaders/current_color.fragment",
            msaaSupport: "Both",
            "+defines": ["LINE_STRIP"],
            primitiveMode: "Line",
            vertexFields: [
                { field: "Position" }
            ]
        }
    ]
});
