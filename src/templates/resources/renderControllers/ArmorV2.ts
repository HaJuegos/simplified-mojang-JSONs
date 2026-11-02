import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const ArmorV2 = createRPRenderController({
    renderControllers: [
        {
            idRender: "armor.v2",
            geometry: "variable.use_baby_geo ? Geometry.baby : Geometry.default",
            materials: [
                { "*": "variable.is_enchanted ? Material.enchanted : Material.default" }
            ],
            textures: [
                "variable.use_baby_geo ? Texture.baby : (variable.has_trim ? variable.trim_path : Texture.default)",
                "Texture.enchanted"
            ]
        }
    ]
});
