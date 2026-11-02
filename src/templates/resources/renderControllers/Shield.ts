import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const Shield = createRPRenderController({
    renderControllers: [
        {
            idRender: "shield",
            geometry: "geometry.default",
            materials: [
                {
                    "*": "variable.is_patterned ? (variable.is_enchanted ? material.pattern_enchanted : material.pattern) : (variable.is_enchanted ? material.enchanted : material.default)"
                }
            ],
            textures: ["texture.default", "texture.enchanted", "texture.pattern"]
        }
    ]
});
