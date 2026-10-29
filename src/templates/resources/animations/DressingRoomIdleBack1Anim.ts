import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const DressingRoomIdleBack1Anim = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "idle_back_1",
            loop: true,
            bones: {
                head: {
                    position: {
                        "0": [0, 9.818813e-15, 0.8]
                    },
                    rotation: {
                        "0": [3.53083, -100, -3.389118]
                    },
                    scale: {
                        "0": [1, 1, 1]
                    }
                },
                leftArm: {
                    position: {
                        "0": [0.224, 0.016, 0],
                        "4": [0.224, 0.016, 0]
                    },
                    rotation: {
                        "0": [0, 0, -5],
                        "1.966667": [0, 0, -7],
                        "4": [0, 0, -5]
                    },
                    scale: {
                        "0": [1, 1, 1],
                        "4": [1, 1, 1]
                    }
                },
                rightArm: {
                    position: {
                        "0": [-0.048, 0, -0.112],
                        "3.966667": [-0.048, 0, -0.112]
                    },
                    rotation: {
                        "0": [0, 0, 0.5],
                        "1.966667": [0, 0, 2],
                        "3.966667": [0, 0, 0.5]
                    },
                    scale: {
                        "0": [1, 1, 1],
                        "3.966667": [1, 1, 1]
                    }
                },
                waist: {
                    position: {
                        "0": [0, 0, 0],
                        "1.966667": [-8.067334e-17, -0.2268292, 1.81515e-16],
                        "4": [0, 0, 0]
                    },
                    rotation: {
                        "0": [-1, -14.5, -1],
                        "4": [-1, -14.5, -1]
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
