import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const PlayerAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "player.attack.positions",
            loop: true,
            bones: {
                head: {
                    rotation: [0.0, 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "player.attack.rotations",
            loop: true,
            bones: {
                body: {
                    rotation: [0.0, MoLang.variable("attack_body_rot_y"), 0.0]
                },
                leftarm: {
                    rotation: [
                        `-(${MoLang.sin(`(1 - ${MoLang.pow(`(1 - ${MoLang.variable("attack_time")})`, 4)}) * 180`)} * 1.2 + ${MoLang.sin(`${MoLang.variable("attack_time")} * 180`)}) * 10.0`,
                        0.0,
                        0.0
                    ]
                },
                rightarm: {
                    rotation: [
                        `-(${MoLang.sin(`(1 - ${MoLang.pow(`(1 - ${MoLang.variable("attack_time")})`, 4)}) * 180`)} * 1.2 + ${MoLang.sin(`${MoLang.variable("attack_time")} * 180`)}) * 30.0`,
                        `-(${MoLang.sin(`(1 - ${MoLang.pow(`(1 - ${MoLang.variable("attack_time")})`, 4)}) * 180`)} ? (-90.0 * ${MoLang.sin(`(1 - ${MoLang.pow(`(1 - ${MoLang.variable("attack_time")})`, 4)}) * 180`)}) + 30.0 : 0.0)`,
                        0.0
                    ]
                }
            }
        },
        {
            idAnimation: "player.base_pose.upside_down",
            loop: true,
            bones: {
                waist: {
                    position: [0.0, 8.0, 0.0],
                    rotation: [0.0, 0.0, 180.0]
                }
            }
        },
        {
            idAnimation: "player.bob",
            loop: true,
            bones: {
                leftarm: {
                    rotation: [0.0, 0.0, `-((${MoLang.cos(`${MoLang.lifeTime()} * 103.2`)} * 2.865) + 2.865)`]
                },
                rightarm: {
                    rotation: [0.0, 0.0, `(${MoLang.cos(`${MoLang.lifeTime()} * 103.2`)} * 2.865) + 2.865`]
                }
            }
        },
        {
            idAnimation: "player.bob.stationary",
            loop: true,
            bones: {
                leftarm: {
                    rotation: [0.0, 0.0, `-((${MoLang.cos(`${MoLang.lifeTime()} * 103.2`)} * 2.865) + 2.865)`]
                },
                rightarm: {
                    rotation: [0.0, 0.0, `(${MoLang.cos(`${MoLang.lifeTime()} * 103.2`)} * 2.865) + 2.865`]
                }
            }
        },
        {
            idAnimation: "player.bow_equipped",
            loop: true,
            bones: {
                leftarm: {
                    rotation: [
                        `-90.0 + ${MoLang.targetXRotation()} - ${MoLang.isSneaking()} * 15.0 - this`,
                        `27.5 + ${MoLang.targetYRotation()}`,
                        0.0
                    ]
                },
                rightarm: {
                    rotation: [
                        `-90.0 + ${MoLang.targetXRotation()} - ${MoLang.isSneaking()} * 15.0 - this`,
                        `-5.0 + ${MoLang.targetYRotation()}`,
                        0.0
                    ]
                },
                rightitem: {
                    rotation: [0.0, -10.0, 0.0]
                }
            }
        },
        {
            idAnimation: "player.cape",
            loop: true,
            bones: {
                cape: {
                    position: [0.0, MoLang.getRootLocatorOffset("armor_offset.default_neck", 1), 0.0],
                    rotation: [`math.lerp(0.0, -126.0, ${MoLang.capeFlapAmount()}) - 6.0`, 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "player.crossbow_equipped",
            loop: true,
            bones: {
                leftarm: {
                    position: [0.0, 0.0, 0.5],
                    rotation: [
                        "-this - 65.0 - (1.0 - variable.item_use_normalized) * 5.0",
                        "-this + (1.0 - variable.item_use_normalized) * 30.0",
                        "-this + 20.0 + (1.0 - variable.item_use_normalized) * 10.0"
                    ]
                },
                rightarm: {
                    rotation: ["- 60.0 - this", "- 45.0 - this", "- 2.5 - this"]
                }
            }
        },
        {
            idAnimation: "player.crossbow_hold",
            loop: true,
            bones: {
                leftarm: {
                    rotation: [
                        `${MoLang.isSwimming()} ? 0.0 : -93.0 + ${MoLang.targetXRotation()} - ${MoLang.isSneaking()} * 27.0 -this`,
                        `${MoLang.isSwimming()} ? 0.0 : 42.0 + math.clamp(${MoLang.targetYRotation()}, -45.0, 5.0) -this`,
                        `${MoLang.isSneaking()} * -15.0`
                    ]
                },
                rightarm: {
                    rotation: [
                        `${MoLang.isSwimming()} ? 0.0 : -93.0 + ${MoLang.targetXRotation()} - ${MoLang.isSneaking()} * 27.0 -this`,
                        `${MoLang.isSwimming()} ? 0.0 : math.clamp(${MoLang.targetYRotation()}, -60.0, 45.0) -this`,
                        0.0
                    ]
                }
            }
        },
        {
            idAnimation: "player.melee_spear_attack",
            loop: true,
            bones: {
                body: {
                    rotation: [0.0, MoLang.variable("attack_body_rot_y"), 0.0]
                },
                rightarm: {
                    rotation: [
                        `v.tp_melee_spear_base_arm_rotation_x + ${MoLang.targetXRotation()} - ${MoLang.isSneaking()} * 27.0 - this + v.tp_melee_spear_attack_arm_rotation_x`,
                        `math.clamp(${MoLang.targetYRotation()}, -60.0, 45.0) - this - v.attack_body_rot_y`,
                        0.0
                    ]
                },
                rightitem: {
                    position: [0.0, -1.5, -1.5],
                    rotation: [MoLang.variable("tp_melee_spear_attack_item_rotation_x"), 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "player.glide",
            loop: true,
            bones: {
                leftarm: {
                    rotation: [MoLang.variable("tcos0"), 0.0, 0.0]
                },
                leftleg: {
                    rotation: [`${MoLang.variable("tcos0")} * -1.4`, -0.1, -0.1]
                },
                rightarm: {
                    rotation: [`-${MoLang.variable("tcos0")}`, 0.0, 0.0]
                },
                rightleg: {
                    rotation: [`${MoLang.variable("tcos0")} * 1.4`, 0.1, 0.1]
                }
            }
        },
        {
            idAnimation: "player.holding",
            loop: true,
            bones: {
                leftarm: {
                    rotation: ["variable.is_holding_left ? (-this * 0.5 - 18.0) : 0.0", 0.0, 0.0]
                },
                rightarm: {
                    rotation: ["variable.is_holding_right ? (-this * 0.5 - 18.0) : 0.0", 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "player.holding_heavy_core",
            loop: true,
            bones: {
                rightItem: {
                    scale: 0.7,
                    position: [-1.0, 0.0, -2.0]
                }
            }
        },
        {
            idAnimation: "player.holding.zombie",
            loop: true,
            bones: {
                leftarm: {
                    rotation: [0.0, 0.0, 0.0]
                },
                rightarm: {
                    rotation: [0.0, 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "player.look_at_target.inverted",
            loop: true,
            bones: {
                head: {
                    rotation: [`-${MoLang.targetXRotation()}`, `-${MoLang.targetYRotation()}`, 0.0]
                }
            }
        },
        {
            idAnimation: "player.look_at_target.ui",
            loop: true,
            bones: {
                head: {
                    rotation: [MoLang.targetXRotation(), MoLang.targetYRotation(), 0.0]
                }
            }
        },
        {
            idAnimation: "player.move.arms",
            loop: true,
            bones: {
                leftarm: {
                    rotation: [MoLang.variable("tcos0"), 0.0, 0.0]
                },
                rightarm: {
                    rotation: [`-${MoLang.variable("tcos0")}`, 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "player.move.arms.single",
            loop: true,
            bones: {
                leftarm: {
                    rotation: [`-${MoLang.variable("tcos0")}`, 0.0, 0.0]
                },
                rightarm: {
                    rotation: [`-${MoLang.variable("tcos0")}`, 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "player.move.arms.stationary",
            loop: true,
            bones: {
                leftarm: {
                    rotation: [0.0, 0.0, 0.0]
                },
                rightarm: {
                    rotation: [0.0, 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "player.move.arms.statue_of_liberty",
            loop: true,
            bones: {
                leftarm: {
                    rotation: [MoLang.variable("tcos0"), 0.0, 0.0]
                },
                rightarm: {
                    rotation: [
                        `${MoLang.variable("is_holding_right")} || ${MoLang.sin(`(1 - ${MoLang.pow(`(1 - ${MoLang.variable("attack_time")})`, 4)}) * 180`)} > 0.0 ? -${MoLang.variable("tcos0")} : 180.0`,
                        0.0,
                        `${MoLang.variable("is_holding_right")} || ${MoLang.sin(`(1 - ${MoLang.pow(`(1 - ${MoLang.variable("attack_time")})`, 4)}) * 180`)} > 0.0 ? 0.0 : -17.2`
                    ]
                }
            }
        },
        {
            idAnimation: "player.move.arms.zombie",
            loop: true,
            bones: {
                leftarm: {
                    rotation: [-90.0, 0.0, 0.0]
                },
                rightarm: {
                    rotation: [-90.0, 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "player.move.legs",
            loop: true,
            bones: {
                leftleg: {
                    rotation: [`${MoLang.variable("tcos0")} * -1.4`, -0.1, -0.1]
                },
                rightleg: {
                    rotation: [`${MoLang.variable("tcos0")} * 1.4`, 0.1, 0.1]
                }
            }
        },
        {
            idAnimation: "player.move.legs.inverted",
            loop: true,
            bones: {
                leftleg: {
                    position: [0.0, 8.0, 0.0],
                    rotation: [MoLang.variable("tcos0"), -0.1, 179.9]
                },
                rightleg: {
                    position: [0.0, 8.0, 0.0],
                    rotation: [`-${MoLang.variable("tcos0")}`, 0.1, 180.1]
                }
            }
        },
        {
            idAnimation: "player.move.legs.single",
            loop: true,
            bones: {
                leftleg: {
                    rotation: [MoLang.variable("tcos0"), -0.1, -0.1]
                },
                rightleg: {
                    rotation: [MoLang.variable("tcos0"), 0.1, 0.1]
                }
            }
        },
        {
            idAnimation: "player.move.legs.stationary",
            loop: true,
            bones: {
                leftleg: {
                    rotation: [0.0, -0.1, -0.1]
                },
                rightleg: {
                    rotation: [0.0, 0.1, 0.1]
                }
            }
        },
        {
            idAnimation: "player.riding.root",
            loop: true,
            bones: {
                root: {
                    position: [0.0, "variable.riding_y_offset ?? 0.0", 0.0]
                }
            }
        },
        {
            idAnimation: "player.riding.arms",
            loop: true,
            bones: {
                leftarm: {
                    rotation: [-36.0, 0.0, 0.0]
                },
                rightarm: {
                    rotation: [-36.0, 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "player.riding.arms.zombie",
            loop: true,
            bones: {
                leftarm: {
                    rotation: [45.0, 0.0, 0.0]
                },
                rightarm: {
                    rotation: [45.0, 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "player.riding.legs",
            loop: true,
            bones: {
                leftleg: {
                    rotation: ["-81.0 - this", "-18.0 - this", "-this"]
                },
                rightleg: {
                    rotation: ["-81.0 - this", "18.0 - this", "-this"]
                }
            }
        },
        {
            idAnimation: "player.shield_block_main_hand",
            loop: true,
            bones: {
                rightarm: {
                    rotation: [-20.0, -30.0, -25.0]
                },
                rightitem: {
                    position: [-1.0, -3.0, 0.0],
                    rotation: [0.0, -60.0, -45.0]
                }
            }
        },
        {
            idAnimation: "player.shield_block_off_hand",
            loop: true,
            bones: {
                leftarm: {
                    rotation: [-20.0, 20.0, 20.0]
                },
                leftitem: {
                    position: [`1.0 + ${MoLang.itemIsCharged()} * 1.5`, `-3.0 + ${MoLang.itemIsCharged()}`, 0.0],
                    rotation: [
                        `${MoLang.itemIsCharged()} * 30.0`,
                        `70.0 - ${MoLang.itemIsCharged()} * 60.0`,
                        `65.0 - ${MoLang.itemIsCharged()} * 15.0`
                    ]
                }
            }
        },
        {
            idAnimation: "player.sleeping",
            loop: true,
            overridePreviousAnimation: true,
            bones: {
                head: {
                    rotation: ["30.0 - this", "-this", "-this"]
                },
                root: {
                    position: [
                        `24.0 * ${MoLang.cos(MoLang.bodyYRotation())} * ${MoLang.cos(MoLang.sleepRotation())} - 24.0 * ${MoLang.sin(MoLang.bodyYRotation())} * ${MoLang.sin(MoLang.sleepRotation())}`,
                        0.0,
                        `24.0 * ${MoLang.cos(MoLang.bodyYRotation())} * ${MoLang.sin(MoLang.sleepRotation())} + 24.0 * ${MoLang.sin(MoLang.bodyYRotation())} * ${MoLang.cos(MoLang.sleepRotation())}`
                    ],
                    rotation: [-90.0, `270.0 - ${MoLang.sleepRotation()} - ${MoLang.bodyYRotation()}`, 0.0]
                }
            }
        },
        {
            idAnimation: "player.sneaking",
            loop: true,
            bones: {
                body: {
                    position: [0.0, -2.0, 0.0]
                },
                head: {
                    position: [0.0, -1.0, 0.0]
                },
                leftarm: {
                    rotation: [-5.7, 0.0, 0.0]
                },
                leftleg: {
                    rotation: [-28.0, -0.1, -0.1]
                },
                rightarm: {
                    rotation: [-5.7, 0.0, 0.0]
                },
                rightleg: {
                    rotation: [-28.0, 0.1, 0.1]
                },
                root: {
                    position: [0.0, 1.25, 9.0],
                    rotation: ["28.0 - this", 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "player.sneaking.inverted",
            loop: true,
            bones: {
                body: {
                    position: [0.0, -2.0, 0.0]
                },
                head: {
                    position: [0.0, -1.0, 0.0],
                    rotation: [-28.0, 0.0, 0.0]
                },
                leftarm: {
                    rotation: [-5.7, 0.0, 0.0]
                },
                leftleg: {
                    rotation: [28.0, -0.1, -0.1]
                },
                rightarm: {
                    rotation: [-5.7, 0.0, 0.0]
                },
                rightleg: {
                    rotation: [28.0, 0.1, 0.1]
                },
                root: {
                    position: [0.0, 1.25, -8.0],
                    rotation: ["-28.0 - this", 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "player.swim",
            animationLength: 1.3,
            loop: true,
            overridePreviousAnimation: true,
            bones: {
                leftarm: {
                    rotation: {
                        "0": [0.0, 180.0, 180.0],
                        "0.7": [0.0, 180.0, 287.2],
                        "1.1": [90.0, 180.0, 180.0],
                        "1.3": [0.0, 180.0, 180.0]
                    }
                },
                rightarm: {
                    rotation: {
                        "0": [0.0, 180.0, -180.0],
                        "0.7": [0.0, 180.0, -287.2],
                        "1.1": [90.0, 180.0, -180.0],
                        "1.3": [0.0, 180.0, -180.0]
                    }
                },
                root: {
                    position: [
                        0.0,
                        `(${MoLang.sin(MoLang.targetXRotation())} * 17.0 + 5.0) * ${MoLang.variable("swim_amount")}`,
                        `(${MoLang.cos(MoLang.targetXRotation())} * 17.0) * ${MoLang.variable("swim_amount")}`
                    ],
                    rotation: [`${MoLang.variable("swim_amount")} * (90 + ${MoLang.targetXRotation()})`, 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "player.swim.no_right_arm",
            animationLength: 1.3,
            loop: true,
            overridePreviousAnimation: true,
            bones: {
                leftarm: {
                    rotation: {
                        "0": [0.0, 180.0, 180.0],
                        "0.7": [0.0, 180.0, 287.2],
                        "1.1": [90.0, 180.0, 180.0],
                        "1.3": [0.0, 180.0, 180.0]
                    }
                },
                root: {
                    position: [
                        0.0,
                        `(${MoLang.sin(MoLang.targetXRotation())} * 17.0 + 5.0) * ${MoLang.variable("swim_amount")}`,
                        `(${MoLang.cos(MoLang.targetXRotation())} * 17.0) * ${MoLang.variable("swim_amount")}`
                    ],
                    rotation: [`${MoLang.variable("swim_amount")} * (90 + ${MoLang.targetXRotation()})`, 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "player.swim.legs",
            loop: true,
            overridePreviousAnimation: true,
            bones: {
                leftleg: {
                    rotation: [`math.lerp(0.0, math.cos(${MoLang.lifeTime()} * 390.0 + 180.0) * 17.2, variable.swim_amount)`, -0.1, -0.1]
                },
                rightleg: {
                    rotation: [`math.lerp(0.0, math.cos(${MoLang.lifeTime()} * 390.0) * 17.2, variable.swim_amount)`, 0.1, 0.1]
                }
            }
        },
        {
            idAnimation: "player.swim.legs.single",
            loop: true,
            overridePreviousAnimation: true,
            bones: {
                leftleg: {
                    rotation: [`math.lerp(0.0, math.cos(${MoLang.lifeTime()} * 390.0) * 17.2, variable.swim_amount)`, -0.1, -0.1]
                },
                rightleg: {
                    rotation: [`math.lerp(0.0, math.cos(${MoLang.lifeTime()} * 390.0) * 17.2, variable.swim_amount)`, 0.1, 0.1]
                }
            }
        },
        {
            idAnimation: "player.swim.legs.stationary",
            loop: true,
            bones: {
                leftleg: {
                    rotation: [0.0, -0.1, -0.1]
                },
                rightleg: {
                    rotation: [0.0, 0.1, 0.1]
                }
            }
        },
        {
            idAnimation: "player.crawl",
            animTimeUpdate: `${MoLang.modifiedDistanceMoved()} / 15.0`,
            animationLength: 1.3,
            loop: true,
            overridePreviousAnimation: true,
            bones: {
                leftarm: {
                    rotation: {
                        "0": [0.0, 180.0, 180.0],
                        "0.7": [0.0, 180.0, 287.2],
                        "1.1": [90.0, 180.0, 180.0],
                        "1.3": [0.0, 180.0, 180.0]
                    }
                },
                rightarm: {
                    rotation: {
                        "0": [0.0, 180.0, -180.0],
                        "0.7": [0.0, 180.0, -287.2],
                        "1.1": [90.0, 180.0, -180.0],
                        "1.3": [0.0, 180.0, -180.0]
                    }
                },
                root: {
                    position: [0.0, `5.0 * ${MoLang.variable("swim_amount")}`, `17.0 * ${MoLang.variable("swim_amount")}`],
                    rotation: [`${MoLang.variable("swim_amount")} * 90`, 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "player.crawl.no_right_arm",
            animTimeUpdate: `${MoLang.modifiedDistanceMoved()} / 15.0`,
            animationLength: 1.3,
            loop: true,
            overridePreviousAnimation: true,
            bones: {
                leftarm: {
                    rotation: {
                        "0": [0.0, 180.0, 180.0],
                        "0.7": [0.0, 180.0, 287.2],
                        "1.1": [90.0, 180.0, 180.0],
                        "1.3": [0.0, 180.0, 180.0]
                    }
                },
                root: {
                    position: [0.0, `5.0 * ${MoLang.variable("swim_amount")}`, `17.0 * ${MoLang.variable("swim_amount")}`],
                    rotation: [`${MoLang.variable("swim_amount")} * 90`, 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "player.crawl.legs",
            loop: true,
            overridePreviousAnimation: true,
            bones: {
                leftleg: {
                    rotation: [
                        `math.lerp(0.0, math.cos(${MoLang.modifiedDistanceMoved()} * 30.0 + 180.0) * 17.2, variable.swim_amount)`,
                        -0.1,
                        -0.1
                    ]
                },
                rightleg: {
                    rotation: [
                        `math.lerp(0.0, math.cos(${MoLang.modifiedDistanceMoved()} * 30.0) * 17.2, variable.swim_amount)`,
                        0.1,
                        0.1
                    ]
                }
            }
        }
    ]
});
