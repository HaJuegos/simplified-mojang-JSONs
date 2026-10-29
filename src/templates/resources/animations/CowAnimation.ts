import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const CowAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "cow.baby_transform",
            loop: true,
            bones: {
                head: {
                    position: [0.0, 4.0, 4.0],
                    scale: 2.0
                }
            }
        },
        {
            idAnimation: "cow.setup",
            loop: true,
            bones: {
                body: {
                    rotation: ["-this", 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "cow.setup.v1.0",
            loop: true,
            bones: {
                body: {
                    rotation: ["90 - this", 0.0, 0.0]
                }
            }
        }
    ]
});
