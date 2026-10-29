import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const ArrowAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "arrow.move",
            loop: true,
            bones: {
                body: {
                    rotation: [
                        `${MoLang.variable("shake_power")} - ${MoLang.targetXRotation()}`,
                        `-${MoLang.targetYRotation()}`,
                        0.0
                    ],
                    scale: [0.7, 0.7, 0.9]
                }
            }
        }
    ]
});
