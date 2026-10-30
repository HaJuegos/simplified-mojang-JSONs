import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @deprecated Ya no se usa en la actualidad. Se mantiene por compatibilidad. Usa la version normal.
 * @author HaJuegos - 29-10-2026
 */
export const EndermanAnimationV1 = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "enderman.base_pose_v1.0",
            loop: true,
            bones: {
                body: {
                    position: ["-this", "15.0 - this", "-this"],
                    rotation: ["-this", 0.0, 0.0]
                },
                hat: {
                    position: [0.0, "-this", 0.0]
                },
                head: {
                    position: [0.0, "14.0 - this", "-this"]
                },
                leftarm: {
                    position: ["5.0 - this", 1.0, "-this"]
                },
                leftleg: {
                    position: [0.0, "6.0 - this", "-this"]
                },
                rightarm: {
                    position: ["-5.0 - this", 1.0, "-this"]
                },
                rightleg: {
                    position: [0.0, "6.0 - this", "-this"]
                }
            }
        },
        {
            idAnimation: "enderman.scary_face_v1.0",
            loop: true,
            bones: {
                hat: {
                    position: [0.0, -5.0, 0.0]
                },
                head: {
                    position: [0.0, 5.0, 0.0]
                }
            }
        }
    ]
});
