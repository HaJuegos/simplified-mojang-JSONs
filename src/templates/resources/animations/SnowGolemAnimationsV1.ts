import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @deprecated Ya no se usa en la actualidad. Se mantiene por compatibilidad. Usa la version normal.
 * @author HaJuegos - 29-10-2026
 */
export const SnowGolemAnimationsV1 = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "snowgolem.arms",
            loop: true,
            bones: {
                arm1: {
                    position: [
                        `(math.cos(${MoLang.targetYRotation()} * 0.25) * 5) - this`,
                        0.0,
                        `(math.sin(${MoLang.targetYRotation()} * 0.25) * -5) - this`
                    ],
                    rotation: [0.0, `(${MoLang.targetYRotation()} * 0.25)`, 57.3]
                },
                arm2: {
                    position: [
                        `(math.cos(${MoLang.targetYRotation()} * 0.25) * -5) - this`,
                        0.0,
                        `(math.sin(${MoLang.targetYRotation()} * 0.25) * 5) - this`
                    ],
                    rotation: [0.0, `((${MoLang.targetYRotation()} * 0.25) + 180) - this`, -57.3]
                }
            }
        },
        {
            idAnimation: "snowgolem.move",
            loop: true,
            bones: {
                piece1: {
                    rotation: [0.0, `${MoLang.targetYRotation()} * 0.25`, 0.0]
                }
            }
        }
    ]
});
