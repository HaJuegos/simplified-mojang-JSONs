import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const Bow = createRPRenderController({
    renderControllers: [
        {
            idRender: "bow",
            arrays: {
                textures: {
                    "array.bowTextureFrames": ["texture.default", "texture.bow_pulling_0", "texture.bow_pulling_1", "texture.bow_pulling_2"]
                },
                geometries: {
                    "array.bowGeoFrames": ["geometry.default", "geometry.bow_pulling_0", "geometry.bow_pulling_1", "geometry.bow_pulling_2"]
                }
            },
            geometry: `array.bow_geo_frames[${MoLang.getAnimationFrame()}]`,
            materials: [
                { "*": "variable.is_enchanted ? material.enchanted : material.default" }
            ],
            textures: [`array.bow_texture_frames[${MoLang.getAnimationFrame()}]`, "texture.enchanted"]
        }
    ]
});
