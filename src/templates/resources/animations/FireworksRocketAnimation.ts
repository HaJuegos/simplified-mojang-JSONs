import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const FireworksRocketAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "fireworks_rocket.move",
            loop: true,
            bones: {
                body: {
                    position: [0.0, -3.5, 0.0],
                    rotation: [`-${MoLang.targetXRotation()}`, `-${MoLang.targetYRotation()}`, 0.0],
                    scale: 0.6
                }
            }
        }
    ]
});
