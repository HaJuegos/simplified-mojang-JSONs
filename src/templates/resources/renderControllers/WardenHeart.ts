import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const WardenHeart = createRPRenderController({
    renderControllers: [
        {
            idRender: "warden_heart",
            geometry: "Geometry.default",
            materials: [
                { "*": "Material.bioluminescent_layer" }
            ],
            textures: ["Texture.heart"],
            ignoreLighting: true,
            color: {
                r: 1.0,
                g: 1.0,
                b: 1.0,
                a: `${MoLang.hurtTime()} > 0 ? 0.2 : variable.heart_alpha`
            }
        }
    ]
});
