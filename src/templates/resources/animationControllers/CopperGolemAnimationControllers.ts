import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const CopperGolemAnimationControllers = createRPAnimController({
    animControllers: [
        {
            idController: "copper_golem.idle",
            initialState: "selector",
            states: {
                selector: {
                    transitions: [
                        {
                            default: `${MoLang.variable("oxidation")} == 'unoxidized' || ${MoLang.variable("oxidation")} == 'exposed'`
                        },
                        { weathered: `${MoLang.variable("oxidation")} == 'weathered'` },
                        { default: `${MoLang.variable("oxidation")} == 'oxidized'` }
                    ]
                },
                default: {
                    animations: ["spin"],
                    transitions: [
                        { selector: MoLang.allAnimationsFinished() }
                    ]
                },
                weathered: {
                    animations: ["spin_weathered"],
                    transitions: [
                        { selector: MoLang.allAnimationsFinished() }
                    ]
                },
                oxidized: {
                    animations: ["spin_oxidized"],
                    transitions: [
                        { selector: MoLang.allAnimationsFinished() }
                    ]
                }
            }
        },
        {
            idController: "copper_golem.walk",
            initialState: "default",
            states: {
                default: {
                    animations: [
                        { walk: MoLang.variable("walking") }
                    ],
                    transitions: [
                        { holding_item: MoLang.variable("is_holding_right") }
                    ],
                    blendTransition: 0.2
                },
                holding_item: {
                    animations: [
                        { walk_holding_item: MoLang.variable("walking") },
                        "hold_item"
                    ],
                    transitions: [
                        { default: `!${MoLang.variable("is_holding_right")}` }
                    ],
                    blendTransition: 0.2
                }
            }
        },
        {
            idController: "copper_golem.chest_interaction",
            initialState: "none",
            states: {
                none: {
                    transitions: [
                        { put_item: `${MoLang.variable("chest_interaction")} == 'put'` },
                        { put_item_fail: `${MoLang.variable("chest_interaction")} == 'put_fail'` },
                        { take_item: `${MoLang.variable("chest_interaction")} == 'take'` },
                        { take_item_fail: `${MoLang.variable("chest_interaction")} == 'take_fail'` }
                    ],
                    blendTransition: 0.2
                },
                put_item: {
                    animations: ["chest_interaction.put_item"],
                    transitions: [
                        { none: MoLang.allAnimationsFinished() }
                    ]
                },
                put_item_fail: {
                    animations: ["chest_interaction.put_item_fail"],
                    transitions: [
                        { none: MoLang.allAnimationsFinished() }
                    ]
                },
                take_item: {
                    animations: ["chest_interaction.take_item"],
                    transitions: [
                        { none: MoLang.allAnimationsFinished() }
                    ]
                },
                take_item_fail: {
                    animations: ["chest_interaction.take_item_fail"],
                    transitions: [
                        { none: MoLang.allAnimationsFinished() }
                    ]
                }
            }
        }
    ]
});
