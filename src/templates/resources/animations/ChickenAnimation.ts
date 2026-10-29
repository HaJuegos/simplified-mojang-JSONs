import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const ChickenAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "chicken.general.v1.0",
            loop: true,
            bones: {
                body: {
                    rotation: ["90.0 - this", 0.0, 0.0]
                },
                wing0: {
                    rotation: [0.0, 0.0, "variable.wing_flap - this"]
                },
                wing1: {
                    rotation: [0.0, 0.0, "-variable.wing_flap - this"]
                }
            }
        },
        {
            idAnimation: "chicken.baby_transform",
            loop: true,
            bones: {
                head: {
                    scale: 2.0
                }
            }
        },
        {
            idAnimation: "chicken.general",
            loop: true,
            bones: {
                body: {
                    rotation: ["-this", 0.0, 0.0]
                },
                wing0: {
                    rotation: [0.0, 0.0, "variable.wing_flap - this"]
                },
                wing1: {
                    rotation: [0.0, 0.0, "-variable.wing_flap - this"]
                }
            }
        },
        {
            idAnimation: "chicken.move",
            animTimeUpdate: MoLang.modifiedDistanceMoved(),
            loop: true,
            bones: {
                leg0: {
                    rotation: [`${MoLang.cos(`${MoLang.animTime()} * 38.17`)} * 80.0`, 0.0, 0.0]
                },
                leg1: {
                    rotation: [`${MoLang.cos(`${MoLang.animTime()} * 38.17`)} * -80.0`, 0.0, 0.0]
                }
            }
        }
    ]
});
