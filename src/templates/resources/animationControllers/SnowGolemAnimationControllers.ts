import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const SnowGolemAnimationControllers = createRPAnimController({
    animControllers: [
        {
            idController: "snowgolem.move.v1.8",
            initialState: "default",
            states: {
                default: {
                    animations: [
                        { move: MoLang.modifiedMoveSpeed() },
                        "look_at_target"
                    ]
                }
            }
        }
    ]
});
