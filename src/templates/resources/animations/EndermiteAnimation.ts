import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const EndermiteAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "endermite.move",
            loop: true,
            bones: {
                section_0: {
                    position: ["(math.cos(-query.life_time * 928.26) * 1.26) - this", 0.0, 0.0],
                    rotation: [0.0, "(math.cos(query.life_time * 928.26) * 26.9) - this", 0.0]
                },
                section_1: {
                    position: ["(math.sin(query.life_time * 928.26) * 0.63) - this", 0.0, 0.0],
                    rotation: [0.0, "(math.cos(query.life_time * 928.26) * 16) - this", 0.0]
                },
                section_2: {
                    position: [0.0, 0.0, 0.0],
                    rotation: [0.0, "(math.cos(query.life_time * 928.26) * 9.17) - this", 0.0]
                },
                section_3: {
                    position: ["(math.cos(query.life_time * 928.26) * 0.8) - this", 0.0, 0.0]
                }
            }
        }
    ]
});
