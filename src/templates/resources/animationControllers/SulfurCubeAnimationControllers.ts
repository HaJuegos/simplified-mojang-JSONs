import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const SulfurCubeAnimationControllers = createRPAnimController({
    formatVersion: FormatVersionAnimControllerList.MostRecent,
    animControllers: [
        {
            idController: "sulfur_cube.swelling",
            initialState: "default",
            states: {
                default: {
                    animations: ["sulfur_cube_swelling"]
                }
            }
        },
        {
            idController: "sulfur_cube.offset",
            initialState: "default",
            states: {
                default: {
                    animations: ["sulfur_cube_offset"]
                }
            }
        }
    ]
});
