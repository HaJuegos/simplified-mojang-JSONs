import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const RabbitV2 = createRPRenderController({
    renderControllers: [
        {
            idRender: "rabbit.v2",
            arrays: {
                textures: {
                    "Array.skins": [
                        "Texture.brown",
                        "Texture.white",
                        "Texture.black",
                        "Texture.white_splotched",
                        "Texture.gold",
                        "Texture.salt"
                    ],
                    "Array.babySkins": [
                        "Texture.baby_brown",
                        "Texture.baby_white",
                        "Texture.baby_black",
                        "Texture.baby_white_splotched",
                        "Texture.baby_gold",
                        "Texture.baby_salt"
                    ]
                }
            },
            geometry: `${MoLang.isBaby()} ? Geometry.baby : Geometry.default`,
            materials: [
                { "*": "Material.default" }
            ],
            textures: [
                `${MoLang.getName()} == 'Toast' ? ${MoLang.isBaby()} ? Texture.baby_toast: Texture.toast : ${MoLang.isBaby()} ? Array.baby_skins[${MoLang.variant()}] : Array.skins[${MoLang.variant()}]`
            ]
        }
    ]
});
