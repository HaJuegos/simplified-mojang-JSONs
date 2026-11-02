import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const MooshroomV2 = createRPRenderController({
    renderControllers: [
        {
            idRender: "mooshroom.v2",
            arrays: {
                textures: {
                    "Array.skins": ["Texture.default", "Texture.brown"],
                    "Array.babySkins": ["Texture.baby_default", "Texture.baby_brown"]
                }
            },
            geometry: `${MoLang.isBaby()} ? Geometry.baby : Geometry.default`,
            materials: [
                { "*": "Material.default" }
            ],
            textures: [`${MoLang.isBaby()} ? Array.baby_skins[${MoLang.variant()}] : Array.skins[${MoLang.variant()}]`]
        }
    ]
});
