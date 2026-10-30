import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const PhantomAnimationControllers = createRPAnimController({
    animControllers: [
        {
            idController: "phantom.base_pose",
            initialState: "default",
            states: {
                default: {
                    animations: ["phantom_base_pose"],
                    particleEffects: [
                        {
                            effect: "wing_dust",
                            locator: "left_wing"
                        },
                        {
                            effect: "wing_dust",
                            locator: "right_wing"
                        }
                    ]
                }
            }
        },
        {
            idController: "phantom.move",
            initialState: "default",
            states: {
                default: {
                    animations: ["move"]
                }
            }
        }
    ]
});
