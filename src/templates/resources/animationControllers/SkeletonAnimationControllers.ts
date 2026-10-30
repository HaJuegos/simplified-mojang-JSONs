import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const SkeletonAnimationControllers = createRPAnimController({
    animControllers: [
        {
            idController: "skeleton.attack",
            initialState: "default",
            states: {
                default: {
                    transitions: [
                        { attack: `${MoLang.hasTarget()} && !${MoLang.facingTargetToRangeAttack()}` }
                    ]
                },
                attack: {
                    animations: ["skeleton_attack"],
                    transitions: [
                        { default: `!${MoLang.hasTarget()} || ${MoLang.facingTargetToRangeAttack()}` }
                    ]
                }
            }
        }
    ]
});
