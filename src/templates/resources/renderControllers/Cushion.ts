import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const Cushion = createRPRenderController({
    renderControllers: [
        {
            idRender: "cushion",
            geometry: "Geometry.default",
            materials: [
                { "*": "Material.default" }
            ],
            arrays: {
                textures: {
                    "Array.skins": [
                        "Texture.black",
                        "Texture.red",
                        "Texture.green",
                        "Texture.brown",
                        "Texture.blue",
                        "Texture.purple",
                        "Texture.cyan",
                        "Texture.light_gray",
                        "Texture.gray",
                        "Texture.pink",
                        "Texture.lime",
                        "Texture.yellow",
                        "Texture.light_blue",
                        "Texture.magenta",
                        "Texture.orange",
                        "Texture.white"
                    ]
                }
            },
            textures: [`Array.skins[${MoLang.variant()}]`]
        }
    ]
});
