import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const IronGolemAnimationControllers = createRPAnimController({
    animControllers: [
        {
            idController: "iron_golem.arm_movement",
            initialState: "default",
            states: {
                attack: {
                    animations: ["attack"],
                    transitions: [
                        { default: `!${MoLang.hasTarget()} && ${MoLang.variable("attack_animation_tick")} <= 0.0` },
                        { has_target: `${MoLang.hasTarget()} && ${MoLang.variable("attack_animation_tick")} <= 0.0` }
                    ]
                },
                default: {
                    animations: ["move"],
                    transitions: [
                        { attack: `${MoLang.variable("attack_animation_tick")} > 0.0` },
                        { flower: MoLang.variable("offer_flower_tick") },
                        { has_target: MoLang.hasTarget() }
                    ]
                },
                flower: {
                    animations: ["flower"],
                    transitions: [
                        { attack: `${MoLang.variable("attack_animation_tick")} > 0.0` },
                        { default: `${MoLang.variable("offer_flower_tick")} <= 0.0` },
                        { has_target: MoLang.hasTarget() }
                    ]
                },
                has_target: {
                    animations: ["move_to_target"],
                    transitions: [
                        { attack: `${MoLang.variable("attack_animation_tick")} > 0.0` },
                        { default: `!${MoLang.hasTarget()}` },
                        { flower: MoLang.variable("offer_flower_tick") }
                    ]
                }
            }
        },
        {
            idController: "iron_golem.move",
            initialState: "default",
            states: {
                default: {
                    animations: [
                        { walk: MoLang.modifiedMoveSpeed() }
                    ],
                    transitions: [
                        { has_target: MoLang.hasTarget() }
                    ]
                },
                has_target: {
                    animations: [
                        { walk_to_target: MoLang.modifiedMoveSpeed() }
                    ],
                    transitions: [
                        { default: `!${MoLang.hasTarget()}` }
                    ]
                }
            }
        }
    ]
});
