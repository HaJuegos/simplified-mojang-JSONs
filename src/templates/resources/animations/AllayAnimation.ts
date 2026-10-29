import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const AllayAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "allay.look_at_target.default",
            loop: true,
            bones: {
                look_at: {
                    relativeTo: {
                        rotation: "entity"
                    },
                    rotation: [MoLang.targetXRotation(), MoLang.targetYRotation(), 0.0]
                }
            }
        },
        {
            idAnimation: "allay.idle",
            loop: true,
            animationLength: 2,
            bones: {
                head: {
                    position: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.0": {
                            post: [0, -0.5, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                body: {
                    rotation: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.0": {
                            post: [5, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    },
                    position: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.0": {
                            post: [0, -0.5, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                right_arm: {
                    rotation: {
                        "0.0": {
                            post: [0, 15, 31.21],
                            lerpMode: "catmullrom"
                        },
                        "0.75": {
                            post: [0, 15, 40],
                            lerpMode: "catmullrom"
                        },
                        "1.5": {
                            post: [0, 15, 22.5],
                            lerpMode: "catmullrom"
                        },
                        "2.0": {
                            post: [0, 15, 31.21],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                left_arm: {
                    rotation: {
                        "0.0": {
                            post: [0, -15, -31.21],
                            lerpMode: "catmullrom"
                        },
                        "0.75": {
                            post: [0, -15, -40],
                            lerpMode: "catmullrom"
                        },
                        "1.5": {
                            post: [0, -15, -22.5],
                            lerpMode: "catmullrom"
                        },
                        "2.0": {
                            post: [0, -15, -31.21],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                left_wing: {
                    rotation: {
                        "0.0": {
                            post: [37.98064, 6.50284, 22.02407],
                            lerpMode: "catmullrom"
                        },
                        "0.5": {
                            post: [22.5, 67.5, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.0": {
                            post: [37.98064, 6.50284, 22.02407],
                            lerpMode: "catmullrom"
                        },
                        "1.5": {
                            post: [22.5, 67.5, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.0": {
                            post: [37.98064, 6.50284, 22.02407],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                right_wing: {
                    rotation: {
                        "0.0": {
                            post: [37.98064, -6.50284, -22.02407],
                            lerpMode: "catmullrom"
                        },
                        "0.5": {
                            post: [22.5, -67.5, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.0": {
                            post: [37.98064, -6.50284, -22.02407],
                            lerpMode: "catmullrom"
                        },
                        "1.5": {
                            post: [22.5, -67.5, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.0": {
                            post: [37.98064, -6.50284, -22.02407],
                            lerpMode: "catmullrom"
                        }
                    }
                }
            }
        },
        {
            idAnimation: "allay.fly",
            loop: true,
            animationLength: 2,
            bones: {
                head: {
                    rotation: {
                        "0.0": {
                            post: [2.5, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.5833": {
                            post: [-2.5, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.0833": {
                            post: [2.5, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.5833": {
                            post: [-2.5, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.0": {
                            post: [2.5, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    },
                    position: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                body: {
                    rotation: {
                        "0.0": {
                            post: [45, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.4167": {
                            post: [55, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.9167": {
                            post: [45, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.4167": {
                            post: [55, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.0": {
                            post: [45, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    },
                    position: {
                        "0.0": [0, 0, 1],
                        "2.0": [0, 0, 1]
                    }
                },
                right_arm: {
                    rotation: {
                        "0.0": {
                            post: [0, 22.5, 15],
                            lerpMode: "catmullrom"
                        },
                        "0.5833": {
                            post: [0, 22.5, 10],
                            lerpMode: "catmullrom"
                        },
                        "1.0833": {
                            post: [0, 22.5, 15],
                            lerpMode: "catmullrom"
                        },
                        "1.5833": {
                            post: [0, 22.5, 10],
                            lerpMode: "catmullrom"
                        },
                        "2.0": {
                            post: [0, 22.5, 15],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                left_arm: {
                    rotation: {
                        "0.0": {
                            post: [0, -22.5, -15],
                            lerpMode: "catmullrom"
                        },
                        "0.5833": {
                            post: [0, -22.5, -10],
                            lerpMode: "catmullrom"
                        },
                        "1.0833": {
                            post: [0, -22.5, -15],
                            lerpMode: "catmullrom"
                        },
                        "1.5833": {
                            post: [0, -22.5, -10],
                            lerpMode: "catmullrom"
                        },
                        "2.0": {
                            post: [0, -22.5, -15],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                left_wing: {
                    rotation: {
                        "0.0": {
                            post: [15.48064, 6.50284, 22.02407],
                            lerpMode: "catmullrom"
                        },
                        "0.25": {
                            post: [0, 67.5, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.5": {
                            post: [15.48064, 6.50284, 22.02407],
                            lerpMode: "catmullrom"
                        },
                        "0.75": {
                            post: [0, 67.5, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.0": {
                            post: [15.48064, 6.50284, 22.02407],
                            lerpMode: "catmullrom"
                        },
                        "1.25": {
                            post: [0, 67.5, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.5": {
                            post: [15.48064, 6.50284, 22.02407],
                            lerpMode: "catmullrom"
                        },
                        "1.75": {
                            post: [0, 67.5, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.0": {
                            post: [15.48064, 6.50284, 22.02407],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                right_wing: {
                    rotation: {
                        "0.0": {
                            post: [15.48064, -6.50284, -22.02407],
                            lerpMode: "catmullrom"
                        },
                        "0.25": {
                            post: [0, -67.5, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.5": {
                            post: [15.48064, -6.50284, -22.02407],
                            lerpMode: "catmullrom"
                        },
                        "0.75": {
                            post: [0, -67.5, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.0": {
                            post: [15.48064, -6.50284, -22.02407],
                            lerpMode: "catmullrom"
                        },
                        "1.25": {
                            post: [0, -67.5, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.5": {
                            post: [15.48064, -6.50284, -22.02407],
                            lerpMode: "catmullrom"
                        },
                        "1.75": {
                            post: [0, -67.5, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.0": {
                            post: [15.48064, -6.50284, -22.02407],
                            lerpMode: "catmullrom"
                        }
                    }
                }
            }
        },
        {
            idAnimation: "allay.hold_item",
            loop: "hold_on_last_frame",
            animationLength: 2,
            bones: {
                right_arm: {
                    rotation: {
                        "0.0": {
                            post: [-40, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                left_arm: {
                    rotation: {
                        "0.0": {
                            post: [-40, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                rightItem: {
                    scale: 0.7,
                    rotation: [
                        `-15.0 * (${MoLang.variable("holding_trident")})`,
                        0,
                        `90.0 * (${MoLang.variable("holding_trident")})`
                    ],
                    position: [0.0, `3.50 * (${MoLang.variable("holding_trident")})`, 0.0]
                }
            }
        },
        {
            idAnimation: "allay.hold_item_fly",
            loop: "hold_on_last_frame",
            animationLength: 2,
            bones: {
                right_arm: {
                    rotation: {
                        "0.0": {
                            post: [-67.5, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                left_arm: {
                    rotation: {
                        "0.0": {
                            post: [-67.5, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                rightItem: {
                    scale: 0.7,
                    rotation: [
                        `-15.0 * (${MoLang.variable("holding_trident")})`,
                        0,
                        `90.0 * (${MoLang.variable("holding_trident")})`
                    ],
                    position: [0.0, `3.50 * (${MoLang.variable("holding_trident")})`, 0.0]
                }
            }
        },
        {
            idAnimation: "allay.dance",
            loop: true,
            animationLength: 2.75,
            bones: {
                head: {
                    rotation: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.4167": {
                            post: [0, -30, -30],
                            lerpMode: "catmullrom"
                        },
                        "1.5833": {
                            post: [0, 30, 30],
                            lerpMode: "catmullrom"
                        },
                        "2.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.2917": {
                            post: [0.63, 540, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.75": {
                            post: [0, 720, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                body: {
                    rotation: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.4167": {
                            post: [10, -16, -16],
                            lerpMode: "catmullrom"
                        },
                        "1.5833": {
                            post: [-10, 16, 16],
                            lerpMode: "catmullrom"
                        },
                        "2.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.2917": {
                            post: [0.63, 540, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.75": {
                            post: [0, 720, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                left_wing: {
                    rotation: {
                        "2.0": [0, 0, 0],
                        "2.1667": [45, 0, 0],
                        "2.5833": [45, 0, 0],
                        "2.75": [0, 0, 0]
                    }
                },
                right_wing: {
                    rotation: {
                        "2.0": [0, 0, 0],
                        "2.1667": [45, 0, 0],
                        "2.5833": [45, 0, 0],
                        "2.75": [0, 0, 0]
                    }
                }
            }
        }
    ]
});
