import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const BreezeAnimationControllers = createRPAnimController({
    animControllers: [
        {
            idController: "breeze.look_at",
            initialState: "default",
            states: {
                default: {
                    animations: ["look_at"]
                }
            }
        },
        {
            idController: "breeze.idle",
            initialState: "default",
            states: {
                default: {
                    animations: ["idle"]
                }
            }
        },
        {
            idController: "breeze.move",
            initialState: "default",
            states: {
                default: {
                    animations: ["whirl_sound"],
                    transitions: [
                        { moving: `${MoLang.modifiedMoveSpeed()} > 0.1 && ${MoLang.verticalSpeed()} == 0` }
                    ]
                },
                moving: {
                    animations: ["slide"],
                    soundEffects: [
                        { effect: "slide" }
                    ],
                    transitions: [
                        { default: `${MoLang.modifiedMoveSpeed()} < 0.1` }
                    ],
                    blendTransition: 0.2
                }
            }
        },
        {
            idController: "breeze.ground_particles",
            initialState: "default",
            states: {
                default: {
                    transitions: [
                        {
                            idling: `!${MoLang.isMoving()} && ${MoLang.isOnGround()} && ${MoLang.verticalSpeed()} > -2 && !${MoLang.isRiding()}`
                        },
                        {
                            moving: `${MoLang.isMoving()} && ${MoLang.isOnGround()} && ${MoLang.verticalSpeed()} > -2 && !${MoLang.isRiding()}`
                        }
                    ]
                },
                idling: {
                    animations: ["idle_ground_particles"],
                    transitions: [
                        { default: `!${MoLang.isOnGround()} || ${MoLang.isRiding()}` },
                        { moving: `${MoLang.isMoving()} && ${MoLang.isOnGround()} && !${MoLang.isRiding()}` }
                    ]
                },
                moving: {
                    animations: ["slide_ground_particles"],
                    transitions: [
                        { default: `!${MoLang.isOnGround()} || ${MoLang.isRiding()}` },
                        { idling: `!${MoLang.isMoving()} && ${MoLang.isOnGround()} && !${MoLang.isRiding()}` }
                    ]
                }
            }
        },
        {
            idController: "breeze.shoot",
            initialState: "default",
            states: {
                default: {
                    transitions: [
                        { shoot: MoLang.facingTargetToRangeAttack() }
                    ]
                },
                shoot: {
                    animations: ["shoot"],
                    soundEffects: [
                        { effect: "inhale" }
                    ],
                    transitions: [
                        { default: `!${MoLang.facingTargetToRangeAttack()} || ${MoLang.allAnimationsFinished()}` }
                    ]
                }
            }
        },
        {
            idController: "breeze.jump",
            initialState: "default",
            states: {
                default: {
                    transitions: [
                        { jump: MoLang.isJumpGoalJumping() }
                    ]
                },
                jump: {
                    animations: ["jump"],
                    soundEffects: [
                        { effect: "charge" }
                    ],
                    transitions: [
                        { default: `!${MoLang.isJumpGoalJumping()}` }
                    ]
                }
            }
        }
    ]
});
