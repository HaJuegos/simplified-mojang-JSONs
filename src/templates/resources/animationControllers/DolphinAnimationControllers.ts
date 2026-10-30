import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const DolphinAnimationControllers = createRPAnimController({
    animControllers: [
        {
            idController: "dolphin.general",
            initialState: "default",
            states: {
                default: {
                    animations: ["move"],
                    particleEffects: [
                        {
                            effect: "dolphin_move_particle",
                            locator: "dolphin_move_particle_emitter"
                        }
                    ]
                }
            }
        }
    ]
});
