import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const ArmadilloAnimationControllers = createRPAnimController({
    formatVersion: FormatVersionAnimControllerList.MostRecent,
    animControllers: [
        {
            idController: "armadillo.look_at_target",
            initialState: "default",
            states: {
                default: {
                    transitions: [
                        { looking_at_target: `!${MoLang.variable("is_rolled_up")}` }
                    ]
                },
                looking_at_target: {
                    animations: ["look_at_target"],
                    transitions: [
                        { default: MoLang.variable("is_rolled_up") }
                    ]
                }
            }
        },
        {
            idController: "armadillo.walk",
            initialState: "default",
            states: {
                default: {
                    transitions: [
                        { walking: MoLang.variable("walking") }
                    ],
                    blendTransition: 0.2
                },
                walking: {
                    animations: [
                        {
                            walk: `math.min(1.4, math.lerp(0.2, 2.4, ${MoLang.modifiedMoveSpeed()})) * !${MoLang.isBaby()}`,
                            baby_walk: `math.min(1.4, math.lerp(0.2, 2.4, ${MoLang.modifiedMoveSpeed()})) * ${MoLang.isBaby()}`
                        }
                    ],
                    transitions: [
                        { default: `!${MoLang.variable("walking")}` }
                    ],
                    blendTransition: 0.2
                }
            }
        },
        {
            idController: "armadillo.roll_up",
            initialState: "default",
            states: {
                default: {
                    transitions: [
                        { roll_up: MoLang.variable("is_rolled_up") }
                    ],
                    blendTransition: 0.2
                },
                roll_up: {
                    animations: [
                        {
                            roll_up: `!${MoLang.isBaby()}`,
                            baby_roll_up: MoLang.isBaby()
                        }
                    ],
                    transitions: [
                        { rolled_up: `${MoLang.variable("is_rolled_up")} && ${MoLang.anyAnimationFinished()}` },
                        { unroll_fast: `!${MoLang.variable("is_rolled_up")}` }
                    ],
                    blendTransition: 0.2
                },
                rolled_up: {
                    animations: [
                        {
                            rolled_up: `!${MoLang.isBaby()}`,
                            baby_rolled_up: MoLang.isBaby()
                        }
                    ],
                    transitions: [
                        { peek: `${MoLang.variable("is_rolled_up")} && ${MoLang.variable("is_peeking")}` },
                        { unroll: `${MoLang.variable("is_rolled_up")} && ${MoLang.variable("is_unrolling")}` },
                        { unroll_fast: `!${MoLang.variable("is_rolled_up")}` }
                    ],
                    blendTransition: 0.2
                },
                peek: {
                    animations: [
                        {
                            peek: `!${MoLang.isBaby()}`,
                            baby_peek: MoLang.isBaby()
                        }
                    ],
                    transitions: [
                        {
                            rolled_up: `${MoLang.variable("is_rolled_up")} && !${MoLang.variable("is_peeking")} && ${MoLang.anyAnimationFinished()}`
                        },
                        {
                            unroll: `${MoLang.variable("is_rolled_up")} && ${MoLang.variable("is_unrolling")} && ${MoLang.anyAnimationFinished()}`
                        },
                        { unroll_fast: `!${MoLang.variable("is_rolled_up")}` }
                    ],
                    blendTransition: 0.2
                },
                unroll: {
                    animations: [
                        {
                            unroll: `!${MoLang.isBaby()}`,
                            baby_unroll: MoLang.isBaby()
                        }
                    ],
                    transitions: [
                        { rolled_up: `${MoLang.variable("is_rolled_up")} && !${MoLang.variable("is_unrolling")}` },
                        { default: `!${MoLang.variable("is_rolled_up")} && ${MoLang.anyAnimationFinished()}` }
                    ],
                    blendTransition: 0.2
                },
                unroll_fast: {
                    animations: [
                        {
                            unroll_fast: `!${MoLang.isBaby()}`,
                            baby_unroll_fast: MoLang.isBaby()
                        }
                    ],
                    transitions: [
                        { default: MoLang.anyAnimationFinished() }
                    ],
                    blendTransition: 0.2
                }
            }
        }
    ]
});
