import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const Vindicator = createRPRenderController({
    renderControllers: [
        {
            idRender: "vindicator",
            geometry: "Geometry.default",
            partVisibility: [
                { rightArm: `${MoLang.isAngry()} || ${MoLang.isCelebrating()}` },
                { leftArm: `${MoLang.isAngry()} || ${MoLang.isCelebrating()}` },
                { rightItem: `${MoLang.isAngry()}` },
                { arms: `!(${MoLang.isAngry()} || ${MoLang.isCelebrating()})` }
            ],
            materials: [
                { "*": "Material.default" }
            ],
            textures: ["Texture.default"]
        }
    ]
});
