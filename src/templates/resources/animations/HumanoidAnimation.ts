import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const HumanoidAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "humanoid.attack.rotations",
            loop: true,
            bones: {
                body: {
                    rotation: [0.0, "math.sin(math.sqrt(variable.attack_time) * 360) * 11.46 - this", 0.0]
                },
                leftarm: {
                    rotation: [`${MoLang.sin(`${MoLang.sqrt(MoLang.variable("attack_time"))} * 360`)} * 11.46`, 0.0, 0.0]
                },
                rightarm: {
                    rotation: [
                        `${MoLang.sin(`1.0 - ${MoLang.pow(`1.0 - ${MoLang.variable("attack_time")}`, 3.0)} * 180.0`)} * (${MoLang.variable("is_brandishing_spear")} || ${MoLang.variable("is_holding_spyglass")} ? -1.0 : 1.0)`,
                        `${MoLang.variable("is_brandishing_spear")} || ${MoLang.variable("is_holding_spyglass")} ? 0.0 : (${MoLang.sin(`${MoLang.sqrt(MoLang.variable("attack_time"))} * 360`)} * 11.46) * 2.0`,
                        0.0
                    ]
                }
            }
        },
        {
            idAnimation: "humanoid.base_pose",
            loop: true,
            bones: {
                waist: {
                    rotation: [0.0, 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "humanoid.big_head",
            loop: true,
            bones: {
                head: {
                    scale: 1.4
                }
            }
        },
        {
            idAnimation: "humanoid.bob",
            loop: true,
            bones: {
                leftarm: {
                    rotation: [0.0, 0.0, `((${MoLang.cos(`${MoLang.lifeTime()} * 103.2`)} * 2.865) + 2.865) * -1.0`]
                },
                rightarm: {
                    rotation: [0.0, 0.0, `(${MoLang.cos(`${MoLang.lifeTime()} * 103.2`)} * 2.865) + 2.865`]
                }
            }
        },
        {
            idAnimation: "humanoid.bow_and_arrow",
            loop: true,
            bones: {
                leftarm: {
                    rotation: [
                        `${MoLang.targetXRotation()} - 90.0 - math.sin(${MoLang.lifeTime()} * 76.8) * 2.865 - this`,
                        `${MoLang.targetYRotation()} + 28.65`,
                        `-(${MoLang.cos(`${MoLang.lifeTime()} * 103.2`)} * 2.865) - 2.865`
                    ]
                },
                rightarm: {
                    rotation: [
                        `${MoLang.targetXRotation()} - 90.0 + math.sin(${MoLang.lifeTime()} * 76.8) * 2.865 - this`,
                        `${MoLang.targetYRotation()} - 5.73`,
                        `(${MoLang.cos(`${MoLang.lifeTime()} * 103.2`)} * 2.865) + 2.865`
                    ]
                }
            }
        },
        {
            idAnimation: "humanoid.brandish_spear",
            loop: true,
            bones: {
                rightarm: {
                    rotation: [
                        "this * -0.5 - 143.5 - 22.5 * variable.charge_amount",
                        "-this",
                        `-((${MoLang.cos(`${MoLang.lifeTime()} * 103.2`)} * 2.865) + 2.865)`
                    ]
                }
            }
        },
        {
            idAnimation: "humanoid.holding_spyglass",
            loop: true,
            bones: {
                rightarm: {
                    rotation: [
                        MoLang.max("-170", MoLang.min(`${MoLang.targetXRotation()} - 105 - (${MoLang.variable("is_sneaking")} ? 15 : 0)`, 180)),
                        MoLang.max("-60", MoLang.min(`${MoLang.targetYRotation()} - 15`, 90)),
                        5.0
                    ]
                }
            }
        },
        {
            idAnimation: "humanoid.tooting_goat_horn",
            loop: true,
            bones: {
                rightarm: {
                    rotation: [
                        `${MoLang.max("-43", MoLang.min(MoLang.targetXRotation(), 14))} - 75`,
                        `${MoLang.max("-37", MoLang.min(MoLang.targetYRotation(), 43))} - 30`,
                        5.0
                    ]
                },
                rightitem: {
                    rotation: [15, 0, 100],
                    position: [4, 0, 1]
                }
            }
        },
        {
            idAnimation: "humanoid.holding_brush",
            loop: true,
            bones: {
                rightitem: {
                    scale: 1.5,
                    position: {
                        "0.0": [-7, -1, -1]
                    },
                    rotation: {
                        "0.0": [20, -30, -10]
                    }
                }
            }
        },
        {
            idAnimation: "humanoid.brushing",
            loop: true,
            bones: {
                rightarm: {
                    rotation: [
                        `${MoLang.max("-43", MoLang.min(MoLang.targetXRotation(), 14))} - 50`,
                        MoLang.max("-37", MoLang.min(MoLang.targetYRotation(), 43)),
                        5.0
                    ]
                },
                rightitem: {
                    position: {
                        "0.0": [0, 0, 0],
                        "0.1": {
                            pre: [0, 0, 0],
                            post: [1.5, 0, -3]
                        },
                        "0.2": {
                            pre: [1.5, 0, -3],
                            post: [0, 0, 0]
                        },
                        "0.3": {
                            pre: [0, 0, 0],
                            post: [1.5, 0, 3]
                        },
                        "0.4": {
                            pre: [1.5, 0, 3],
                            post: [0, 0, 0]
                        },
                        "0.5": {
                            pre: [0, 0, 0],
                            post: [0, 0, 0]
                        }
                    },
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.1": {
                            pre: [0, 0, 0],
                            post: [0, -30, 0]
                        },
                        "0.2": {
                            pre: [0, -30, 0],
                            post: [0, 0, 0]
                        },
                        "0.3": {
                            pre: [0, 0, 0],
                            post: [0, 30, 0]
                        },
                        "0.4": {
                            pre: [0, 30, 0],
                            post: [0, 0, 0]
                        },
                        "0.5": {
                            pre: [0, 0, 0],
                            post: [0, 0, 0]
                        }
                    }
                }
            }
        },
        {
            idAnimation: "humanoid.celebrating",
            loop: true,
            bones: {
                leftarm: {
                    rotation: [`(${MoLang.cos(`${MoLang.lifeTime()} * 800.0`)} * 2.865)`, 180.0, -135.0]
                },
                rightarm: {
                    rotation: [`(${MoLang.cos(`${MoLang.lifeTime()} * 800.0`)} * 2.865)`, 180.0, 153.0]
                }
            }
        },
        {
            idAnimation: "humanoid.charging",
            loop: true,
            bones: {
                rightarm: {
                    rotation: ["22.5 * variable.charge_amount - this", "-this", 0.0]
                }
            }
        },
        {
            idAnimation: "humanoid.damage_nearby_mobs",
            loop: true,
            bones: {
                leftarm: {
                    rotation: ["-45.0-this", "-this", "-this"]
                },
                leftleg: {
                    rotation: ["45.0-this", "-0.1-this", "-0.1-this"]
                },
                rightarm: {
                    rotation: ["45.0-this", "-this", "-this"]
                },
                rightleg: {
                    rotation: ["-45.0-this", "0.1-this", "0.1-this"]
                }
            }
        },
        {
            idAnimation: "humanoid.holding",
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
            idAnimation: "humanoid.look_at_target.default",
            loop: true,
            bones: {
                head: {
                    relativeTo: {
                        rotation: "entity"
                    },
                    rotation: [MoLang.targetXRotation(), MoLang.targetYRotation(), 0.0]
                }
            }
        },
        {
            idAnimation: "humanoid.look_at_target.gliding",
            loop: true,
            bones: {
                head: {
                    rotation: [-45.0, MoLang.targetYRotation(), 0.0]
                }
            }
        },
        {
            idAnimation: "humanoid.look_at_target.swimming",
            loop: true,
            bones: {
                head: {
                    rotation: [`math.lerp(${MoLang.targetXRotation()}, -45.0, variable.swim_amount)`, MoLang.targetYRotation(), 0.0]
                }
            }
        },
        {
            idAnimation: "humanoid.move",
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
            idAnimation: "humanoid.riding.body",
            loop: true,
            bones: {
                body: {
                    position: [0.0, "variable.riding_y_offset ?? 0.0", 0.0]
                }
            }
        },
        {
            idAnimation: "humanoid.riding.arms",
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
            idAnimation: "humanoid.riding.legs",
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
            idAnimation: "humanoid.sneaking",
            loop: true,
            bones: {
                body: {
                    rotation: ["0.5 - this", 0.0, 0.0]
                },
                head: {
                    position: [0.0, 1.0, 0.0]
                },
                leftarm: {
                    rotation: [72.0, 0.0, 0.0]
                },
                leftleg: {
                    position: [0.0, -3.1, 3.9]
                },
                rightarm: {
                    rotation: [72.0, 0.0, 0.0]
                },
                rightleg: {
                    position: [0.0, -2.9, 4.1]
                }
            }
        },
        {
            idAnimation: "humanoid.swimming",
            animationLength: 1.3,
            loop: true,
            bones: {
                leftarm: {
                    rotation: {
                        "0.7": {
                            post: [
                                `math.lerp(this, 11.25 * math.mod(${MoLang.modifiedDistanceMoved()}, 26.0), variable.leftarmswim_amount)`,
                                "math.lerp(this, 180.0, variable.leftarmswim_amount)",
                                `math.lerp(this, 72.77 + 13.4 * math.mod(${MoLang.modifiedDistanceMoved()}, 26.0), variable.leftarmswim_amount)`
                            ],
                            pre: [
                                "math.lerp(this, 0.0, variable.leftarmswim_amount)",
                                "math.lerp(this, 180.0, variable.leftarmswim_amount)",
                                `math.lerp(this, 180.0 - 0.01877 * (-65.0 * math.mod(${MoLang.modifiedDistanceMoved()}, 26.0) + math.mod(${MoLang.modifiedDistanceMoved()}, 26.0) * math.mod(${MoLang.modifiedDistanceMoved()}, 26.0)), variable.leftarmswim_amount)`
                            ]
                        },
                        "1.1": [
                            `math.lerp(this, 11.25 * math.mod(${MoLang.modifiedDistanceMoved()}, 26.0), variable.leftarmswim_amount)`,
                            "math.lerp(this, 180.0, variable.leftarmswim_amount)",
                            `math.lerp(this, 72.77 + 13.4 * math.mod(${MoLang.modifiedDistanceMoved()}, 26.0), variable.leftarmswim_amount)`
                        ],
                        "1.3": {
                            post: [
                                `math.lerp(this, 90.0 - (22.5 * math.mod(${MoLang.modifiedDistanceMoved()}, 26.0)), variable.leftarmswim_amount)`,
                                "math.lerp(this, 180.0, variable.leftarmswim_amount)",
                                "math.lerp(this, 180.0, variable.leftarmswim_amount)"
                            ],
                            pre: [
                                `math.lerp(this, 11.25 * math.mod(${MoLang.modifiedDistanceMoved()}, 26.0), variable.leftarmswim_amount)`,
                                "math.lerp(this, 180.0, variable.leftarmswim_amount)",
                                `math.lerp(this, 72.77 + 13.4 * math.mod(${MoLang.modifiedDistanceMoved()}, 26.0), variable.leftarmswim_amount)`
                            ]
                        }
                    }
                },
                leftleg: {
                    rotation: [
                        `math.lerp(this, math.cos(${MoLang.modifiedDistanceMoved()} * 19.5 + 180.0) * 17.2, variable.leftarmswim_amount) - this`,
                        -0.1,
                        -0.1
                    ]
                },
                rightarm: {
                    rotation: {
                        "0.7": {
                            post: [
                                `math.lerp(this, 11.25 * math.mod(${MoLang.modifiedDistanceMoved()}, 26.0), variable.rightarmswim_amount)`,
                                "math.lerp(this, 180.0, variable.rightarmswim_amount)",
                                `math.lerp(this, 72.77 + 13.4 * math.mod(${MoLang.modifiedDistanceMoved()}, 26.0), variable.rightarmswim_amount)`
                            ],
                            pre: [
                                "math.lerp(this, 0.0, variable.rightarmswim_amount)",
                                "math.lerp(this, 180.0, variable.rightarmswim_amount)",
                                `math.lerp(this, -0.1019 * (-65.0 * math.mod(${MoLang.modifiedDistanceMoved()}, 26.0) + math.mod(${MoLang.modifiedDistanceMoved()}, 26.0) * math.mod(${MoLang.modifiedDistanceMoved()}, 26.0)), variable.rightarmswim_amount)`
                            ]
                        },
                        "1.1": [
                            `math.lerp(this, 11.25 * math.mod(${MoLang.modifiedDistanceMoved()}, 26.0), variable.rightarmswim_amount)`,
                            "math.lerp(this, 180.0, variable.rightarmswim_amount)",
                            `math.lerp(this, 72.77 + 13.4 * math.mod(${MoLang.modifiedDistanceMoved()}, 26.0), variable.rightarmswim_amount)`
                        ],
                        "1.3": {
                            post: [
                                `math.lerp(this, 90.0 - (22.5 * math.mod(${MoLang.modifiedDistanceMoved()}, 26.0)), variable.rightarmswim_amount)`,
                                "math.lerp(this, 180.0, variable.rightarmswim_amount)",
                                "math.lerp(this, 180.0, variable.rightarmswim_amount)"
                            ],
                            pre: [
                                `math.lerp(this, 11.25 * math.mod(${MoLang.modifiedDistanceMoved()}, 26.0), variable.rightarmswim_amount)`,
                                "math.lerp(this, 180.0, variable.rightarmswim_amount)",
                                `math.lerp(this, 72.77 + 13.4 * math.mod(${MoLang.modifiedDistanceMoved()}, 26.0), variable.rightarmswim_amount)`
                            ]
                        }
                    }
                },
                rightleg: {
                    rotation: [
                        `math.lerp(this, math.cos(${MoLang.modifiedDistanceMoved()} * 19.5) * 17.2, variable.leftarmswim_amount) - this`,
                        0.1,
                        0.1
                    ]
                }
            }
        },
        {
            idAnimation: "humanoid.use_item_progress",
            loop: true,
            bones: {
                rightarm: {
                    rotation: [
                        `${MoLang.variable("use_item_startup_progress")} * -60.0 + ${MoLang.variable("use_item_interval_progress")} * 11.25`,
                        `${MoLang.variable("use_item_startup_progress")} * -22.5 + ${MoLang.variable("use_item_interval_progress")} * 11.25`,
                        `${MoLang.variable("use_item_startup_progress")} * -5.625 + ${MoLang.variable("use_item_interval_progress")} * 11.25`
                    ]
                }
            }
        },
        {
            idAnimation: "humanoid.melee_spear_hold",
            loop: true,
            bones: {
                rightarm: {
                    rotation: [
                        `v.tp_melee_spear_base_arm_rotation_x + ${MoLang.targetXRotation()} - ${MoLang.isSneaking()} * 27.0 - this`,
                        `math.clamp(${MoLang.targetYRotation()}, -60.0, 45.0) - this`,
                        0.0
                    ]
                },
                rightitem: {
                    position: [0.0, -1.5, -1.5]
                }
            }
        },
        {
            idAnimation: "zombie.melee_spear_hold",
            loop: true,
            bones: {
                leftarm: {
                    rotation: [
                        `v.tp_melee_spear_base_arm_rotation_x + ${MoLang.targetXRotation()} - ${MoLang.isSneaking()} * 27.0 - this`,
                        `math.clamp(${MoLang.targetYRotation()}, -60.0, 45.0) - this`,
                        0.0
                    ]
                },
                rightarm: {
                    rotation: [
                        `v.tp_melee_spear_base_arm_rotation_x + ${MoLang.targetXRotation()} - ${MoLang.isSneaking()} * 27.0 - this`,
                        `math.clamp(${MoLang.targetYRotation()}, -60.0, 45.0) - this`,
                        0.0
                    ]
                },
                rightitem: {
                    position: [0.0, -1.5, -1.5]
                }
            }
        },
        {
            idAnimation: "humanoid.melee_spear_use",
            loop: true,
            bones: {
                rightarm: {
                    rotation: [
                        `v.tp_melee_spear_base_arm_rotation_x + ${MoLang.targetXRotation()} - ${MoLang.isSneaking()} * 27.0 - this + v.tp_melee_spear_use_arm_rotation_x`,
                        `math.clamp(${MoLang.targetYRotation()}, -60.0, 45.0) - this + v.tp_melee_spear_use_arm_rotation_y`,
                        MoLang.variable("tp_melee_spear_use_arm_rotation_z")
                    ]
                },
                rightitem: {
                    position: [0.0, -1.5, -1.5],
                    rotation: [MoLang.variable("tp_melee_spear_use_item_rotation_x"), 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "zombie.melee_spear_use",
            loop: true,
            bones: {
                leftarm: {
                    rotation: [
                        `v.tp_melee_spear_base_arm_rotation_x + ${MoLang.targetXRotation()} - ${MoLang.isSneaking()} * 27.0 - this + v.tp_melee_spear_use_arm_rotation_x`,
                        `math.clamp(${MoLang.targetYRotation()}, -60.0, 45.0) - this - v.tp_melee_spear_use_arm_rotation_y`,
                        MoLang.variable("tp_melee_spear_use_arm_rotation_z")
                    ]
                },
                rightarm: {
                    rotation: [
                        `v.tp_melee_spear_base_arm_rotation_x + ${MoLang.targetXRotation()} - ${MoLang.isSneaking()} * 27.0 - this + v.tp_melee_spear_use_arm_rotation_x`,
                        `math.clamp(${MoLang.targetYRotation()}, -60.0, 45.0) - this + v.tp_melee_spear_use_arm_rotation_y`,
                        MoLang.variable("tp_melee_spear_use_arm_rotation_z")
                    ]
                },
                rightitem: {
                    position: [0.0, -1.5, -1.5],
                    rotation: [MoLang.variable("tp_melee_spear_use_item_rotation_x"), 0.0, 0.0]
                }
            }
        }
    ]
});
