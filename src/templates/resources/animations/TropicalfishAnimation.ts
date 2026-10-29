import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const TropicalfishAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "tropicalfish.flop",
            loop: true,
            bones: {
                body: {
                    rotation: [
                        0.0,
                        `${MoLang.cos(`${MoLang.variable("animationamountblend")} * 45.0`)} * 2.0`,
                        MoLang.variable("zrot")
                    ]
                },
                tailfin: {
                    rotation: [0.0, `${MoLang.cos(`${MoLang.variable("animationamountblend")} * 45.0`)} * -25.75`, 0.0]
                }
            }
        },
        {
            idAnimation: "tropicalfish.swim",
            loop: true,
            bones: {
                tailfin: {
                    rotation: [0.0, `${MoLang.cos(`${MoLang.variable("animationamountblend")} * 30.0`)} * -25.75`, 0.0]
                }
            }
        }
    ]
});
