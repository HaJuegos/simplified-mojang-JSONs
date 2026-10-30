import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const WitchAnimationControllers = createRPAnimController({
    animControllers: [
        {
            idController: "witch.general",
            initialState: "default",
            states: {
                default: {
                    animations: ["villager_general", "look_at_target", "general"]
                }
            }
        }
    ]
});
