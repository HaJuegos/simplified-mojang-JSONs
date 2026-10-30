import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const WitchAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "witch.general",
            loop: true,
            bones: {
                nose: {
                    rotation: [
                        `(variable.isholdingitem ? -25.7831 : (math.sin(${MoLang.lifeTime()} * 57.296) * 4.5)) - this`,
                        0.0,
                        `(math.cos(${MoLang.lifeTime()} * 57.296) * 2.5) - this`
                    ]
                }
            }
        }
    ]
});
