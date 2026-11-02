import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const WitherBossArmorBlue = createRPRenderController({
    renderControllers: [
        {
            idRender: "wither_boss_armor_blue",
            geometry: "Geometry.armor",
            materials: [
                { "*": "Material.armor" }
            ],
            textures: ["Texture.armor_blue"],
            partVisibility: [
                { "*": `${MoLang.isShieldPowered()}` }
            ],
            uvAnim: {
                offset: [
                    `(${MoLang.isShieldPowered()}) ? (Math.floor(${MoLang.lifeTime()} * 20.0) + ${MoLang.frameAlpha()}) * 0.01 : 0.0`,
                    `(${MoLang.isShieldPowered()}) ? (Math.floor(${MoLang.lifeTime()} * 20.0) + ${MoLang.frameAlpha()}) * 0.01 : 0.0`
                ],
                scale: [1.0, 1.0]
            },
            ignoreLighting: true
        }
    ]
});
