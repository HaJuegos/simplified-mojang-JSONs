import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const CamelHuskAnimationControllers = createRPAnimController({
    formatVersion: FormatVersionAnimControllerList.MostRecent,
    animControllers: [
        {
            idController: "camel_husk.general",
            initialState: "default",
            states: {
                default: {
                    transitions: [
                        { idling: `!${MoLang.isSitting()}` },
                        { sitting: MoLang.isSitting() }
                    ],
                    blendTransition: 0.0
                },
                idling: {
                    transitions: [
                        { moving: MoLang.variable("moving") },
                        { sit_down: MoLang.isSitting() },
                        {
                            dashing: `${MoLang.hasDashCooldown()} && !${MoLang.isOnGround()} && !${MoLang.isInWater()} && !${MoLang.isInLava()} && !${MoLang.isRiding()}`
                        }
                    ],
                    blendTransition: 0.5
                },
                moving: {
                    animations: [
                        { moving: `math.min(1.0, math.lerp(0.4, 1.25, ${MoLang.modifiedMoveSpeed()}))` }
                    ],
                    transitions: [
                        { idling: `!${MoLang.variable("moving")}` },
                        { sit_down: MoLang.isSitting() },
                        {
                            dashing: `${MoLang.hasDashCooldown()} && !${MoLang.isOnGround()} && !${MoLang.isInWater()} && !${MoLang.isInLava()} && !${MoLang.isRiding()}`
                        }
                    ],
                    blendTransition: 0.2
                },
                sitting: {
                    animations: ["sitting"],
                    transitions: [
                        { stand_up: `!${MoLang.isSitting()}` }
                    ],
                    blendTransition: 0.5
                },
                sit_down: {
                    animations: ["sit_down"],
                    transitions: [
                        { stand_up: `!${MoLang.isSitting()}` }
                    ],
                    blendTransition: 0.5
                },
                stand_up: {
                    animations: ["stand_up"],
                    transitions: [
                        { sit_down: MoLang.isSitting() },
                        { idling: MoLang.allAnimationsFinished() },
                        { moving: MoLang.variable("moving") }
                    ],
                    blendTransition: 0.5
                },
                dashing: {
                    animations: ["dashing", "dashing_sound"],
                    transitions: [
                        {
                            idling: `(${MoLang.isOnGround()} || ${MoLang.isInWater()} || ${MoLang.isInLava()} || ${MoLang.isRiding()}) && !${MoLang.variable("moving")}`
                        },
                        {
                            moving: `(${MoLang.isOnGround()} || ${MoLang.isInWater()} || ${MoLang.isInLava()} || ${MoLang.isRiding()}) && ${MoLang.variable("moving")}`
                        }
                    ],
                    blendTransition: 0.5
                }
            }
        },
        {
            idController: "camel_husk.idle",
            initialState: "idling",
            states: {
                idling: {
                    animations: ["idle"]
                }
            }
        }
    ]
});
