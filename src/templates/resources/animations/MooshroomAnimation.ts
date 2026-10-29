import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const MooshroomAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "mooshroom.baby_transform",
            loop: true,
            bones: {
                head: {
                    position: [0.0, `${MoLang.isBaby()} ? 4.0 : 0.0`, `${MoLang.isBaby()} ? 4.0 : 0.0`],
                    scale: `${MoLang.isBaby()} ? 2.0 : 1.0`
                }
            }
        },
        {
            idAnimation: "mooshroom.setup",
            loop: true,
            bones: {
                body: {
                    rotation: ["-this", 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "mooshroom.setup.v1.0",
            loop: true,
            bones: {
                body: {
                    rotation: ["90 - this", 0.0, 0.0]
                }
            }
        }
    ]
});
