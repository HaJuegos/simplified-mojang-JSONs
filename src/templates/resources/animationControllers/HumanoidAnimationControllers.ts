import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const HumanoidAnimationControllers = createRPAnimController({
    animControllers: [
        {
            idController: "humanoid.attack",
            initialState: "default",
            states: {
                attacking: {
                    animations: ["attack.rotations"],
                    transitions: [
                        { default: `${MoLang.variable("attack_time")} < 0.0` }
                    ]
                },
                default: {
                    transitions: [
                        { attacking: `${MoLang.variable("attack_time")} >= 0.0` }
                    ]
                }
            }
        },
        {
            idController: "humanoid.baby_big_head",
            initialState: "default",
            states: {
                baby: {
                    animations: ["humanoid_big_head"],
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
            idController: "humanoid.base_pose",
            initialState: "default",
            states: {
                default: {
                    animations: ["humanoid_base_pose"]
                }
            }
        },
        {
            idController: "humanoid.bob",
            initialState: "default",
            states: {
                default: {
                    animations: ["bob"]
                }
            }
        },
        {
            idController: "humanoid.bow_and_arrow",
            initialState: "default",
            states: {
                bow_and_arrow: {
                    animations: ["bow_and_arrow"],
                    transitions: [
                        { default: `!${MoLang.hasTarget()}` }
                    ]
                },
                default: {
                    transitions: [
                        { bow_and_arrow: MoLang.hasTarget() }
                    ]
                }
            }
        },
        {
            idController: "humanoid.brandish_spear",
            initialState: "default",
            states: {
                brandish_spear: {
                    animations: ["brandish_spear"],
                    transitions: [
                        { default: `!${MoLang.variable("is_brandishing_spear")}` }
                    ]
                },
                default: {
                    transitions: [
                        { brandish_spear: MoLang.variable("is_brandishing_spear") }
                    ]
                }
            }
        },
        {
            idController: "humanoid.charging",
            initialState: "default",
            states: {
                charging: {
                    animations: ["charging"],
                    transitions: [
                        { default: `!${MoLang.isCharging()}` }
                    ]
                },
                default: {
                    transitions: [
                        { charging: MoLang.isCharging() }
                    ]
                }
            }
        },
        {
            idController: "humanoid.damage_nearby_mobs",
            initialState: "default",
            states: {
                damage_nearby_mobs: {
                    animations: ["damage_nearby_mobs"],
                    transitions: [
                        { default: `!${MoLang.variable("damage_nearby_mobs")}` }
                    ]
                },
                default: {
                    transitions: [
                        { damage_nearby_mobs: MoLang.variable("damage_nearby_mobs") }
                    ]
                }
            }
        },
        {
            idController: "humanoid.holding",
            initialState: "default",
            states: {
                default: {
                    animations: ["holding"]
                }
            }
        },
        {
            idController: "humanoid.look_at_target",
            initialState: "default",
            states: {
                default: {
                    animations: ["look_at_target_default"],
                    transitions: [
                        { gliding: MoLang.isGliding() },
                        { swimming: `${MoLang.isSwimming()} || ${MoLang.isCrawling()}` }
                    ]
                },
                gliding: {
                    animations: ["look_at_target_gliding"],
                    transitions: [
                        { swimming: `${MoLang.isSwimming()} || ${MoLang.isCrawling()}` },
                        { default: `!${MoLang.isGliding()}` }
                    ]
                },
                swimming: {
                    animations: ["look_at_target_swimming"],
                    transitions: [
                        { gliding: MoLang.isGliding() },
                        { default: `!${MoLang.isSwimming()} && !${MoLang.isCrawling()}` }
                    ]
                }
            }
        },
        {
            idController: "humanoid.move",
            initialState: "default",
            states: {
                default: {
                    animations: ["move"]
                }
            }
        },
        {
            idController: "humanoid.riding",
            initialState: "default",
            states: {
                default: {
                    transitions: [
                        { riding: MoLang.isRiding() }
                    ]
                },
                riding: {
                    animations: ["riding.body", "riding.arms", "riding.legs"],
                    transitions: [
                        { default: `!${MoLang.isRiding()}` }
                    ]
                }
            }
        },
        {
            idController: "humanoid.riding_legs_only",
            initialState: "default",
            states: {
                default: {
                    transitions: [
                        { riding: MoLang.isRiding() }
                    ]
                },
                riding: {
                    animations: ["riding.body", "riding.legs"],
                    transitions: [
                        { default: `!${MoLang.isRiding()}` }
                    ]
                }
            }
        },
        {
            idController: "humanoid.sneaking",
            initialState: "default",
            states: {
                default: {
                    transitions: [
                        { sneaking: MoLang.isSneaking() }
                    ]
                },
                sneaking: {
                    animations: ["sneaking"],
                    transitions: [
                        { default: `!${MoLang.isSneaking()}` }
                    ]
                }
            }
        },
        {
            idController: "humanoid.swimming",
            initialState: "default",
            states: {
                default: {
                    transitions: [
                        { swimming: `${MoLang.variable("swim_amount")} > 0.0` }
                    ]
                },
                swimming: {
                    animations: ["swimming"],
                    transitions: [
                        { default: `${MoLang.variable("swim_amount")} <= 0.0` }
                    ]
                }
            }
        },
        {
            idController: "humanoid.use_item_progress",
            initialState: "default",
            states: {
                default: {
                    transitions: [
                        {
                            use_item_progress: `(${MoLang.variable("use_item_interval_progress")} > 0.0) || (${MoLang.variable("use_item_startup_progress")} > 0.0)`
                        }
                    ]
                },
                use_item_progress: {
                    animations: ["use_item_progress"],
                    transitions: [
                        {
                            default: `(${MoLang.variable("use_item_interval_progress")} <= 0.0) && (${MoLang.variable("use_item_startup_progress")} <= 0.0)`
                        }
                    ]
                }
            }
        },
        {
            idController: "humanoid.melee_spear",
            initialState: "hold",
            states: {
                hold: {
                    animations: ["melee_spear_hold"],
                    transitions: [
                        { use: `${MoLang.variable("item_use_normalized")} > 0.0` }
                    ]
                },
                use: {
                    animations: ["melee_spear_use"],
                    transitions: [
                        { hold: `${MoLang.variable("item_use_normalized")} == 0.0` }
                    ],
                    blendTransition: 1.0
                }
            }
        }
    ]
});
