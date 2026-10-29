import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const TurtleAnimationControllers = createRPAnimController({
    formatVersion: FormatVersionAnimControllerList.MostRecent,
    animControllers: [
        {
            idController: "turtle.general",
            initialState: "default",
            states: {
                default: {
                    animations: ["general"]
                }
            }
        },
        {
            idController: "turtle.move",
            initialState: "default",
            states: {
                default: {
                    animations: ["look_at_target"],
                    transitions: [
                        { swimming: `${MoLang.isInWater()} && !${MoLang.isOnGround()}` },
                        { walking: `!${MoLang.isInWater()} && ${MoLang.isOnGround()}` }
                    ]
                },
                swimming: {
                    animations: ["move", "look_at_target"],
                    transitions: [
                        { walking: `!${MoLang.isInWater()} && ${MoLang.isOnGround()}` }
                    ]
                },
                walking: {
                    animations: ["ground_move", "look_at_target"],
                    transitions: [
                        { swimming: `${MoLang.isInWater()} && !${MoLang.isOnGround()}` }
                    ]
                }
            }
        }
    ]
});
