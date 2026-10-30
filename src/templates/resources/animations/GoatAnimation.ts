import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const GoatAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "goat.baby_scaling",
            loop: true,
            bones: {
                head: {
                    position: [0.0, 10.0, 4.0],
                    scale: 1.4
                }
            }
        },
        {
            idAnimation: "goat.look_at_target",
            loop: true,
            bones: {
                head: {
                    relativeTo: {
                        rotation: "entity"
                    },
                    rotation: [
                        MoLang.max("-40", MoLang.min(MoLang.targetXRotation(), 40)),
                        MoLang.max("-45", MoLang.min(MoLang.targetYRotation(), 25)),
                        0
                    ]
                }
            }
        },
        {
            idAnimation: "goat.walk",
            loop: true,
            bones: {
                right_back_leg: {
                    rotation: [`${MoLang.variable("tcos_right_side")} * 0.5`, 0.0, 0.0]
                },
                left_back_leg: {
                    rotation: [`${MoLang.variable("tcos_left_side")} * 0.5`, 0.0, 0.0]
                },
                right_front_leg: {
                    rotation: [`-${MoLang.variable("tcos_right_side")} * 0.5`, 0.0, 0.0]
                },
                left_front_leg: {
                    rotation: [`-${MoLang.variable("tcos_left_side")} * 0.5`, 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "goat.attack",
            loop: true,
            bones: {
                head: {
                    rotation: [MoLang.variable("attack_head_rot"), 0, 0]
                }
            }
        },
        {
            idAnimation: "goat.ram_attack",
            loop: true,
            animTimeUpdate: `Math.max(${MoLang.animTime()} + (variable.should_bow_head ? ${MoLang.deltaTime()} : -${MoLang.deltaTime()} * 4), 0)`,
            bones: {
                head: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "2.0": [60, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, 0],
                        "2.0": [0, -8, -3]
                    }
                }
            }
        }
    ]
});
