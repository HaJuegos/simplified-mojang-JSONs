import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const DressingRoomIdleTorso1Anim = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "idle_torso_1",
            loop: true,
            bones: {
                leftArm: {
                    position: {
                        "0": [0.001447716, 0, 0.06482641],
                        "1.966667": [0.001447716, 0, 0.064],
                        "3.966667": [0.001447716, 0, 0.064]
                    },
                    rotation: {
                        "0": [0, 0, 0],
                        "1.966667": [0, 0, -1.440429],
                        "3.966667": [0, 0, 0]
                    },
                    scale: {
                        "0": [1, 1, 1],
                        "3.966667": [1, 1, 1]
                    }
                },
                rightArm: {
                    position: {
                        "0": [0, 0, 0.06482641],
                        "1.966667": [0, 0, 0.064],
                        "3.966667": [0, 0, 0.064]
                    },
                    rotation: {
                        "0": [0, 0, 0],
                        "1.966667": [0, 0, 1.44],
                        "3.966667": [0, 0, 0.00114829]
                    },
                    scale: {
                        "0": [1, 1, 1],
                        "3.966667": [1, 1, 1]
                    }
                },
                body: {
                    position: {
                        "0": [0, 0, -0.08],
                        "0.2666667": [0, -0.002566265, -0.08],
                        "1.9": [0, -0.2459337, -0.078494],
                        "2.066667": [0, -0.2459337, -0.078494],
                        "3.966667": [0, 0, -0.08]
                    },
                    rotation: {
                        "0": [0, 0, 0],
                        "3.966667": [0, 0, 0]
                    },
                    scale: {
                        "0": [1, 1, 1],
                        "3.966667": [1, 1, 1]
                    }
                }
            }
        }
    ]
});
