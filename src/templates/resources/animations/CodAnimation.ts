import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const CodAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "cod.flop",
            loop: true,
            bones: {
                body: {
                    rotation: [
                        0.0,
                        `${MoLang.cos(`${MoLang.variable("animationamountblend")} * 45.0`)} * 2.0`,
                        MoLang.variable("zrot")
                    ]
                },
                head: {
                    rotation: [0.0, `${MoLang.cos(`${MoLang.variable("animationamountblend")} * 45.0`)} * 4.0`, 0.0]
                },
                tailfin: {
                    rotation: [0.0, `${MoLang.cos(`${MoLang.variable("animationamountblend")} * 45.0`)} * -25.75`, 0.0]
                }
            }
        },
        {
            idAnimation: "cod.swim",
            loop: true,
            bones: {
                body: {
                    rotation: [0.0, `${MoLang.cos(`${MoLang.variable("animationamountblend")} * 30.0`)} * 2.0`, 0.0]
                },
                head: {
                    rotation: [0.0, `${MoLang.cos(`${MoLang.variable("animationamountblend")} * 30.0`)} * 4.0`, 0.0]
                },
                tailfin: {
                    rotation: [0.0, `${MoLang.cos(`${MoLang.variable("animationamountblend")} * 30.0`)} * -25.75`, 0.0]
                }
            }
        }
    ]
});
