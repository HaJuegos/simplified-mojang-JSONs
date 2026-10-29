import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const SkeletonAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "skeleton.attack",
            loop: true,
            bones: {
                leftarm: {
                    rotation: [
                        "-68.75 * math.sin(variable.attack_time * 180.0) + 22.92 * (math.sin((1.0 - (1.0 - variable.attack_time) * (1.0 - variable.attack_time)) * 180.0)) - 90.0 - this",
                        "5.73 - math.sin(variable.attack_time * 180.0) * 34.38 - this",
                        "-this"
                    ]
                },
                rightarm: {
                    rotation: [
                        "-68.75 * math.sin(variable.attack_time * 180.0) + 22.92 * (math.sin((1.0 - (1.0 - variable.attack_time) * (1.0 - variable.attack_time)) * 180.0)) - 90.0 - this",
                        "-5.73 + math.sin(variable.attack_time * 180.0) * 34.38 - this",
                        "-this"
                    ]
                }
            }
        }
    ]
});
