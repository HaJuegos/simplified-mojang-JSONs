import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const RavagerAnimationControllers = createRPAnimController({
    animControllers: [
        {
            idController: "ravager.head_movement",
            initialState: "default",
            states: {
                biting: {
                    animations: ["biting"],
                    transitions: [
                        { default: `${MoLang.isDelayedAttacking()} == 0` }
                    ]
                },
                default: {
                    animations: ["idle_mouth"],
                    transitions: [
                        { roaring: `${MoLang.isRoaring()} == 1` },
                        { biting: `${MoLang.isDelayedAttacking()} == 1` }
                    ]
                },
                roaring: {
                    animations: ["roaring"],
                    transitions: [
                        { default: `${MoLang.isRoaring()} == 0` }
                    ]
                }
            }
        },
        {
            idController: "ravager.move",
            initialState: "default",
            states: {
                default: {
                    animations: [
                        { walk: MoLang.modifiedMoveSpeed() },
                        "look_at_target"
                    ],
                    transitions: [
                        { stunned: `${MoLang.isStunned()} == 1` }
                    ]
                },
                stunned: {
                    animations: ["stunned"],
                    particleEffects: [
                        {
                            effect: "stun_particles",
                            locator: "stun"
                        }
                    ],
                    transitions: [
                        { default: `${MoLang.isStunned()} == 0` }
                    ]
                }
            }
        }
    ]
});
