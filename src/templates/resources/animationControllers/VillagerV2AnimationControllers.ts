import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const VillagerV2AnimationControllers = createRPAnimController({
    formatVersion: FormatVersionAnimControllerList.MostRecent,
    animControllers: [
        {
            idController: "villager_v2.baby",
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
            idController: "villager_v2.general",
            initialState: "default",
            states: {
                default: {
                    animations: [
                        { general: `!${MoLang.isBaby()}` },
                        { look_at_target: `!${MoLang.isSleeping()}` }
                    ]
                }
            }
        },
        {
            idController: "villager_v2.move",
            initialState: "default",
            states: {
                default: {
                    animations: [
                        { move: MoLang.modifiedMoveSpeed() }
                    ],
                    transitions: [
                        { get_in_bed: MoLang.isSleeping() }
                    ]
                },
                get_in_bed: {
                    animations: ["get_in_bed"],
                    transitions: [
                        { default: `!${MoLang.isSleeping()}` }
                    ]
                }
            }
        },
        {
            idController: "villager_v2.raise_arms",
            initialState: "default",
            states: {
                default: {
                    transitions: [
                        { raising: `${MoLang.variable("raise_arms")} > 0.0` }
                    ]
                },
                raising: {
                    animations: ["raise_arms"],
                    transitions: [
                        { default: `${MoLang.variable("raise_arms")} == 0.0` }
                    ]
                }
            }
        }
    ]
});
