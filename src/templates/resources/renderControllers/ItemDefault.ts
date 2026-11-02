import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const ItemDefault = createRPRenderController({
    renderControllers: [
        {
            idRender: "item_default",
            geometry: "geometry.default",
            materials: [
                { "*": "variable.is_enchanted ? material.enchanted : material.default" }
            ],
            textures: ["texture.default", "texture.enchanted"]
        }
    ]
});
