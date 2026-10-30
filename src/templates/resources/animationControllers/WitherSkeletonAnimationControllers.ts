import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const WitherSkeletonAnimationControllers = createRPAnimController({
    animControllers: [
        {
            idController: "wither_skeleton.attack",
            initialState: "default",
            states: {
                chase_target: {
                    animations: ["wither_skeleton_attack"],
                    transitions: [
                        { default: `!${MoLang.variable("has_target")}` }
                    ]
                },
                default: {
                    transitions: [
                        { chase_target: MoLang.variable("has_target") }
                    ]
                }
            }
        }
    ]
});
