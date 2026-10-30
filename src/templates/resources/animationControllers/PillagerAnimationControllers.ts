import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const PillagerAnimationControllers = createRPAnimController({
    animControllers: [
        {
            idController: "pillager.attack",
            initialState: "default",
            states: {
                charge: {
                    animations: ["crossbow_charge"],
                    transitions: [
                        { default: `${MoLang.variable("attack_state")} == 0` },
                        { hold: `${MoLang.variable("attack_state")} == 1` }
                    ]
                },
                default: {
                    transitions: [
                        { hold: `${MoLang.variable("attack_state")} == 1` },
                        { charge: `${MoLang.variable("attack_state")} == 2` }
                    ]
                },
                hold: {
                    animations: ["crossbow_hold"],
                    transitions: [
                        { default: `${MoLang.variable("attack_state")} == 0` },
                        { charge: `${MoLang.variable("attack_state")} == 2` }
                    ]
                }
            }
        },
        {
            idController: "pillager.root",
            initialState: "default",
            states: {
                default: {
                    blendTransition: 0.2,
                    blendViaShortestPath: true,
                    animations: [
                        "controller_humanoid_base_pose",
                        "controller_look_at_target",
                        "controller_move",
                        "controller_riding",
                        "controller_attack",
                        "controller_bob",
                        "controller_pillager_attack"
                    ],
                    transitions: [
                        { celebrating: MoLang.isCelebrating() }
                    ]
                },
                celebrating: {
                    animations: [
                        "celebrating",
                        { "riding.legs": MoLang.isRiding() }
                    ],
                    blendTransition: 0.2,
                    blendViaShortestPath: true,
                    transitions: [
                        { default: `!${MoLang.isCelebrating()}` }
                    ]
                }
            }
        }
    ]
});
