import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const LlamaV2 = createRPRenderController({
    renderControllers: [
        {
            idRender: "llama.v2",
            arrays: {
                textures: {
                    "Array.base": ["Texture.creamy", "Texture.white", "Texture.brown", "Texture.gray"],
                    "Array.babyBase": ["Texture.baby_creamy", "Texture.baby_white", "Texture.baby_brown", "Texture.baby_gray"],
                    "Array.decor": [
                        "Texture.decor_none",
                        "Texture.decor_white",
                        "Texture.decor_orange",
                        "Texture.decor_magenta",
                        "Texture.decor_light_blue",
                        "Texture.decor_yellow",
                        "Texture.decor_lime",
                        "Texture.decor_pink",
                        "Texture.decor_gray",
                        "Texture.decor_silver",
                        "Texture.decor_cyan",
                        "Texture.decor_purple",
                        "Texture.decor_blue",
                        "Texture.decor_brown",
                        "Texture.decor_green",
                        "Texture.decor_red",
                        "Texture.decor_black"
                    ]
                }
            },
            geometry: `${MoLang.isBaby()} ? Geometry.baby : Geometry.default`,
            partVisibility: [
                { "chest*": `${MoLang.isChested()}` }
            ],
            materials: [
                { "*": "Material.default" }
            ],
            textures: [
                `${MoLang.isBaby()} ? Array.baby_base[${MoLang.variant()}] : Array.base[${MoLang.variant()}]`,
                `(${MoLang.markVariant()} == 1 && variable.DecorTextureIndex == 0) ? ${MoLang.isBaby()} ? Texture.baby_decor_wandering_trader : Texture.decor_wandering_trader : ${MoLang.isBaby()} ? Texture.decor_none : Array.decor[variable.DecorTextureIndex]`,
                "Texture.decor_none"
            ]
        }
    ]
});
