import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const PlayerAnimationControllers = createRPAnimController({
    formatVersion: FormatVersionAnimControllerList.MostRecent,
    animControllers: [
        {
            idController: "player.crossbow",
            initialState: "default",
            states: {
                charge: {
                    animations: ["third_person_crossbow_equipped"],
                    transitions: [
                        {
                            default: `${MoLang.getEquippedItemName()} != 'crossbow' || (${MoLang.itemRemainingUseDuration()} <= 0.0 && !${MoLang.itemIsCharged()})`
                        },
                        { hold: MoLang.itemIsCharged() }
                    ]
                },
                default: {
                    transitions: [
                        { hold: MoLang.itemIsCharged() },
                        { charge: `${MoLang.itemRemainingUseDuration()} > 0.0` }
                    ]
                },
                hold: {
                    animations: ["crossbow_hold"],
                    transitions: [
                        {
                            default: `${MoLang.getEquippedItemName()} != 'crossbow' || (${MoLang.itemRemainingUseDuration()} <= 0.0 && !${MoLang.itemIsCharged()})`
                        },
                        { charge: `${MoLang.itemRemainingUseDuration()} > 0.0` }
                    ]
                }
            }
        },
        {
            idController: "player.melee_spear",
            initialState: "hold",
            states: {
                hold: {
                    animations: ["third_person_melee_spear_hold"],
                    transitions: [
                        { use: `${MoLang.variable("item_use_normalized")} > 0.0` },
                        { attack: `${MoLang.variable("attack_time")} > 0.0` }
                    ]
                },
                use: {
                    animations: ["third_person_melee_spear_use"],
                    transitions: [
                        { hold: `${MoLang.variable("item_use_normalized")} == 0.0` }
                    ]
                },
                attack: {
                    animations: ["third_person_melee_spear_attack"],
                    transitions: [
                        { hold: `${MoLang.variable("attack_time")} == 0.0` },
                        { use: `${MoLang.variable("item_use_normalized")} > 0.0` }
                    ]
                }
            }
        },
        {
            idController: "player.first_person_attack",
            initialState: "default",
            states: {
                default: {
                    animations: ["first_person_attack_rotation"],
                    transitions: [
                        { vr_attack: MoLang.variable("is_using_vr") }
                    ]
                },
                vr_attack: {
                    animations: ["first_person_vr_attack_rotation"],
                    transitions: [
                        { default: `!${MoLang.variable("is_using_vr")}` }
                    ]
                }
            }
        },
        {
            idController: "player.first_person_map",
            initialState: "default",
            states: {
                default: {
                    transitions: [
                        {
                            one_hand: `${MoLang.getEquippedItemName("off_hand")} == 'filled_map' || ${MoLang.getEquippedItemName("off_hand")} == 'shield'`
                        },
                        {
                            two_hand: `${MoLang.getEquippedItemName("off_hand")} != 'filled_map' && ${MoLang.getEquippedItemName("off_hand")} != 'shield'`
                        }
                    ]
                },
                one_hand: {
                    animations: [
                        { first_person_map_hold_main_hand: `${MoLang.getEquippedItemName(0, 1)} == 'filled_map'` },
                        {
                            first_person_map_hold_off_hand: `${MoLang.getEquippedItemName("off_hand")} == 'filled_map' && (${MoLang.getEquippedItemName()} == 'bow' ? !(${MoLang.variable("item_use_normalized")} > 0 && ${MoLang.variable("item_use_normalized")} < 1.0) : 1.0)`
                        }
                    ],
                    transitions: [
                        {
                            default: `${MoLang.getEquippedItemName(0, 1)} != 'filled_map' && ${MoLang.getEquippedItemName("off_hand")} != 'filled_map'`
                        },
                        {
                            two_hand: `${MoLang.getEquippedItemName("off_hand")} != 'filled_map' && ${MoLang.getEquippedItemName("off_hand")} != 'shield'`
                        }
                    ]
                },
                two_hand: {
                    animations: ["first_person_map_hold", "first_person_map_hold_attack"],
                    transitions: [
                        {
                            default: `${MoLang.getEquippedItemName(0, 1)} != 'filled_map' && ${MoLang.getEquippedItemName("off_hand")} != 'filled_map'`
                        },
                        {
                            one_hand: `${MoLang.getEquippedItemName("off_hand")} == 'filled_map' || ${MoLang.getEquippedItemName("off_hand")} == 'shield'`
                        }
                    ]
                }
            }
        },
        {
            idController: "player.first_person_melee_spear",
            initialState: "hold",
            states: {
                hold: {
                    animations: ["first_person_melee_spear_hold"],
                    transitions: [
                        { use: `${MoLang.variable("item_use_normalized")} > 0.0` },
                        { attack: `${MoLang.variable("attack_time")} > 0.0` }
                    ]
                },
                use: {
                    animations: ["first_person_melee_spear_use"],
                    transitions: [
                        { hold: `${MoLang.variable("item_use_normalized")} == 0.0` }
                    ]
                },
                attack: {
                    animations: ["first_person_melee_spear_attack"],
                    transitions: [
                        { hold: `${MoLang.variable("attack_time")} == 0.0` },
                        { use: `${MoLang.variable("item_use_normalized")} > 0.0` }
                    ],
                    blendTransition: 0.2,
                    blendViaShortestPath: true
                }
            }
        },
        {
            idController: "player.root",
            initialState: "first_person",
            states: {
                first_person: {
                    animations: [
                        "first_person_base_pose",
                        "first_person_breathing_bob",
                        { first_person_swap_item: `!${MoLang.blocking()}` },
                        { first_person_shield_block: MoLang.blocking() },
                        {
                            first_person_attack_controller: `${MoLang.variable("attack_time")} > 0.0 && ${MoLang.getEquippedItemName()} != 'filled_map' && !${MoLang.variable("melee_spear_equipped")}`
                        },
                        { first_person_empty_hand: `${MoLang.getEquippedItemName(0, 1)} != 'filled_map'` },
                        { first_person_walk: MoLang.variable("bob_animation") },
                        {
                            first_person_map_controller: `${MoLang.getEquippedItemName(0, 1)} == 'filled_map' || ${MoLang.getEquippedItemName("off_hand")} == 'filled_map'`
                        },
                        {
                            first_person_crossbow_equipped: `${MoLang.getEquippedItemName()} == 'crossbow' && ${MoLang.variable("item_use_normalized")} > 0.0 && ${MoLang.variable("item_use_normalized")} < 1.0`
                        },
                        { first_person_melee_spear_controller: MoLang.variable("melee_spear_equipped") }
                    ],
                    transitions: [
                        { paperdoll: MoLang.variable("is_paperdoll") },
                        { map_player: MoLang.variable("map_face_icon") },
                        { third_person: `!${MoLang.variable("is_first_person")}` }
                    ]
                },
                map_player: {
                    transitions: [
                        { paperdoll: MoLang.variable("is_paperdoll") },
                        { first_person: MoLang.variable("is_first_person") },
                        { third_person: `!${MoLang.variable("map_face_icon")} && !${MoLang.variable("is_first_person")}` }
                    ]
                },
                paperdoll: {
                    animations: ["humanoid_base_pose", "look_at_target_ui", "move.arms", "move.legs", "cape"],
                    transitions: [
                        { first_person: `!${MoLang.variable("is_paperdoll")} && ${MoLang.variable("is_first_person")}` },
                        { map_player: MoLang.variable("map_face_icon") },
                        { third_person: `!${MoLang.variable("is_paperdoll")} && !${MoLang.variable("is_first_person")}` }
                    ]
                },
                third_person: {
                    animations: [
                        "humanoid_base_pose",
                        { look_at_target: `!${MoLang.isSleeping()} && !${MoLang.isEmoting()}` },
                        "move.arms",
                        "move.legs",
                        "cape",
                        { "riding.root": MoLang.isRiding() },
                        { "riding.arms": MoLang.isRiding() },
                        { "riding.legs": MoLang.isRiding() },
                        "holding",
                        { brandish_spear: MoLang.variable("is_brandishing_spear") },
                        { holding_spyglass: MoLang.variable("is_holding_spyglass") },
                        { charging: MoLang.isCharging() },
                        { sneaking: `${MoLang.isSneaking()} && !${MoLang.isSleeping()}` },
                        {
                            bob: `!${MoLang.variable("is_holding_spyglass")} && !${MoLang.variable("is_tooting_goat_horn")} && !${MoLang.variable("is_using_brush")}`
                        },
                        { damage_nearby_mobs: MoLang.variable("damage_nearby_mobs") },
                        {
                            swimming: `${MoLang.variable("swim_amount")} > 0.0 && !${MoLang.variable("melee_spear_equipped")}`
                        },
                        {
                            "swimming.no_right_arm": `${MoLang.variable("swim_amount")} > 0.0 && ${MoLang.variable("melee_spear_equipped")}`
                        },
                        { "swimming.legs": `${MoLang.variable("swim_amount")} > 0.0` },
                        { crawling: `${MoLang.isCrawling()} && !${MoLang.variable("melee_spear_equipped")}` },
                        { "crawling.no_right_arm": `${MoLang.isCrawling()} && ${MoLang.variable("melee_spear_equipped")}` },
                        { "crawling.legs": MoLang.isCrawling() },
                        {
                            use_item_progress: `(${MoLang.variable("use_item_interval_progress")} > 0.0) || (${MoLang.variable("use_item_startup_progress")} > 0.0) && !${MoLang.variable("is_brandishing_spear")} && !${MoLang.variable("is_holding_spyglass")} && !${MoLang.variable("is_tooting_goat_horn")} && !${MoLang.variable("is_using_brush")} && !${MoLang.isItemNameAny("slot.weapon.mainhand", "minecraft:bow")}`
                        },
                        { sleeping: `${MoLang.isSleeping()} && ${MoLang.isAlive()}` },
                        {
                            "attack.positions": `${MoLang.variable("attack_time")} >= 0.0 && !${MoLang.variable("melee_spear_equipped")}`
                        },
                        {
                            "attack.rotations": `${MoLang.variable("attack_time")} >= 0.0 && !${MoLang.variable("melee_spear_equipped")}`
                        },
                        {
                            shield_block_main_hand: `${MoLang.blocking()} && ${MoLang.getEquippedItemName("off_hand")} != 'shield' && ${MoLang.getEquippedItemName()} == 'shield'`
                        },
                        {
                            shield_block_off_hand: `${MoLang.blocking()} && ${MoLang.getEquippedItemName("off_hand")} == 'shield'`
                        },
                        { crossbow_controller: `${MoLang.getEquippedItemName()} == 'crossbow'` },
                        {
                            third_person_bow_equipped: `${MoLang.getEquippedItemName()} == 'bow' && (${MoLang.variable("item_use_normalized")} > 0 && ${MoLang.variable("item_use_normalized")} < 1.0)`
                        },
                        { tooting_goat_horn: MoLang.variable("is_tooting_goat_horn") },
                        { holding_brush: `${MoLang.getEquippedItemName()} == 'brush'` },
                        { brushing: MoLang.variable("is_using_brush") },
                        { holding_heavy_core: MoLang.isItemNameAny("slot.weapon.mainhand", "minecraft:heavy_core") },
                        { third_person_melee_spear_controller: MoLang.variable("melee_spear_equipped") }
                    ],
                    transitions: [
                        { paperdoll: MoLang.variable("is_paperdoll") },
                        { first_person: MoLang.variable("is_first_person") },
                        { map_player: MoLang.variable("map_face_icon") }
                    ]
                }
            }
        }
    ]
});
