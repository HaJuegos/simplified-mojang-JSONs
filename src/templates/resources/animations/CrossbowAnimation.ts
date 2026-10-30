import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const CrossbowAnimation = createRPAnimation({
    animations: [
        {
            idAnimation: "crossbow.wield",
            loop: true,
            bones: {
                rightitem: {
                    position: [
                        `${MoLang.context("is_first_person")} ? 13.0 : 0.5`,
                        `${MoLang.context("is_first_person")} ? 7.0 : -0.5`,
                        `${MoLang.context("is_first_person")} ? 2.0 : -1.5`
                    ],
                    rotation: [
                        `${MoLang.context("is_first_person")} ? -9.0 : 0.0`,
                        `${MoLang.context("is_first_person")} ? 60.0 : -3.0`,
                        `${MoLang.context("is_first_person")} ? -47.0 : 3.25`
                    ]
                }
            }
        },
        {
            idAnimation: "crossbow.wield_first_person_pull",
            loop: true,
            bones: {
                rightitem: {
                    position: [
                        0.0,
                        `0.0 + (${MoLang.variable("charge_amount")} >= 1.0 ? ${MoLang.sin(`(${MoLang.lifeTime()}) * 1000.0 * 1.3`)} * 0.1 - ${MoLang.sin(`${MoLang.lifeTime()} * 45.0`)} * 0.25 : 0.0)`,
                        0.0
                    ]
                }
            }
        }
    ]
});
