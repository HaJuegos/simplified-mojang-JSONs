import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const HorseV3Animation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "horse.v3.baby_transform",
            loop: true,
            bones: {
                body: {
                    position: [0.0, `11 * ((0.0625 - ${MoLang.modelScale()}) * 16.0)`, 0.0]
                },
                head: {
                    scale: `1.0 + 0.5 * (1.0 - (${MoLang.modelScale()} * 16.0))`
                },
                legbl: {
                    scale: [1.0, `1.0 + ((0.0625 - ${MoLang.modelScale()}) * 16.0)`, 1.0]
                },
                legbr: {
                    scale: [1.0, `1.0 + ((0.0625 - ${MoLang.modelScale()}) * 16.0)`, 1.0]
                },
                legfl: {
                    scale: [1.0, `1.0 + ((0.0625 - ${MoLang.modelScale()}) * 16.0)`, 1.0]
                },
                legfr: {
                    scale: [1.0, `1.0 + ((0.0625 - ${MoLang.modelScale()}) * 16.0)`, 1.0]
                }
            }
        },
        {
            idAnimation: "horse.v3.eat",
            loop: true,
            bones: {
                neck: {
                    rotation: [
                        `${MoLang.variable("eat_anim")} * (110.0 + ${MoLang.sin(`(${MoLang.lifeTime()} * 20.0) * 57.3`)} * 2.86)`,
                        0.0,
                        0.0
                    ]
                }
            }
        },
        {
            idAnimation: "horse.v3.look_at_player",
            loop: true,
            bones: {
                neck: {
                    rotation: [
                        MoLang.variable("head_x_rot"),
                        `(${MoLang.variable("stand_anim")} + ${MoLang.variable("inverse_max_stand_eat")}) * ${MoLang.headYRotation(20)}`,
                        0.0
                    ]
                }
            }
        },
        {
            idAnimation: "horse.v3.rear",
            loop: true,
            bones: {
                body: {
                    rotation: [`-45.0 * ${MoLang.variable("stand_anim")}`, 0.0, 0.0]
                },
                legbl: {
                    rotation: [`45.0 * ${MoLang.variable("stand_anim")}`, 0.0, 0.0]
                },
                legbr: {
                    rotation: [`45.0 * ${MoLang.variable("stand_anim")}`, 0.0, 0.0]
                },
                legfl: {
                    rotation: [
                        `(-60.0 + ${MoLang.cos(`(${MoLang.lifeTime()} * 20.0) * 34.38`)} * 57.3) * ${MoLang.variable("stand_anim")}`,
                        0.0,
                        0.0
                    ]
                },
                legfr: {
                    rotation: [
                        `(-60.0 - ${MoLang.cos(`(${MoLang.lifeTime()} * 20.0) * 34.38`)} * 57.3) * ${MoLang.variable("stand_anim")}`,
                        0.0,
                        0.0
                    ]
                },
                neck: {
                    rotation: [`(15.0 + ${MoLang.variable("head_x_rot")}) * ${MoLang.variable("stand_anim")}`, 0.0, 0.0]
                },
                tail: {
                    rotation: [`55.0 * ${MoLang.variable("stand_anim")}`, 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "horse.v3.tail",
            loop: true,
            bones: {
                tail: {
                    rotation: [0.0, `${MoLang.cos(`${MoLang.lifeTime()} * 802.0`)} * 57.3`, 0.0]
                }
            }
        },
        {
            idAnimation: "horse.v3.walk",
            loop: true,
            bones: {
                bagl: {
                    rotation: [`${MoLang.variable("leg_x_rot_anim")} / 5.0`, 0.0, 0.0]
                },
                bagr: {
                    rotation: [`-${MoLang.variable("leg_x_rot_anim")} / 5.0`, 0.0, 0.0]
                },
                legbl: {
                    rotation: [
                        `(-${MoLang.variable("leg_stand_factor")} * 28.6 * ${MoLang.modifiedMoveSpeed()}) * (1.0 - ${MoLang.variable("stand_anim")})`,
                        0.0,
                        0.0
                    ]
                },
                legbr: {
                    rotation: [
                        `(${MoLang.variable("leg_stand_factor")} * 28.6 * ${MoLang.modifiedMoveSpeed()}) * (1.0 - ${MoLang.variable("stand_anim")})`,
                        0.0,
                        0.0
                    ]
                },
                legfl: {
                    rotation: [`${MoLang.variable("leg_x_rot_anim")} * (1.0 - ${MoLang.variable("stand_anim")})`, 0.0, 0.0]
                },
                legfr: {
                    rotation: [`-${MoLang.variable("leg_x_rot_anim")} * (1.0 - ${MoLang.variable("stand_anim")})`, 0.0, 0.0]
                }
            }
        }
    ]
});
