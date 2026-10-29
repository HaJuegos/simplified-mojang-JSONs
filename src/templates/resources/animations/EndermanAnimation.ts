import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const EndermanAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "enderman.arms_legs",
            loop: true,
            bones: {
                leftarm: {
                    rotation: ["math.clamp(this, -22.92, 22.92) - this", 0.0, 0.0]
                },
                leftleg: {
                    rotation: ["math.clamp(this, -22.92, 22.92) - this", 0.0, 0.0]
                },
                rightarm: {
                    rotation: ["math.clamp(this, -22.92, 22.92) - this", 0.0, 0.0]
                },
                rightleg: {
                    rotation: ["math.clamp(this, -22.92, 22.92) - this", 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "enderman.base_pose",
            loop: true,
            bones: {
                body: {
                    position: ["-this", "11.0 - this", "-this"],
                    rotation: ["-this", 0.0, 0.0]
                },
                hat: {
                    position: ["-this", "-this", "-this"],
                    rotation: ["-this", "-this", "-this"]
                },
                head: {
                    position: ["-this", "-this", "-this"]
                },
                leftarm: {
                    position: ["4.0-this", 0.0, "-this"]
                },
                leftleg: {
                    position: [0.0, "-5.0 - this", 0.0]
                },
                rightarm: {
                    position: ["-4.0-this", 0.0, "-this"]
                },
                rightleg: {
                    position: [0.0, "-5.0 - this", 0.0]
                }
            }
        },
        {
            idAnimation: "enderman.carrying",
            loop: true,
            bones: {
                leftarm: {
                    rotation: ["-28.65 - this", 0.0, "-2.87 - this"]
                },
                rightarm: {
                    rotation: ["-28.65 - this", 0.0, "2.87 - this"]
                }
            }
        },
        {
            idAnimation: "enderman.scary_face",
            loop: true,
            bones: {
                hat: {
                    position: [0.0, "-5.0 - this", 0.0]
                },
                head: {
                    position: [0.0, "5.0 - this", 0.0]
                }
            }
        }
    ]
});
