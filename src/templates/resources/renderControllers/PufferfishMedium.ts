import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const PufferfishMedium = createRPRenderController({
    renderControllers: [
        {
            idRender: "pufferfish.medium",
            geometry: "geometry.mid",
            materials: [
                { "*": "Material.default" }
            ],
            textures: ["Texture.default"]
        }
    ]
});
