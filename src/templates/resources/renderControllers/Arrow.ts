import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const Arrow = createRPRenderController({
    renderControllers: [
        {
            idRender: "arrow",
            geometry: "geometry.default",
            materials: [
                { "*": "Material.default" }
            ],
            textures: ["texture.default"],
            filterLighting: true
        }
    ]
});
