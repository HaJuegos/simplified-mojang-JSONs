import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const FrogAnimationControllers = createRPAnimController({
    animControllers: [
        {
            idController: "frog.general",
            initialState: "on_land",
            states: {
                on_land: {
                    animations: [
                        { walk: MoLang.min(1.0, `${MoLang.modifiedMoveSpeed()} * 10`) }
                    ],
                    transitions: [
                        { idling_water: `${MoLang.isInWater()} && ${MoLang.modifiedMoveSpeed()} < 0.15` },
                        { swimming: `${MoLang.isInWater()} && ${MoLang.modifiedMoveSpeed()} > 0.15` },
                        { jumping: MoLang.isJumpGoalJumping() }
                    ]
                },
                jumping: {
                    animations: [
                        { jump: MoLang.isJumpGoalJumping() }
                    ],
                    transitions: [
                        { on_land: `!${MoLang.isInWater()} && !${MoLang.isJumpGoalJumping()}` },
                        { idling_water: `${MoLang.isInWater()} && ${MoLang.modifiedMoveSpeed()} < 0.15` },
                        { swimming: `${MoLang.isInWater()} && ${MoLang.modifiedMoveSpeed()} > 0.15` }
                    ]
                },
                idling_water: {
                    animations: ["idle_water"],
                    transitions: [
                        { on_land: `!${MoLang.isInWater()}` },
                        { swimming: `${MoLang.isInWater()} && ${MoLang.modifiedMoveSpeed()} > 0.15` }
                    ]
                },
                swimming: {
                    animations: [
                        { swim: MoLang.min(1.0, `${MoLang.modifiedMoveSpeed()} * 10`) }
                    ],
                    transitions: [
                        { on_land: `!${MoLang.isInWater()}` },
                        { idling_water: `${MoLang.isInWater()} && ${MoLang.modifiedMoveSpeed()} < 0.15` }
                    ]
                }
            }
        },
        {
            idController: "frog.eat_mob",
            initialState: "default",
            states: {
                default: {
                    transitions: [
                        { eating: MoLang.isEatingMob() }
                    ]
                },
                eating: {
                    animations: ["tongue"],
                    transitions: [
                        { default: `!${MoLang.isEatingMob()}` }
                    ]
                }
            }
        },
        {
            idController: "frog.croaking",
            initialState: "default",
            states: {
                default: {
                    transitions: [
                        { croaking: MoLang.isCroaking() }
                    ]
                },
                croaking: {
                    animations: ["croak"],
                    transitions: [
                        { default: `!${MoLang.isCroaking()} || ${MoLang.isEatingMob()}` }
                    ]
                }
            }
        }
    ]
});
