import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const FishAnimationControllers = createRPAnimController({
    animControllers: [
        {
            idController: "fish.general",
            initialState: "flopping",
            states: {
                flopping: {
                    animations: ["flop"],
                    transitions: [
                        { swimming: `${MoLang.isInWater()} || ${MoLang.isLevitating()}` }
                    ]
                },
                swimming: {
                    animations: ["swim"],
                    transitions: [
                        { flopping: `!${MoLang.isInWater()} && !${MoLang.isLevitating()}` }
                    ]
                }
            }
        }
    ]
});
