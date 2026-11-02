import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const HappyGhastRopes = createRPRenderController({
    renderControllers: [
        {
            idRender: "happy_ghast_ropes",
            geometry: "Geometry.ropes",
            materials: [
                { "*": "Material.default" }
            ],
            textures: ["Texture.ropes"],
            partVisibility: [
                { "*": "variable.render_ropes" }
            ]
        }
    ]
});
