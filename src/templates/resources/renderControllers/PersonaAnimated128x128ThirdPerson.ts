import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const PersonaAnimated128x128ThirdPerson = createRPRenderController({
    renderControllers: [
        {
            idRender: "persona_animated_128x128.third_person",
            rebuildAnimationMatrices: true,
            geometry: "Geometry.animated_128x128",
            materials: [
                { "*": `${MoLang.isSpectator()} ? Material.spectator : Material.animated` }
            ],
            textures: ["Texture.animated_128x128"],
            partVisibility: [
                { "*": `!${MoLang.isSpectator()}` },
                { head: true },
                { hat: true },
                { helmet: "variable.helmet_layer_visible" },
                { leftLegging: `variable.leg_layer_visible && !${MoLang.isSpectator()}` },
                { rightLegging: `variable.leg_layer_visible && !${MoLang.isSpectator()}` },
                { leftBoot: `variable.boot_layer_visible && !${MoLang.isSpectator()}` },
                { rightBoot: `variable.boot_layer_visible && !${MoLang.isSpectator()}` },
                { leftSock: `variable.boot_layer_visible && variable.leg_layer_visible && !${MoLang.isSpectator()}` },
                { rightSock: `variable.boot_layer_visible && variable.leg_layer_visible && !${MoLang.isSpectator()}` },
                { bodyArmor: `variable.chest_layer_visible && !${MoLang.isSpectator()}` },
                { leftArmArmor: `variable.chest_layer_visible && !${MoLang.isSpectator()}` },
                { rightArmArmor: `variable.chest_layer_visible && !${MoLang.isSpectator()}` },
                { belt: `variable.chest_layer_visible && variable.leg_layer_visible && !${MoLang.isSpectator()}` },
                { cape: `!${MoLang.isSpectator()}` }
            ],
            uvAnim: {
                offset: [
                    0.0,
                    `Math.mod(Math.floor(${MoLang.lifeTime()} * 7),variable.animation_frames_128x128)/variable.animation_frames_128x128`
                ],
                scale: [1.0, 1.0]
            },
            color: {
                r: "1.0f",
                g: "1.0f",
                b: "1.0f",
                a: "0.3f"
            }
        }
    ]
});
