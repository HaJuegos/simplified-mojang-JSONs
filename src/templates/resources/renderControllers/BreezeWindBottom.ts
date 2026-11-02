import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const BreezeWindBottom = createRPRenderController({
    renderControllers: [
        {
            idRender: "breeze_wind_bottom",
            geometry: "Geometry.breeze_wind_bottom",
            materials: [
                { "*": "Material.breeze_wind" }
            ],
            textures: ["Texture.breeze_wind"],
            uvAnim: {
                offset: [`((Math.floor(${MoLang.lifeTime()} * 20.0) + ${MoLang.frameAlpha()}) * 0.03)`, "(0.0)"],
                scale: [1.0, 1.0]
            },
            lightColorMultiplier: 1.8
        }
    ]
});
