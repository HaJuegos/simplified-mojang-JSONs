import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const AxolotlV2 = createRPRenderController({
    renderControllers: [
        {
            idRender: "axolotl.v2",
            arrays: {
                textures: {
                    "Array.skins": ["Texture.lucy", "Texture.cyan", "Texture.gold", "Texture.wild", "Texture.blue"],
                    "Array.babySkins": [
                        "Texture.baby_lucy",
                        "Texture.baby_cyan",
                        "Texture.baby_gold",
                        "Texture.baby_wild",
                        "Texture.baby_blue"
                    ]
                }
            },
            geometry: `${MoLang.isBaby()} ? Geometry.baby : Geometry.default`,
            materials: [
                { "*": "Material.default" },
                { "*arm": "Material.limbs" },
                { "*leg": "Material.limbs" }
            ],
            textures: [`${MoLang.isBaby()} ? Array.baby_skins[${MoLang.variant()}] : Array.skins[${MoLang.variant()}]`]
        }
    ]
});
