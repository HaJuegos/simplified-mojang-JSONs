import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const ShieldAnimationControllers = createRPAnimController({
    formatVersion: FormatVersionAnimControllerList.MostRecent,
    animControllers: [
        {
            idController: "shield.wield",
            initialState: "default",
            states: {
                default: {
                    animations: [
                        { wield_main_hand_first_person: `${MoLang.context("item_slot")} == 'main_hand'` },
                        { wield_off_hand_first_person: `${MoLang.context("item_slot")} != 'main_hand'` }
                    ],
                    transitions: [
                        { blocking: MoLang.blocking() },
                        { third_person: `!${MoLang.context("is_first_person")}` }
                    ]
                },
                blocking: {
                    animations: [
                        {
                            wield_main_hand_first_person: `!${MoLang.variable("is_blocking_main_hand")} && ${MoLang.context("item_slot")} == 'main_hand'`
                        },
                        {
                            wield_main_hand_first_person_block: `${MoLang.variable("is_blocking_main_hand")} && ${MoLang.context("item_slot")} == 'main_hand'`
                        },
                        {
                            wield_off_hand_first_person_block: `${MoLang.variable("is_blocking_off_hand")} && ${MoLang.context("item_slot")} == 'off_hand'`
                        }
                    ],
                    transitions: [
                        { default: `!${MoLang.blocking()}` },
                        { third_person: `!${MoLang.context("is_first_person")}` }
                    ]
                },
                third_person: {
                    animations: ["wield_third_person"],
                    transitions: [
                        { default: MoLang.context("is_first_person") }
                    ]
                }
            }
        }
    ]
});
