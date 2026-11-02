import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const Parrot = createRPRenderController({
    renderControllers: [
        {
            idRender: "parrot",
            arrays: {
                textures: {
                    "Array.skins": ["Texture.red_blue", "Texture.blue", "Texture.green", "Texture.yellow_blue", "Texture.grey"]
                }
            },
            geometry: "Geometry.default",
            materials: [
                { "*": "Material.default" }
            ],
            textures: [`Array.skins[${MoLang.variant()}]`]
        }
    ]
});
