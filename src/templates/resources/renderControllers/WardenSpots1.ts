import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const WardenSpots1 = createRPRenderController({
    renderControllers: [
        {
            idRender: "warden_spots_1",
            geometry: "Geometry.default",
            materials: [
                { "*": "Material.bioluminescent_layer" }
            ],
            textures: ["Texture.spots_1"],
            ignoreLighting: true,
            color: {
                r: 1.0,
                g: 1.0,
                b: 1.0,
                a: "variable.spots_1_alpha"
            }
        }
    ]
});
