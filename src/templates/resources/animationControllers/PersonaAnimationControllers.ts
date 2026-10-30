import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const PersonaAnimationControllers = createRPAnimController({
    formatVersion: FormatVersionAnimControllerList.MostRecent,
    animControllers: [
        {
            idController: "persona.blink",
            initialState: "default",
            states: {
                default: {
                    transitions: [
                        {
                            open: `variable.is_blinking = 0; variable.return_from_blink = ${MoLang.lifeTime()} + math.random(0, 0.2); variable.last_blink_time = ${MoLang.lifeTime()}; return variable.last_blink_time != 0;`
                        }
                    ]
                },
                open: {
                    transitions: [
                        {
                            blink: `variable.is_blinking = 0; variable.return_from_blink = ${MoLang.lifeTime()} + math.random(0, 0.2); return ${MoLang.lifeTime()} > (variable.last_blink_time + math.random(3, 40));`
                        }
                    ]
                },
                blink: {
                    transitions: [
                        {
                            open: `variable.is_blinking = 1; variable.last_blink_time = ${MoLang.lifeTime()}; return ${MoLang.allAnimationsFinished()} && (${MoLang.lifeTime()} > (variable.return_from_blink ?? 0.2));`
                        }
                    ]
                }
            }
        }
    ]
});
