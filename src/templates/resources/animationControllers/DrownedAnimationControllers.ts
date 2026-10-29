import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const DrownedAnimationControllers = createRPAnimController({
    formatVersion: FormatVersionAnimControllerList.MostRecent,
    animControllers: [
        {
            idController: "drowned.attack.rotations",
            initialState: "default",
            states: {
                default: {
                    animations: [
                        { zombie_attack_bare_hand: `!${MoLang.isBaby()} || !${MoLang.isItemEquipped(0)}` },
                        { baby_zombie_attack_bare_hand: `${MoLang.isBaby()} && ${MoLang.isItemEquipped(0)}` }
                    ],
                    transitions: [
                        {
                            one_hand_attack: `${MoLang.isItemEquipped("off_hand")} || ${MoLang.variable("is_brandishing_spear")}`
                        }
                    ]
                },
                one_hand_attack: {
                    animations: [
                        { attack_rotations: `!${MoLang.isBaby()} || !${MoLang.isItemEquipped(0)}` },
                        { baby_attack_rotations: `${MoLang.isBaby()} && ${MoLang.isItemEquipped(0)}` }
                    ],
                    transitions: [
                        { default: `!${MoLang.isItemEquipped("off_hand")} && !${MoLang.variable("is_brandishing_spear")}` }
                    ]
                }
            }
        }
    ]
});
