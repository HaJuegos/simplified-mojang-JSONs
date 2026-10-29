import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const BatAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "bat.resting",
            loop: true,
            bones: {
                Head: {
                    rotation: [MoLang.targetXRotation(), "180.0f - query.target_y_rotation", 180],
                    position: [0, 0.3, 0]
                },
                body: {
                    rotation: [180, 0, 0],
                    position: [0, 0.3, 0]
                },
                feet: {
                    rotation: [0, 0, 0]
                },
                rightWing: {
                    rotation: [0, -10, 0],
                    position: [0, 0, 1]
                },
                rightWingTip: {
                    rotation: [0, -120, 0]
                },
                leftWing: {
                    rotation: [0, 10, 0],
                    position: [0, 0, 1]
                },
                leftWingTip: {
                    rotation: [0, 120, 0]
                }
            }
        },
        {
            idAnimation: "bat.flying",
            loop: true,
            animationLength: 0.5,
            bones: {
                Head: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.125": [20, 0, 0],
                        "0.5": [0, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, 0],
                        "0.125": [0, 2, 0],
                        "0.25": [0, 1, 0],
                        "0.375": [0, 0, 0],
                        "0.4583": [0, -1, 0],
                        "0.5": [0, 0, 0]
                    }
                },
                body: {
                    rotation: {
                        "0.0": [40, 0, 0],
                        "0.25": [52.5, 0, 0],
                        "0.5": [40, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, 0],
                        "0.125": [0, 2, 0],
                        "0.25": [0, 1, 0],
                        "0.375": [0, 0, 0],
                        "0.4583": [0, -1, 0],
                        "0.5": [0, 0, 0]
                    }
                },
                feet: {
                    rotation: {
                        "0.0": [10, 0, 0],
                        "0.125": [-21.25, 0, 0],
                        "0.25": [-12.5, 0, 0],
                        "0.5": [10, 0, 0]
                    }
                },
                rightWing: {
                    rotation: {
                        "0.0": [0, 85, 0],
                        "0.125": [0, -55, 0],
                        "0.25": [0, 50, 0],
                        "0.375": [0, 70, 0],
                        "0.5": [0, 85, 0]
                    }
                },
                rightWingTip: {
                    rotation: {
                        "0.0": [0, 10.5, 0],
                        "0.0417": [0, 65.5, 0],
                        "0.2083": [0, -135, 0],
                        "0.5": [0, 10.5, 0]
                    }
                },
                leftWing: {
                    rotation: {
                        "0.0": [0, -85, 0],
                        "0.125": [0, 55, 0],
                        "0.25": [0, -50, 0],
                        "0.375": [0, -70, 0],
                        "0.5": [0, -85, 0]
                    }
                },
                leftWingTip: {
                    rotation: {
                        "0.0": [0, -10.5, 0],
                        "0.0417": [0, -65.5, 0],
                        "0.2083": [0, 135, 0],
                        "0.5": [0, -10.5, 0]
                    }
                }
            }
        }
    ]
});
