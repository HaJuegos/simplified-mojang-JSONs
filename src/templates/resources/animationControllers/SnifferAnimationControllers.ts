import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const SnifferAnimationControllers = createRPAnimController({
    formatVersion: FormatVersionAnimControllerList.MostRecent,
    animControllers: [
        {
            idController: "sniffer.baby",
            initialState: "default",
            states: {
                default: {
                    animations: [
                        { baby_transform: MoLang.isBaby() }
                    ]
                }
            }
        },
        {
            idController: "sniffer.general",
            initialState: "default",
            states: {
                default: {
                    animations: ["look_at_target"]
                }
            }
        },
        {
            idController: "sniffer.walk",
            initialState: "default",
            states: {
                default: {
                    transitions: [
                        { walking: MoLang.modifiedMoveSpeed() }
                    ],
                    blendTransition: 0.2
                },
                walking: {
                    animations: [
                        { walk: MoLang.variable("moving") }
                    ],
                    transitions: [
                        { default: `${MoLang.modifiedMoveSpeed()} < 0` }
                    ],
                    blendTransition: 0.2
                }
            }
        },
        {
            idController: "sniffer.sniffsniff",
            initialState: "default",
            states: {
                default: {
                    transitions: [
                        {
                            sniffsniff: `${MoLang.modifiedMoveSpeed()} > 0.005 && !${MoLang.isSearching()} && !${MoLang.isDigging()} && !${MoLang.timerFlag1()} && !${MoLang.timerFlag2()}`
                        }
                    ],
                    blendTransition: 0.2
                },
                sniffsniff: {
                    animations: ["sniffsniff"],
                    transitions: [
                        { default: `${MoLang.modifiedMoveSpeed()} < 0.005` }
                    ],
                    blendTransition: 0.2
                }
            }
        },
        {
            idController: "sniffer.long_sniff",
            initialState: "default",
            states: {
                default: {
                    transitions: [
                        { long_sniff: MoLang.timerFlag1() }
                    ],
                    blendTransition: 0.2
                },
                long_sniff: {
                    animations: ["long_sniff"],
                    transitions: [
                        { default: `!${MoLang.timerFlag1()}` }
                    ],
                    blendTransition: 0.2
                }
            }
        },
        {
            idController: "sniffer.search",
            initialState: "default",
            states: {
                default: {
                    transitions: [
                        { search: MoLang.isSearching() }
                    ],
                    blendTransition: 0.2
                },
                search: {
                    animations: ["search"],
                    transitions: [
                        { default: `!${MoLang.isSearching()}` }
                    ],
                    blendTransition: 0.2
                }
            }
        },
        {
            idController: "sniffer.dig",
            initialState: "default",
            states: {
                default: {
                    transitions: [
                        { dig: MoLang.isDigging() }
                    ],
                    blendTransition: 0.2
                },
                dig: {
                    animations: ["dig"],
                    transitions: [
                        { default: `!${MoLang.isDigging()}` }
                    ],
                    blendTransition: 0.2
                }
            }
        },
        {
            idController: "sniffer.stand_up",
            initialState: "default",
            states: {
                default: {
                    transitions: [
                        { stand_up: MoLang.timerFlag2() }
                    ],
                    blendTransition: 0.2
                },
                stand_up: {
                    animations: ["stand_up"],
                    transitions: [
                        { default: `!${MoLang.timerFlag2()}` }
                    ],
                    blendTransition: 0.2
                }
            }
        },
        {
            idController: "sniffer.feeling_happy",
            initialState: "default",
            states: {
                default: {
                    transitions: [
                        { feeling_happy: MoLang.timerFlag3() }
                    ],
                    blendTransition: 0.2
                },
                feeling_happy: {
                    animations: ["feeling_happy"],
                    transitions: [
                        { default: `!${MoLang.timerFlag3()}` }
                    ],
                    blendTransition: 0.2
                }
            }
        }
    ]
});
