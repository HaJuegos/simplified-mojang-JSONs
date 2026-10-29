import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const WolfAnimationControllers = createRPAnimController({
    formatVersion: FormatVersionAnimControllerList.MostRecent,
    animControllers: [
        {
            idController: "wolf.angry",
            initialState: "default",
            states: {
                default: {
                    animations: ["wolf_angry"]
                }
            }
        },
        {
            idController: "wolf.baby_scaling",
            initialState: "default",
            states: {
                baby: {
                    animations: ["wolf_baby_scaling"],
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
            idController: "wolf.head_rot_z",
            initialState: "default",
            states: {
                default: {
                    transitions: [
                        { rot: `${MoLang.isInterested()} || ${MoLang.isShakingWetness()}` }
                    ]
                },
                rot: {
                    animations: ["wolf_head_rot_z"],
                    transitions: [
                        { default: `!${MoLang.isInterested()} && !${MoLang.isShakingWetness()}` }
                    ]
                }
            }
        },
        {
            idController: "wolf.look_at",
            initialState: "default",
            states: {
                default: {
                    animations: ["wolf_look_at"]
                }
            }
        },
        {
            idController: "wolf.setup",
            initialState: "default",
            states: {
                default: {
                    animations: [
                        { wolf_setup: `!${MoLang.isBaby()}` }
                    ]
                }
            }
        },
        {
            idController: "wolf.shaking",
            initialState: "default",
            states: {
                default: {
                    transitions: [
                        { shaking: MoLang.isShakingWetness() }
                    ]
                },
                shaking: {
                    animations: ["wolf_shaking"],
                    transitions: [
                        { default: `!${MoLang.isShakingWetness()}` }
                    ]
                }
            }
        },
        {
            idController: "wolf.sitting",
            initialState: "default",
            states: {
                default: {
                    animations: ["wolf_leg_default"],
                    transitions: [
                        { sitting: MoLang.isSitting() }
                    ]
                },
                sitting: {
                    animations: [
                        { wolf_sitting: `!${MoLang.isBaby()}` },
                        { wolf_baby_sitting: MoLang.isBaby() }
                    ],
                    transitions: [
                        { default: `!${MoLang.isSitting()}` }
                    ]
                }
            }
        },
        {
            idController: "wolf.tail_default",
            initialState: "default",
            states: {
                default: {
                    animations: ["wolf_tail_default"]
                }
            }
        }
    ]
});
