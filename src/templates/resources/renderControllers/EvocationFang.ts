import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const EvocationFang = createRPRenderController({
    renderControllers: [
        {
            idRender: "evocation_fang",
            geometry: "Geometry.default",
            materials: [
                { "*": "Material.default" }
            ],
            partVisibility: [
                { "*": "variable.animation_progress != 0.0" }
            ],
            textures: ["Texture.default"]
        }
    ]
});
