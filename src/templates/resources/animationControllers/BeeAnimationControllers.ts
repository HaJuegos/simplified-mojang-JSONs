import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const BeeAnimationControllers = createRPAnimController({
    formatVersion: FormatVersionAnimControllerList.MostRecent,
    animControllers: [
        {
            idController: "bee.drip",
            initialState: "default",
            states: {
                default: {
                    transitions: [
                        { dripping: MoLang.property("minecraft:has_nectar") }
                    ]
                },
                dripping: {
                    particleEffects: [
                        { effect: "nectar_dripping" }
                    ],
                    transitions: [
                        { default: `!${MoLang.property("minecraft:has_nectar")}` }
                    ]
                }
            }
        },
        {
            idController: "bee.sting",
            initialState: "default",
            states: {
                default: {
                    animations: ["bee_sting"]
                }
            }
        },
        {
            idController: "bee.root",
            initialState: "default",
            states: {
                default: {
                    animations: ["flying", "drip", "bee_fly_bobbing", "controller_bee_sting"]
                }
            }
        }
    ]
});
