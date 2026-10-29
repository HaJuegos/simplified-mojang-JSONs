import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const PiglinAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "piglin.crossbow.charge",
            bones: {
                leftarm: {
                    rotation: [
                        "math.lerp(-90.0 + 34.38, -90.0, variable.crossbow_charge)  -this",
                        "math.lerp(22.92, 48.70, variable.crossbow_charge) -this",
                        0.0
                    ]
                },
                rightarm: {
                    rotation: ["-90.0 + 34.38 -this", "-45.84 -this", 0.0]
                }
            },
            loop: true
        },
        {
            idAnimation: "piglin.crossbow.hold",
            bones: {
                leftarm: {
                    rotation: [
                        "-85.94 + query.target_x_rotation -this",
                        "34.38 + math.clamp(query.target_y_rotation, -45, 25) -this",
                        0.0
                    ]
                },
                rightarm: {
                    rotation: [
                        "-90.0 + 5.73 + query.target_x_rotation -this",
                        "-17.19 + math.clamp(query.target_y_rotation, -25, 45) -this",
                        0.0
                    ]
                }
            },
            loop: true
        },
        {
            idAnimation: "piglin.sword.attack",
            bones: {
                leftarm: {
                    rotation: [
                        `(${MoLang.cos(`${MoLang.lifeTime()} * 20.0 * 10.89`)} * 28.65) + (${MoLang.sin(`${MoLang.variable("attack_time")} * 180.0`)} * 68.76 - (${MoLang.sin(`(1.0 - (1.0 - ${MoLang.variable("attack_time")}) * (1.0 - ${MoLang.variable("attack_time")})) * 180.0`)}) * 22.92)`,
                        0.0,
                        0.0
                    ]
                },
                rightarm: {
                    rotation: [
                        "-100 + (variable.attack2 * 2.2 - variable.attack * 0.4) + variable.x_bob - this",
                        "variable.attack2 * 0.6 - 5.73 - this",
                        "variable.z_bob - this"
                    ]
                }
            },
            loop: true
        },
        {
            idAnimation: "piglin.hand.attack",
            bones: {
                leftarm: {
                    rotation: [
                        `-(${MoLang.sin(`(1 - ${MoLang.pow(`(1 - ${MoLang.variable("attack_time")})`, 4)}) * 180`)} * 1.2 + ${MoLang.sin(`${MoLang.variable("attack_time")} * 180`)}) * 10.0`,
                        0.0,
                        0.0
                    ]
                },
                rightarm: {
                    rotation: [
                        `-(${MoLang.sin(`(1 - ${MoLang.pow(`(1 - ${MoLang.variable("attack_time")})`, 4)}) * 180`)} * 1.2 + ${MoLang.sin(`${MoLang.variable("attack_time")} * 180`)}) * 30.0`,
                        `-(${MoLang.sin(`(1 - ${MoLang.pow(`(1 - ${MoLang.variable("attack_time")})`, 4)}) * 180`)} ? (-90.0 * ${MoLang.sin(`(1 - ${MoLang.pow(`(1 - ${MoLang.variable("attack_time")})`, 4)}) * 180`)}) + 30.0 : 0.0)`,
                        0.0
                    ]
                }
            },
            loop: true
        },
        {
            idAnimation: "piglin.move",
            loop: true,
            bones: {
                leftear: {
                    rotation: [0.0, 0.0, `${MoLang.variable("tcos0")} * 0.5`]
                },
                rightear: {
                    rotation: [0.0, 0.0, `-${MoLang.variable("tcos0")} * 0.5`]
                },
                leftarm: {
                    rotation: [MoLang.variable("tcos0"), 0.0, 0.0]
                },
                leftleg: {
                    rotation: [`-${MoLang.variable("tcos0")} * 1.4`, 0.0, 0.0]
                },
                rightarm: {
                    rotation: [`-${MoLang.variable("tcos0")}`, 0.0, 0.0]
                },
                rightleg: {
                    rotation: [`${MoLang.variable("tcos0")} * 1.4`, 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "piglin.admire",
            loop: true,
            bones: {
                leftarm: {
                    rotation: [320.0, 25.0, 0.0]
                },
                head: {
                    rotation: [30.0, 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "piglin.celebrate_hunt",
            loop: true,
            bones: {
                leftear: {
                    rotation: [0.0, 0.0, "Math.sin(query.time_stamp * 30) * 10"]
                },
                rightear: {
                    rotation: [0.0, 0.0, "Math.cos(query.time_stamp * 30) * 10"]
                }
            }
        },
        {
            idAnimation: "piglin.celebrate_hunt_special",
            loop: true,
            bones: {
                leftear: {
                    rotation: [0.0, 0.0, "Math.sin(query.time_stamp * 30) * 10"]
                },
                rightear: {
                    rotation: [0.0, 0.0, "Math.cos(query.time_stamp * 30) * 10"]
                },
                head: {
                    position: ["Math.sin(query.time_stamp * 10)", "Math.sin(query.time_stamp * 40)", 0.0]
                },
                rightarm: {
                    rotation: [0.0, 0.0, "70 + Math.cos(query.time_stamp * 40) * 10"]
                },
                leftarm: {
                    rotation: [0.0, 0.0, "-70 - Math.cos(query.time_stamp * 40) * 10"]
                },
                body: {
                    position: [0.0, "Math.sin(query.time_stamp * 40) * 0.35", 0.0]
                }
            }
        }
    ]
});
