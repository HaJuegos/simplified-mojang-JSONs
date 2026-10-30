import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const SpyglassAnimation = createRPAnimation({
    animations: [
        {
            idAnimation: "spyglass.holding",
            loop: true,
            bones: {
                spyglass: {
                    position: [
                        `${MoLang.context("is_first_person")} ? 2.0 : 1.0`,
                        `${MoLang.context("is_first_person")} ? 25.0 : 22.0`,
                        `${MoLang.context("is_first_person")} ? -1.0 : 0.0`
                    ],
                    rotation: [
                        `${MoLang.context("is_first_person")} ? 58.0 : 0.0`,
                        `${MoLang.context("is_first_person")} ? -48.0 : -90.0`,
                        `${MoLang.context("is_first_person")} ? -44.0 : 0.0`
                    ]
                }
            }
        },
        {
            idAnimation: "spyglass.scoping",
            loop: true,
            bones: {
                spyglass: {
                    position: [-1.0, 27.0, -3.0],
                    rotation: [0.0, -90.0, 0.0]
                }
            }
        }
    ]
});
