import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const ZombieAnimationControllers = createRPAnimController({
    formatVersion: FormatVersionAnimControllerList.MostRecent,
    animControllers: [
        {
            idController: "zombie.attack_bare_hand",
            initialState: "default",
            states: {
                default: {
                    transitions: [
                        { is_bare_hand: `${MoLang.variable("is_holding_left")} != 1.0` }
                    ]
                },
                is_bare_hand: {
                    animations: [
                        { zombie_attack_bare_hand: `!${MoLang.isBaby()} || !${MoLang.isItemEquipped(0)}` },
                        { baby_zombie_attack_bare_hand: `${MoLang.isBaby()} && ${MoLang.isItemEquipped(0)}` }
                    ],
                    transitions: [
                        { default: `${MoLang.variable("is_holding_left")} == 1.0` }
                    ]
                }
            }
        },
        {
            idController: "zombie.swimming",
            initialState: "default",
            states: {
                default: {
                    transitions: [
                        { is_swimming: `${MoLang.variable("swim_amount")} > 0.0` }
                    ]
                },
                is_swimming: {
                    animations: ["swimming"],
                    transitions: [
                        { default: `${MoLang.variable("swim_amount")} <= 0.0` }
                    ]
                }
            }
        }
    ]
});
