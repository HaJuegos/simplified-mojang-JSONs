import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const ParrotAnimationControllers = createRPAnimController({
    animControllers: [
        {
            idController: "parrot.move",
            initialState: "dancing",
            states: {
                dancing: {
                    animations: ["dance"],
                    transitions: [
                        { flying: `${MoLang.variable("state")} == 0` },
                        { standing: `${MoLang.variable("state")} == 1` },
                        { sitting: `${MoLang.variable("state")} == 2` }
                    ]
                },
                flying: {
                    animations: ["moving", "flying"],
                    transitions: [
                        { standing: `${MoLang.variable("state")} == 1` },
                        { sitting: `${MoLang.variable("state")} == 2` },
                        { dancing: `${MoLang.variable("state")} == 3` }
                    ]
                },
                sitting: {
                    animations: ["sitting"],
                    transitions: [
                        { flying: `${MoLang.variable("state")} == 0` },
                        { standing: `${MoLang.variable("state")} == 1` },
                        { dancing: `${MoLang.variable("state")} == 3` }
                    ]
                },
                standing: {
                    animations: ["moving", "standing"],
                    transitions: [
                        { flying: `${MoLang.variable("state")} == 0` },
                        { sitting: `${MoLang.variable("state")} == 2` },
                        { dancing: `${MoLang.variable("state")} == 3` }
                    ]
                }
            }
        },
        {
            idController: "parrot.setup",
            initialState: "default",
            states: {
                default: {
                    animations: ["look_at_target", "base"]
                }
            }
        }
    ]
});
