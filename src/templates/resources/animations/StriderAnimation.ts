import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const StriderAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "strider.look_at_target.default",
            loop: true,
            bones: {
                body: {
                    relativeTo: {
                        rotation: "entity"
                    },
                    rotation: [MoLang.targetXRotation(), MoLang.targetYRotation(), 0.0]
                }
            }
        },
        {
            idAnimation: "strider.walk",
            loop: true,
            bones: {
                right_leg: {
                    rotation: [
                        "Math.sin(query.modified_distance_moved * variable.speed * 0.5 + 180) * 114.592 * variable.animation_speed",
                        0,
                        "10 * Math.cos(query.modified_distance_moved * variable.speed * 0.5f + 180) * variable.animation_speed"
                    ],
                    position: [
                        0,
                        "-2 * Math.sin(query.modified_distance_moved * variable.speed * 0.5) * 2 * variable.animation_speed",
                        0
                    ]
                },
                left_leg: {
                    rotation: [
                        "Math.sin(query.modified_distance_moved * variable.speed * 0.5) * 114.592 * variable.animation_speed",
                        0,
                        "10 * Math.cos(query.modified_distance_moved * variable.speed * 0.5f) * variable.animation_speed"
                    ],
                    position: [
                        0,
                        "-2 * Math.sin(query.modified_distance_moved * variable.speed * 0.5 + 180) * 2 * variable.animation_speed",
                        0
                    ]
                },
                body: {
                    rotation: [
                        0,
                        0,
                        "5.72958 * Math.sin(query.modified_distance_moved * variable.speed) * 4 * variable.animation_speed"
                    ],
                    position: [0, "-2 * Math.cos(query.modified_distance_moved * variable.speed) * 2 * variable.animation_speed", 0]
                },
                bristle1: {
                    rotation: [0, 0, `${MoLang.variable("bristle_flow")} * 74.4845`]
                },
                bristle2: {
                    rotation: [0, 0, `${MoLang.variable("bristle_flow")} * 68.7549`]
                },
                bristle3: {
                    rotation: [0, 0, `${MoLang.variable("bristle_flow")} * 34.3775`]
                },
                bristle4: {
                    rotation: [0, 0, `${MoLang.variable("bristle_flow")} * 68.7549`]
                },
                bristle5: {
                    rotation: [0, 0, `${MoLang.variable("bristle_flow")} * 74.4845`]
                }
            }
        },
        {
            idAnimation: "strider.bristle_flow",
            loop: true,
            bones: {
                bristle0: {
                    rotation: [
                        0,
                        0,
                        "2.864789 * variable.bristle_range_mod * Math.sin(query.life_time * 20 * variable.bristle_speed_mod * -22.9183)"
                    ]
                },
                bristle1: {
                    rotation: [
                        0,
                        0,
                        "5.72958 * variable.bristle_range_mod * Math.sin(query.life_time * 20 * variable.bristle_speed_mod * 11.4592)"
                    ]
                },
                bristle2: {
                    rotation: [
                        0,
                        0,
                        "5.72958 * variable.bristle_range_mod * Math.sin(query.life_time * 20 * variable.bristle_speed_mod * 22.9183)"
                    ]
                },
                bristle3: {
                    rotation: [
                        0,
                        0,
                        "5.72958 * variable.bristle_range_mod * Math.sin(query.life_time * 20 * variable.bristle_speed_mod * 22.9183)"
                    ]
                },
                bristle4: {
                    rotation: [
                        0,
                        0,
                        "5.72958 * variable.bristle_range_mod * Math.sin(query.life_time * 20 * variable.bristle_speed_mod * 11.4592)"
                    ]
                },
                bristle5: {
                    rotation: [
                        0,
                        0,
                        "2.864789 * variable.bristle_range_mod * Math.sin(query.life_time * 20 * variable.bristle_speed_mod * -22.9183)"
                    ]
                }
            }
        },
        {
            idAnimation: "strider.baby.walk",
            loop: true,
            animationLength: 61,
            bones: {
                right_leg: {
                    rotation: [
                        "Math.sin(query.modified_distance_moved * variable.speed * 0.5 + 180) * 114.592 * variable.animation_speed",
                        0,
                        "10 * Math.cos(query.modified_distance_moved * variable.speed * 0.5f + 180) * variable.animation_speed"
                    ],
                    position: {
                        "0.0": [
                            0,
                            "0.4-1 * Math.sin(query.modified_distance_moved * variable.speed * 0.5) * 1 * variable.animation_speed",
                            0
                        ],
                        "43.875": [
                            0,
                            "1-1 * Math.sin(query.modified_distance_moved * variable.speed * 0.5) * 1 * variable.animation_speed",
                            0
                        ]
                    }
                },
                left_leg: {
                    rotation: [
                        "Math.sin(query.modified_distance_moved * variable.speed * 0.5) * 114.592 * variable.animation_speed",
                        0,
                        "10 * Math.cos(query.modified_distance_moved * variable.speed * 0.5f) * variable.animation_speed"
                    ],
                    position: {
                        "0.0": [
                            0,
                            "0.4-1 * Math.sin(query.modified_distance_moved * variable.speed * 0.5 + 180) * 1 * variable.animation_speed",
                            0
                        ],
                        "43.875": [
                            0,
                            "1-1 * Math.sin(query.modified_distance_moved * variable.speed * 0.5 + 180) * 1 * variable.animation_speed",
                            0
                        ]
                    }
                },
                body: {
                    rotation: [0, 0, "3 * Math.sin(query.modified_distance_moved * variable.speed) * 4 * variable.animation_speed"],
                    position: [
                        0,
                        "-0.2-0.5 * Math.cos(query.modified_distance_moved * variable.speed) * 1 * variable.animation_speed",
                        0
                    ]
                }
            }
        },
        {
            idAnimation: "strider.baby.bristle_flow",
            loop: true,
            animationLength: 0.75,
            bones: {
                bristle0: {
                    rotation: [
                        "-52.5-4 * variable.bristle_range_mod * Math.sin(query.life_time * 20 * variable.bristle_speed_mod * -22.9183)",
                        0,
                        0
                    ]
                },
                bristle1: {
                    rotation: [
                        "-35-5 * variable.bristle_range_mod * Math.sin(query.life_time * 20 * variable.bristle_speed_mod * 22.9183)",
                        0,
                        0
                    ]
                },
                bristle2: {
                    rotation: [
                        "-10-7 * variable.bristle_range_mod * Math.sin(query.life_time * 20 * variable.bristle_speed_mod * 22.9183)",
                        0,
                        0
                    ]
                }
            }
        }
    ]
});
