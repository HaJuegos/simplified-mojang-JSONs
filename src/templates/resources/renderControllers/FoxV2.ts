import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const FoxV2 = createRPRenderController({
    renderControllers: [
        {
            idRender: "fox.v2",
            arrays: {
                textures: {
                    "Array.skins": ["Texture.red", "Texture.arctic"],
                    "Array.babySkins": ["Texture.baby_red", "Texture.baby_arctic"],
                    "Array.babySleep": ["Texture.baby_sleep_red", "Texture.baby_sleep_arctic"]
                }
            },
            geometry: `${MoLang.isBaby()} ? Geometry.baby : Geometry.default`,
            partVisibility: [
                { "leg*": `!${MoLang.isSleeping()}` },
                { head: `(!${MoLang.isSleeping()} && !${MoLang.isBaby()}) || ${MoLang.isBaby()}` },
                { headSleeping: `${MoLang.isSleeping()} && !${MoLang.isBaby()}` }
            ],
            materials: [
                { "*": "Material.default" }
            ],
            textures: [
                `${MoLang.isBaby()} ? ${MoLang.isSleeping()} ? Array.baby_sleep[${MoLang.variant()}] : Array.baby_skins[${MoLang.variant()}] : Array.skins[${MoLang.variant()}]`
            ]
        }
    ]
});
