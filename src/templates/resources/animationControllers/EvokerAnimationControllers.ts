import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const EvokerAnimationControllers = createRPAnimController({
    animControllers: [
        {
            idController: "evoker.general",
            initialState: "default",
            states: {
                casting: {
                    animations: ["look_at_target", "casting", "controller_riding"],
                    particleEffects: [
                        {
                            effect: "spell",
                            locator: "left_hand"
                        },
                        {
                            effect: "spell",
                            locator: "right_hand"
                        }
                    ],
                    transitions: [
                        { default: `!${MoLang.isCasting()}` }
                    ]
                },
                celebrating: {
                    animations: ["celebrating", "controller_riding"],
                    blendTransition: 0.2,
                    blendViaShortestPath: true,
                    transitions: [
                        { default: `!${MoLang.isCelebrating()}` }
                    ]
                },
                default: {
                    animations: ["look_at_target", "general", "controller_riding"],
                    blendTransition: 0.2,
                    blendViaShortestPath: true,
                    transitions: [
                        { casting: MoLang.isCasting() },
                        { celebrating: MoLang.isCelebrating() }
                    ]
                }
            }
        },
        {
            idController: "evoker.general.v1.0",
            initialState: "default",
            states: {
                casting: {
                    animations: ["look_at_target", "casting", "controller_riding"],
                    particleEffects: [
                        {
                            effect: "spell",
                            locator: "left_hand"
                        },
                        {
                            effect: "spell",
                            locator: "right_hand"
                        }
                    ],
                    transitions: [
                        { default: `!${MoLang.isCasting()}` }
                    ]
                },
                default: {
                    animations: ["look_at_target", "general", "controller_riding"],
                    transitions: [
                        { casting: MoLang.isCasting() }
                    ]
                }
            }
        }
    ]
});
