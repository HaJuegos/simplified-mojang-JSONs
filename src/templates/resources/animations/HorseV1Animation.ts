import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const HorseV1Animation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "horse.baby_transform",
            loop: true,
            bones: {
                body: {
                    position: [0.0, `24.0 * ${MoLang.variable("baby_ratio")}`, 0.0]
                },
                ear1: {
                    position: [0.0, `24.0 * ${MoLang.variable("baby_ratio")}`, 0.0],
                    scale: `(0.5 + (${MoLang.pow(`${MoLang.modelScale()} * 16.0`, 2.0)} * 0.5)) / (${MoLang.modelScale()} * 16.0)`
                },
                ear2: {
                    position: [0.0, `24.0 * ${MoLang.variable("baby_ratio")}`, 0.0],
                    scale: `(0.5 + (${MoLang.pow(`${MoLang.modelScale()} * 16.0`, 2.0)} * 0.5)) / (${MoLang.modelScale()} * 16.0)`
                },
                head: {
                    position: [0.0, `24.0 * ${MoLang.variable("baby_ratio")}`, 0.0],
                    scale: `(0.5 + (${MoLang.pow(`${MoLang.modelScale()} * 16.0`, 2.0)} * 0.5)) / (${MoLang.modelScale()} * 16.0)`
                },
                leg1a: {
                    position: [0.0, `13.0 * ${MoLang.variable("baby_ratio")}`, 0.0],
                    scale: [1.0, `1.0 + (1.0 * ${MoLang.variable("baby_ratio")})`, 1.0]
                },
                leg1b: {
                    position: [0.0, `7.0 * ${MoLang.variable("baby_ratio")}`, 0.0],
                    scale: [1.0, `1.0 + (2.0 * ${MoLang.variable("baby_ratio")})`, 1.0]
                },
                leg1c: {
                    position: [0.0, `7.0 * ${MoLang.variable("baby_ratio")}`, 0.0],
                    scale: [1.0, `1.0 + (1.0 * ${MoLang.variable("baby_ratio")})`, 1.0]
                },
                leg2a: {
                    position: [0.0, `13.0 * ${MoLang.variable("baby_ratio")}`, 0.0],
                    scale: [1.0, `1.0 + (1.0 * ${MoLang.variable("baby_ratio")})`, 1.0]
                },
                leg2b: {
                    position: [0.0, `7.0 * ${MoLang.variable("baby_ratio")}`, 0.0],
                    scale: [1.0, `1.0 + (2.0 * ${MoLang.variable("baby_ratio")})`, 1.0]
                },
                leg2c: {
                    position: [0.0, `7.0 * ${MoLang.variable("baby_ratio")}`, 0.0],
                    scale: [1.0, `1.0 + (1.0 * ${MoLang.variable("baby_ratio")})`, 1.0]
                },
                leg3a: {
                    position: [0.0, `15.0 * ${MoLang.variable("baby_ratio")}`, 0.0],
                    scale: [1.0, `1.0 + (1.0 * ${MoLang.variable("baby_ratio")})`, 1.0]
                },
                leg3b: {
                    position: [0.0, `8.0 * ${MoLang.variable("baby_ratio")}`, 0.0],
                    scale: [0.9, `1.0 + (2.0 * ${MoLang.variable("baby_ratio")})`, 0.9]
                },
                leg3c: {
                    position: [0.0, `7.0 * ${MoLang.variable("baby_ratio")}`, 0.0],
                    scale: [1.0, `1.0 + (1.0 * ${MoLang.variable("baby_ratio")})`, 1.0]
                },
                leg4a: {
                    position: [0.0, `15.0 * ${MoLang.variable("baby_ratio")}`, 0.0],
                    scale: [1.0, `1.0 + (1.0 * ${MoLang.variable("baby_ratio")})`, 1.0]
                },
                leg4b: {
                    position: [0.0, `8.0 * ${MoLang.variable("baby_ratio")}`, 0.0],
                    scale: [0.9, `1.0 + (2.0 * ${MoLang.variable("baby_ratio")})`, 0.9]
                },
                leg4c: {
                    position: [0.0, `7.0 * ${MoLang.variable("baby_ratio")}`, 0.0],
                    scale: [1.0, `1.0 + (1.0 * ${MoLang.variable("baby_ratio")})`, 1.0]
                },
                mane: {
                    position: [0.0, `24.0 * ${MoLang.variable("baby_ratio")}`, 0.0]
                },
                muleearl: {
                    position: [0.0, `24.0 * ${MoLang.variable("baby_ratio")}`, 0.0],
                    scale: "1.0 + 0.5 * (1.0 - this)"
                },
                muleearr: {
                    position: [0.0, `24.0 * ${MoLang.variable("baby_ratio")}`, 0.0],
                    scale: "1.0 + 0.5 * (1.0 - this)"
                },
                neck: {
                    position: [0.0, `24.0 * ${MoLang.variable("baby_ratio")}`, 0.0]
                },
                taila: {
                    position: [0.0, `24.0 * ${MoLang.variable("baby_ratio")}`, 0.0]
                },
                tailb: {
                    position: [0.0, `24.0 * ${MoLang.variable("baby_ratio")}`, 0.0]
                },
                tailc: {
                    position: [0.0, `24.0 * ${MoLang.variable("baby_ratio")}`, 0.0]
                }
            }
        },
        {
            idAnimation: "horse.eat",
            loop: true,
            bones: {
                ear1: {
                    position: [0.0, `-${MoLang.variable("eat_anim")} * 7.0`, `${MoLang.variable("eat_anim")} * -2.0`],
                    rotation: [
                        `${MoLang.variable("eat_anim")} * (110.0 + ${MoLang.sin(`(${MoLang.lifeTime()} * 20.0) * 57.3`)} * 2.86)`,
                        0.0,
                        0.0
                    ]
                },
                ear2: {
                    position: [0.0, `-${MoLang.variable("eat_anim")} * 7.0`, `${MoLang.variable("eat_anim")} * -2.0`],
                    rotation: [
                        `${MoLang.variable("eat_anim")} * (110.0 + ${MoLang.sin(`(${MoLang.lifeTime()} * 20.0) * 57.3`)} * 2.86)`,
                        0.0,
                        0.0
                    ]
                },
                head: {
                    position: [0.0, `-${MoLang.variable("eat_anim")} * 7.0`, `${MoLang.variable("eat_anim")} * -2.0`],
                    rotation: [
                        `${MoLang.variable("eat_anim")} * (110.0 + ${MoLang.sin(`(${MoLang.lifeTime()} * 20.0) * 57.3`)} * 2.86)`,
                        0.0,
                        0.0
                    ]
                },
                headsaddle: {
                    position: [0.0, `-${MoLang.variable("eat_anim")} * 7.0`, `${MoLang.variable("eat_anim")} * -2.0`],
                    rotation: [
                        `${MoLang.variable("eat_anim")} * (110.0 + ${MoLang.sin(`(${MoLang.lifeTime()} * 20.0) * 57.3`)} * 2.86)`,
                        0.0,
                        0.0
                    ]
                },
                mane: {
                    position: [0.0, `-${MoLang.variable("eat_anim")} * 7.0`, `${MoLang.variable("eat_anim")} * -2.0`],
                    rotation: [
                        `${MoLang.variable("eat_anim")} * (110.0 + ${MoLang.sin(`(${MoLang.lifeTime()} * 20.0) * 57.3`)} * 2.86)`,
                        0.0,
                        0.0
                    ]
                },
                muleearl: {
                    position: [0.0, `-${MoLang.variable("eat_anim")} * 7.0`, `${MoLang.variable("eat_anim")} * -2.0`],
                    rotation: [
                        `${MoLang.variable("eat_anim")} * (110.0 + ${MoLang.sin(`(${MoLang.lifeTime()} * 20.0) * 57.3`)} * 2.86)`,
                        0.0,
                        0.0
                    ]
                },
                muleearr: {
                    position: [0.0, `-${MoLang.variable("eat_anim")} * 7.0`, `${MoLang.variable("eat_anim")} * -2.0`],
                    rotation: [
                        `${MoLang.variable("eat_anim")} * (110.0 + ${MoLang.sin(`(${MoLang.lifeTime()} * 20.0) * 57.3`)} * 2.86)`,
                        0.0,
                        0.0
                    ]
                },
                neck: {
                    position: [0.0, `-${MoLang.variable("eat_anim")} * 7.0`, `${MoLang.variable("eat_anim")} * -2.0`],
                    rotation: [
                        `${MoLang.variable("eat_anim")} * (110.0 + ${MoLang.sin(`(${MoLang.lifeTime()} * 20.0) * 57.3`)} * 2.86)`,
                        0.0,
                        0.0
                    ]
                },
                saddlemouthl: {
                    position: [0.0, `-${MoLang.variable("eat_anim")} * 7.0`, `${MoLang.variable("eat_anim")} * -2.0`],
                    rotation: [
                        `${MoLang.variable("eat_anim")} * (110.0 + ${MoLang.sin(`(${MoLang.lifeTime()} * 20.0) * 57.3`)} * 2.86)`,
                        0.0,
                        0.0
                    ]
                },
                saddlemouthline: {
                    position: [0.0, `-${MoLang.variable("eat_anim")} * 7.0`, `${MoLang.variable("eat_anim")} * -2.0`],
                    rotation: [
                        `${MoLang.variable("eat_anim")} * (110.0 + ${MoLang.sin(`(${MoLang.lifeTime()} * 20.0) * 57.3`)} * 2.86)`,
                        0.0,
                        0.0
                    ]
                },
                saddlemouthliner: {
                    position: [0.0, `-${MoLang.variable("eat_anim")} * 7.0`, `${MoLang.variable("eat_anim")} * -2.0`],
                    rotation: [
                        `${MoLang.variable("eat_anim")} * (110.0 + ${MoLang.sin(`(${MoLang.lifeTime()} * 20.0) * 57.3`)} * 2.86)`,
                        0.0,
                        0.0
                    ]
                },
                saddlemouthr: {
                    position: [0.0, `-${MoLang.variable("eat_anim")} * 7.0`, `${MoLang.variable("eat_anim")} * -2.0`],
                    rotation: [
                        `${MoLang.variable("eat_anim")} * (110.0 + ${MoLang.sin(`(${MoLang.lifeTime()} * 20.0) * 57.3`)} * 2.86)`,
                        0.0,
                        0.0
                    ]
                }
            }
        },
        {
            idAnimation: "horse.look_at_player",
            loop: true,
            bones: {
                ear1: {
                    rotation: [
                        0.0,
                        `(${MoLang.variable("stand_anim")} + ${MoLang.variable("inverse_max_stand_eat")}) * ${MoLang.headYRotation(20)}`,
                        0.0
                    ]
                },
                ear2: {
                    rotation: [
                        0.0,
                        `(${MoLang.variable("stand_anim")} + ${MoLang.variable("inverse_max_stand_eat")}) * ${MoLang.headYRotation(20)}`,
                        0.0
                    ]
                },
                head: {
                    rotation: [
                        0.0,
                        `(${MoLang.variable("stand_anim")} + ${MoLang.variable("inverse_max_stand_eat")}) * ${MoLang.headYRotation(20)}`,
                        0.0
                    ]
                },
                headsaddle: {
                    rotation: [
                        0.0,
                        `(${MoLang.variable("stand_anim")} + ${MoLang.variable("inverse_max_stand_eat")}) * ${MoLang.headYRotation(20)}`,
                        0.0
                    ]
                },
                mane: {
                    rotation: [
                        0.0,
                        `(${MoLang.variable("stand_anim")} + ${MoLang.variable("inverse_max_stand_eat")}) * ${MoLang.headYRotation(20)}`,
                        0.0
                    ]
                },
                muleearl: {
                    rotation: [
                        0.0,
                        `(${MoLang.variable("stand_anim")} + ${MoLang.variable("inverse_max_stand_eat")}) * ${MoLang.headYRotation(20)}`,
                        0.0
                    ]
                },
                muleearr: {
                    rotation: [
                        0.0,
                        `(${MoLang.variable("stand_anim")} + ${MoLang.variable("inverse_max_stand_eat")}) * ${MoLang.headYRotation(20)}`,
                        0.0
                    ]
                },
                neck: {
                    rotation: [
                        0.0,
                        `(${MoLang.variable("stand_anim")} + ${MoLang.variable("inverse_max_stand_eat")}) * ${MoLang.headYRotation(20)}`,
                        0.0
                    ]
                },
                saddlemouthl: {
                    rotation: [
                        0.0,
                        `(${MoLang.variable("stand_anim")} + ${MoLang.variable("inverse_max_stand_eat")}) * ${MoLang.headYRotation(20)}`,
                        0.0
                    ]
                },
                saddlemouthline: {
                    rotation: [
                        0.0,
                        `(${MoLang.variable("stand_anim")} + ${MoLang.variable("inverse_max_stand_eat")}) * ${MoLang.headYRotation(20)}`,
                        0.0
                    ]
                },
                saddlemouthliner: {
                    rotation: [
                        0.0,
                        `(${MoLang.variable("stand_anim")} + ${MoLang.variable("inverse_max_stand_eat")}) * ${MoLang.headYRotation(20)}`,
                        0.0
                    ]
                },
                saddlemouthr: {
                    rotation: [
                        0.0,
                        `(${MoLang.variable("stand_anim")} + ${MoLang.variable("inverse_max_stand_eat")}) * ${MoLang.headYRotation(20)}`,
                        0.0
                    ]
                }
            }
        },
        {
            idAnimation: "horse.mouth",
            loop: true,
            bones: {
                lmouth: {
                    position: [0.0, 0.0, MoLang.variable("mouth_anim")],
                    rotation: ["variable.mouth_anim * 5.0 - this", 0.0, 0.0]
                },
                umouth: {
                    rotation: ["-variable.mouth_anim * 5.0 - this", 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "horse.setup",
            loop: true,
            bones: {
                ear1: {
                    position: [0.0, "-this - 3.0", "-this - 10.0"],
                    rotation: ["-this + variable.head_rotation.x", "-this", 0.0]
                },
                ear2: {
                    position: [0.0, "-this - 3.0", "-this - 10.0"],
                    rotation: ["-this + variable.head_rotation.x", "-this", 0.0]
                },
                head: {
                    position: [0.0, "-this - 3.0", "-this - 10.0"],
                    rotation: [0.0, "-this", 0.0]
                },
                lmouth: {
                    position: [0.0, "-this", "-this"],
                    rotation: [0.0, "-this", 0.0]
                },
                leg1a: {
                    rotation: ["-this", 0.0, 0.0]
                },
                leg1b: {
                    position: [0.0, "-this - variable.leg_back_origin.y - 7.0", "-this + variable.leg_back_origin.z"],
                    rotation: ["-this", 0.0, 0.0]
                },
                leg1c: {
                    position: [0.0, "-this - variable.leg_back_origin.y - 7.0", "-this + variable.leg_back_origin.z"],
                    rotation: ["-this", 0.0, 0.0]
                },
                leg2a: {
                    rotation: ["-this", 0.0, 0.0]
                },
                leg2b: {
                    position: [0.0, "-this - variable.leg_back_origin.y - 7.0", "-this + variable.leg_back_origin.z"],
                    rotation: ["-this", 0.0, 0.0]
                },
                leg2c: {
                    position: [0.0, "-this - variable.leg_back_origin.y - 7.0", "-this + variable.leg_back_origin.z"],
                    rotation: ["-this", 0.0, 0.0]
                },
                leg3a: {
                    position: [0.0, "-this - 9.0", 0.0],
                    rotation: ["-this", 0.0, 0.0]
                },
                leg3b: {
                    position: [0.0, "-this - variable.leg_front_origin.y - 7.0", "-this + variable.leg_front_origin.z"],
                    rotation: ["-this", 0.0, 0.0]
                },
                leg3c: {
                    position: [0.0, "-this - variable.leg_front_origin.y - 7.0", "-this + variable.leg_front_origin.z"],
                    rotation: ["-this", 0.0, 0.0]
                },
                leg4a: {
                    position: [0.0, "-this - 9.0", 0.0],
                    rotation: ["-this", 0.0, 0.0]
                },
                leg4b: {
                    position: [0.0, "-this - variable.leg_front_origin.y - 7.0", "-this + variable.leg_front_origin.z"],
                    rotation: ["-this", 0.0, 0.0]
                },
                leg4c: {
                    position: [0.0, "-this - variable.leg_front_origin.y - 7.0", "-this + variable.leg_front_origin.z"],
                    rotation: ["-this", 0.0, 0.0]
                },
                MuleEarL: {
                    position: [0.0, "-this - 3.0", "-this - 10.0"],
                    rotation: ["-this + variable.head_rotation.x", "-this", 0.0]
                },
                MuleEarR: {
                    position: [0.0, "-this - 3.0", "-this - 10.0"],
                    rotation: ["-this + variable.head_rotation.x", "-this", 0.0]
                },
                mane: {
                    position: [0.0, "-this - 3.0", "-this - 9.95"],
                    rotation: [0.0, "-this", 0.0]
                },
                neck: {
                    position: [0.0, "-this - 3.0", "-this - 10.0"],
                    rotation: [0.0, "-this", 0.0]
                },
                umouth: {
                    position: [0.0, "-this", "-this"],
                    rotation: [0.0, "-this", 0.0]
                }
            }
        },
        {
            idAnimation: "horse.shake_tail",
            loop: true,
            bones: {
                taila: {
                    rotation: [60.0, `${MoLang.cos(`${MoLang.lifeTime()} * 802.0`)} * 57.3`, 0.0]
                },
                tailb: {
                    rotation: [60.0, `${MoLang.cos(`${MoLang.lifeTime()} * 802.0`)} * 57.3`, 0.0]
                },
                tailc: {
                    rotation: [60.0, `${MoLang.cos(`${MoLang.lifeTime()} * 802.0`)} * 57.3`, 0.0]
                }
            }
        },
        {
            idAnimation: "horse.stand",
            loop: true,
            bones: {
                bag1: {
                    position: [0.0, `${MoLang.variable("stand_anim")} * -2.5`, `${MoLang.variable("stand_anim")} * 4.0`],
                    rotation: [90.0, `${MoLang.variable("stand_anim")} * 45.0`, 90.0]
                },
                bag2: {
                    position: [0.0, `${MoLang.variable("stand_anim")} * -2.5`, `${MoLang.variable("stand_anim")} * 4.0`],
                    rotation: [90.0, `${MoLang.variable("stand_anim")} * 45.0`, 90.0]
                },
                body: {
                    rotation: [`${MoLang.variable("stand_anim")} * -45.0`, 0.0, 0.0]
                },
                ear1: {
                    position: [0.0, `${MoLang.variable("stand_anim")} * 11.0`, `${MoLang.variable("stand_anim")} * 7.0`],
                    rotation: [
                        "variable.stand_anim * (15.0 + variable.head_x_rot) + variable.base_head_angle - this",
                        "(variable.stand_anim + variable.inverse_max_stand_eat) * query.head_y_rotation(20) - this",
                        0.0
                    ]
                },
                ear2: {
                    position: [0.0, `${MoLang.variable("stand_anim")} * 11.0`, `${MoLang.variable("stand_anim")} * 7.0`],
                    rotation: [
                        "variable.stand_anim * (15.0 + variable.head_x_rot) + variable.base_head_angle - this",
                        "(variable.stand_anim + variable.inverse_max_stand_eat) * query.head_y_rotation(20) - this",
                        0.0
                    ]
                },
                head: {
                    position: [0.0, `${MoLang.variable("stand_anim")} * 11.0`, `${MoLang.variable("stand_anim")} * 7.0`],
                    rotation: [
                        "variable.stand_anim * (15.0 + variable.head_x_rot) + variable.base_head_angle - this",
                        "(variable.stand_anim + variable.inverse_max_stand_eat) * query.head_y_rotation(20) - this",
                        0.0
                    ]
                },
                headsaddle: {
                    position: [0.0, `${MoLang.variable("stand_anim")} * 11.0`, `${MoLang.variable("stand_anim")} * 7.0`],
                    rotation: [
                        "variable.stand_anim * (15.0 + variable.head_x_rot) + variable.base_head_angle - this",
                        "(variable.stand_anim + variable.inverse_max_stand_eat) * query.head_y_rotation(20) - this",
                        0.0
                    ]
                },
                leg1a: {
                    position: [0.0, 0.0, 0.0],
                    rotation: [`${MoLang.variable("stand_anim")} * 10.0`, 0.0, 0.0]
                },
                leg1b: {
                    position: [0.0, 0.0, `${MoLang.variable("stand_anim")} * 1.0`],
                    rotation: [`${MoLang.variable("stand_anim")} * -10.0`, 0.0, 0.0]
                },
                leg1c: {
                    position: [0.0, 0.0, `${MoLang.variable("stand_anim")} * 1.0`],
                    rotation: [`${MoLang.variable("stand_anim")} * -10.0`, 0.0, 0.0]
                },
                leg2a: {
                    position: [0.0, 0.0, 0.0],
                    rotation: [`${MoLang.variable("stand_anim")} * 10.0`, 0.0, 0.0]
                },
                leg2b: {
                    position: [0.0, 0.0, `${MoLang.variable("stand_anim")} * 1.0`],
                    rotation: [`${MoLang.variable("stand_anim")} * -10.0`, 0.0, 0.0]
                },
                leg2c: {
                    position: [0.0, 0.0, `${MoLang.variable("stand_anim")} * 1.0`],
                    rotation: [`${MoLang.variable("stand_anim")} * -10.0`, 0.0, 0.0]
                },
                leg3a: {
                    position: [0.0, "variable.stand_anim * (-this + 1.0)", `${MoLang.variable("stand_anim")} * 5.0`],
                    rotation: [
                        `(-60.0 * ${MoLang.variable("stand_anim")} + ${MoLang.variable("leg_stand")} * 57.3) * ${MoLang.variable("stand_anim")}`,
                        0.0,
                        0.0
                    ]
                },
                leg3b: {
                    position: [
                        0.0,
                        "-(variable.leg_stand * 5.0) - (variable.stand_anim * this + 1.0)",
                        `(${MoLang.variable("leg_stand")} * 3.0) + ${MoLang.variable("stand_anim")} * 2.0`
                    ],
                    rotation: [`(${MoLang.variable("leg_stand")} * 90.0) - 25.0 * ${MoLang.variable("stand_anim")}`, 0.0, 0.0]
                },
                leg3c: {
                    position: [
                        0.0,
                        "-(variable.leg_stand * 5.0) - (variable.stand_anim * this + 1.0)",
                        `(${MoLang.variable("leg_stand")} * 3.0) + ${MoLang.variable("stand_anim")} * 2.0`
                    ],
                    rotation: [`(${MoLang.variable("leg_stand")} * 90.0) - 25.0 * ${MoLang.variable("stand_anim")}`, 0.0, 0.0]
                },
                leg4a: {
                    position: [0.0, "variable.stand_anim * (-this + 1.0)", `${MoLang.variable("stand_anim")} * 5.0`],
                    rotation: [`(-60.0 * ${MoLang.variable("stand_anim")} - ${MoLang.variable("leg_stand")} * 57.3)`, 0.0, 0.0]
                },
                leg4b: {
                    position: [
                        0.0,
                        "(variable.leg_stand * 5.0) - (variable.stand_anim * this + 1.0)",
                        `-(${MoLang.variable("leg_stand")} * 3.0) + ${MoLang.variable("stand_anim")} * 2.0`
                    ],
                    rotation: [`-(${MoLang.variable("leg_stand")} * 90.0) - 25.0 * ${MoLang.variable("stand_anim")}`, 0.0, 0.0]
                },
                leg4c: {
                    position: [
                        0.0,
                        "(variable.leg_stand * 5.0) - (variable.stand_anim * this + 1.0)",
                        `-(${MoLang.variable("leg_stand")} * 3.0) + ${MoLang.variable("stand_anim")} * 2.0`
                    ],
                    rotation: [`-(${MoLang.variable("leg_stand")} * 90.0) - 25.0 * ${MoLang.variable("stand_anim")}`, 0.0, 0.0]
                },
                mane: {
                    position: [0.0, `${MoLang.variable("stand_anim")} * 11.0`, `${MoLang.variable("stand_anim")} * 7.0`],
                    rotation: [
                        "variable.stand_anim * (15.0 + variable.head_x_rot) + variable.base_head_angle - this",
                        "(variable.stand_anim + variable.inverse_max_stand_eat) * query.head_y_rotation(20) - this",
                        0.0
                    ]
                },
                muleearl: {
                    position: [0.0, `${MoLang.variable("stand_anim")} * 11.0`, `${MoLang.variable("stand_anim")} * 7.0`],
                    rotation: [
                        "variable.stand_anim * (15.0 + variable.head_x_rot) + variable.base_head_angle - this",
                        "(variable.stand_anim + variable.inverse_max_stand_eat) * query.head_y_rotation(20) - this",
                        0.0
                    ]
                },
                muleearr: {
                    position: [0.0, `${MoLang.variable("stand_anim")} * 11.0`, `${MoLang.variable("stand_anim")} * 7.0`],
                    rotation: [
                        "variable.stand_anim * (15.0 + variable.head_x_rot) + variable.base_head_angle - this",
                        "(variable.stand_anim + variable.inverse_max_stand_eat) * query.head_y_rotation(20) - this",
                        0.0
                    ]
                },
                neck: {
                    position: [0.0, `${MoLang.variable("stand_anim")} * 11.0`, `${MoLang.variable("stand_anim")} * 7.0`],
                    rotation: [
                        "variable.stand_anim * (15.0 + variable.head_x_rot) + variable.base_head_angle - this",
                        "(variable.stand_anim + variable.inverse_max_stand_eat) * query.head_y_rotation(20) - this",
                        0.0
                    ]
                },
                saddle: {
                    position: [0.0, `${MoLang.variable("stand_anim")} * 4.5`, `${MoLang.variable("stand_anim")} * 6.5`],
                    rotation: [`${MoLang.variable("stand_anim")} * -45.0`, 0.0, 0.0]
                },
                saddleb: {
                    position: [0.0, `${MoLang.variable("stand_anim")} * 4.5`, `${MoLang.variable("stand_anim")} * 6.5`],
                    rotation: [`${MoLang.variable("stand_anim")} * -45.0`, 0.0, 0.0]
                },
                saddlec: {
                    position: [0.0, `${MoLang.variable("stand_anim")} * 4.5`, `${MoLang.variable("stand_anim")} * 6.5`],
                    rotation: [`${MoLang.variable("stand_anim")} * -45.0`, 0.0, 0.0]
                },
                saddlel: {
                    position: [0.0, `${MoLang.variable("stand_anim")} * 4.5`, `${MoLang.variable("stand_anim")} * 6.5`]
                },
                saddlel2: {
                    position: [0.0, `${MoLang.variable("stand_anim")} * 4.5`, `${MoLang.variable("stand_anim")} * 6.5`]
                },
                saddlemouthl: {
                    position: [0.0, `${MoLang.variable("stand_anim")} * 11.0`, `${MoLang.variable("stand_anim")} * 7.0`],
                    rotation: [
                        "variable.stand_anim * (15.0 + variable.head_x_rot) + variable.base_head_angle - this",
                        "(variable.stand_anim + variable.inverse_max_stand_eat) * query.head_y_rotation(20) - this",
                        0.0
                    ]
                },
                saddlemouthline: {
                    position: [0.0, `${MoLang.variable("stand_anim")} * 11.0`, `${MoLang.variable("stand_anim")} * 7.0`],
                    rotation: [
                        "variable.stand_anim * (15.0 + variable.head_x_rot) + variable.base_head_angle - this",
                        "(variable.stand_anim + variable.inverse_max_stand_eat) * query.head_y_rotation(20) - this",
                        0.0
                    ]
                },
                saddlemouthliner: {
                    position: [0.0, `${MoLang.variable("stand_anim")} * 11.0`, `${MoLang.variable("stand_anim")} * 7.0`],
                    rotation: [
                        "variable.stand_anim * (15.0 + variable.head_x_rot) + variable.base_head_angle - this",
                        "(variable.stand_anim + variable.inverse_max_stand_eat) * query.head_y_rotation(20) - this",
                        0.0
                    ]
                },
                saddlemouthr: {
                    position: [0.0, `${MoLang.variable("stand_anim")} * 11.0`, `${MoLang.variable("stand_anim")} * 7.0`],
                    rotation: [
                        "variable.stand_anim * (15.0 + variable.head_x_rot) + variable.base_head_angle - this",
                        "(variable.stand_anim + variable.inverse_max_stand_eat) * query.head_y_rotation(20) - this",
                        0.0
                    ]
                },
                saddler: {
                    position: [0.0, `${MoLang.variable("stand_anim")} * 4.5`, `${MoLang.variable("stand_anim")} * 6.5`]
                },
                saddler2: {
                    position: [0.0, `${MoLang.variable("stand_anim")} * 4.5`, `${MoLang.variable("stand_anim")} * 6.5`]
                },
                taila: {
                    position: [0.0, `${MoLang.variable("stand_anim")} * -5.0`, 0.0],
                    rotation: [`${MoLang.variable("stand_anim")} * -10.0`, 0.0, 0.0]
                },
                tailb: {
                    position: [0.0, `${MoLang.variable("stand_anim")} * -5.0`, 0.0],
                    rotation: [`${MoLang.variable("stand_anim")} * -10.0`, 0.0, 0.0]
                },
                tailc: {
                    position: [0.0, `${MoLang.variable("stand_anim")} * -5.0`, 0.0],
                    rotation: [`${MoLang.variable("stand_anim")} * -10.0`, 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "horse.walk",
            loop: true,
            bones: {
                bag1: {
                    rotation: [`${MoLang.variable("leg_x_rot_anim")} / 5.0`, 0.0, 0.0]
                },
                bag2: {
                    rotation: [`-${MoLang.variable("leg_x_rot_anim")} / 5.0`, 0.0, 0.0]
                },
                ear1: {
                    rotation: [MoLang.variable("head_x_rot"), 0.0, 0.0]
                },
                ear2: {
                    rotation: [MoLang.variable("head_x_rot"), 0.0, 0.0]
                },
                head: {
                    rotation: [MoLang.variable("head_x_rot"), 0.0, 0.0]
                },
                headsaddle: {
                    rotation: [MoLang.variable("head_x_rot"), 0.0, 0.0]
                },
                leg1a: {
                    rotation: [
                        `(-${MoLang.variable("leg_walk_factor")} * 28.6 * ${MoLang.modifiedMoveSpeed()}) * (1.0 - ${MoLang.variable("stand_anim")})`,
                        0.0,
                        0.0
                    ]
                },
                leg1b: {
                    position: [
                        0.0,
                        `(${MoLang.abs(MoLang.variable("leg_walk_factor"))} * 28.6 * ${MoLang.modifiedMoveSpeed()}) * (0.066 + (${MoLang.variable("baby_ratio")} * 0.05))`,
                        `(-${MoLang.variable("leg_walk_factor")} * 28.6 * ${MoLang.modifiedMoveSpeed()}) * (0.09 + (${MoLang.variable("baby_ratio")} * 0.08))`
                    ],
                    rotation: [
                        `(-${MoLang.variable("leg_walk_factor")} * 28.6 * ${MoLang.modifiedMoveSpeed()}) * (1.0 - ${MoLang.variable("stand_anim")})`,
                        0.0,
                        0.0
                    ]
                },
                leg1c: {
                    position: [
                        0.0,
                        `(${MoLang.abs(MoLang.variable("leg_walk_factor"))} * 28.6 * ${MoLang.modifiedMoveSpeed()}) * (0.066 + (${MoLang.variable("baby_ratio")} * 0.05)) + (6.0 * ${MoLang.variable("baby_ratio")} * ${MoLang.max("-45.0", MoLang.min(`-${MoLang.variable("leg_x_rot_anim")}`, 0.0))} / -45.0)`,
                        `(-${MoLang.variable("leg_walk_factor")} * 28.6 * ${MoLang.modifiedMoveSpeed()}) * (0.09 + (${MoLang.variable("baby_ratio")} * 0.08))`
                    ],
                    rotation: [
                        `(-${MoLang.variable("leg_walk_factor")} * 28.6 * ${MoLang.modifiedMoveSpeed()}) * (1.0 - ${MoLang.variable("stand_anim")})`,
                        0.0,
                        0.0
                    ]
                },
                leg2a: {
                    rotation: [
                        `(${MoLang.variable("leg_walk_factor")} * 28.6 * ${MoLang.modifiedMoveSpeed()}) * (1.0 - ${MoLang.variable("stand_anim")})`,
                        0.0,
                        0.0
                    ]
                },
                leg2b: {
                    position: [
                        0.0,
                        `(${MoLang.abs(MoLang.variable("leg_walk_factor"))} * 28.6 * ${MoLang.modifiedMoveSpeed()}) * (0.066 + (${MoLang.variable("baby_ratio")} * 0.05))`,
                        `(${MoLang.variable("leg_walk_factor")} * 28.6 * ${MoLang.modifiedMoveSpeed()}) * (0.09 + (${MoLang.variable("baby_ratio")} * 0.08))`
                    ],
                    rotation: [
                        `(${MoLang.variable("leg_walk_factor")} * 28.6 * ${MoLang.modifiedMoveSpeed()}) * (1.0 - ${MoLang.variable("stand_anim")})`,
                        0.0,
                        0.0
                    ]
                },
                leg2c: {
                    position: [
                        0.0,
                        `(${MoLang.abs(MoLang.variable("leg_walk_factor"))} * 28.6 * ${MoLang.modifiedMoveSpeed()}) * (0.066 + (${MoLang.variable("baby_ratio")} * 0.05)) + (6.0 * ${MoLang.variable("baby_ratio")} * ${MoLang.max("-45.0", MoLang.min(MoLang.variable("leg_x_rot_anim"), 0.0))} / -45)`,
                        `(${MoLang.variable("leg_walk_factor")} * 28.6 * ${MoLang.modifiedMoveSpeed()}) * (0.09 + (${MoLang.variable("baby_ratio")} * 0.08))`
                    ],
                    rotation: [
                        `(${MoLang.variable("leg_walk_factor")} * 28.6 * ${MoLang.modifiedMoveSpeed()}) * (1.0 - ${MoLang.variable("stand_anim")})`,
                        0.0,
                        0.0
                    ]
                },
                leg3a: {
                    rotation: [`${MoLang.variable("leg_x_rot_anim")} * (1.0 - ${MoLang.variable("stand_anim")})`, 0.0, 0.0]
                },
                leg3b: {
                    position: [
                        0.0,
                        `${MoLang.abs(MoLang.variable("leg_x_rot_anim"))} * (0.066 + (${MoLang.variable("baby_ratio")} * 0.05))`,
                        `${MoLang.variable("leg_x_rot_anim")} * (0.09 + (${MoLang.variable("baby_ratio")} * 0.08))`
                    ],
                    rotation: [`${MoLang.variable("leg_x_rot_anim")} * (1.0 - ${MoLang.variable("stand_anim")})`, 0.0, 0.0]
                },
                leg3c: {
                    position: [
                        0.0,
                        `${MoLang.abs(MoLang.variable("leg_x_rot_anim"))} * (0.066 + (${MoLang.variable("baby_ratio")} * 0.05)) + (6.0 * ${MoLang.variable("baby_ratio")} * ${MoLang.max(0.0, MoLang.min(MoLang.variable("leg_x_rot_anim"), 45.0))} / 45.0)`,
                        `${MoLang.variable("leg_x_rot_anim")} * (0.09 + (${MoLang.variable("baby_ratio")} * 0.08))`
                    ],
                    rotation: [`${MoLang.variable("leg_x_rot_anim")} * (1.0 - ${MoLang.variable("stand_anim")})`, 0.0, 0.0]
                },
                leg4a: {
                    rotation: [`-${MoLang.variable("leg_x_rot_anim")} * (1.0 - ${MoLang.variable("stand_anim")})`, 0.0, 0.0]
                },
                leg4b: {
                    position: [
                        0.0,
                        `${MoLang.abs(MoLang.variable("leg_x_rot_anim"))} * (0.066 + (${MoLang.variable("baby_ratio")} * 0.05))`,
                        `-${MoLang.variable("leg_x_rot_anim")} * (0.09 + (${MoLang.variable("baby_ratio")} * 0.08))`
                    ],
                    rotation: [`-${MoLang.variable("leg_x_rot_anim")} * (1.0 - ${MoLang.variable("stand_anim")})`, 0.0, 0.0]
                },
                leg4c: {
                    position: [
                        0.0,
                        `${MoLang.abs(MoLang.variable("leg_x_rot_anim"))} * (0.066 + (${MoLang.variable("baby_ratio")} * 0.05)) + (6.0 * ${MoLang.variable("baby_ratio")} * ${MoLang.max(0.0, MoLang.min(`-${MoLang.variable("leg_x_rot_anim")}`, 45.0))} / 45.0)`,
                        `-${MoLang.variable("leg_x_rot_anim")} * (0.09 + (${MoLang.variable("baby_ratio")} * 0.08))`
                    ],
                    rotation: [`-${MoLang.variable("leg_x_rot_anim")} * (1.0 - ${MoLang.variable("stand_anim")})`, 0.0, 0.0]
                },
                mane: {
                    rotation: [MoLang.variable("head_x_rot"), 0.0, 0.0]
                },
                muleearl: {
                    rotation: [MoLang.variable("head_x_rot"), 0.0, 0.0]
                },
                muleearr: {
                    rotation: [MoLang.variable("head_x_rot"), 0.0, 0.0]
                },
                neck: {
                    rotation: [MoLang.variable("head_x_rot"), 0.0, 0.0]
                },
                saddlemouthl: {
                    rotation: [MoLang.variable("head_x_rot"), 0.0, 0.0]
                },
                saddlemouthline: {
                    rotation: [MoLang.variable("head_x_rot"), 0.0, 0.0]
                },
                saddlemouthliner: {
                    rotation: [MoLang.variable("head_x_rot"), 0.0, 0.0]
                },
                saddlemouthr: {
                    rotation: [MoLang.variable("head_x_rot"), 0.0, 0.0]
                },
                taila: {
                    rotation: [MoLang.variable("walk_tail_angle"), 0.0, 0.0]
                },
                tailb: {
                    rotation: [MoLang.variable("walk_tail_angle"), 0.0, 0.0]
                },
                tailc: {
                    rotation: [MoLang.variable("walk_tail_angle"), 0.0, 0.0]
                }
            }
        }
    ]
});
