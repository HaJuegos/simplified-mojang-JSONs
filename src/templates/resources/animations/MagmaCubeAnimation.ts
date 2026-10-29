import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const MagmaCubeAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "magma_cube.move",
            loop: true,
            bones: {
                bodycube_0: {
                    position: [
                        0.0,
                        `3.0 * (${MoLang.variable("slime_squish_factor")} < 0.0 ? 0.0 : ${MoLang.variable("slime_squish_factor")}) * 1.7`,
                        0.0
                    ]
                },
                bodycube_1: {
                    position: [
                        0.0,
                        `2.0 * (${MoLang.variable("slime_squish_factor")} < 0.0 ? 0.0 : ${MoLang.variable("slime_squish_factor")}) * 1.7`,
                        0.0
                    ]
                },
                bodycube_2: {
                    position: [
                        0.0,
                        `1.0 * (${MoLang.variable("slime_squish_factor")} < 0.0 ? 0.0 : ${MoLang.variable("slime_squish_factor")}) * 1.7`,
                        0.0
                    ]
                },
                bodycube_4: {
                    position: [
                        0.0,
                        `-1.0 * (${MoLang.variable("slime_squish_factor")} < 0.0 ? 0.0 : ${MoLang.variable("slime_squish_factor")}) * 1.7`,
                        0.0
                    ]
                },
                bodycube_5: {
                    position: [
                        0.0,
                        `-2.0 * (${MoLang.variable("slime_squish_factor")} < 0.0 ? 0.0 : ${MoLang.variable("slime_squish_factor")}) * 1.7`,
                        0.0
                    ]
                },
                bodycube_6: {
                    position: [
                        0.0,
                        `-3.0 * (${MoLang.variable("slime_squish_factor")} < 0.0 ? 0.0 : ${MoLang.variable("slime_squish_factor")}) * 1.7`,
                        0.0
                    ]
                },
                bodycube_7: {
                    position: [
                        0.0,
                        `-4.0 * (${MoLang.variable("slime_squish_factor")} < 0.0 ? 0.0 : ${MoLang.variable("slime_squish_factor")}) * 1.7`,
                        0.0
                    ]
                }
            }
        }
    ]
});
