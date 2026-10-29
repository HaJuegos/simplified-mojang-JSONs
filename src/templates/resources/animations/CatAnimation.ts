import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const CatAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "cat.lie_down",
            loop: true,
            bones: {
                backlegl: {
                    position: [0.0, -0.7, 0.0],
                    rotation: [-22.92, 0.0, 0.0]
                },
                backlegr: {
                    position: [0.1, -1.2, 0.0],
                    rotation: [28.65, 0.0, -28.65]
                },
                body: {
                    position: [0.0, `${MoLang.variable("liedownamount")} * -4.5 + ${MoLang.variable("lieonplayer")} * 4.5`, 0.0],
                    rotation: [0.0, 0.0, "math.lerprotate(0.0, 90.0, variable.liedownamount)"]
                },
                frontlegl: {
                    position: [0.0, -1.0, -1.5],
                    rotation: [-72.81, 0.0, 0.0]
                },
                frontlegr: {
                    position: [0.2, -0.9, 0.0],
                    rotation: [-30.0, 0.0, -14.46]
                },
                head: {
                    position: [-0.1, 0.0, -0.5],
                    rotation: [-10.0, "math.lerprotate(this, 75.81, variable.liedownamount)", 0.0]
                },
                tail1: {
                    position: [0.0, 0.0, 0.0],
                    rotation: ["math.lerprotate(this, -33.84, variable.liedownamounttail)", 0.0, 0.0]
                },
                tail2: {
                    position: [0.0, 0.0, 0.0],
                    rotation: ["math.lerprotate(this, -68.92, variable.liedownamounttail)", 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "cat.sit",
            loop: true,
            bones: {
                backlegl: {
                    position: [0.0, 0.0, 1.0],
                    rotation: [-45.0, 0.0, 0.0]
                },
                backlegr: {
                    position: [0.0, 0.0, 1.0],
                    rotation: [-45.0, 0.0, 0.0]
                },
                body: {
                    position: [0.0, -1.0, 0.0],
                    rotation: [-45.0, 0.0, 0.0]
                },
                frontlegl: {
                    position: [0.0, -4.5, -1.0],
                    rotation: [42.15, 0.0, 0.0]
                },
                frontlegr: {
                    position: [0.0, -4.5, -1.0],
                    rotation: [42.15, 0.0, 0.0]
                },
                tail1: {
                    position: [0.0, -3.0, 1.0],
                    rotation: [45.0, 0.0, 0.0]
                },
                tail2: {
                    position: [0.0, 0.0, 0.0],
                    rotation: [45.0, 0.0, 0.0]
                },
                head: {
                    position: [0.0, -1.25, 0.0]
                }
            }
        },
        {
            idAnimation: "cat.sneak",
            loop: true,
            bones: {
                backlegl: {
                    position: [0.0, 1.0, 0.0],
                    rotation: [
                        `${MoLang.cos(`${MoLang.modifiedDistanceMoved()} * 38.17`)} * 57.3 * ${MoLang.modifiedMoveSpeed()}`,
                        0.0,
                        0.0
                    ]
                },
                backlegr: {
                    position: [0.0, 1.0, 0.0],
                    rotation: [
                        `${MoLang.cos(`${MoLang.modifiedDistanceMoved()} * 38.17 + 180.0`)} * 57.3 * ${MoLang.modifiedMoveSpeed()}`,
                        0.0,
                        0.0
                    ]
                },
                body: {
                    position: [0.0, -1.0, 0.0]
                },
                frontlegl: {
                    position: [0.0, 1.0, 0.0],
                    rotation: [
                        `${MoLang.cos(`${MoLang.modifiedDistanceMoved()} * 38.17 + 180.0`)} * 57.3 * ${MoLang.modifiedMoveSpeed()}`,
                        0.0,
                        0.0
                    ]
                },
                frontlegr: {
                    position: [0.0, 1.0, 0.0],
                    rotation: [
                        `${MoLang.cos(`${MoLang.modifiedDistanceMoved()} * 38.17`)} * 57.3 * ${MoLang.modifiedMoveSpeed()}`,
                        0.0,
                        0.0
                    ]
                },
                head: {
                    position: [0.0, -1.0, 0.0]
                },
                tail1: {
                    position: [0.0, 1.0, 0.0],
                    rotation: [0.0, 0.0, 0.0]
                },
                tail2: {
                    rotation: [
                        `62.0 + ${MoLang.cos(`${MoLang.modifiedDistanceMoved()} * 57.3`)} * 27.0 * ${MoLang.modifiedMoveSpeed()}`,
                        0.0,
                        0.0
                    ]
                }
            }
        },
        {
            idAnimation: "cat.baby_sneak",
            loop: true,
            bones: {
                backlegl: {
                    position: [0.0, 1.0, 0.0],
                    rotation: [
                        `${MoLang.cos(`${MoLang.modifiedDistanceMoved()} * 38.17`)} * 57.3 * ${MoLang.modifiedMoveSpeed()}`,
                        0.0,
                        0.0
                    ]
                },
                backlegr: {
                    position: [0.0, 1.0, 0.0],
                    rotation: [
                        `${MoLang.cos(`${MoLang.modifiedDistanceMoved()} * 38.17 + 180.0`)} * 57.3 * ${MoLang.modifiedMoveSpeed()}`,
                        0.0,
                        0.0
                    ]
                },
                body: {
                    position: [0.0, -1.0, 0.0]
                },
                frontlegl: {
                    position: [0.0, 1.0, 0.0],
                    rotation: [
                        `${MoLang.cos(`${MoLang.modifiedDistanceMoved()} * 38.17 + 180.0`)} * 57.3 * ${MoLang.modifiedMoveSpeed()}`,
                        0.0,
                        0.0
                    ]
                },
                frontlegr: {
                    position: [0.0, 1.0, 0.0],
                    rotation: [
                        `${MoLang.cos(`${MoLang.modifiedDistanceMoved()} * 38.17`)} * 57.3 * ${MoLang.modifiedMoveSpeed()}`,
                        0.0,
                        0.0
                    ]
                },
                head: {
                    position: [0.0, -1.0, 0.0]
                },
                tail1: {
                    position: [0.0, 1.0, 0.0],
                    rotation: [
                        `62.0 + ${MoLang.cos(`${MoLang.modifiedDistanceMoved()} * 57.3`)} * 27.0 * ${MoLang.modifiedMoveSpeed()}`,
                        0.0,
                        0.0
                    ]
                }
            }
        },
        {
            idAnimation: "cat.sprint",
            loop: true,
            bones: {
                backlegl: {
                    rotation: [
                        `${MoLang.cos(`${MoLang.modifiedDistanceMoved()} * 38.17`)} * 57.3 * ${MoLang.modifiedMoveSpeed()}`,
                        0.0,
                        0.0
                    ]
                },
                backlegr: {
                    rotation: [
                        `${MoLang.cos(`${MoLang.modifiedDistanceMoved()} * 38.17 + 17.19`)} * 57.3 * ${MoLang.modifiedMoveSpeed()}`,
                        0.0,
                        0.0
                    ]
                },
                frontlegl: {
                    rotation: [
                        `${MoLang.cos(`${MoLang.modifiedDistanceMoved()} * 38.17 + 197.19`)} * 57.3 * ${MoLang.modifiedMoveSpeed()}`,
                        0.0,
                        0.0
                    ]
                },
                frontlegr: {
                    rotation: [
                        `${MoLang.cos(`${MoLang.modifiedDistanceMoved()} * 38.17 + 180.0`)} * 57.3 * ${MoLang.modifiedMoveSpeed()}`,
                        0.0,
                        0.0
                    ]
                },
                tail1: {
                    rotation: [0.0, 0.0, 0.0]
                },
                tail2: {
                    rotation: [
                        `62.0 + ${MoLang.cos(`${MoLang.modifiedDistanceMoved()} * 57.3`)} * 18.0 * ${MoLang.modifiedMoveSpeed()}`,
                        0.0,
                        0.0
                    ]
                }
            }
        },
        {
            idAnimation: "cat.baby_sprint",
            loop: true,
            bones: {
                backlegl: {
                    rotation: [
                        `${MoLang.cos(`${MoLang.modifiedDistanceMoved()} * 38.17`)} * 57.3 * ${MoLang.modifiedMoveSpeed()}`,
                        0.0,
                        0.0
                    ]
                },
                backlegr: {
                    rotation: [
                        `${MoLang.cos(`${MoLang.modifiedDistanceMoved()} * 38.17 + 17.19`)} * 57.3 * ${MoLang.modifiedMoveSpeed()}`,
                        0.0,
                        0.0
                    ]
                },
                frontlegl: {
                    rotation: [
                        `${MoLang.cos(`${MoLang.modifiedDistanceMoved()} * 38.17 + 197.19`)} * 57.3 * ${MoLang.modifiedMoveSpeed()}`,
                        0.0,
                        0.0
                    ]
                },
                frontlegr: {
                    rotation: [
                        `${MoLang.cos(`${MoLang.modifiedDistanceMoved()} * 38.17 + 180.0`)} * 57.3 * ${MoLang.modifiedMoveSpeed()}`,
                        0.0,
                        0.0
                    ]
                },
                tail1: {
                    rotation: [
                        `62.0 + ${MoLang.cos(`${MoLang.modifiedDistanceMoved()} * 57.3`)} * 18.0 * ${MoLang.modifiedMoveSpeed()}`,
                        0.0,
                        0.0
                    ]
                }
            }
        },
        {
            idAnimation: "cat.walk",
            loop: true,
            bones: {
                backlegl: {
                    rotation: [
                        `${MoLang.cos(`${MoLang.modifiedDistanceMoved()} * 38.17`)} * 57.3 * ${MoLang.modifiedMoveSpeed()}`,
                        0.0,
                        0.0
                    ]
                },
                backlegr: {
                    rotation: [
                        `${MoLang.cos(`${MoLang.modifiedDistanceMoved()} * 38.17 + 180.0`)} * 57.3 * ${MoLang.modifiedMoveSpeed()}`,
                        0.0,
                        0.0
                    ]
                },
                frontlegl: {
                    rotation: [
                        `${MoLang.cos(`${MoLang.modifiedDistanceMoved()} * 38.17 + 180.0`)} * 57.3 * ${MoLang.modifiedMoveSpeed()}`,
                        0.0,
                        0.0
                    ]
                },
                frontlegr: {
                    rotation: [
                        `${MoLang.cos(`${MoLang.modifiedDistanceMoved()} * 38.17`)} * 57.3 * ${MoLang.modifiedMoveSpeed()}`,
                        0.0,
                        0.0
                    ]
                },
                tail1: {
                    rotation: [-51.57, 0.0, 0.0]
                },
                tail2: {
                    rotation: [
                        `62.0 + ${MoLang.cos(`${MoLang.modifiedDistanceMoved()} * 57.3`)} * 45.0 * ${MoLang.modifiedMoveSpeed()}`,
                        0.0,
                        0.0
                    ]
                }
            }
        },
        {
            idAnimation: "cat.baby_walk",
            loop: true,
            bones: {
                backlegl: {
                    rotation: [
                        `${MoLang.cos(`${MoLang.modifiedDistanceMoved()} * 38.17`)} * 57.3 * ${MoLang.modifiedMoveSpeed()}`,
                        0.0,
                        0.0
                    ]
                },
                backlegr: {
                    rotation: [
                        `${MoLang.cos(`${MoLang.modifiedDistanceMoved()} * 38.17 + 180.0`)} * 57.3 * ${MoLang.modifiedMoveSpeed()}`,
                        0.0,
                        0.0
                    ]
                },
                frontlegl: {
                    rotation: [
                        `${MoLang.cos(`${MoLang.modifiedDistanceMoved()} * 38.17 + 180.0`)} * 57.3 * ${MoLang.modifiedMoveSpeed()}`,
                        0.0,
                        0.0
                    ]
                },
                frontlegr: {
                    rotation: [
                        `${MoLang.cos(`${MoLang.modifiedDistanceMoved()} * 38.17`)} * 57.3 * ${MoLang.modifiedMoveSpeed()}`,
                        0.0,
                        0.0
                    ]
                },
                tail1: {
                    rotation: [
                        `62.0 + ${MoLang.cos(`${MoLang.modifiedDistanceMoved()} * 57.3`)} * 45.0 * ${MoLang.modifiedMoveSpeed()}`,
                        0.0,
                        0.0
                    ]
                }
            }
        },
        {
            idAnimation: "cat.baby_lie_down",
            loop: true,
            animationLength: 0.0417,
            bones: {
                backLegL: {
                    rotation: [-2.9, 0, 0],
                    position: [0.475, -2.7, -0.85]
                },
                backLegR: {
                    rotation: [28.5, 21.54, -23.3],
                    position: [1.625, -2.3, 0.575]
                },
                body: {
                    rotation: [0, 0, "math.lerprotate(0.0, 90.0, variable.liedownamount)"],
                    position: [0, `${MoLang.variable("liedownamount")} * -4.5 + ${MoLang.variable("lieonplayer")} * 10.5`, 0]
                },
                frontLegL: {
                    rotation: [-89.56, 0, 0],
                    position: [0.475, -1.7, -1.4]
                },
                frontLegR: {
                    rotation: [-30, 0, -1.2],
                    position: [2.5, -2.5, 0.2]
                },
                head: {
                    rotation: [6.5, "-5.3+math.lerprotate(this, 75.81, variable.liedownamount)", -74.5],
                    position: [0.6, -3.45, -0.425]
                },
                tail1: {
                    rotation: ["0.83+math.lerprotate(this, -33.84, variable.liedownamounttail)", 17.2, -9.6],
                    position: [-0.2, -3.9, -0.2]
                },
                belly: {
                    rotation: [0, 0, 0],
                    position: [0, -3, 0]
                }
            }
        },
        {
            idAnimation: "cat.baby_sit",
            loop: true,
            animationLength: 0.0417,
            bones: {
                backLegL: {
                    rotation: [-45, 0, 0],
                    position: [0.02, -0.15, -1.96]
                },
                backLegR: {
                    rotation: [-45, 0, 0],
                    position: [0, -0.15, -1.96]
                },
                body: {
                    rotation: [-45, 0, 0],
                    position: [0, 0, 0]
                },
                frontLegL: {
                    rotation: [44.65, 0, 0],
                    position: [0.02, -2.125, -1.35]
                },
                frontLegR: {
                    rotation: [44.65, 0, 0],
                    position: [0, -2.1, -1.35]
                },
                tail1: {
                    rotation: [77.5, 0, 0],
                    position: [0, -2.6, -2.75]
                },
                head: {
                    position: [0, -3.39, -1.92],
                    scale: 1
                },
                belly: {
                    rotation: [17.5, 0, 0],
                    position: [0, -2.16, -2.2]
                }
            }
        }
    ]
});
