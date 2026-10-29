import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const VexAnimationControllers = createRPAnimController({
    formatVersion: FormatVersionAnimControllerList.MostRecent,
    animControllers: [
        {
            idController: "vex.idle",
            initialState: "default",
            states: {
                default: {
                    animations: ["vex_idle"]
                }
            }
        },
        {
            idController: "vex.charge",
            initialState: "default",
            states: {
                default: {
                    transitions: [
                        { charging: MoLang.isCharging() }
                    ]
                },
                charging: {
                    animations: ["vex_charge"],
                    transitions: [
                        { default: `!${MoLang.isCharging()}` }
                    ]
                }
            }
        }
    ]
});
