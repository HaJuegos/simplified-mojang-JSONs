import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const PlayerFirstpersonAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "player.first_person.attack_rotation",
            loop: true,
            bones: {
                rightarm: {
                    position: [
                        `${MoLang.max("-7.0", MoLang.min(`-15.5 * ${MoLang.sin(`${MoLang.variable("first_person_item_rotation_factor")} * ${MoLang.variable("attack_time")} * 112.0`)}`, 999.0))} * ${MoLang.sin(`${MoLang.variable("first_person_item_rotation_factor")} * ${MoLang.variable("attack_time")} * 112.0`)}`,
                        `${MoLang.sin(`${MoLang.variable("first_person_item_rotation_factor")} * (1.0 - ${MoLang.variable("attack_time")}) * (1.0 - ${MoLang.variable("attack_time")}) * 200.0`)} * 7.5 - ${MoLang.variable("first_person_item_rotation_factor")} * ${MoLang.variable("attack_time")} * 15.0 + ${MoLang.variable("short_arm_offset_right")}`,
                        `${MoLang.sin(`${MoLang.variable("first_person_item_rotation_factor")} * ${MoLang.variable("attack_time")} * 120.0`)} * 1.75`
                    ],
                    rotation: [
                        `${MoLang.sin(`${MoLang.variable("first_person_item_rotation_factor")} * (1.0 - ${MoLang.variable("attack_time")}) * (1.0 - ${MoLang.variable("attack_time")}) * 280.0`)} * -60.0`,
                        `${MoLang.sin(`${MoLang.variable("first_person_item_rotation_factor")} * (1.0 - ${MoLang.variable("attack_time")}) * (1.0 - ${MoLang.variable("attack_time")}) * 280.0`)} * 40.0`,
                        `${MoLang.sin(`${MoLang.variable("first_person_item_rotation_factor")} * (1.0 - ${MoLang.variable("attack_time")}) * (1.0 - ${MoLang.variable("attack_time")}) * 280.0`)} * 20.0`
                    ]
                }
            }
        },
        {
            idAnimation: "player.first_person.attack_rotation_item",
            loop: true,
            overridePreviousAnimation: true,
            bones: {
                rightitem: {
                    position: [
                        "-math.sin(math.sqrt(variable.attack_time) * Math.Pi * 100) * 10",
                        "math.sin(math.sqrt(variable.attack_time) * Math.Pi * 2 * 60) * 10",
                        "-math.sin(variable.attack_time * Math.Pi * 65) * 2"
                    ],
                    rotation: [
                        "-math.sin(math.sqrt(variable.attack_time) * Math.Pi * 20) * 25",
                        `-${MoLang.sin(`${MoLang.sqrt(MoLang.variable("attack_time"))} * 75.0`)} * 15.0`,
                        `-${MoLang.sin(`${MoLang.sqrt(MoLang.variable("attack_time"))} * 25`)} * 15`
                    ]
                }
            }
        },
        {
            idAnimation: "player.first_person.base_pose",
            loop: true,
            bones: {
                body: {
                    rotation: [MoLang.targetXRotation(), MoLang.targetYRotation(), 0.0]
                },
                head: {
                    rotation: [MoLang.targetXRotation(), `${MoLang.targetYRotation()} + 180`, 0.0]
                }
            }
        },
        {
            idAnimation: "player.first_person.crossbow_equipped",
            loop: true,
            overridePreviousAnimation: true,
            bones: {
                leftarm: {
                    position: [
                        `1.5 - ${MoLang.variable("item_use_normalized")} * 3.5`,
                        `-3.799999952316284 + ${MoLang.variable("short_arm_offset_left")}`,
                        `8.25 - (1 - ${MoLang.variable("item_use_normalized")})`
                    ],
                    rotation: [165.0, -60.0, 45.0],
                    scale: [0.4, 0.4, 0.4]
                },
                rightitem: {
                    position: [0.0, 2.0, `2.5 - ${MoLang.itemRemainingUseDuration("main_hand", 1.0)} * 1.5`],
                    rotation: [-20.0, -15.0, -30.0],
                    scale: [1.0, `1.15 - ${MoLang.itemRemainingUseDuration("main_hand", 1.0)} * 0.15`, 1.0]
                }
            }
        },
        {
            idAnimation: "player.first_person.crossbow_hold",
            loop: true,
            bones: {
                rightitem: {
                    position: [`${MoLang.getEquippedItemName("off_hand")} == 'shield' ? -4.0 : 0.0`, 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "player.first_person.melee_spear_hold",
            loop: true,
            overridePreviousAnimation: false,
            bones: {
                rightitem: {
                    position: [-1.5, 2.0, 3.5],
                    rotation: [45.0, 55.0, -12.5]
                }
            }
        },
        {
            idAnimation: "player.first_person.melee_spear_use",
            loop: true,
            overridePreviousAnimation: false,
            bones: {
                rightitem: {
                    position: [
                        `-1.5 + ${MoLang.variable("fp_melee_spear_use_item_position_x")}`,
                        `2.0 + ${MoLang.variable("fp_melee_spear_use_item_position_y")}`,
                        `3.5 + ${MoLang.variable("fp_melee_spear_use_item_position_z")}`
                    ],
                    rotation: [
                        45.0,
                        `55.0 + ${MoLang.variable("fp_melee_spear_use_item_rotation_y")}`,
                        `-12.5 + ${MoLang.variable("fp_melee_spear_use_item_rotation_z")}`
                    ]
                }
            }
        },
        {
            idAnimation: "player.first_person.melee_spear_attack",
            loop: true,
            overridePreviousAnimation: false,
            bones: {
                rightitem: {
                    position: [
                        `-1.5 + ${MoLang.variable("fp_melee_spear_attack_item_position_x")}`,
                        `2.0 + ${MoLang.variable("fp_melee_spear_attack_item_position_y")}`,
                        `3.5 + ${MoLang.variable("fp_melee_spear_attack_item_position_z")}`
                    ],
                    rotation: [
                        45.0,
                        `55.0 + ${MoLang.variable("fp_melee_spear_attack_item_rotation_y")}`,
                        `-12.5 + ${MoLang.variable("fp_melee_spear_attack_item_rotation_z")}`
                    ]
                }
            }
        },
        {
            idAnimation: "player.first_person.breathing_bob",
            loop: true,
            overridePreviousAnimation: false,
            bones: {
                rightitem: {
                    position: [0.0, `${MoLang.variable("bob_animation")} * ${MoLang.sin(`${MoLang.lifeTime()} * 45.0`)} * 0.5`, 0.0]
                }
            }
        },
        {
            idAnimation: "player.first_person.empty_hand",
            loop: true,
            bones: {
                rightarm: {
                    position: [13.5, -10.0, 12.0],
                    rotation: [
                        `95.0 + ${MoLang.variable("is_using_vr")} * 7.5`,
                        `-45.0 + ${MoLang.variable("is_using_vr")} * 7.5`,
                        `115.0 + ${MoLang.variable("is_using_vr")} * -2.5`
                    ]
                },
                rightitem: {
                    position: [
                        0.0,
                        `${MoLang.getDefaultBonePivot("rightarm", 1)} - ${MoLang.getDefaultBonePivot("rightitem", 1)} - 7.0`,
                        `-${MoLang.getDefaultBonePivot("rightitem", 2)}`
                    ]
                },
                leftitem: {
                    position: [
                        0.0,
                        `${MoLang.getDefaultBonePivot("leftarm", 1)} - ${MoLang.getDefaultBonePivot("leftitem", 1)} - 7.0`,
                        `-${MoLang.getDefaultBonePivot("leftitem", 2)}`
                    ]
                }
            }
        },
        {
            idAnimation: "player.first_person.map_hold",
            loop: true,
            bones: {
                leftarm: {
                    position: [
                        `-16.250 + ${MoLang.variable("is_vertical_splitscreen")} * 7.0`,
                        `-10.75 - ${MoLang.variable("map_angle")} * 8.0 + ${MoLang.variable("is_vertical_splitscreen")} * 0.6 - ${MoLang.variable("short_arm_offset_left")}`,
                        `9.0 - ${MoLang.variable("map_angle")} * 8.0 + ${MoLang.variable("short_arm_offset_left")}`
                    ],
                    rotation: [40.0, -20.0, -155.0],
                    scale: [1.15, 1.15, 1.15]
                },
                rightarm: {
                    position: [
                        `12.50 + ${MoLang.variable("is_vertical_splitscreen")} * 1.75`,
                        `-7.5 - ${MoLang.variable("map_angle")} * 8.0 + ${MoLang.variable("is_vertical_splitscreen")} * 0.5 - ${MoLang.variable("short_arm_offset_right")}`,
                        `5.25 - ${MoLang.variable("map_angle")} * 8.0 + ${MoLang.variable("short_arm_offset_right")}`
                    ],
                    rotation: [77.5, 7.5, 160.0]
                }
            }
        },
        {
            idAnimation: "player.first_person.map_hold_attack",
            loop: true,
            bones: {
                leftarm: {
                    position: [
                        `${MoLang.sin(`${MoLang.variable("first_person_item_rotation_factor")} * ${MoLang.variable("attack_time")} * 112.0`)} * -10.75`,
                        `${MoLang.sin(`${MoLang.variable("first_person_item_rotation_factor")} * (1.0 - ${MoLang.variable("attack_time")}) * (1.0 - ${MoLang.variable("attack_time")}) * 200.0`)} * 3.75 - ${MoLang.variable("first_person_item_rotation_factor")} * ${MoLang.variable("attack_time")} * 1.25 + ${MoLang.variable("short_arm_offset_left")}`,
                        `${MoLang.sin(`${MoLang.variable("first_person_item_rotation_factor")} * ${MoLang.variable("attack_time")} * 120.0`)} * 5.75`
                    ],
                    rotation: [
                        `${MoLang.variable("map_angle")} * 90.0`,
                        `-15.0 * ${MoLang.sin(`${MoLang.variable("first_person_item_rotation_factor")} * (1.0 - ${MoLang.variable("attack_time")}) * -100.0`)}`,
                        0.0
                    ]
                },
                rightarm: {
                    position: [
                        `${MoLang.sin(`${MoLang.variable("first_person_item_rotation_factor")} * ${MoLang.variable("attack_time")} * 112.0`)} * -6.25`,
                        `${MoLang.sin(`${MoLang.variable("first_person_item_rotation_factor")} * (1.0 - ${MoLang.variable("attack_time")}) * (1.0 - ${MoLang.variable("attack_time")}) * 200.0`)} * 1.75 + ${MoLang.variable("short_arm_offset_right")}`,
                        `${MoLang.sin(`${MoLang.variable("first_person_item_rotation_factor")} * ${MoLang.variable("attack_time")} * 120.0`)} * 5.25`
                    ],
                    rotation: [`${MoLang.variable("map_angle")} * 90.0`, 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "player.first_person.map_hold_main_hand",
            loop: true,
            bones: {
                rightarm: {
                    position: [
                        `14.50 - ${MoLang.variable("is_vertical_splitscreen")} * 0.75`,
                        `-8.25 + ${MoLang.variable("short_arm_offset_right")} + ${MoLang.sin(`${MoLang.variable("first_person_item_rotation_factor")} * (1.0 - ${MoLang.variable("attack_time")}) * (1.0 - ${MoLang.variable("attack_time")}) * 200.0`)} * 2.75 - ${MoLang.variable("first_person_item_rotation_factor")} * ${MoLang.variable("attack_time")} * 3.0 - ${MoLang.variable("is_horizontal_splitscreen")}`,
                        `11.5 + ${MoLang.sin(`${MoLang.variable("first_person_item_rotation_factor")} * ${MoLang.variable("attack_time")} * 120.0`)} * 3.5 + ${MoLang.variable("is_horizontal_splitscreen")} * 3.5`
                    ],
                    rotation: [195.0, 182.5, -5.0],
                    scale: [0.75, 0.75, 0.75]
                }
            }
        },
        {
            idAnimation: "player.first_person.map_hold_off_hand",
            loop: true,
            bones: {
                leftarm: {
                    position: [
                        `-14.50 + ${MoLang.variable("is_horizontal_splitscreen")} * 2.0 + ${MoLang.variable("is_vertical_splitscreen")} * 8.7`,
                        `-8.250 + ${MoLang.variable("short_arm_offset_left")}`,
                        `11.50 + ${MoLang.variable("is_horizontal_splitscreen")} * 0.5`
                    ],
                    rotation: [195.0, 182.5, 2.5],
                    scale: [0.75, 0.75, 0.75]
                }
            }
        },
        {
            idAnimation: "player.first_person.swap_item",
            loop: true,
            bones: {
                leftarm: {
                    position: [
                        0.0,
                        `(${MoLang.getEquippedItemName("off_hand")} == 'filled_map' || ${MoLang.getEquippedItemName("off_hand")} == 'shield') ? 0.0 : -10.0 * (1.0 - ${MoLang.context("player_offhand_arm_height")})`,
                        0.0
                    ]
                },
                rightarm: {
                    position: [0.0, `-10.0 * (1.0 - ${MoLang.variable("player_arm_height")})`, 0.0]
                }
            }
        },
        {
            idAnimation: "player.first_person.shield_block",
            loop: true,
            bones: {
                leftarm: {
                    position: [0.0, `-10.0 * (1.0 - ${MoLang.context("player_offhand_arm_height")})`, 0.0]
                },
                rightarm: {
                    position: [
                        0.0,
                        `${MoLang.getEquippedItemName("off_hand")} != 'shield' ? -10.0 * (1.0 - ${MoLang.variable("player_arm_height")}) : 0.0`,
                        0.0
                    ]
                }
            }
        },
        {
            idAnimation: "player.first_person.vr_attack_rotation",
            loop: true,
            bones: {
                rightarm: {
                    position: [
                        `5.0 * ${MoLang.sin(`${MoLang.variable("first_person_item_rotation_factor")} * ${MoLang.variable("attack_time")} * 112.0`)}`,
                        `(${MoLang.sin(`${MoLang.variable("first_person_item_rotation_factor")} * (1.0 - ${MoLang.variable("attack_time")}) * (1.0 - ${MoLang.variable("attack_time")}) * 200.0`)} - 0.8) * 8.75 + 5.0`,
                        `${MoLang.sin(`${MoLang.variable("first_person_item_rotation_factor")} * ${MoLang.variable("attack_time")} * 120.0`)} * 15.0`
                    ],
                    rotation: [
                        `30.7 * ${MoLang.sin(`${MoLang.variable("first_person_item_rotation_factor")} * ${MoLang.variable("attack_time")} * -180.0 - 45.0`)} * 1.5`,
                        0.0,
                        `21.8 * ${MoLang.sin(`${MoLang.variable("first_person_item_rotation_factor")} * ${MoLang.variable("attack_time")} * 200.0 + 30.0`)} * 1.25`
                    ]
                }
            }
        },
        {
            idAnimation: "player.first_person.walk",
            loop: true,
            bones: {
                leftarm: {
                    position: [
                        `${MoLang.sin(`-${MoLang.walkDistance()} * 180.0`)} * ${MoLang.variable("hand_bob")} * 9.75`,
                        `-${MoLang.abs(MoLang.cos(`-${MoLang.walkDistance()} * 180.0`))} * ${MoLang.variable("hand_bob")} * 15.0 + ${MoLang.variable("short_arm_offset_left")}`,
                        0.0
                    ]
                },
                rightarm: {
                    position: [
                        `${MoLang.sin(`-${MoLang.walkDistance()} * 180.0`)} * ${MoLang.variable("hand_bob")} * 9.75`,
                        `-${MoLang.abs(MoLang.cos(`-${MoLang.walkDistance()} * 180.0`))} * ${MoLang.variable("hand_bob")} * 15.0 + ${MoLang.variable("short_arm_offset_right")}`,
                        0.0
                    ]
                }
            }
        }
    ]
});
