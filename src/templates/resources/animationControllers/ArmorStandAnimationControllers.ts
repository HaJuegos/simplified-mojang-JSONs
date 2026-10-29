import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const ArmorStandAnimationControllers = createRPAnimController({
    formatVersion: FormatVersionAnimControllerList.MostRecent,
    animControllers: [
        {
            idController: "armor_stand.pose",
            initialState: "default",
            states: {
                athena: {
                    animations: ["athena_pose"],
                    blendTransition: 0.1,
                    blendViaShortestPath: true,
                    transitions: [
                        { default: `${MoLang.variable("armor_stand.pose_index")} == 0` },
                        { none: `${MoLang.variable("armor_stand.pose_index")} == 1` },
                        { solemn: `${MoLang.variable("armor_stand.pose_index")} == 2` },
                        { brandish: `${MoLang.variable("armor_stand.pose_index")} == 4` },
                        { honor: `${MoLang.variable("armor_stand.pose_index")} == 5` },
                        { entertain: `${MoLang.variable("armor_stand.pose_index")} == 6` },
                        { salute: `${MoLang.variable("armor_stand.pose_index")} == 7` },
                        { riposte: `${MoLang.variable("armor_stand.pose_index")} == 8` },
                        { zombie: `${MoLang.variable("armor_stand.pose_index")} == 9` },
                        { cancan_a: `${MoLang.variable("armor_stand.pose_index")} == 10` },
                        { cancan_b: `${MoLang.variable("armor_stand.pose_index")} == 11` },
                        { hero: `${MoLang.variable("armor_stand.pose_index")} == 12` }
                    ]
                },
                brandish: {
                    animations: ["brandish_pose"],
                    blendTransition: 0.1,
                    blendViaShortestPath: true,
                    transitions: [
                        { default: `${MoLang.variable("armor_stand.pose_index")} == 0` },
                        { none: `${MoLang.variable("armor_stand.pose_index")} == 1` },
                        { solemn: `${MoLang.variable("armor_stand.pose_index")} == 2` },
                        { athena: `${MoLang.variable("armor_stand.pose_index")} == 3` },
                        { honor: `${MoLang.variable("armor_stand.pose_index")} == 5` },
                        { entertain: `${MoLang.variable("armor_stand.pose_index")} == 6` },
                        { salute: `${MoLang.variable("armor_stand.pose_index")} == 7` },
                        { riposte: `${MoLang.variable("armor_stand.pose_index")} == 8` },
                        { zombie: `${MoLang.variable("armor_stand.pose_index")} == 9` },
                        { cancan_a: `${MoLang.variable("armor_stand.pose_index")} == 10` },
                        { cancan_b: `${MoLang.variable("armor_stand.pose_index")} == 11` },
                        { hero: `${MoLang.variable("armor_stand.pose_index")} == 12` }
                    ]
                },
                cancan_a: {
                    animations: ["cancan_a_pose"],
                    blendTransition: 0.1,
                    blendViaShortestPath: true,
                    transitions: [
                        { default: `${MoLang.variable("armor_stand.pose_index")} == 0` },
                        { none: `${MoLang.variable("armor_stand.pose_index")} == 1` },
                        { solemn: `${MoLang.variable("armor_stand.pose_index")} == 2` },
                        { athena: `${MoLang.variable("armor_stand.pose_index")} == 3` },
                        { brandish: `${MoLang.variable("armor_stand.pose_index")} == 4` },
                        { honor: `${MoLang.variable("armor_stand.pose_index")} == 5` },
                        { entertain: `${MoLang.variable("armor_stand.pose_index")} == 6` },
                        { salute: `${MoLang.variable("armor_stand.pose_index")} == 7` },
                        { riposte: `${MoLang.variable("armor_stand.pose_index")} == 8` },
                        { zombie: `${MoLang.variable("armor_stand.pose_index")} == 9` },
                        { cancan_b: `${MoLang.variable("armor_stand.pose_index")} == 11` },
                        { hero: `${MoLang.variable("armor_stand.pose_index")} == 12` }
                    ]
                },
                cancan_b: {
                    animations: ["cancan_b_pose"],
                    blendTransition: 0.1,
                    blendViaShortestPath: true,
                    transitions: [
                        { default: `${MoLang.variable("armor_stand.pose_index")} == 0` },
                        { none: `${MoLang.variable("armor_stand.pose_index")} == 1` },
                        { solemn: `${MoLang.variable("armor_stand.pose_index")} == 2` },
                        { athena: `${MoLang.variable("armor_stand.pose_index")} == 3` },
                        { brandish: `${MoLang.variable("armor_stand.pose_index")} == 4` },
                        { honor: `${MoLang.variable("armor_stand.pose_index")} == 5` },
                        { entertain: `${MoLang.variable("armor_stand.pose_index")} == 6` },
                        { salute: `${MoLang.variable("armor_stand.pose_index")} == 7` },
                        { riposte: `${MoLang.variable("armor_stand.pose_index")} == 8` },
                        { zombie: `${MoLang.variable("armor_stand.pose_index")} == 9` },
                        { cancan_a: `${MoLang.variable("armor_stand.pose_index")} == 10` },
                        { hero: `${MoLang.variable("armor_stand.pose_index")} == 12` }
                    ]
                },
                default: {
                    animations: ["default_pose"],
                    blendTransition: 0.1,
                    blendViaShortestPath: true,
                    transitions: [
                        { none: `${MoLang.variable("armor_stand.pose_index")} == 1` },
                        { solemn: `${MoLang.variable("armor_stand.pose_index")} == 2` },
                        { athena: `${MoLang.variable("armor_stand.pose_index")} == 3` },
                        { brandish: `${MoLang.variable("armor_stand.pose_index")} == 4` },
                        { honor: `${MoLang.variable("armor_stand.pose_index")} == 5` },
                        { entertain: `${MoLang.variable("armor_stand.pose_index")} == 6` },
                        { salute: `${MoLang.variable("armor_stand.pose_index")} == 7` },
                        { riposte: `${MoLang.variable("armor_stand.pose_index")} == 8` },
                        { zombie: `${MoLang.variable("armor_stand.pose_index")} == 9` },
                        { cancan_a: `${MoLang.variable("armor_stand.pose_index")} == 10` },
                        { cancan_b: `${MoLang.variable("armor_stand.pose_index")} == 11` },
                        { hero: `${MoLang.variable("armor_stand.pose_index")} == 12` }
                    ]
                },
                entertain: {
                    animations: ["entertain_pose"],
                    blendTransition: 0.1,
                    blendViaShortestPath: true,
                    transitions: [
                        { default: `${MoLang.variable("armor_stand.pose_index")} == 0` },
                        { none: `${MoLang.variable("armor_stand.pose_index")} == 1` },
                        { solemn: `${MoLang.variable("armor_stand.pose_index")} == 2` },
                        { athena: `${MoLang.variable("armor_stand.pose_index")} == 3` },
                        { brandish: `${MoLang.variable("armor_stand.pose_index")} == 4` },
                        { honor: `${MoLang.variable("armor_stand.pose_index")} == 5` },
                        { salute: `${MoLang.variable("armor_stand.pose_index")} == 7` },
                        { riposte: `${MoLang.variable("armor_stand.pose_index")} == 8` },
                        { zombie: `${MoLang.variable("armor_stand.pose_index")} == 9` },
                        { cancan_a: `${MoLang.variable("armor_stand.pose_index")} == 10` },
                        { cancan_b: `${MoLang.variable("armor_stand.pose_index")} == 11` },
                        { hero: `${MoLang.variable("armor_stand.pose_index")} == 12` }
                    ]
                },
                hero: {
                    animations: ["hero_pose"],
                    blendTransition: 0.1,
                    blendViaShortestPath: true,
                    transitions: [
                        { default: `${MoLang.variable("armor_stand.pose_index")} == 0` },
                        { none: `${MoLang.variable("armor_stand.pose_index")} == 1` },
                        { solemn: `${MoLang.variable("armor_stand.pose_index")} == 2` },
                        { athena: `${MoLang.variable("armor_stand.pose_index")} == 3` },
                        { brandish: `${MoLang.variable("armor_stand.pose_index")} == 4` },
                        { honor: `${MoLang.variable("armor_stand.pose_index")} == 5` },
                        { entertain: `${MoLang.variable("armor_stand.pose_index")} == 6` },
                        { salute: `${MoLang.variable("armor_stand.pose_index")} == 7` },
                        { riposte: `${MoLang.variable("armor_stand.pose_index")} == 8` },
                        { zombie: `${MoLang.variable("armor_stand.pose_index")} == 9` },
                        { cancan_a: `${MoLang.variable("armor_stand.pose_index")} == 10` },
                        { cancan_b: `${MoLang.variable("armor_stand.pose_index")} == 11` }
                    ]
                },
                honor: {
                    animations: ["honor_pose"],
                    blendTransition: 0.1,
                    blendViaShortestPath: true,
                    transitions: [
                        { default: `${MoLang.variable("armor_stand.pose_index")} == 0` },
                        { none: `${MoLang.variable("armor_stand.pose_index")} == 1` },
                        { solemn: `${MoLang.variable("armor_stand.pose_index")} == 2` },
                        { athena: `${MoLang.variable("armor_stand.pose_index")} == 3` },
                        { brandish: `${MoLang.variable("armor_stand.pose_index")} == 4` },
                        { entertain: `${MoLang.variable("armor_stand.pose_index")} == 6` },
                        { salute: `${MoLang.variable("armor_stand.pose_index")} == 7` },
                        { riposte: `${MoLang.variable("armor_stand.pose_index")} == 8` },
                        { zombie: `${MoLang.variable("armor_stand.pose_index")} == 9` },
                        { cancan_a: `${MoLang.variable("armor_stand.pose_index")} == 10` },
                        { cancan_b: `${MoLang.variable("armor_stand.pose_index")} == 11` },
                        { hero: `${MoLang.variable("armor_stand.pose_index")} == 12` }
                    ]
                },
                none: {
                    animations: ["no_pose"],
                    blendTransition: 0.1,
                    blendViaShortestPath: true,
                    transitions: [
                        { default: `${MoLang.variable("armor_stand.pose_index")} == 0` },
                        { solemn: `${MoLang.variable("armor_stand.pose_index")} == 2` },
                        { athena: `${MoLang.variable("armor_stand.pose_index")} == 3` },
                        { brandish: `${MoLang.variable("armor_stand.pose_index")} == 4` },
                        { honor: `${MoLang.variable("armor_stand.pose_index")} == 5` },
                        { entertain: `${MoLang.variable("armor_stand.pose_index")} == 6` },
                        { salute: `${MoLang.variable("armor_stand.pose_index")} == 7` },
                        { riposte: `${MoLang.variable("armor_stand.pose_index")} == 8` },
                        { zombie: `${MoLang.variable("armor_stand.pose_index")} == 9` },
                        { cancan_a: `${MoLang.variable("armor_stand.pose_index")} == 10` },
                        { cancan_b: `${MoLang.variable("armor_stand.pose_index")} == 11` },
                        { hero: `${MoLang.variable("armor_stand.pose_index")} == 12` }
                    ]
                },
                riposte: {
                    animations: ["riposte_pose"],
                    blendTransition: 0.1,
                    blendViaShortestPath: true,
                    transitions: [
                        { default: `${MoLang.variable("armor_stand.pose_index")} == 0` },
                        { none: `${MoLang.variable("armor_stand.pose_index")} == 1` },
                        { solemn: `${MoLang.variable("armor_stand.pose_index")} == 2` },
                        { athena: `${MoLang.variable("armor_stand.pose_index")} == 3` },
                        { brandish: `${MoLang.variable("armor_stand.pose_index")} == 4` },
                        { honor: `${MoLang.variable("armor_stand.pose_index")} == 5` },
                        { entertain: `${MoLang.variable("armor_stand.pose_index")} == 6` },
                        { salute: `${MoLang.variable("armor_stand.pose_index")} == 7` },
                        { zombie: `${MoLang.variable("armor_stand.pose_index")} == 9` },
                        { cancan_a: `${MoLang.variable("armor_stand.pose_index")} == 10` },
                        { cancan_b: `${MoLang.variable("armor_stand.pose_index")} == 11` },
                        { hero: `${MoLang.variable("armor_stand.pose_index")} == 12` }
                    ]
                },
                salute: {
                    animations: ["salute_pose"],
                    blendTransition: 0.1,
                    blendViaShortestPath: true,
                    transitions: [
                        { default: `${MoLang.variable("armor_stand.pose_index")} == 0` },
                        { none: `${MoLang.variable("armor_stand.pose_index")} == 1` },
                        { solemn: `${MoLang.variable("armor_stand.pose_index")} == 2` },
                        { athena: `${MoLang.variable("armor_stand.pose_index")} == 3` },
                        { brandish: `${MoLang.variable("armor_stand.pose_index")} == 4` },
                        { honor: `${MoLang.variable("armor_stand.pose_index")} == 5` },
                        { entertain: `${MoLang.variable("armor_stand.pose_index")} == 6` },
                        { riposte: `${MoLang.variable("armor_stand.pose_index")} == 8` },
                        { zombie: `${MoLang.variable("armor_stand.pose_index")} == 9` },
                        { cancan_a: `${MoLang.variable("armor_stand.pose_index")} == 10` },
                        { cancan_b: `${MoLang.variable("armor_stand.pose_index")} == 11` },
                        { hero: `${MoLang.variable("armor_stand.pose_index")} == 12` }
                    ]
                },
                solemn: {
                    animations: ["solemn_pose"],
                    blendTransition: 0.1,
                    blendViaShortestPath: true,
                    transitions: [
                        { default: `${MoLang.variable("armor_stand.pose_index")} == 0` },
                        { none: `${MoLang.variable("armor_stand.pose_index")} == 1` },
                        { athena: `${MoLang.variable("armor_stand.pose_index")} == 3` },
                        { brandish: `${MoLang.variable("armor_stand.pose_index")} == 4` },
                        { honor: `${MoLang.variable("armor_stand.pose_index")} == 5` },
                        { entertain: `${MoLang.variable("armor_stand.pose_index")} == 6` },
                        { salute: `${MoLang.variable("armor_stand.pose_index")} == 7` },
                        { riposte: `${MoLang.variable("armor_stand.pose_index")} == 8` },
                        { zombie: `${MoLang.variable("armor_stand.pose_index")} == 9` },
                        { cancan_a: `${MoLang.variable("armor_stand.pose_index")} == 10` },
                        { cancan_b: `${MoLang.variable("armor_stand.pose_index")} == 11` },
                        { hero: `${MoLang.variable("armor_stand.pose_index")} == 12` }
                    ]
                },
                zombie: {
                    animations: ["zombie_pose"],
                    blendTransition: 0.1,
                    blendViaShortestPath: true,
                    transitions: [
                        { default: `${MoLang.variable("armor_stand.pose_index")} == 0` },
                        { none: `${MoLang.variable("armor_stand.pose_index")} == 1` },
                        { solemn: `${MoLang.variable("armor_stand.pose_index")} == 2` },
                        { athena: `${MoLang.variable("armor_stand.pose_index")} == 3` },
                        { brandish: `${MoLang.variable("armor_stand.pose_index")} == 4` },
                        { honor: `${MoLang.variable("armor_stand.pose_index")} == 5` },
                        { entertain: `${MoLang.variable("armor_stand.pose_index")} == 6` },
                        { salute: `${MoLang.variable("armor_stand.pose_index")} == 7` },
                        { riposte: `${MoLang.variable("armor_stand.pose_index")} == 8` },
                        { cancan_a: `${MoLang.variable("armor_stand.pose_index")} == 10` },
                        { cancan_b: `${MoLang.variable("armor_stand.pose_index")} == 11` },
                        { hero: `${MoLang.variable("armor_stand.pose_index")} == 12` }
                    ]
                }
            }
        },
        {
            idController: "armor_stand.wiggle",
            initialState: "default",
            states: {
                default: {
                    transitions: [
                        { wiggling: `(${MoLang.variable("armor_stand.hurt_time")} - ${MoLang.frameAlpha()}) > 0` }
                    ]
                },
                wiggling: {
                    animations: ["wiggle"],
                    transitions: [
                        { default: `(${MoLang.variable("armor_stand.hurt_time")} - ${MoLang.frameAlpha()}) <= 0` }
                    ]
                }
            }
        },
        {
            idController: "armor_stand.holding_heavy_core",
            initialState: "default",
            states: {
                default: {
                    animations: [
                        { holding_heavy_core: MoLang.isItemNameAny("slot.weapon.mainhand", "minecraft:heavy_core") }
                    ]
                }
            }
        }
    ]
});
