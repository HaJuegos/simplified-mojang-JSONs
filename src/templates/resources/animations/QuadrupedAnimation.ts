import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const QuadrupedAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "quadruped.walk",
            animTimeUpdate: MoLang.modifiedDistanceMoved(),
            loop: true,
            bones: {
                leg0: {
                    rotation: [`${MoLang.cos(`${MoLang.animTime()} * 38.17`)} * 80.0`, 0.0, 0.0]
                },
                leg1: {
                    rotation: [`${MoLang.cos(`${MoLang.animTime()} * 38.17`)} * -80.0`, 0.0, 0.0]
                },
                leg2: {
                    rotation: [`${MoLang.cos(`${MoLang.animTime()} * 38.17`)} * -80.0`, 0.0, 0.0]
                },
                leg3: {
                    rotation: [`${MoLang.cos(`${MoLang.animTime()} * 38.17`)} * 80.0`, 0.0, 0.0]
                }
            }
        }
    ]
});
