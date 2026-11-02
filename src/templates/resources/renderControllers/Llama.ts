import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa oficialmente en el archivo. Usa la version 2° en su lugar.
 * @author HaJuegos - 31-10-2026
 */
export const Llama = createRPRenderController({
    renderControllers: [
        {
            idRender: "llama",
            arrays: {
                textures: {
                    "Array.base": ["Texture.creamy", "Texture.white", "Texture.brown", "Texture.gray"],
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
            geometry: "Geometry.default",
            partVisibility: [
                { "chest*": `${MoLang.isChested()}` }
            ],
            materials: [
                { "*": "Material.default" }
            ],
            textures: [
                `Array.base[${MoLang.variant()}]`,
                `(${MoLang.markVariant()} == 1 && variable.DecorTextureIndex == 0) ? Texture.decor_wandering_trader : Array.decor[variable.DecorTextureIndex]`,
                "Texture.decor_none"
            ]
        }
    ]
});
