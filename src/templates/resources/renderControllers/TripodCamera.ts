import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const TripodCamera = createRPRenderController({
    renderControllers: [
        {
            idRender: "tripod_camera",
            geometry: "Geometry.default",
            materials: [
                { "*": "Material.default" }
            ],
            textures: ["Texture.default"],
            overlayColor: {
                r: "variable.isFlashing ? 1.0f : this",
                g: "variable.isFlashing ? 1.0f : this",
                b: "variable.isFlashing ? 1.0f : this",
                a: "variable.isFlashing ? 1.0f : this"
            }
        }
    ]
});
