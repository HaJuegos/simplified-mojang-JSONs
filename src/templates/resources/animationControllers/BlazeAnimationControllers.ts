import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const BlazeAnimationControllers = createRPAnimController({
    animControllers: [
        {
            idController: "blaze.flame",
            initialState: "default",
            states: {
                default: {
                    transitions: [
                        { flaming: MoLang.isCharged() }
                    ]
                },
                flaming: {
                    particleEffects: [
                        { effect: "charged_flames" }
                    ],
                    transitions: [
                        { default: `!${MoLang.isCharged()}` }
                    ]
                }
            }
        },
        {
            idController: "blaze.move",
            initialState: "default",
            states: {
                default: {
                    animations: ["move", "look_at_target"]
                }
            }
        }
    ]
});
