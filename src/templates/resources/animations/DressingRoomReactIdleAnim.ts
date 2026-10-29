import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const DressingRoomReactIdleAnim = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "react_idle",
            loop: true,
            bones: {
                leftArm: {
                    position: {
                        "0": [0, 0, 0]
                    },
                    rotation: {
                        "0": [0, 0, -2.572641]
                    },
                    scale: {
                        "0": [1, 1, 1]
                    }
                },
                rightArm: {
                    position: {
                        "0": [0, 0, 0]
                    },
                    rotation: {
                        "0": [-1.106001, -2.92237, 3.337212]
                    },
                    scale: {
                        "0": [1, 1, 1]
                    }
                },
                waist: {
                    position: {
                        "0": [0, 0, 0],
                        "0.2666667": [0, -0.002566265, 0],
                        "1.9": [0, -0.2459337, 0],
                        "2.066667": [0, -0.2459337, 0]
                    },
                    rotation: {
                        "0": [0, 0, 0],
                        "0.2666667": [0, 0, 0],
                        "1.9": [0, 0, 0],
                        "2.066667": [0, 0, 0]
                    },
                    scale: {
                        "0": [1, 1, 1],
                        "0.2666667": [1, 1, 1],
                        "1.9": [1, 1, 1],
                        "2.066667": [1, 1, 1]
                    }
                },
                rightLeg: {
                    position: {
                        "0": [0, 0, 0]
                    },
                    rotation: {
                        "0": [0, 0, 1.31311]
                    },
                    scale: {
                        "0": [1, 1, 1]
                    }
                },
                leftLeg: {
                    position: {
                        "0": [0, 0, 0]
                    },
                    rotation: {
                        "0": [0, 0, -3.069775]
                    },
                    scale: {
                        "0": [1, 1, 1]
                    }
                }
            }
        }
    ]
});
