import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const FireworksRocket = createRPRenderController({
    renderControllers: [
        {
            idRender: "fireworks_rocket",
            geometry: "geometry.default",
            materials: [
                { "*": "Material.default" }
            ],
            textures: ["texture.default"],
            filterLighting: true,
            partVisibility: [
                { body: `!${MoLang.isAttachedToEntity()}` }
            ]
        }
    ]
});
