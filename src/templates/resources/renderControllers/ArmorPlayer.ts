import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const ArmorPlayer = createRPRenderController({
    renderControllers: [
        {
            idRender: "armor.player",
            geometry: "Geometry.default",
            materials: [
                { "*": "variable.is_enchanted ? Material.enchanted : Material.default" }
            ],
            textures: ["variable.has_trim ? variable.trim_path : Texture.default", "Texture.enchanted"]
        }
    ]
});
