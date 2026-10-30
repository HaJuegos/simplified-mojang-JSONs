import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const OcelotAnimationControllers = createRPAnimController({
    animControllers: [
        {
            idController: "ocelot.baby",
            initialState: "baby",
            states: {
                baby: {
                    animations: [
                        { baby_transform: MoLang.isBaby() }
                    ]
                }
            }
        },
        {
            idController: "ocelot.look_at_target",
            initialState: "default",
            states: {
                default: {
                    animations: ["look_at_target"]
                }
            }
        },
        {
            idController: "ocelot.move",
            initialState: "sitting",
            states: {
                sitting: {
                    animations: ["sit"],
                    transitions: [
                        { sneaking: `${MoLang.variable("state")} == 0` },
                        { sprinting: `${MoLang.variable("state")} == 1` },
                        { walking: `${MoLang.variable("state")} == 3` }
                    ]
                },
                sneaking: {
                    animations: ["sneak"],
                    transitions: [
                        { sprinting: `${MoLang.variable("state")} == 1` },
                        { sitting: `${MoLang.variable("state")} == 2` },
                        { walking: `${MoLang.variable("state")} == 3` }
                    ]
                },
                sprinting: {
                    animations: ["sprint"],
                    transitions: [
                        { sneaking: `${MoLang.variable("state")} == 0` },
                        { sitting: `${MoLang.variable("state")} == 2` },
                        { walking: `${MoLang.variable("state")} == 3` }
                    ]
                },
                walking: {
                    animations: ["walk"],
                    transitions: [
                        { sneaking: `${MoLang.variable("state")} == 0` },
                        { sprinting: `${MoLang.variable("state")} == 1` },
                        { sitting: `${MoLang.variable("state")} == 2` }
                    ]
                }
            }
        }
    ]
});
