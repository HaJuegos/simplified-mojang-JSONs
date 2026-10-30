import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const RabbitAnimationControllersV2 = createRPAnimController({
    animControllers: [
        {
            idController: "rabbit.general.v2",
            initialState: "default",
            states: {
                default: {
                    transitions: [
                        { moving: MoLang.variable("moving") },
                        {
                            idling: `!${MoLang.variable("moving")} && ${MoLang.variable("should_idle")} && !${MoLang.isLeashed()}`
                        }
                    ],
                    animations: ["look_at_target"]
                },
                idling: {
                    transitions: [
                        {
                            default: `(!${MoLang.variable("moving")} && ${MoLang.allAnimationsFinished()}) || ${MoLang.isLeashed()}`
                        },
                        { moving: MoLang.variable("moving") }
                    ],
                    animations: ["idle_head_tilt", "look_at_target"]
                },
                moving: {
                    transitions: [
                        {
                            default: `!${MoLang.variable("moving")} || (${MoLang.allAnimationsFinished()} && !${MoLang.isOnGround()})`
                        }
                    ],
                    animations: [
                        { move: `!${MoLang.isBaby()}` },
                        { move_baby: MoLang.isBaby() },
                        "look_at_target"
                    ]
                }
            }
        }
    ]
});
