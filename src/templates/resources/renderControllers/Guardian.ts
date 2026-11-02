import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const Guardian = createRPRenderController({
    renderControllers: [
        {
            idRender: "guardian",
            geometry: "Geometry.default",
            materials: [
                { "*": `${MoLang.isGhost()} ? Material.ghost : Material.default` }
            ],
            textures: [`${MoLang.isElder()} ? Texture.elder : Texture.default`]
        }
    ]
});
