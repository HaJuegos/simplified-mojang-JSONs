import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const IronGolemAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "iron_golem.attack",
            loop: true,
            bones: {
                arm0: {
                    rotation: [
                        `-114 + ((1.5 * math.abs(math.mod(variable.attack_animation_tick - ${MoLang.frameAlpha()}, 10) - 5) - 2.5) / 5) * 57.3`,
                        0.0,
                        0.0
                    ]
                },
                arm1: {
                    rotation: [
                        `-114 + ((1.5 * math.abs(math.mod(variable.attack_animation_tick - ${MoLang.frameAlpha()}, 10) - 5) - 2.5) / 5) * 57.3`,
                        0.0,
                        0.0
                    ]
                }
            }
        },
        {
            idAnimation: "iron_golem.flower",
            loop: true,
            bones: {
                arm0: {
                    rotation: ["-45.8 + ((0.25 * math.abs(math.mod(variable.offer_flower_tick, 70) - 35) - 17.5) / 35)", 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "iron_golem.move",
            loop: true,
            bones: {
                arm0: {
                    rotation: [`-${MoLang.variable("modified_tcos0")} * 2.0`, 0.0, 0.0]
                },
                arm1: {
                    rotation: [`${MoLang.variable("modified_tcos0")} * 2.0`, 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "iron_golem.move_to_target",
            loop: true,
            bones: {
                arm0: {
                    rotation: [`((math.abs(math.mod(${MoLang.modifiedDistanceMoved()}, 13) - 6.5) - 3.25) / 2.25) * 30.0`, 0.0, 0.0]
                },
                arm1: {
                    rotation: [`((math.abs(math.mod(${MoLang.modifiedDistanceMoved()}, 13) - 6.5) - 3.25) / 2.25) * -30.0`, 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "iron_golem.walk",
            loop: true,
            bones: {
                body: {
                    rotation: [0.0, 0.0, `${MoLang.variable("modified_tcos0")} / 1.5`]
                },
                head: {
                    rotation: [0.0, 0.0, `${MoLang.variable("modified_tcos0")} / 1.5`]
                },
                leg0: {
                    rotation: [`${MoLang.variable("modified_tcos0")} * 6.0`, 0.0, 0.0]
                },
                leg1: {
                    rotation: [`-${MoLang.variable("modified_tcos0")} * 6.0`, 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "iron_golem.walk_to_target",
            loop: true,
            bones: {
                body: {
                    rotation: [0.0, 0.0, `2.0 * (math.abs(math.mod(${MoLang.modifiedDistanceMoved()} + 6, 13.0) - 6.5) - 3.25)`]
                },
                head: {
                    rotation: [0.0, 0.0, `2.0 * (math.abs(math.mod(${MoLang.modifiedDistanceMoved()} + 6, 13.0) - 6.5) - 3.25)`]
                },
                leg0: {
                    rotation: [`(${MoLang.cos(`${MoLang.modifiedDistanceMoved()} * 38.17`)} * 40.0)`, 0.0, 0.0]
                },
                leg1: {
                    rotation: [`(${MoLang.cos(`${MoLang.modifiedDistanceMoved()} * 38.17 + 180`)} * 40.0)`, 0.0, 0.0]
                }
            }
        }
    ]
});
