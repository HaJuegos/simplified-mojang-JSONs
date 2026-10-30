import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const LlamaAnimationControllers = createRPAnimController({
    animControllers: [
        {
            idController: "llama.baby",
            initialState: "baby",
            states: {
                baby: {
                    animations: [
                        { baby_transform: MoLang.isBaby() }
                    ]
                }
            }
        },
        {
            idController: "llama.move",
            initialState: "default",
            states: {
                default: {
                    animations: [
                        "setup",
                        { walk: MoLang.modifiedMoveSpeed() },
                        "look_at_target"
                    ]
                }
            }
        }
    ]
});
