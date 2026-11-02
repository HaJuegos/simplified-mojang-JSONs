import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const Enderman = createRPRenderController({
    renderControllers: [
        {
            idRender: "enderman",
            arrays: {
                materials: {
                    "Array.materials": ["Material.default", "Material.invisible"]
                }
            },
            geometry: "Geometry.default",
            materials: [
                { "*": `Array.materials[${MoLang.isInvisible()}]` }
            ],
            textures: ["Texture.default"]
        }
    ]
});
