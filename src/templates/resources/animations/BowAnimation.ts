import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const BowAnimation = createRPAnimation({
    animations: [
        {
            idAnimation: "bow.wield",
            loop: true,
            bones: {
                rightitem: {
                    position: [
                        `${MoLang.context("is_first_person")} ? -5.5 : 0.5`,
                        `${MoLang.context("is_first_person")} ? -3.0 : -2.5`,
                        `${MoLang.context("is_first_person")} ? -3.0 : 1.0`
                    ],
                    rotation: [
                        `${MoLang.context("is_first_person")} ? 38.0 : 0.0`,
                        `${MoLang.context("is_first_person")} ? -120.0 : 0.0`,
                        `${MoLang.context("is_first_person")} ? -63.0 : 0.0`
                    ]
                }
            }
        },
        {
            idAnimation: "bow.wield_first_person_pull",
            loop: true,
            bones: {
                rightitem: {
                    position: [
                        -1.5,
                        `2.5 + (${MoLang.variable("charge_amount")} >= 1.0 ? ${MoLang.sin(`(${MoLang.lifeTime()}) * 1000.0 * 1.3`)} * 0.1 - ${MoLang.sin(`${MoLang.lifeTime()} * 45.0`)} * 0.5 : 0.0)`,
                        -4.8
                    ],
                    rotation: [-53.0, 8.0, 35.0]
                }
            }
        }
    ]
});
