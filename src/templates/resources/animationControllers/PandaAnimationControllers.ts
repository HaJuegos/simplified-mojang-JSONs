import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const PandaAnimationControllers = createRPAnimController({
    animControllers: [
        {
            idController: "panda.baby",
            initialState: "baby",
            states: {
                baby: {
                    animations: [
                        { baby_transform: MoLang.isBaby() }
                    ]
                }
            }
        },
        {
            idController: "panda.move",
            initialState: "default",
            states: {
                default: {
                    animations: [
                        { walk: MoLang.modifiedMoveSpeed() },
                        "look_at_target"
                    ],
                    transitions: [
                        { rolling: `${MoLang.rollCounter()} > 0` },
                        { sitting: `${MoLang.sitAmount()} > 0` },
                        { lying: `${MoLang.lieAmount()} > 0` }
                    ]
                },
                lying: {
                    animations: [
                        { lying: `!${MoLang.isBaby()}` },
                        { baby_lying: MoLang.isBaby() }
                    ],
                    transitions: [
                        { default: `${MoLang.lieAmount()} <= 0` },
                        { rolling: `${MoLang.rollCounter()} > 0` },
                        { sitting: `${MoLang.sitAmount()} > 0` }
                    ]
                },
                rolling: {
                    animations: [
                        { rolling: `!${MoLang.isBaby()}` },
                        { baby_rolling: MoLang.isBaby() }
                    ],
                    transitions: [
                        { default: `${MoLang.rollCounter()} <= 0` },
                        { sitting: `${MoLang.sitAmount()} > 0` },
                        { lying: `${MoLang.lieAmount()} > 0` }
                    ]
                },
                sitting: {
                    animations: [
                        { sitting: `!${MoLang.isBaby()}` },
                        { baby_sitting: MoLang.isBaby() }
                    ],
                    transitions: [
                        { default: `${MoLang.sitAmount()} <= 0` },
                        { rolling: `${MoLang.rollCounter()} > 0` },
                        { lying: `${MoLang.lieAmount()} > 0` }
                    ]
                }
            }
        },
        {
            idController: "panda.sneezing",
            initialState: "baby",
            states: {
                baby: {
                    animations: [
                        { sneezing: MoLang.sneezeCounter() }
                    ]
                }
            }
        },
        {
            idController: "panda.unhappy",
            initialState: "baby",
            states: {
                baby: {
                    animations: [
                        { unhappy: MoLang.unhappyCounter() }
                    ]
                }
            }
        }
    ]
});
