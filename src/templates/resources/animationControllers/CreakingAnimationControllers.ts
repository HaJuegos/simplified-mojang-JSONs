import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const CreakingAnimationControllers = createRPAnimController({
    animControllers: [
        {
            idController: "creaking.look_at_target",
            initialState: "looking_at_target",
            states: {
                looking_at_target: {
                    animations: ["look_at_target"],
                    transitions: [
                        { default: MoLang.variable("twitching") }
                    ]
                },
                default: {}
            }
        },
        {
            idController: "creaking.walk",
            initialState: "default",
            states: {
                walking: {
                    animations: [
                        { walk: `1.5 - ${MoLang.pow(1.5, `1.0 - 015.0 * ${MoLang.modifiedMoveSpeed()}`)}` }
                    ],
                    transitions: [
                        { default: `!${MoLang.variable("walking")} || ${MoLang.variable("attacking")}` }
                    ],
                    blendTransition: 0.05
                },
                default: {
                    transitions: [
                        { walking: `${MoLang.variable("walking")} && !${MoLang.variable("attacking")}` }
                    ],
                    blendTransition: 0.05
                }
            }
        },
        {
            idController: "creaking.attack",
            initialState: "default",
            states: {
                attack: {
                    animations: ["attack"],
                    transitions: [
                        { default: MoLang.allAnimationsFinished() }
                    ]
                },
                default: {
                    transitions: [
                        { attack: MoLang.variable("attacking") }
                    ]
                }
            }
        },
        {
            idController: "creaking.sway",
            initialState: "default",
            states: {
                sway: {
                    animations: ["sway"],
                    transitions: [
                        { default: `!${MoLang.variable("swaying")} && ${MoLang.allAnimationsFinished()}` }
                    ]
                },
                default: {
                    transitions: [
                        { sway: MoLang.variable("swaying") }
                    ]
                }
            }
        },
        {
            idController: "creaking.twitch",
            initialState: "default",
            states: {
                twitch: {
                    animations: ["twitch"]
                },
                default: {
                    transitions: [
                        { twitch: MoLang.variable("twitching") }
                    ]
                }
            }
        }
    ]
});
