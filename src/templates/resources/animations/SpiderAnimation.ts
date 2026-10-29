import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const SpiderAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "spider.default_leg_pose",
            loop: true,
            bones: {
                leg0: {
                    rotation: [0.0, "45.0 - this", "-45.0 - this"]
                },
                leg1: {
                    rotation: [0.0, "-45.0 - this", "45.0 - this"]
                },
                leg2: {
                    rotation: [0.0, "22.5 - this", "-33.3 - this"]
                },
                leg3: {
                    rotation: [0.0, "-22.5 - this", "33.3 - this"]
                },
                leg4: {
                    rotation: [0.0, "-22.5 - this", "-33.3 - this"]
                },
                leg5: {
                    rotation: [0.0, "22.5 - this", "33.3 - this"]
                },
                leg6: {
                    rotation: [0.0, "-45.0 - this", "-45.0 - this"]
                },
                leg7: {
                    rotation: [0.0, "45.0 - this", "45.0 - this"]
                }
            }
        },
        {
            idAnimation: "spider.look_at_target",
            loop: true,
            bones: {
                head: {
                    rotation: [MoLang.targetXRotation(), MoLang.targetYRotation(), 0.0]
                }
            }
        },
        {
            idAnimation: "spider.walk",
            animTimeUpdate: MoLang.modifiedDistanceMoved(),
            loop: true,
            bones: {
                leg0: {
                    rotation: [
                        0.0,
                        `-${MoLang.abs(`${MoLang.cos(`${MoLang.animTime()} * 76.34 + 90 * 0`)} * 22.92`)}`,
                        MoLang.abs(`${MoLang.sin(`${MoLang.animTime()} * 38.17 + 90 * 0`)} * 22.92`)
                    ]
                },
                leg1: {
                    rotation: [
                        0.0,
                        MoLang.abs(`${MoLang.cos(`${MoLang.animTime()} * 76.34 + 90 * 0`)} * 22.92`),
                        `-${MoLang.abs(`${MoLang.sin(`${MoLang.animTime()} * 38.17 + 90 * 0`)} * 22.92`)}`
                    ]
                },
                leg2: {
                    rotation: [
                        0.0,
                        `-${MoLang.abs(`${MoLang.cos(`${MoLang.animTime()} * 76.34 + 90 * 1`)} * 22.92`)}`,
                        MoLang.abs(`${MoLang.sin(`${MoLang.animTime()} * 38.17 + 90 * 1`)} * 22.92`)
                    ]
                },
                leg3: {
                    rotation: [
                        0.0,
                        MoLang.abs(`${MoLang.cos(`${MoLang.animTime()} * 76.34 + 90 * 1`)} * 22.92`),
                        `-${MoLang.abs(`${MoLang.sin(`${MoLang.animTime()} * 38.17 + 90 * 1`)} * 22.92`)}`
                    ]
                },
                leg4: {
                    rotation: [
                        0.0,
                        `-${MoLang.abs(`${MoLang.cos(`${MoLang.animTime()} * 76.34 + 90 * 2`)} * 22.92`)}`,
                        MoLang.abs(`${MoLang.sin(`${MoLang.animTime()} * 38.17 + 90 * 2`)} * 22.92`)
                    ]
                },
                leg5: {
                    rotation: [
                        0.0,
                        MoLang.abs(`${MoLang.cos(`${MoLang.animTime()} * 76.34 + 90 * 2`)} * 22.92`),
                        `-${MoLang.abs(`${MoLang.sin(`${MoLang.animTime()} * 38.17 + 90 * 2`)} * 22.92`)}`
                    ]
                },
                leg6: {
                    rotation: [
                        0.0,
                        `-${MoLang.abs(`${MoLang.cos(`${MoLang.animTime()} * 76.34 + 90 * 3`)} * 22.92`)}`,
                        MoLang.abs(`${MoLang.sin(`${MoLang.animTime()} * 38.17 + 90 * 3`)} * 22.92`)
                    ]
                },
                leg7: {
                    rotation: [
                        0.0,
                        MoLang.abs(`${MoLang.cos(`${MoLang.animTime()} * 76.34 + 90 * 3`)} * 22.92`),
                        `-${MoLang.abs(`${MoLang.sin(`${MoLang.animTime()} * 38.17 + 90 * 3`)} * 22.92`)}`
                    ]
                }
            }
        }
    ]
});
