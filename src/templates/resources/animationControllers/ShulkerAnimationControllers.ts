import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const ShulkerAnimationControllers = createRPAnimController({
    formatVersion: FormatVersionAnimControllerList.MostRecent,
    animControllers: [
        {
            idController: "shulker.facing",
            initialState: "default",
            states: {
                default: {
                    animations: ["facing"]
                }
            }
        },
        {
            idController: "shulker.move",
            initialState: "default",
            states: {
                default: {
                    animations: ["move", "look_at_target"]
                }
            }
        }
    ]
});
