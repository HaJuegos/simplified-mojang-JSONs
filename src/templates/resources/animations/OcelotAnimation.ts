import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const OcelotAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "ocelot.baby_transform",
            loop: true,
            bones: {
                head: {
                    scale: 1.5
                }
            }
        },
        {
            idAnimation: "ocelot.sit",
            loop: true,
            bones: {
                backlegl: {
                    position: [0.0, "-2.0 - this", "6.0 - this"],
                    rotation: [-45.0, 0.0, 0.0]
                },
                backlegr: {
                    position: [0.0, "-2.0 - this", "6.0 - this"],
                    rotation: ["-45 - this", 0.0, 0.0]
                },
                body: {
                    rotation: ["-45 - this", 0.0, 0.0]
                },
                frontlegl: {
                    position: [0.0, "-1.5 - this", "-7.0 - this"],
                    rotation: ["42.15 - this", 0.0, 0.0]
                },
                frontlegr: {
                    position: [0.0, "-1.5 - this", "-7.0 - this"],
                    rotation: ["42.15 - this", 0.0, 0.0]
                },
                head: {
                    position: [0.0, -2.0, 0.0]
                },
                tail1: {
                    position: [0.0, 0.0, 0.0],
                    rotation: ["45 - this", 0.0, 0.0]
                },
                tail2: {
                    position: [0.0, 0.0, 0.0],
                    rotation: ["45 - this", 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "ocelot.sneak",
            loop: true,
            bones: {
                backlegl: {
                    position: [0.0, "1.0 - this", 0.0],
                    rotation: [
                        `math.cos(${MoLang.modifiedDistanceMoved()} * 38.17) * 57.3 * ${MoLang.modifiedMoveSpeed()} - this`,
                        0.0,
                        0.0
                    ]
                },
                backlegr: {
                    position: [0.0, "1.0 - this", 0.0],
                    rotation: [
                        `math.cos(${MoLang.modifiedDistanceMoved()} * 38.17 + 180.0) * 57.3 * ${MoLang.modifiedMoveSpeed()} - this`,
                        0.0,
                        0.0
                    ]
                },
                body: {
                    position: [0.0, -1.0, 0.0]
                },
                frontlegl: {
                    position: [0.0, "1.0 - this", 0.0],
                    rotation: [
                        `math.cos(${MoLang.modifiedDistanceMoved()} * 38.17 + 180.0) * 57.3 * ${MoLang.modifiedMoveSpeed()} - this`,
                        0.0,
                        0.0
                    ]
                },
                frontlegr: {
                    position: [0.0, "1.0 - this", 0.0],
                    rotation: [
                        `math.cos(${MoLang.modifiedDistanceMoved()} * 38.17) * 57.3 * ${MoLang.modifiedMoveSpeed()} - this`,
                        0.0,
                        0.0
                    ]
                },
                head: {
                    position: [0.0, -1.0, 0.0]
                },
                tail1: {
                    position: [0.0, "1.0 - this", 0.0]
                },
                tail2: {
                    rotation: [
                        `62.0 + math.cos(${MoLang.modifiedDistanceMoved()} * 57.3) * 27.0 * ${MoLang.modifiedMoveSpeed()} - this`,
                        0.0,
                        0.0
                    ]
                }
            }
        },
        {
            idAnimation: "ocelot.sprint",
            loop: true,
            bones: {
                backlegl: {
                    rotation: [
                        `math.cos(${MoLang.modifiedDistanceMoved()} * 38.17) * 57.3 * ${MoLang.modifiedMoveSpeed()} - this`,
                        0.0,
                        0.0
                    ]
                },
                backlegr: {
                    rotation: [
                        `math.cos(${MoLang.modifiedDistanceMoved()} * 38.17 + 17.19) * 57.3 * ${MoLang.modifiedMoveSpeed()} - this`,
                        0.0,
                        0.0
                    ]
                },
                frontlegl: {
                    rotation: [
                        `math.cos(${MoLang.modifiedDistanceMoved()} * 38.17 + 197.19) * 57.3 * ${MoLang.modifiedMoveSpeed()} - this`,
                        0.0,
                        0.0
                    ]
                },
                frontlegr: {
                    rotation: [
                        `math.cos(${MoLang.modifiedDistanceMoved()} * 38.17 + 180.0) * 57.3 * ${MoLang.modifiedMoveSpeed()} - this`,
                        0.0,
                        0.0
                    ]
                },
                tail1: {
                    rotation: ["-this", 0.0, 0.0]
                },
                tail2: {
                    rotation: [
                        `62.0 + math.cos(${MoLang.modifiedDistanceMoved()} * 57.3) * 18.0 * ${MoLang.modifiedMoveSpeed()} - this`,
                        0.0,
                        0.0
                    ]
                }
            }
        },
        {
            idAnimation: "ocelot.walk",
            loop: true,
            bones: {
                backlegl: {
                    rotation: [
                        `math.cos(${MoLang.modifiedDistanceMoved()} * 38.17) * 57.3 * ${MoLang.modifiedMoveSpeed()} - this`,
                        0.0,
                        0.0
                    ]
                },
                backlegr: {
                    rotation: [
                        `math.cos(${MoLang.modifiedDistanceMoved()} * 38.17 + 180.0) * 57.3 * ${MoLang.modifiedMoveSpeed()} - this`,
                        0.0,
                        0.0
                    ]
                },
                frontlegl: {
                    rotation: [
                        `math.cos(${MoLang.modifiedDistanceMoved()} * 38.17 + 180.0) * 57.3 * ${MoLang.modifiedMoveSpeed()} - this`,
                        0.0,
                        0.0
                    ]
                },
                frontlegr: {
                    rotation: [
                        `math.cos(${MoLang.modifiedDistanceMoved()} * 38.17) * 57.3 * ${MoLang.modifiedMoveSpeed()} - this`,
                        0.0,
                        0.0
                    ]
                },
                tail1: {
                    rotation: ["-51.57 - this", 0.0, 0.0]
                },
                tail2: {
                    rotation: [
                        `62.0 + math.cos(${MoLang.modifiedDistanceMoved()} * 57.3) * 45.0 * ${MoLang.modifiedMoveSpeed()} - this`,
                        0.0,
                        0.0
                    ]
                }
            }
        }
    ]
});
