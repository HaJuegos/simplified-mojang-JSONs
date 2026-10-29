import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const AxolotlAnimationControllers = createRPAnimController({
    formatVersion: FormatVersionAnimControllerList.MostRecent,
    animControllers: [
        {
            idController: "axolotl.general",
            initialState: "default",
            states: {
                default: {
                    animations: [
                        { play_dead: MoLang.isPlayingDead() },
                        { swim_angle: `${MoLang.variable("moving")} && ${MoLang.isInWater()} && !${MoLang.isOnGround()}` }
                    ]
                }
            }
        },
        {
            idController: "axolotl.move.v2",
            initialState: "idle",
            states: {
                idle: {
                    animations: [
                        {
                            idle_float: `${MoLang.isInWater()} && !${MoLang.isOnGround()} && !${MoLang.isPlayingDead()} && !${MoLang.isBaby()}`
                        },
                        { idle_floor: `!${MoLang.isInWater()} && !${MoLang.isBaby()}` },
                        { idle_floor_water: `${MoLang.isInWater()} && ${MoLang.isOnGround()} && !${MoLang.isBaby()}` },
                        {
                            baby_idle_float: `${MoLang.isInWater()} && !${MoLang.isOnGround()} && !${MoLang.isPlayingDead()} && ${MoLang.isBaby()}`
                        },
                        { baby_idle_floor: `!${MoLang.isInWater()} && ${MoLang.isBaby()}` },
                        { baby_idle_floor_water: `${MoLang.isInWater()} && ${MoLang.isOnGround()} && ${MoLang.isBaby()}` },
                        "look_at_target"
                    ],
                    transitions: [
                        { moving: `${MoLang.variable("moving")} && !${MoLang.isPlayingDead()}` }
                    ]
                },
                moving: {
                    animations: [
                        { swim: `${MoLang.isInWater()} && !${MoLang.isOnGround()} && !${MoLang.isBaby()}` },
                        { walk_floor: `!${MoLang.isInWater()} && !${MoLang.isBaby()}` },
                        { walk_floor_water: `${MoLang.isInWater()} && ${MoLang.isOnGround()} && !${MoLang.isBaby()}` },
                        { baby_swim: `${MoLang.isInWater()} && !${MoLang.isOnGround()} && ${MoLang.isBaby()}` },
                        { baby_walk_floor: `!${MoLang.isInWater()} && ${MoLang.isBaby()}` },
                        { baby_walk_floor_water: `${MoLang.isInWater()} && ${MoLang.isOnGround()} && ${MoLang.isBaby()}` },
                        "look_at_target"
                    ],
                    transitions: [
                        { idle: `!${MoLang.variable("moving")} || ${MoLang.isPlayingDead()}` }
                    ]
                }
            }
        }
    ]
});
