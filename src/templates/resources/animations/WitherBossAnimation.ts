import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const WitherBossAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "wither_boss.look_at_target",
            loop: true,
            bones: {
                head1: {
                    rotation: [MoLang.headXRotation(0), MoLang.targetYRotation(), 0.0]
                },
                head2: {
                    rotation: [MoLang.headXRotation(1), MoLang.targetYRotation(), 0.0]
                },
                head3: {
                    rotation: [MoLang.headXRotation(2), MoLang.targetYRotation(), 0.0]
                }
            }
        },
        {
            idAnimation: "wither_boss.move",
            loop: true,
            bones: {
                upperbodypart2: {
                    rotation: ["variable.upper_body_rotation - this", "-this", "-this"]
                },
                upperbodypart3: {
                    position: [-2.0, -16.9, -0.5],
                    rotation: ["((0.2 + 0.1 * variable.body_base_rotation) * 180) - this", "-this", "-this"]
                }
            }
        },
        {
            idAnimation: "wither_boss.scale",
            loop: true,
            bones: {
                upperbodypart1: {
                    rotation: ["-this", "-this", "-this"]
                }
            }
        }
    ]
});
