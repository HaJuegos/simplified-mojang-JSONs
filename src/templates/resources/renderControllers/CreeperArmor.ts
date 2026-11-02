import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const CreeperArmor = createRPRenderController({
    renderControllers: [
        {
            idRender: "creeper_armor",
            geometry: "Geometry.charged",
            materials: [
                { "*": "Material.charged" }
            ],
            textures: ["Texture.charged"],
            overlayColor: {
                r: 1.0,
                g: 1.0,
                b: 1.0,
                a: 1.0
            },
            uvAnim: {
                offset: [
                    `(${MoLang.isPowered()}) ? (Math.floor(${MoLang.lifeTime()} * 20.0) + ${MoLang.frameAlpha()}) * 0.01 : 0.0`,
                    `(${MoLang.isPowered()}) ? (Math.floor(${MoLang.lifeTime()} * 20.0) + ${MoLang.frameAlpha()}) * 0.01 : 0.0`
                ],
                scale: [1.0, 1.0]
            },
            lightColorMultiplier: 0.5,
            ignoreLighting: true
        }
    ]
});
