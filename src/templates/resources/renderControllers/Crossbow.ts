import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const Crossbow = createRPRenderController({
    renderControllers: [
        {
            idRender: "crossbow",
            arrays: {
                textures: {
                    "array.crossbowTextureFrames": [
                        "texture.default",
                        "texture.crossbow_pulling_0",
                        "texture.crossbow_pulling_1",
                        "texture.crossbow_pulling_2",
                        "texture.crossbow_arrow",
                        "texture.crossbow_rocket"
                    ]
                },
                geometries: {
                    "array.crossbowGeoFrames": [
                        "geometry.default",
                        "geometry.crossbow_pulling_0",
                        "geometry.crossbow_pulling_1",
                        "geometry.crossbow_pulling_2",
                        "geometry.crossbow_arrow",
                        "geometry.crossbow_rocket"
                    ]
                }
            },
            geometry: `array.crossbow_geo_frames[${MoLang.getAnimationFrame()}]`,
            materials: [
                { "*": "variable.is_enchanted ? material.enchanted : material.default" }
            ],
            textures: [`array.crossbow_texture_frames[${MoLang.getAnimationFrame()}]`, "texture.enchanted"]
        }
    ]
});
