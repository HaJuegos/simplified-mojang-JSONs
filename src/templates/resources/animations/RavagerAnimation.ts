import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const RavagerAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "ravager.biting",
            loop: true,
            bones: {
                mouth: {
                    rotation: [
                        `math.sin(math.min(${MoLang.animTime()} / (variable.bite_anim_duration / 2.0f), 1.0f) * 180.0f) * 40.0f`,
                        0.0,
                        0.0
                    ]
                },
                neck: {
                    position: [
                        0.0,
                        0.0,
                        `-math.sin(math.min(${MoLang.animTime()} / variable.bite_anim_duration, 1.0f) * 180.0f) * variable.bite_neck_length`
                    ]
                }
            }
        },
        {
            idAnimation: "ravager.idle_mouth",
            loop: true,
            bones: {
                mouth: {
                    rotation: [1.8, 0.0, 0.0]
                },
                neck: {
                    position: [0.0, 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "ravager.roaring",
            loop: true,
            bones: {
                mouth: {
                    rotation: [
                        `${MoLang.sin(`${MoLang.min(`${MoLang.animTime()} / ${MoLang.variable("roar_length")}`, 1.0)} * 180`)} * 40.0`,
                        0.0,
                        0.0
                    ]
                }
            }
        },
        {
            idAnimation: "ravager.stunned",
            loop: true,
            bones: {
                neck: {
                    position: [`${MoLang.sin(`${MoLang.lifeTime()} * 180.0`)} * 2.8`, -5.0, 0.0],
                    rotation: [15.0, 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "ravager.walk",
            animTimeUpdate: MoLang.modifiedDistanceMoved(),
            loop: true,
            bones: {
                leg0: {
                    rotation: [`${MoLang.cos(`${MoLang.animTime()} * 38.17`)} * 22.92`, 0.0, 0.0]
                },
                leg1: {
                    rotation: [`${MoLang.cos(`${MoLang.animTime()} * 38.17`)} * -22.92`, 0.0, 0.0]
                },
                leg2: {
                    rotation: [`${MoLang.cos(`${MoLang.animTime()} * 38.17`)} * -22.92`, 0.0, 0.0]
                },
                leg3: {
                    rotation: [`${MoLang.cos(`${MoLang.animTime()} * 38.17`)} * 22.92`, 0.0, 0.0]
                }
            }
        }
    ]
});
