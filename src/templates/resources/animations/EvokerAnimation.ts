import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const EvokerAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "evoker.casting",
            loop: true,
            bones: {
                arms: {
                    scale: 0.0
                },
                leftarm: {
                    rotation: ["math.cos(query.life_time * 763.4) * 14.3239 - this", "-this", "-135.0 - this"],
                    scale: 1.0
                },
                rightarm: {
                    rotation: ["math.cos(query.life_time * 763.4) * 14.3239 - this", "-this", "135.0 - this"],
                    scale: 1.0
                }
            }
        },
        {
            idAnimation: "evoker.casting.v1.0",
            loop: true,
            bones: {
                leftarm: {
                    position: ["5.0 - this", 0.0, "-this"],
                    rotation: ["math.cos(query.life_time * 763.4) * 14.3239 - this", "-this", "-135.0 - this"]
                },
                rightarm: {
                    position: ["-5.0 - this", 0.0, "-this"],
                    rotation: ["math.cos(query.life_time * 763.4) * 14.3239 - this", "-this", "135.0 - this"]
                }
            }
        },
        {
            idAnimation: "evoker.general",
            loop: true,
            bones: {
                arms: {
                    position: [0.0, "-3.0 - this", "-1.0 - this"],
                    rotation: ["-42.97 - this", "- this", "- this"],
                    scale: 1.0
                },
                leftarm: {
                    scale: 0.0
                },
                rightarm: {
                    scale: 0.0
                }
            }
        },
        {
            idAnimation: "evoker.general.v1.0",
            loop: true,
            bones: {
                arms: {
                    position: [0.0, "-3.0 - this", "-1.0 - this"],
                    rotation: ["-42.97 - this", "- this", "- this"]
                }
            }
        },
        {
            idAnimation: "evoker.move",
            animTimeUpdate: MoLang.modifiedDistanceMoved(),
            loop: true,
            bones: {
                leftLeg: {
                    rotation: ["(math.cos(query.anim_time * 38.17) * 40.0) - this", "-this", 0.0]
                },
                rightLeg: {
                    rotation: ["(math.cos(query.anim_time * 38.17 + 180) * 40.0) - this", "-this", 0.0]
                }
            }
        }
    ]
});
