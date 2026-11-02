import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const Frog = createRPRenderController({
    renderControllers: [
        {
            idRender: "frog",
            arrays: {
                textures: {
                    "Array.skins": ["Texture.temperate", "Texture.cold", "Texture.warm"]
                }
            },
            geometry: "Geometry.default",
            partVisibility: [
                { croakingBody: `!${MoLang.isEatingMob()}` }
            ],
            materials: [
                { "*": "Material.default" }
            ],
            textures: [`Array.skins[${MoLang.variant()}]`]
        }
    ]
});
