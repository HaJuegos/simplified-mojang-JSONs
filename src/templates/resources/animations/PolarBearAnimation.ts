import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const PolarBearAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "polarbear.baby_transform",
            loop: true,
            bones: {
                head: {
                    position: [0.0, -1.0, 3.0],
                    scale: 1.25
                }
            }
        },
        {
            idAnimation: "polarbear.move",
            loop: true,
            bones: {
                body: {
                    position: [0.0, `-9 - 2 * ${MoLang.standingScale()} - this`, 0.0],
                    rotation: [`(-(${MoLang.standingScale()}) * 63) - this`, 0.0, 0.0]
                },
                leg0: {
                    position: [0.0, `-1 * ${MoLang.standingScale()}`, `6 * ${MoLang.standingScale()}`],
                    rotation: [`${MoLang.standingScale()} * 63`, 0.0, 0.0]
                },
                leg1: {
                    position: [0.0, `-1 * ${MoLang.standingScale()}`, `6 * ${MoLang.standingScale()}`],
                    rotation: [`${MoLang.standingScale()} * 63`, 0.0, 0.0]
                },
                leg2: {
                    rotation: [`(${MoLang.standingScale()} > 1) ? (${MoLang.standingScale()} * 81) - this : 0`, 0.0, 0.0]
                },
                leg3: {
                    rotation: [`(${MoLang.standingScale()} > 1) ? (${MoLang.standingScale()} * 81) - this : 0`, 0.0, 0.0]
                }
            }
        }
    ]
});
