import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const CatAnimationControllers = createRPAnimController({
    animControllers: [
        {
            idController: "cat.look_at_target",
            initialState: "default",
            states: {
                default: {
                    animations: ["look_at_target"]
                }
            }
        },
        {
            idController: "cat.move",
            initialState: "lie_down",
            states: {
                lie_down: {
                    animations: [
                        { lie_down: `!${MoLang.isBaby()}` },
                        { baby_lie_down: MoLang.isBaby() }
                    ],
                    transitions: [
                        { sneaking: `${MoLang.variable("state")} == 0` },
                        { sprinting: `${MoLang.variable("state")} == 1` },
                        { sitting: `${MoLang.variable("state")} == 2` },
                        { walking: `${MoLang.variable("state")} == 3` }
                    ]
                },
                sitting: {
                    animations: [
                        { sit: `!${MoLang.isBaby()}` },
                        { baby_sit: MoLang.isBaby() }
                    ],
                    transitions: [
                        { sneaking: `${MoLang.variable("state")} == 0` },
                        { sprinting: `${MoLang.variable("state")} == 1` },
                        { walking: `${MoLang.variable("state")} == 3` },
                        { lie_down: `${MoLang.variable("state")} == 4` }
                    ]
                },
                sneaking: {
                    animations: [
                        { sneak: `!${MoLang.isBaby()}` },
                        { baby_sneak: MoLang.isBaby() }
                    ],
                    transitions: [
                        { sprinting: `${MoLang.variable("state")} == 1` },
                        { sitting: `${MoLang.variable("state")} == 2` },
                        { walking: `${MoLang.variable("state")} == 3` },
                        { lie_down: `${MoLang.variable("state")} == 4` }
                    ]
                },
                sprinting: {
                    animations: [
                        { sprint: `!${MoLang.isBaby()}` },
                        { baby_sprint: MoLang.isBaby() }
                    ],
                    transitions: [
                        { sneaking: `${MoLang.variable("state")} == 0` },
                        { sitting: `${MoLang.variable("state")} == 2` },
                        { walking: `${MoLang.variable("state")} == 3` },
                        { lie_down: `${MoLang.variable("state")} == 4` }
                    ]
                },
                walking: {
                    animations: [
                        { walk: `!${MoLang.isBaby()}` },
                        { baby_walk: MoLang.isBaby() }
                    ],
                    transitions: [
                        { sneaking: `${MoLang.variable("state")} == 0` },
                        { sprinting: `${MoLang.variable("state")} == 1` },
                        { sitting: `${MoLang.variable("state")} == 2` },
                        { lie_down: `${MoLang.variable("state")} == 4` }
                    ]
                }
            }
        }
    ]
});
