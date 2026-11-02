import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const PandaV2 = createRPRenderController({
    renderControllers: [
        {
            idRender: "panda.v2",
            arrays: {
                textures: {
                    "Array.skins": [
                        "Texture.default",
                        "Texture.lazy",
                        "Texture.worried",
                        "Texture.playful",
                        "Texture.brown",
                        "Texture.weak",
                        "Texture.aggressive"
                    ],
                    "Array.babySkins": [
                        "Texture.baby_default",
                        "Texture.baby_lazy",
                        "Texture.baby_worried",
                        "Texture.baby_playful",
                        "Texture.baby_brown",
                        "Texture.baby_weak",
                        "Texture.baby_aggressive"
                    ]
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
