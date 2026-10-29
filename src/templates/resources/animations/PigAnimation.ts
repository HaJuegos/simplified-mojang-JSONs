import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const PigAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "pig.baby_transform",
            loop: true,
            bones: {
                head: {
                    position: [0.0, 4.0, 4.0],
                    scale: 2.0
                }
            }
        },
        {
            idAnimation: "pig.setup",
            loop: true,
            bones: {
                body: {
                    rotation: ["-this", 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "pig.setup.v1.0",
            loop: true,
            bones: {
                body: {
                    rotation: ["90.0 - this", 0.0, 0.0]
                }
            }
        }
    ]
});
