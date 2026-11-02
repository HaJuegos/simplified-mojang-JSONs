import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const GlowSquidV2 = createRPRenderController({
    renderControllers: [
        {
            idRender: "glow_squid.v2",
            geometry: `${MoLang.isBaby()} ? Geometry.baby : Geometry.default`,
            materials: [
                { "*": "Material.default" }
            ],
            textures: [`${MoLang.isBaby()} ? Texture.baby : Texture.default`],
            overlayColor: {
                r: 0.0,
                g: 0.0,
                b: 0.0,
                a: "variable.glow_alpha"
            }
        }
    ]
});
