import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const TadpoleAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "tadpole.swim",
            loop: true,
            animationLength: 2,
            bones: {
                tail: {
                    rotation: {
                        "0.0": [0, -22.5, 0],
                        "1.0": [0, 22.5, 0],
                        "2.0": [0, -22.5, 0]
                    }
                }
            }
        }
    ]
});
