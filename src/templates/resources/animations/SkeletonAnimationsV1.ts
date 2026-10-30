import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @deprecated Ya no se usa en la actualidad. Se mantiene por compatibilidad. Usa la version normal.
 * @author HaJuegos - 29-10-2026
 */
export const SkeletonAnimationsV1 = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "humanoid.attack.rotations.v1.0",
            loop: true,
            bones: {
                body: {
                    rotation: [0.0, "(math.sin(math.sqrt(variable.attack_time) * 360) * 11.46) - this", 0.0]
                },
                leftarm: {
                    rotation: [`(${MoLang.sin(`${MoLang.sqrt(MoLang.variable("attack_time"))} * 360`)} * 11.46)`, 0.0, 0.0]
                },
                rightarm: {
                    rotation: [
                        `${MoLang.sin(`1.0 - ${MoLang.pow(`1.0 - ${MoLang.variable("attack_time")}`, 3.0)} * 180.0`)} * (${MoLang.variable("is_brandishing_spear")} ? -1.0 : 1.0)`,
                        `${MoLang.variable("is_brandishing_spear")} ? 0.0 : (${MoLang.sin(`${MoLang.sqrt(MoLang.variable("attack_time"))} * 360`)} * 11.46) * 2.0`,
                        0.0
                    ]
                }
            }
        },
        {
            idAnimation: "humanoid.base_pose.v1.0",
            loop: true,
            bones: {
                head: {
                    rotation: [0.0, "-this", 0.0]
                },
                leftarm: {
                    position: ["5.0 - this", 0.0, "-this"],
                    rotation: ["-this", "-this", "-this"]
                },
                leftleg: {
                    rotation: ["-this", "-this", 0.0]
                },
                rightarm: {
                    position: ["-5.0 - this", 0.0, "-this"],
                    rotation: ["-this", "-this", "-this"]
                },
                rightleg: {
                    rotation: ["-this", "-this", 0.0]
                },
                waist: {
                    rotation: ["-this", "-this", "-this"]
                }
            }
        },
        {
            idAnimation: "humanoid.big_head.v1.0",
            loop: true,
            bones: {
                hat: {
                    scale: 1.4
                },
                head: {
                    scale: 1.4
                }
            }
        },
        {
            idAnimation: "humanoid.bob.v1.0",
            loop: true,
            bones: {
                leftarm: {
                    rotation: [0.0, 0.0, `-(${MoLang.cos(`${MoLang.lifeTime()} * 103.2`)} * 2.865) - 2.865`]
                },
                rightarm: {
                    rotation: [0.0, 0.0, `(${MoLang.cos(`${MoLang.lifeTime()} * 103.2`)} * 2.865) + 2.865`]
                }
            }
        },
        {
            idAnimation: "humanoid.bow_and_arrow.v1.0",
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
            idAnimation: "humanoid.brandish_spear.v1.0",
            loop: true,
            bones: {
                rightarm: {
                    rotation: [
                        "this * -0.5 - 157.5 - 22.5 * variable.charge_amount",
                        "-this - (math.sin(math.sqrt(variable.attack_time) * 360) * 11.46)",
                        0.0
                    ]
                }
            }
        },
        {
            idAnimation: "humanoid.charging.v1.0",
            loop: true,
            bones: {
                rightarm: {
                    rotation: ["22.5 * variable.charge_amount - this", "-this", 0.0]
                }
            }
        },
        {
            idAnimation: "humanoid.damage_nearby_mobs.v1.0",
            loop: true,
            overridePreviousAnimation: true,
            bones: {
                leftarm: {
                    rotation: [-45.0, 0.0, 0.0]
                },
                leftleg: {
                    rotation: [45.0, 0.0, 0.0]
                },
                rightarm: {
                    rotation: [45.0, 0.0, 0.0]
                },
                rightleg: {
                    rotation: [-45.0, 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "humanoid.holding.v1.0",
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
            idAnimation: "humanoid.look_at_target.default.v1.0",
            loop: true,
            bones: {
                hat: {
                    rotation: [MoLang.targetXRotation(), MoLang.targetYRotation(), 0.0]
                },
                head: {
                    rotation: [MoLang.targetXRotation(), MoLang.targetYRotation(), 0.0]
                }
            }
        },
        {
            idAnimation: "humanoid.look_at_target.gliding.v1.0",
            loop: true,
            bones: {
                hat: {
                    rotation: [-45.0, MoLang.targetYRotation(), 0.0]
                },
                head: {
                    rotation: [-45.0, MoLang.targetYRotation(), 0.0]
                }
            }
        },
        {
            idAnimation: "humanoid.look_at_target.swimming.v1.0",
            loop: true,
            bones: {
                hat: {
                    rotation: [`math.lerp(${MoLang.targetXRotation()}, -45.0, variable.swim_amount)`, MoLang.targetYRotation(), 0.0]
                },
                head: {
                    rotation: [`math.lerp(${MoLang.targetXRotation()}, -45.0, variable.swim_amount)`, MoLang.targetYRotation(), 0.0]
                }
            }
        },
        {
            idAnimation: "humanoid.move.v1.0",
            loop: true,
            bones: {
                leftarm: {
                    rotation: [MoLang.variable("tcos0"), 0.0, 0.0]
                },
                leftleg: {
                    rotation: [`${MoLang.variable("tcos0")} * -1.4`, 0.0, 0.0]
                },
                rightarm: {
                    rotation: [`-${MoLang.variable("tcos0")}`, 0.0, 0.0]
                },
                rightleg: {
                    rotation: [`${MoLang.variable("tcos0")} * 1.4`, 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "humanoid.riding.arms.v1.0",
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
            idAnimation: "humanoid.riding.legs.v1.0",
            loop: true,
            overridePreviousAnimation: true,
            bones: {
                leftleg: {
                    rotation: [-72.0, -18.0, 0.0]
                },
                rightleg: {
                    rotation: [-72.0, 18.0, 0.0]
                }
            }
        },
        {
            idAnimation: "humanoid.sneaking.v1.0",
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
                    position: [0.0, -3.0, 4.0]
                },
                rightarm: {
                    rotation: [72.0, 0.0, 0.0]
                },
                rightleg: {
                    position: [0.0, -3.0, 4.0]
                }
            }
        },
        {
            idAnimation: "humanoid.swimming.v1.0",
            animationLength: 1.3,
            loop: true,
            bones: {
                leftarm: {
                    rotation: {
                        "0.7": {
                            post: [
                                `math.lerp(this, 11.25 * math.mod(${MoLang.modifiedDistanceMoved()}, 26.0), variable.left_arm_swim_amount)`,
                                "math.lerp(this, 180.0, variable.left_arm_swim_amount)",
                                `math.lerp(this, 72.77 + 13.4 * math.mod(${MoLang.modifiedDistanceMoved()}, 26.0), variable.left_arm_swim_amount)`
                            ],
                            pre: [
                                "math.lerp(this, 0.0, variable.left_arm_swim_amount)",
                                "math.lerp(this, 180.0, variable.left_arm_swim_amount)",
                                `math.lerp(this, 180.0 - 0.01877 * (-65.0 * math.mod(${MoLang.modifiedDistanceMoved()}, 26.0) + math.mod(${MoLang.modifiedDistanceMoved()}, 26.0) * math.mod(${MoLang.modifiedDistanceMoved()}, 26.0)), variable.left_arm_swim_amount)`
                            ]
                        },
                        "1.1": [
                            `math.lerp(this, 11.25 * math.mod(${MoLang.modifiedDistanceMoved()}, 26.0), variable.left_arm_swim_amount)`,
                            "math.lerp(this, 180.0, variable.left_arm_swim_amount)",
                            `math.lerp(this, 72.77 + 13.4 * math.mod(${MoLang.modifiedDistanceMoved()}, 26.0), variable.left_arm_swim_amount)`
                        ],
                        "1.3": {
                            post: [
                                `math.lerp(this, 90.0 - (22.5 * math.mod(${MoLang.modifiedDistanceMoved()}, 26.0)), variable.left_arm_swim_amount)`,
                                "math.lerp(this, 180.0, variable.left_arm_swim_amount)",
                                "math.lerp(this, 180.0, variable.left_arm_swim_amount)"
                            ],
                            pre: [
                                `math.lerp(this, 11.25 * math.mod(${MoLang.modifiedDistanceMoved()}, 26.0), variable.left_arm_swim_amount)`,
                                "math.lerp(this, 180.0, variable.left_arm_swim_amount)",
                                `math.lerp(this, 72.77 + 13.4 * math.mod(${MoLang.modifiedDistanceMoved()}, 26.0), variable.left_arm_swim_amount)`
                            ]
                        }
                    }
                },
                leftleg: {
                    rotation: [
                        `math.lerp(this, math.cos(${MoLang.modifiedDistanceMoved()} * 19.5 + 180.0) * 17.2, variable.left_arm_swim_amount)`,
                        0.0,
                        0.0
                    ]
                },
                rightarm: {
                    rotation: {
                        "0.7": {
                            post: [
                                `math.lerp(this, 11.25 * math.mod(${MoLang.modifiedDistanceMoved()}, 26.0), variable.right_arm_swim_amount)`,
                                "math.lerp(this, 180.0, variable.right_arm_swim_amount)",
                                `math.lerp(this, 72.77 + 13.4 * math.mod(${MoLang.modifiedDistanceMoved()}, 26.0), variable.right_arm_swim_amount)`
                            ],
                            pre: [
                                "math.lerp(this, 0.0, variable.right_arm_swim_amount)",
                                "math.lerp(this, 180.0, variable.right_arm_swim_amount)",
                                `math.lerp(this, -0.1019 * (-65.0 * math.mod(${MoLang.modifiedDistanceMoved()}, 26.0) + math.mod(${MoLang.modifiedDistanceMoved()}, 26.0) * math.mod(${MoLang.modifiedDistanceMoved()}, 26.0)), variable.right_arm_swim_amount)`
                            ]
                        },
                        "1.1": [
                            `math.lerp(this, 11.25 * math.mod(${MoLang.modifiedDistanceMoved()}, 26.0), variable.right_arm_swim_amount)`,
                            "math.lerp(this, 180.0, variable.right_arm_swim_amount)",
                            `math.lerp(this, 72.77 + 13.4 * math.mod(${MoLang.modifiedDistanceMoved()}, 26.0), variable.right_arm_swim_amount)`
                        ],
                        "1.3": {
                            post: [
                                `math.lerp(this, 90.0 - (22.5 * math.mod(${MoLang.modifiedDistanceMoved()}, 26.0)), variable.right_arm_swim_amount)`,
                                "math.lerp(this, 180.0, variable.right_arm_swim_amount)",
                                "math.lerp(this, 180.0, variable.right_arm_swim_amount)"
                            ],
                            pre: [
                                `math.lerp(this, 11.25 * math.mod(${MoLang.modifiedDistanceMoved()}, 26.0), variable.right_arm_swim_amount)`,
                                "math.lerp(this, 180.0, variable.right_arm_swim_amount)",
                                `math.lerp(this, 72.77 + 13.4 * math.mod(${MoLang.modifiedDistanceMoved()}, 26.0), variable.right_arm_swim_amount)`
                            ]
                        }
                    }
                },
                rightleg: {
                    rotation: [
                        `math.lerp(this, math.cos(${MoLang.modifiedDistanceMoved()} * 19.5) * 17.2, variable.left_arm_swim_amount)`,
                        0.0,
                        0.0
                    ]
                }
            }
        },
        {
            idAnimation: "humanoid.use_item_progress.v1.0",
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
            idAnimation: "skeleton.attack.v1.0",
            loop: true,
            bones: {
                leftarm: {
                    rotation: [
                        `-68.75 * ${MoLang.sin(`${MoLang.variable("attack_time")} * 180.0`)} + 22.92 * (${MoLang.sin(`(1.0 - (1.0 - ${MoLang.variable("attack_time")}) * (1.0 - ${MoLang.variable("attack_time")})) * 180.0`)} * 57.3)`,
                        "5.73 - math.sin(variable.attack_time * 180.0) * 34.38 - this",
                        "-this"
                    ]
                },
                rightarm: {
                    rotation: [
                        `-68.75 * ${MoLang.sin(`${MoLang.variable("attack_time")} * 180.0`)} + 22.92 * (${MoLang.sin(`(1.0 - (1.0 - ${MoLang.variable("attack_time")}) * (1.0 - ${MoLang.variable("attack_time")})) * 180.0`)} * 57.3)`,
                        "-5.73 + math.sin(variable.attack_time * 180.0) * 34.38 - this",
                        "-this"
                    ]
                }
            }
        }
    ]
});
