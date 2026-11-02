import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const EnderDragonDefault = createRPRenderController({
    renderControllers: [
        {
            idRender: "ender_dragon_default",
            geometry: "Geometry.default",
            materials: [
                { "*": "Material.default" }
            ],
            textures: ["Texture.default"]
        }
    ]
});
