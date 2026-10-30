import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const LlamaSpitAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "llama_spit.setup",
            loop: true,
            bones: {
                body: {
                    position: [0.0, -15.0, 0.0],
                    rotation: [0.0, `${MoLang.targetYRotation()} - 90.0 - this`, `${MoLang.targetXRotation()} - this`]
                }
            }
        }
    ]
});
