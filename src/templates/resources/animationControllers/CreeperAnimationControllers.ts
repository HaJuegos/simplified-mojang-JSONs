import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const CreeperAnimationControllers = createRPAnimController({
    animControllers: [
        {
            idController: "creeper.head",
            initialState: "default",
            states: {
                default: {
                    animations: ["creeper_head"]
                }
            }
        },
        {
            idController: "creeper.legs",
            initialState: "default",
            states: {
                default: {
                    animations: ["creeper_legs"]
                }
            }
        },
        {
            idController: "creeper.swelling",
            initialState: "default",
            states: {
                default: {
                    animations: ["creeper_swelling"]
                }
            }
        }
    ]
});
