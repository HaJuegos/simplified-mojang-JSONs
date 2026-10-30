import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @deprecated Ya no se usa en la actualidad. Se mantiene por compatibilidad. Usa la version normal.
 * @author HaJuegos - 29-10-2026
 */
export const OcelotAnimationControllersV1 = createRPAnimController({
    animControllers: [
        {
            idController: "ocelot_v1.0.baby",
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
            idController: "ocelot_v1.0.look_at_target",
            initialState: "default",
            states: {
                default: {
                    animations: ["look_at_target"]
                }
            }
        },
        {
            idController: "ocelot_v1.0.move",
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
        },
        {
            idController: "ocelot_v1.0.setup",
            initialState: "default",
            states: {
                default: {
                    animations: ["setup"]
                }
            }
        }
    ]
});
