import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const FoxAnimationControllers = createRPAnimController({
    formatVersion: FormatVersionAnimControllerList.MostRecent,
    animControllers: [
        {
            idController: "fox.move",
            initialState: "default",
            states: {
                crouch: {
                    animations: [
                        "look_at_target",
                        "crouch",
                        {
                            walk: `${MoLang.modifiedMoveSpeed()} * !${MoLang.isBaby()}`,
                            baby_walk: `${MoLang.modifiedMoveSpeed()} * ${MoLang.isBaby()}`
                        }
                    ],
                    blendTransition: 0.4,
                    transitions: [
                        { default: `!${MoLang.isStalking()} && !${MoLang.isInterested()}` },
                        { wiggle: MoLang.isInterested() }
                    ]
                },
                default: {
                    animations: [
                        "look_at_target",
                        {
                            walk: `${MoLang.modifiedMoveSpeed()} * !${MoLang.isBaby()}`,
                            baby_walk: `${MoLang.modifiedMoveSpeed()} * ${MoLang.isBaby()}`
                        }
                    ],
                    blendTransition: 0.1,
                    transitions: [
                        { crouch: MoLang.isStalking() },
                        { sleep: MoLang.isSleeping() },
                        { stuck: MoLang.isStunned() },
                        { sit: MoLang.isSitting() }
                    ]
                },
                pounce: {
                    animations: [
                        "look_at_target",
                        {
                            pounce: `!${MoLang.isBaby()}`,
                            baby_pounce: MoLang.isBaby()
                        },
                        {
                            walk: `${MoLang.modifiedMoveSpeed()} * !${MoLang.isBaby()}`,
                            baby_walk: `${MoLang.modifiedMoveSpeed()} * ${MoLang.isBaby()}`
                        }
                    ],
                    blendTransition: 2.0,
                    transitions: [
                        { default: MoLang.isOnGround() }
                    ]
                },
                sit: {
                    animations: [
                        {
                            sit: `!${MoLang.isBaby()}`,
                            baby_sit: MoLang.isBaby()
                        }
                    ],
                    blendTransition: 0.2,
                    transitions: [
                        { default: `!${MoLang.isSitting()}` }
                    ]
                },
                sleep: {
                    animations: [
                        {
                            sleep: `!${MoLang.isBaby()}`,
                            baby_sleep: MoLang.isBaby()
                        }
                    ],
                    blendTransition: 0.2,
                    transitions: [
                        { default: `!${MoLang.isSleeping()}` }
                    ]
                },
                stuck: {
                    animations: [
                        "stuck",
                        {
                            walk: `${MoLang.cos(`${MoLang.lifeTime()} * 20.0 * 53.7`)} * !${MoLang.isBaby()}`,
                            baby_walk: `${MoLang.cos(`${MoLang.lifeTime()} * 20.0 * 53.7`)} * ${MoLang.isBaby()}`
                        }
                    ],
                    blendTransition: 0.2,
                    transitions: [
                        { default: `!${MoLang.isStunned()}` }
                    ]
                },
                wiggle: {
                    animations: [
                        "look_at_target",
                        {
                            wiggle: `!${MoLang.isBaby()}`,
                            baby_wiggle: MoLang.isBaby()
                        },
                        {
                            walk: `${MoLang.modifiedMoveSpeed()} * !${MoLang.isBaby()}`,
                            baby_walk: `${MoLang.modifiedMoveSpeed()} * ${MoLang.isBaby()}`
                        }
                    ],
                    blendTransition: 0.2,
                    transitions: [
                        { default: `!${MoLang.hasTarget()} && ${MoLang.isOnGround()}` },
                        { crouch: `${MoLang.isOnGround()} && !${MoLang.isInterested()} && ${MoLang.isStalking()}` },
                        { pounce: `!${MoLang.isOnGround()}` }
                    ]
                }
            }
        }
    ]
});
