import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const Evoker = createRPRenderController({
    renderControllers: [
        {
            idRender: "evoker",
            geometry: "Geometry.default",
            materials: [
                { "*": "Material.default" }
            ],
            partVisibility: [
                { "*": true },
                { arms: `!(${MoLang.isCasting()} || ${MoLang.isCelebrating()})` },
                { leftarm: `${MoLang.isCasting()} || ${MoLang.isCelebrating()}` },
                { rightarm: `${MoLang.isCasting()} || ${MoLang.isCelebrating()}` }
            ],
            textures: ["Texture.default"]
        }
    ]
});
