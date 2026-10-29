import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const LookAtTargetAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "common.look_at_target",
            loop: true,
            bones: {
                head: {
                    relativeTo: {
                        rotation: "entity"
                    },
                    rotation: ["query.target_x_rotation - this", "query.target_y_rotation - this", 0.0]
                }
            }
        }
    ]
});
