import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const TurtleAnimations = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "turtle.general",
            loop: true,
            bones: {
                body: {
                    position: [0.0, `${MoLang.isPregnant()} ? 1.0 : 0.0`, 0.0],
                    rotation: ["-this", 0.0, 0.0]
                },
                eggbelly: {
                    position: [0.0, -0.08, 0.0],
                    rotation: ["-this", 0.0, 0.0],
                    scale: `${MoLang.isPregnant()} ? 1.0 : 0.0`
                }
            }
        },
        {
            idAnimation: "turtle.ground_move",
            animTimeUpdate: MoLang.modifiedDistanceMoved(),
            loop: true,
            bones: {
                leg0: {
                    rotation: [
                        "-this",
                        `math.clamp(math.cos(${MoLang.animTime()} * variable.timemultiplier * variable.legspeedmultiplier * 57.3 + 180) * variable.backlegmultiplier * ${MoLang.modifiedMoveSpeed()} * 57.3, -90.0, 90.0) - this`,
                        "-this"
                    ]
                },
                leg1: {
                    rotation: [
                        "-this",
                        `math.clamp(math.cos(${MoLang.animTime()} * variable.timemultiplier * variable.legspeedmultiplier * 57.3) * variable.backlegmultiplier * ${MoLang.modifiedMoveSpeed()} * 57.3, -90.0, 90.0) - this`,
                        "-this"
                    ]
                },
                leg2: {
                    rotation: [
                        "-this",
                        `${MoLang.isLayingEgg()} ? math.cos(${MoLang.lifeTime()} * 1146.0 + 180) * 90.0 : math.clamp(math.cos(${MoLang.animTime()} * variable.timemultiplier * variable.legspeedmultiplier * 57.3 + 180) * variable.frontlegmultiplier * ${MoLang.modifiedMoveSpeed()} * 57.3, -90.0, 90.0) - this`,
                        "-this"
                    ]
                },
                leg3: {
                    rotation: [
                        "-this",
                        `${MoLang.isLayingEgg()} ? math.cos(${MoLang.lifeTime()} * 1146.0) * 90.0 : math.clamp(math.cos(${MoLang.animTime()} * variable.timemultiplier * variable.legspeedmultiplier * 57.3) * variable.frontlegmultiplier * ${MoLang.modifiedMoveSpeed()} * 57.3, -90.0, 90.0) - this`,
                        "-this"
                    ]
                }
            }
        },
        {
            idAnimation: "turtle.move",
            animTimeUpdate: MoLang.modifiedDistanceMoved(),
            loop: true,
            bones: {
                leg0: {
                    rotation: [
                        `math.clamp(math.cos(${MoLang.animTime()} * 22.92) * ${MoLang.modifiedMoveSpeed()} * 28.65, -90.0, 90.0) - this`,
                        "-this",
                        "-this"
                    ]
                },
                leg1: {
                    rotation: [
                        `math.clamp(math.cos(${MoLang.animTime()} * 22.92 + 180) * ${MoLang.modifiedMoveSpeed()} * 28.65, -90.0, 90.0) - this`,
                        "-this",
                        "-this"
                    ]
                },
                leg2: {
                    rotation: [
                        "-this",
                        "-this",
                        `math.clamp(math.cos(${MoLang.animTime()} * 22.92 + 180) * ${MoLang.modifiedMoveSpeed()} * 28.65, -90.0, 90.0) - this`
                    ]
                },
                leg3: {
                    rotation: [
                        "-this",
                        "-this",
                        `math.clamp(math.cos(${MoLang.animTime()} * 22.92) * ${MoLang.modifiedMoveSpeed()} * 28.65, -90.0, 90.0) - this`
                    ]
                }
            }
        },
        {
            idAnimation: "turtle.baby_move",
            animTimeUpdate: MoLang.modifiedDistanceMoved(),
            loop: true,
            bones: {
                leg0: {
                    rotation: [
                        0.0,
                        0.0,
                        MoLang.max("-90.0", MoLang.min(`${MoLang.cos(`${MoLang.animTime()} * 30 + 180`)} * ${MoLang.modifiedMoveSpeed()} * 60`, 90.0))
                    ]
                },
                leg1: {
                    rotation: [
                        0.0,
                        0.0,
                        MoLang.max("-90.0", MoLang.min(`${MoLang.cos(`${MoLang.animTime()} * 30`)} * ${MoLang.modifiedMoveSpeed()} * 60`, 90.0))
                    ]
                },
                leg2: {
                    rotation: [
                        0.0,
                        MoLang.max("-90.0", MoLang.min(`${MoLang.cos(`${MoLang.animTime()} * ${MoLang.variable("timemultiplier")} * ${MoLang.variable("legspeedmultiplier")} * 5 + 180`)} * ${MoLang.variable("backlegmultiplier")} * ${MoLang.modifiedMoveSpeed()} * 45`, 90.0)),
                        0.0
                    ]
                },
                leg3: {
                    rotation: [
                        0.0,
                        MoLang.max("-90.0", MoLang.min(`${MoLang.cos(`${MoLang.animTime()} * ${MoLang.variable("timemultiplier")} * ${MoLang.variable("legspeedmultiplier")} * 5`)} * ${MoLang.variable("backlegmultiplier")} * ${MoLang.modifiedMoveSpeed()} * 45`, 90.0)),
                        0.0
                    ]
                }
            }
        }
    ]
});
