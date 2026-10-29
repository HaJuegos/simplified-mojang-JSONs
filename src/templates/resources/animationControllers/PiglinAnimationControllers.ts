import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const PiglinAnimationControllers = createRPAnimController({
    formatVersion: FormatVersionAnimControllerList.MostRecent,
    animControllers: [
        {
            idController: "piglin.attack",
            initialState: "default",
            states: {
                ranged_charge: {
                    animations: ["crossbow_charge"],
                    transitions: [
                        { default: `${MoLang.variable("attack_state")} == 0 || ${MoLang.isAdmiring()}` },
                        { ranged_hold: `${MoLang.variable("attack_state")} == 1` }
                    ]
                },
                default: {
                    transitions: [
                        {
                            ranged_hold: `${MoLang.variant()} == 0 && ${MoLang.variable("attack_state")} == 1 && !${MoLang.isAdmiring()}`
                        },
                        {
                            ranged_charge: `${MoLang.variant()} == 0 && ${MoLang.variable("attack_state")} == 2 && !${MoLang.isAdmiring()}`
                        },
                        {
                            hand_attack: `${MoLang.variable("has_target")} && ${MoLang.variant()} == 1 && !${MoLang.isItemEquipped()} && ${MoLang.variable("attack_time")} >= 0.0 && !${MoLang.isAdmiring()}`
                        },
                        {
                            melee_attack: `${MoLang.variable("has_target")} && ${MoLang.variant()} == 1 && ${MoLang.isItemEquipped()} && ${MoLang.variable("attack_time")} >= 0.0 && !${MoLang.isAdmiring()}`
                        }
                    ]
                },
                ranged_hold: {
                    animations: ["crossbow_hold"],
                    transitions: [
                        { default: `${MoLang.variable("attack_state")} == 0 || ${MoLang.isAdmiring()}` },
                        { ranged_charge: `${MoLang.variable("attack_state")} == 2` }
                    ]
                },
                melee_attack: {
                    animations: ["melee_attack"],
                    transitions: [
                        {
                            default: `!${MoLang.isItemEquipped()} || !${MoLang.variable("has_target")} || ${MoLang.variable("attack_time")} < 0.0 || ${MoLang.isAdmiring()}`
                        }
                    ]
                },
                hand_attack: {
                    animations: ["hand_attack"],
                    transitions: [
                        {
                            default: `${MoLang.isItemEquipped()} || !${MoLang.variable("has_target")} || ${MoLang.variable("attack_time")} < 0.0 || ${MoLang.isAdmiring()}`
                        }
                    ]
                }
            }
        }
    ]
});
