import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const IronGolemCracks = createRPRenderController({
    renderControllers: [
        {
            idRender: "iron_golem_cracks",
            arrays: {
                textures: {
                    "Array.cracks": ["Texture.cracked_high", "Texture.cracked_med", "Texture.cracked_low", "Texture.cracked_none"]
                }
            },
            geometry: "Geometry.default",
            textures: [`Array.cracks[math.clamp(${MoLang.health()} / 25, 0, 3)]`],
            materials: []
        }
    ]
});
