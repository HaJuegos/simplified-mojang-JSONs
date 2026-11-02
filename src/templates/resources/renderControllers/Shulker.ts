import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const Shulker = createRPRenderController({
    renderControllers: [
        {
            idRender: "shulker",
            arrays: {
                textures: {
                    "Array.variants": [
                        "Texture.black",
                        "Texture.red",
                        "Texture.green",
                        "Texture.brown",
                        "Texture.blue",
                        "Texture.purple",
                        "Texture.cyan",
                        "Texture.silver",
                        "Texture.gray",
                        "Texture.pink",
                        "Texture.lime",
                        "Texture.yellow",
                        "Texture.light_blue",
                        "Texture.magenta",
                        "Texture.orange",
                        "Texture.white",
                        "Texture.undyed"
                    ]
                }
            },
            geometry: "Geometry.default",
            materials: [
                { "*": "Material.default" }
            ],
            textures: [`Array.variants[${MoLang.variant()}]`]
        }
    ]
});
