import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const ElytraAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "elytra.default",
            loop: true,
            bones: {
                body: {
                    scale: 1.067
                },
                left_wing: {
                    position: [4.5, 4, -2],
                    rotation: [15, 0, -13],
                    scale: [1, 1, 2]
                },
                right_wing: {
                    position: [-4.5, 4, -2],
                    rotation: [15, 0, 13],
                    scale: [1, 1, 2]
                }
            }
        },
        {
            idAnimation: "elytra.gliding",
            loop: true,
            bones: {
                body: {
                    scale: 1.067
                },
                left_wing: {
                    position: [2, 2, -2],
                    rotation: [
                        `variable.ratio = (${MoLang.positionDelta(1)} < 0) ? 1 - math.pow(-${MoLang.movementDirection(1)}, 1.5) : 1; return math.lerp(15, 20, variable.ratio);`,
                        0,
                        "math.lerp(-15, -90, variable.ratio)"
                    ],
                    scale: [1, 1, 2]
                },
                right_wing: {
                    position: [-2, 2, -2],
                    rotation: [
                        `variable.ratio = (${MoLang.positionDelta(1)} < 0) ? 1 - math.pow(-${MoLang.movementDirection(1)}, 1.5) : 1; return math.lerp(15, 20, variable.ratio);`,
                        0,
                        "math.lerp(15, 90, variable.ratio)"
                    ],
                    scale: [1, 1, 2]
                }
            }
        },
        {
            idAnimation: "elytra.sneaking",
            loop: true,
            bones: {
                body: {
                    scale: 1.067
                },
                left_wing: {
                    position: [2, 3, -2],
                    rotation: [20, -15, -45],
                    scale: [1, 1, 2]
                },
                right_wing: {
                    position: [-2, 3, -2],
                    rotation: [20, 15, 45],
                    scale: [1, 1, 2]
                }
            }
        },
        {
            idAnimation: "elytra.sleeping",
            loop: true,
            bones: {
                body: {
                    scale: 1.067
                },
                left_wing: {
                    position: [5, 4, -2],
                    rotation: [0, 0, -15],
                    scale: [1, 1, 2]
                },
                right_wing: {
                    position: [-5, 4, -2],
                    rotation: [0, 0, 15],
                    scale: [1, 1, 2]
                }
            }
        },
        {
            idAnimation: "elytra.swimming",
            loop: true,
            bones: {
                body: {
                    scale: 1.067
                },
                left_wing: {
                    position: [5, 2, -2],
                    rotation: [`${MoLang.swimAmount()} * 15`, 0, -15],
                    scale: [1, 1, 2]
                },
                right_wing: {
                    position: [-5, 2, -2],
                    rotation: [`${MoLang.swimAmount()} * 15`, 0, 15],
                    scale: [1, 1, 2]
                }
            }
        }
    ]
});
