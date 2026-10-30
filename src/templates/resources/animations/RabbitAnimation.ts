import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const RabbitAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "rabbit.baby_transform",
            loop: true,
            bones: {
                earleft: {
                    position: [0.0, -1.0, 1.0],
                    scale: 1.5
                },
                earright: {
                    position: [0.0, -1.0, 1.0],
                    scale: 1.5
                },
                head: {
                    position: [0.0, -1.0, 1.0],
                    scale: 1.5
                },
                nose: {
                    position: [0.0, -1.0, 1.0],
                    scale: 1.5
                }
            }
        },
        {
            idAnimation: "rabbit.move",
            loop: true,
            bones: {
                earleft: {
                    rotation: [`${MoLang.targetXRotation()} - this`, `${MoLang.targetYRotation()} - this + 15.0`, 0.0]
                },
                earright: {
                    rotation: [`${MoLang.targetXRotation()} - this`, `${MoLang.targetYRotation()} - this - 15.0`, 0.0]
                },
                frontlegleft: {
                    rotation: ["variable.jump_rotation * -40.0 - 11.0 - this", 0.0, 0.0]
                },
                frontlegright: {
                    rotation: ["variable.jump_rotation * -40.0 - 11.0 - this", 0.0, 0.0]
                },
                haunchleft: {
                    rotation: ["variable.jump_rotation * 50.0 - 21.0 - this", 0.0, 0.0]
                },
                haunchright: {
                    rotation: ["variable.jump_rotation * 50.0 - 21.0 - this", 0.0, 0.0]
                },
                nose: {
                    rotation: [`${MoLang.targetXRotation()} - this`, `${MoLang.targetYRotation()} - this`, 0.0]
                },
                rearfootleft: {
                    rotation: ["variable.jump_rotation * 50.0 - this", 0.0, 0.0]
                },
                rearfootright: {
                    rotation: ["variable.jump_rotation * 50.0 - this", 0.0, 0.0]
                }
            }
        }
    ]
});
