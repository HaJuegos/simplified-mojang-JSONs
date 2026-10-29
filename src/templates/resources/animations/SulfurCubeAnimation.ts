import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const SulfurCubeAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "sulfur_cube.swelling",
            loop: true,
            bones: {
                sulfur_cube: {
                    scale: [
                        MoLang.variable("swelling_scale"),
                        MoLang.variable("swelling_scale"),
                        MoLang.variable("swelling_scale")
                    ]
                }
            }
        },
        {
            idAnimation: "sulfur_cube.offset",
            loop: true,
            bones: {
                sulfur_cube: {
                    position: [0.0, MoLang.variable("y_offset"), 0.0]
                },
                rightItem: {
                    position: [0.0, MoLang.variable("y_offset"), 0.0]
                }
            }
        }
    ]
});
