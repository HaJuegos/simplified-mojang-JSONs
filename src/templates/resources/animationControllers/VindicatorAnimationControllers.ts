import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const VindicatorAnimationControllers = createRPAnimController({
    formatVersion: FormatVersionAnimControllerList.MostRecent,
    animControllers: [
        {
            idController: "vindicator.base",
            initialState: "default",
            states: {
                default: {
                    blendTransition: 0.2,
                    blendViaShortestPath: true,
                    transitions: [
                        { celebrating: MoLang.isCelebrating() },
                        {
                            hand_attack: `!${MoLang.isItemEquipped()} && ${MoLang.variable("has_target")} && ${MoLang.variable("attack_time")} >= 0.0`
                        },
                        {
                            melee_attack: `${MoLang.isItemEquipped()} && ${MoLang.variable("has_target")} && ${MoLang.variable("attack_time")} >= 0.0`
                        }
                    ]
                },
                hand_attack: {
                    blendTransition: 0.2,
                    blendViaShortestPath: true,
                    animations: ["vindicator_hand_attack"],
                    transitions: [
                        {
                            default: `${MoLang.isItemEquipped()} || !${MoLang.variable("has_target")} || ${MoLang.variable("attack_time")} < 0.0 || ${MoLang.isCelebrating()}`
                        }
                    ]
                },
                melee_attack: {
                    blendTransition: 0.2,
                    blendViaShortestPath: true,
                    animations: ["vindicator_attack"],
                    transitions: [
                        {
                            default: `!${MoLang.isItemEquipped()} || !${MoLang.variable("has_target")} || ${MoLang.variable("attack_time")} < 0.0 || ${MoLang.isCelebrating()}`
                        }
                    ]
                },
                celebrating: {
                    animations: ["celebrating"],
                    blendTransition: 0.2,
                    blendViaShortestPath: true,
                    transitions: [
                        { default: `!${MoLang.isCelebrating()}` }
                    ]
                }
            }
        },
        {
            idController: "vindicator.base.v1.0",
            initialState: "default",
            states: {
                default: {
                    animations: ["vindicator_base", "vindicator_attack", "vindicator_walk"]
                }
            }
        }
    ]
});
