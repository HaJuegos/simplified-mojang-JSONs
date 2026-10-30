import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const AllayAnimationControllers = createRPAnimController({
    animControllers: [
        {
            idController: "allay.general",
            initialState: "idling",
            states: {
                idling: {
                    animations: ["idle"],
                    transitions: [
                        { flying: `${MoLang.modifiedMoveSpeed()} > 0.2` }
                    ],
                    blendTransition: 0.2
                },
                flying: {
                    animations: ["fly"],
                    transitions: [
                        { idling: `${MoLang.modifiedMoveSpeed()} < 0.2` }
                    ],
                    blendTransition: 0.2
                }
            }
        },
        {
            idController: "allay.look_at_target",
            initialState: "default",
            states: {
                default: {
                    transitions: [
                        { looking_at_target: `!${MoLang.isDancing()}` }
                    ]
                },
                looking_at_target: {
                    animations: ["look_at_target_default"],
                    transitions: [
                        { default: MoLang.isDancing() }
                    ]
                }
            }
        },
        {
            idController: "allay.holding",
            initialState: "holding",
            states: {
                holding: {
                    animations: [
                        { hold_item: `${MoLang.variable("is_holding_left")} || ${MoLang.variable("is_holding_right")}` }
                    ],
                    transitions: [
                        { fly_holding: `${MoLang.modifiedMoveSpeed()} > 0.2` }
                    ],
                    blendTransition: 0.2
                },
                fly_holding: {
                    animations: [
                        { hold_item_fly: `${MoLang.variable("is_holding_left")} || ${MoLang.variable("is_holding_right")}` }
                    ],
                    transitions: [
                        { holding: `${MoLang.modifiedMoveSpeed()} < 0.2` }
                    ],
                    blendTransition: 0.2
                }
            }
        },
        {
            idController: "allay.dancing",
            initialState: "default",
            states: {
                default: {
                    transitions: [
                        { dancing: MoLang.isDancing() }
                    ],
                    blendTransition: 0.2
                },
                dancing: {
                    animations: ["dance"],
                    transitions: [
                        { default: `!${MoLang.isDancing()}` }
                    ]
                }
            }
        }
    ]
});
