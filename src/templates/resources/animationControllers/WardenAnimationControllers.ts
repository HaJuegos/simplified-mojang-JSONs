import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const WardenAnimationControllers = createRPAnimController({
    animControllers: [
        {
            idController: "warden.shiver",
            initialState: "default",
            states: {
                default: {
                    transitions: [
                        { shiver: `${MoLang.variable("tendril_animation")} > 0` }
                    ]
                },
                shiver: {
                    animations: ["shiver"],
                    transitions: [
                        { default: `${MoLang.variable("tendril_animation")} <= 0` }
                    ]
                }
            }
        },
        {
            idController: "warden.sniff",
            initialState: "default",
            states: {
                default: {
                    transitions: [
                        { sniff: MoLang.isSniffing() }
                    ]
                },
                sniff: {
                    animations: ["sniff"],
                    transitions: [
                        { default: `!${MoLang.isSniffing()}` }
                    ]
                }
            }
        },
        {
            idController: "warden.roar",
            initialState: "default",
            states: {
                default: {
                    transitions: [
                        { roar: MoLang.isRoaring() }
                    ]
                },
                roar: {
                    animations: ["roar"],
                    transitions: [
                        { default: `!${MoLang.isRoaring()}` }
                    ]
                }
            }
        },
        {
            idController: "warden.melee_attacking",
            initialState: "default",
            states: {
                default: {
                    transitions: [
                        { attack: `${MoLang.variable("attack_time")} > 0.0` }
                    ]
                },
                attack: {
                    animations: ["melee_attack"],
                    transitions: [
                        { default: `${MoLang.variable("attack_time")} <= 0.0` }
                    ]
                }
            }
        },
        {
            idController: "warden.sonic_boom",
            initialState: "default",
            states: {
                default: {
                    transitions: [
                        { sonic_attack: MoLang.isSonicBoom() }
                    ]
                },
                sonic_attack: {
                    animations: ["sonic_boom"],
                    transitions: [
                        { default: `!${MoLang.isSonicBoom()}` }
                    ]
                }
            }
        }
    ]
});
