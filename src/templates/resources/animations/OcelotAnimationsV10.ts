import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const OcelotAnimationsV10 = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "ocelot_v1.0.baby_transform",
            loop: true,
            bones: {
                head: {
                    scale: 1.5
                }
            }
        },
        {
            idAnimation: "ocelot_v1.0.setup",
            loop: true,
            bones: {
                backlegl: {
                    position: [0.0, "-18 - this", "5 - this"]
                },
                backlegr: {
                    position: [0.0, "-18 - this", "5 - this"]
                },
                body: {
                    position: [0.0, "-12.0 - this", "-10.0 - this"],
                    rotation: ["-this", 0.0, 0.0]
                },
                frontlegl: {
                    position: [0.0, "-13.8 - this", "-5 - this"]
                },
                frontlegr: {
                    position: [0.0, "-13.8 - this", "-5 - this"]
                },
                head: {
                    position: [0.0, "-15 - this", "-9 - this"]
                },
                tail1: {
                    position: [0.0, "-15 - this", "8 - this"],
                    rotation: ["51.57 - this", 0.0, 0.0]
                },
                tail2: {
                    position: [0.0, "-20 - this", "14 - this"],
                    rotation: ["-this", 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "ocelot_v1.0.sit",
            loop: true,
            bones: {
                backlegl: {
                    position: [0.0, -3.0, -4.0],
                    rotation: [-90.0, 0.0, 0.0]
                },
                backlegr: {
                    position: [0.0, -3.0, -4.0],
                    rotation: [-90.0, 0.0, 0.0]
                },
                body: {
                    position: [0.0, 4.0, 5.0],
                    rotation: [-45.0, 0.0, 0.0]
                },
                frontlegl: {
                    position: [0.0, -2.0, "-7 - this"],
                    rotation: [-2.86, 0.0, 0.0]
                },
                frontlegr: {
                    position: [0.0, -2.0, "-7 - this"],
                    rotation: [-2.86, 0.0, 0.0]
                },
                head: {
                    position: [0.0, 3.3, 1.0]
                },
                tail1: {
                    position: [0.0, -8.0, -2.0],
                    rotation: ["99.0 - this", 0.0, 0.0]
                },
                tail2: {
                    position: [0.0, -2.0, -0.8],
                    rotation: ["153.0 - this", 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "ocelot_v1.0.sneak",
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
                body: {
                    position: [0.0, -1.0, 0.0]
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
                head: {
                    position: [0.0, -2.0, 0.0]
                },
                tail1: {
                    position: [0.0, -1.0, 0.0],
                    rotation: ["90.0 - this", 0.0, 0.0]
                },
                tail2: {
                    position: [0.0, 4.0, 2.0],
                    rotation: [
                        `99.0 + 45.0 * math.cos(${MoLang.modifiedDistanceMoved()} * 57.3) * ${MoLang.modifiedMoveSpeed()} - this`,
                        0.0,
                        0.0
                    ]
                }
            }
        },
        {
            idAnimation: "ocelot_v1.0.sprint",
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
                        `${MoLang.cos(`${MoLang.modifiedDistanceMoved()} * 38.17 + 180.0 + 17.19`)} * 57.3 * ${MoLang.modifiedMoveSpeed()}`,
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
                    rotation: ["90.0 - this", 0.0, 0.0]
                },
                tail2: {
                    position: [0.0, 5.0, 2.0],
                    rotation: [
                        `99.0 + 18.0 * ${MoLang.cos(`${MoLang.modifiedDistanceMoved()} * 57.3`)} * ${MoLang.modifiedMoveSpeed()}`,
                        0.0,
                        0.0
                    ]
                }
            }
        },
        {
            idAnimation: "ocelot_v1.0.walk",
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
                tail2: {
                    rotation: [
                        `99.0 + 45.0 * ${MoLang.cos(`${MoLang.modifiedDistanceMoved()} * 57.3`)} * ${MoLang.modifiedMoveSpeed()}`,
                        0.0,
                        0.0
                    ]
                }
            }
        }
    ]
});
