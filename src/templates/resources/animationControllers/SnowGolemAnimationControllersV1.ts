import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @deprecated Ya no se usa en la actualidad. Se mantiene por compatibilidad. Usa la version normal.
 * @author HaJuegos - 29-10-2026
 */
export const SnowGolemAnimationControllersV1 = createRPAnimController({
    animControllers: [
        {
            idController: "snowgolem.move",
            initialState: "default",
            states: {
                default: {
                    animations: [
                        { move: MoLang.modifiedMoveSpeed() },
                        "look_at_target",
                        "arms"
                    ]
                }
            }
        }
    ]
});
