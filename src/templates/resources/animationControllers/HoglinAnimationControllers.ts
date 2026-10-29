import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const HoglinAnimationControllers = createRPAnimController({
    formatVersion: FormatVersionAnimControllerList.MostRecent,
    animControllers: [
        {
            idController: "hoglin.baby_scaling",
            initialState: "default",
            states: {
                baby: {
                    animations: ["hoglin_baby_scaling"],
                    transitions: [
                        { default: `!${MoLang.isBaby()}` }
                    ]
                },
                default: {
                    transitions: [
                        { baby: MoLang.isBaby() }
                    ]
                }
            }
        },
        {
            idController: "hoglin.look_at_target",
            initialState: "default",
            states: {
                default: {
                    animations: ["look_at_target"]
                }
            }
        },
        {
            idController: "hoglin.walk",
            initialState: "walking",
            states: {
                walking: {
                    animations: ["walk"]
                }
            }
        },
        {
            idController: "hoglin.attack",
            initialState: "default",
            states: {
                attack: {
                    animations: ["attack"],
                    transitions: [
                        { default: `!${MoLang.variable("has_target")} || ${MoLang.variable("attack_time")} < 0.0` }
                    ]
                },
                default: {
                    transitions: [
                        { attack: `${MoLang.variable("has_target")} && ${MoLang.variable("attack_time")} >= 0.0` }
                    ]
                }
            }
        }
    ]
});
