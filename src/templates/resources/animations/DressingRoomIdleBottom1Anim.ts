import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const DressingRoomIdleBottom1Anim = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "idle_bottom_1",
            loop: true,
            bones: {
                head: {
                    position: {
                        "0": [0, 0, 0],
                        "4": [0, 0, 0]
                    },
                    rotation: {
                        "0": [45, 0, 0],
                        "4": [45, 0, 0]
                    },
                    scale: {
                        "0": [1, 1, 1],
                        "4": [1, 1, 1]
                    }
                },
                leftArm: {
                    position: {
                        "0": [0, 0, 0],
                        "4": [0, 0, 0]
                    },
                    rotation: {
                        "0": [-0.5, -5.5, -4.5],
                        "1.966667": [0.5, -5.5, -2],
                        "4": [-0.5, -5.5, -4.5]
                    },
                    scale: {
                        "0": [1, 1, 1],
                        "4": [1, 1, 1]
                    }
                },
                rightArm: {
                    position: {
                        "0": [0, 0, 0],
                        "4": [0, 0, 0]
                    },
                    rotation: {
                        "0": [22, 0, 5],
                        "1.966667": [22, 0, 3.5],
                        "4": [22, 0, 5]
                    },
                    scale: {
                        "0": [1, 1, 1],
                        "4": [1, 1, 1]
                    }
                },
                body: {
                    position: {
                        "0": [0, -0.626612, 0],
                        "1.966667": [5.392475e-17, -0.8694675, -8.088712e-17],
                        "4": [0, -0.626612, 0]
                    },
                    rotation: {
                        "0": [0, 0, 0],
                        "4": [0, 0, 0]
                    },
                    scale: {
                        "0": [1, 1, 1],
                        "4": [1, 1, 1]
                    }
                },
                rightLeg: {
                    position: {
                        "0": [1.122774e-17, -0.288, -1.184],
                        "4": [1.122774e-17, -0.288, -1.184]
                    },
                    rotation: {
                        "0": [-3, -1, 2.3],
                        "4": [-3, -1, 2.3]
                    },
                    scale: {
                        "0": [1, 1, 1],
                        "4": [1, 1, 1]
                    }
                },
                leftLeg: {
                    position: {
                        "0": [1.122774e-17, 0, 0.144],
                        "4": [1.122774e-17, 0, 0.144]
                    },
                    rotation: {
                        "0": [0, 0, 0],
                        "4": [0, 0, 0]
                    },
                    scale: {
                        "0": [1, 1, 1],
                        "4": [1, 1, 1]
                    }
                }
            }
        }
    ]
});
