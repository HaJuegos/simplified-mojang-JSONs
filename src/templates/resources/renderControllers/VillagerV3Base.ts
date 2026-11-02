import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const VillagerV3Base = createRPRenderController({
    renderControllers: [
        {
            idRender: "villager_v3_base",
            arrays: {
                textures: {
                    "Array.skins": ["Texture.base", "Texture.base2", "Texture.base3", "Texture.base4", "Texture.base5", "Texture.base6"],
                    "Array.babySkins": [
                        "Texture.baby_base",
                        "Texture.baby_base2",
                        "Texture.baby_base3",
                        "Texture.baby_base4",
                        "Texture.baby_base5",
                        "Texture.baby_base6"
                    ]
                }
            },
            geometry: `${MoLang.isBaby()} ? Geometry.baby : Geometry.default`,
            materials: [
                { "*": "Material.default" }
            ],
            textures: [`${MoLang.isBaby()} ? Array.baby_skins[${MoLang.skinId()}] : Array.skins[${MoLang.skinId()}]`]
        }
    ]
});
