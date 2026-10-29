import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const CreeperAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "creeper.legs",
            loop: true,
            bones: {
                leg0: {
                    rotation: ["variable.leg_rot - this", 0.0, 0.0]
                },
                leg1: {
                    rotation: ["-variable.leg_rot - this", 0.0, 0.0]
                },
                leg2: {
                    rotation: ["-variable.leg_rot - this", 0.0, 0.0]
                },
                leg3: {
                    rotation: ["variable.leg_rot - this", 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "creeper.swelling",
            loop: true,
            bones: {
                body: {
                    scale: [
                        MoLang.variable("swelling_scale1"),
                        MoLang.variable("swelling_scale2"),
                        MoLang.variable("swelling_scale1")
                    ]
                },
                head: {
                    scale: [
                        MoLang.variable("swelling_scale1"),
                        MoLang.variable("swelling_scale2"),
                        MoLang.variable("swelling_scale1")
                    ]
                },
                leg0: {
                    scale: [
                        MoLang.variable("swelling_scale1"),
                        MoLang.variable("swelling_scale2"),
                        MoLang.variable("swelling_scale1")
                    ]
                },
                leg1: {
                    scale: [
                        MoLang.variable("swelling_scale1"),
                        MoLang.variable("swelling_scale2"),
                        MoLang.variable("swelling_scale1")
                    ]
                },
                leg2: {
                    scale: [
                        MoLang.variable("swelling_scale1"),
                        MoLang.variable("swelling_scale2"),
                        MoLang.variable("swelling_scale1")
                    ]
                },
                leg3: {
                    scale: [
                        MoLang.variable("swelling_scale1"),
                        MoLang.variable("swelling_scale2"),
                        MoLang.variable("swelling_scale1")
                    ]
                }
            }
        }
    ]
});
