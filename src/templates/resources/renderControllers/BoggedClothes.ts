import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const BoggedClothes = createRPRenderController({
    renderControllers: [
        {
            idRender: "bogged_clothes",
            rebuildAnimationMatrices: true,
            geometry: "Geometry.overlay",
            materials: [
                { "*": "Material.overlay" }
            ],
            textures: ["Texture.overlay"]
        }
    ]
});
