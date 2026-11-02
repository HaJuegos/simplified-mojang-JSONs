import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const WitherBossArmorWhite = createRPRenderController({
    renderControllers: [
        {
            idRender: "wither_boss_armor_white",
            geometry: "Geometry.armor",
            materials: [
                { "*": "Material.armor" }
            ],
            textures: ["Texture.armor_white"],
            partVisibility: [
                { "*": `${MoLang.isShieldPowered()}` }
            ],
            uvAnim: {
                offset: [
                    `(${MoLang.isShieldPowered()} ? (Math.cos(${MoLang.lifeTime()} * 22.92) * 3) : 0.0)`,
                    `(${MoLang.isShieldPowered()} ? (${MoLang.lifeTime()} * 0.2) : 0.0)`
                ],
                scale: [1.0, 1.0]
            },
            ignoreLighting: true
        }
    ]
});
