import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const Saddle = createRPRenderController({
    renderControllers: [
        {
            idRender: "saddle",
            geometry: "Geometry.default",
            materials: [
                { "*": "Material.default" }
            ],
            textures: ["Texture.saddle"],
            partVisibility: [
                { "*": false },
                { body: `${MoLang.isSaddled()}` }
            ]
        }
    ]
});
