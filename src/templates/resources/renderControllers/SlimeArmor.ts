import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const SlimeArmor = createRPRenderController({
    renderControllers: [
        {
            idRender: "slime_armor",
            geometry: "Geometry.armor",
            materials: [
                { "*": "Material.outer" }
            ],
            textures: ["Texture.default"]
        }
    ]
});
