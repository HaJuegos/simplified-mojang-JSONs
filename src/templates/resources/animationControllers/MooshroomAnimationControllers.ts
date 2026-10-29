import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const MooshroomAnimationControllers = createRPAnimController({
    formatVersion: FormatVersionAnimControllerList.MostRecent,
    animControllers: [
        {
            idController: "mooshroom.baby",
            initialState: "default",
            states: {
                default: {
                    animations: ["baby_transform"]
                }
            }
        },
        {
            idController: "mooshroom.move",
            initialState: "default",
            states: {
                default: {
                    animations: [
                        { walk: MoLang.modifiedMoveSpeed() },
                        "look_at_target"
                    ]
                }
            }
        },
        {
            idController: "mooshroom.setup",
            initialState: "default",
            states: {
                default: {
                    animations: ["setup"]
                }
            }
        }
    ]
});
