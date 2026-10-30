import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const HoglinAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "hoglin.baby_scaling",
            loop: true,
            bones: {
                head: {
                    position: [0.0, 10.0, 4.0],
                    scale: 1.4
                }
            }
        },
        {
            idAnimation: "hoglin.look_at_target",
            loop: true,
            bones: {
                head: {
                    relativeTo: {
                        rotation: "entity"
                    },
                    rotation: [0, `${MoLang.targetYRotation()} - this`, 0]
                }
            }
        },
        {
            idAnimation: "hoglin.walk",
            loop: true,
            bones: {
                left_ear: {
                    rotation: [0.0, 0.0, `${MoLang.variable("tcos_left_side")} * 0.5`]
                },
                right_ear: {
                    rotation: [0.0, 0.0, `${MoLang.variable("tcos_right_side")} * 0.5`]
                },
                leg_back_right: {
                    rotation: [MoLang.variable("tcos_right_side"), 0.0, 0.0]
                },
                leg_back_left: {
                    rotation: [MoLang.variable("tcos_left_side"), 0.0, 0.0]
                },
                leg_front_right: {
                    rotation: [`-${MoLang.variable("tcos_right_side")}`, 0.0, 0.0]
                },
                leg_front_left: {
                    rotation: [`-${MoLang.variable("tcos_left_side")}`, 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "hoglin.attack",
            loop: true,
            bones: {
                head: {
                    rotation: [MoLang.variable("attack_head_rot"), 0, 0]
                }
            }
        }
    ]
});
