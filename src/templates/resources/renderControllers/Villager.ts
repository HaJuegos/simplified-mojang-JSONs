import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Este no es el render controller del aldeano v2 vanilla de la actualidad. Pero se deja por compatibilidad.
 * @author HaJuegos - 31-10-2026
 */
export const Villager = createRPRenderController({
    renderControllers: [
        {
            idRender: "villager",
            arrays: {
                textures: {
                    "Array.skins": ["Texture.farmer", "Texture.librarian", "Texture.priest", "Texture.smith", "Texture.butcher"]
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
