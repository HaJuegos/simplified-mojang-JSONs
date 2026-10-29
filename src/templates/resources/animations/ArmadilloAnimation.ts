import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const ArmadilloAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "armadillo.look_at_target",
            loop: true,
            bones: {
                head: {
                    relativeTo: {
                        rotation: "entity"
                    },
                    rotation: ["variable.x_head_rotation - this", "variable.y_head_rotation - this", 0]
                }
            }
        },
        {
            idAnimation: "armadillo.walk",
            loop: true,
            animationLength: 1.45833,
            animTimeUpdate: MoLang.variable("walk_anim_time_update"),
            bones: {
                body: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.125": [0, 0, 0],
                        "0.25": [0, 0, 2.1],
                        "0.5": [0, 0, 0],
                        "0.8333": [0, 0, 0],
                        "0.9583": [0, 0, -2.1],
                        "1.25": [0, 0, 0],
                        "1.4583": [0, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, 0],
                        "0.125": [0, 0, 0],
                        "0.25": [0, -0.2, 0],
                        "0.5": [0, 0, 0],
                        "0.8333": [0, 0, 0],
                        "0.9583": [0, -0.2, 0],
                        "1.25": [0, 0, 0],
                        "1.4583": [0, 0, 0]
                    }
                },
                tail: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.25": [5, 0, 0],
                        "0.5": [-2.5, 0, 0],
                        "0.7083": [0, 0, 0],
                        "0.9583": [5, 0, 0],
                        "1.2083": [-2.5, 0, 0],
                        "1.4583": [0, 0, 0]
                    }
                },
                right_hind_leg: {
                    rotation: {
                        "0.0": [-50, 0, 0],
                        "0.25": [0, 0, 0],
                        "0.5": [0, 0, 0],
                        "0.75": [50, 0, 0],
                        "1.0": [50, 0, 0],
                        "1.2917": [-20, 0, 0],
                        "1.4583": [-50, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, 0],
                        "0.25": [0, 0, -0.5],
                        "0.5": [0, 0, 0],
                        "1.0": [0, 0, -0.5],
                        "1.2917": [0, 1, -0.18],
                        "1.4583": [0, 0, 0]
                    }
                },
                left_hind_leg: {
                    rotation: {
                        "0.0": [50, 0, 0],
                        "0.25": [50, 0, 0],
                        "0.5417": [-20, 0, 0],
                        "0.7083": [-50, 0, 0],
                        "0.9583": [0, 0, 0],
                        "1.2083": [0, 0, 0],
                        "1.4583": [50, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, -0.25],
                        "0.25": [0, 0, -0.5],
                        "0.5417": [0, 1, -0.18],
                        "0.7083": [0, 0, 0],
                        "0.9583": [0, 0, -0.5],
                        "1.2083": [0, 0, 0],
                        "1.4583": [0, 0, -0.25]
                    }
                },
                right_front_leg: {
                    rotation: {
                        "0.0": [50, 0, 0],
                        "0.25": [50, 0, 0],
                        "0.5417": [-20, 0, 0],
                        "0.7083": [-50, 0, 0],
                        "0.9583": [0, 0, 0],
                        "1.2083": [0, 0, 0],
                        "1.4583": [50, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, -0.25],
                        "0.25": [0, 0, -0.5],
                        "0.5417": [0, 1, -0.18],
                        "0.7083": [0, 0, 0],
                        "0.9583": [0, 0, -0.5],
                        "1.2083": [0, 0, 0],
                        "1.4583": [0, 0, -0.25]
                    }
                },
                left_front_leg: {
                    rotation: {
                        "0.0": [-50, 0, 0],
                        "0.25": [0, 0, 0],
                        "0.5": [0, 0, 0],
                        "0.75": [50, 0, 0],
                        "1.0": [50, 0, 0],
                        "1.2917": [-20, 0, 0],
                        "1.4583": [-50, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, 0],
                        "0.25": [0, 0, -0.5],
                        "0.5": [0, 0, 0],
                        "1.0": [0, 0, -0.5],
                        "1.2917": [0, 1, -0.18],
                        "1.4583": [0, 0, 0]
                    }
                }
            }
        },
        {
            idAnimation: "armadillo.roll_up",
            loop: "hold_on_last_frame",
            animationLength: 0.5,
            bones: {
                body: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.15": [0, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, 0],
                        "0.15": [0, 5, 0],
                        "0.2": [0, 6, -1],
                        "0.25": [0, 6, -1],
                        "0.4": [0, -1, -1]
                    }
                },
                tail: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.15": [0, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, 0],
                        "0.15": [0, 0, 0],
                        "0.2": [0, 0, -2],
                        "0.25": [0, 0, -2]
                    }
                },
                head: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.15": [17.5, 0, 0],
                        "0.25": [-72.5, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, 0],
                        "0.15": [0, -1, 0],
                        "0.2": [0, 2, 1],
                        "0.25": [0, 2, 1],
                        "0.3": [0, 2, 6],
                        "0.4": [0, 2, 7]
                    }
                },
                right_hind_leg: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.15": [-35, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, 0],
                        "0.15": [0, 5, -2],
                        "0.2": [0, 8, -2],
                        "0.25": [0, 8, -2],
                        "0.4": [1, 3, -6]
                    }
                },
                left_hind_leg: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.15": [-45, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, 0],
                        "0.15": [0, 5, -2],
                        "0.2": [0, 8, -2],
                        "0.25": [0, 8, -2],
                        "0.4": [-1, 3, -6]
                    }
                },
                right_front_leg: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.15": [-27.5, 0, 0],
                        "0.2": [-32.5, 0, 0],
                        "0.25": [-85, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, 0],
                        "0.15": [0, 5, 0],
                        "0.2": [-1, 9, -1],
                        "0.25": [-1, 9, -1],
                        "0.4": [-1, 2, 3]
                    }
                },
                left_front_leg: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.15": [-12.5, 0, 0],
                        "0.2": [-35, 0, 0],
                        "0.25": [-85, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, 0],
                        "0.15": [0, 5, 0],
                        "0.2": [1, 9, -1],
                        "0.25": [1, 9, -1],
                        "0.4": [1, 2, 3]
                    }
                },
                body_rolled_up: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.15": [0, 0, 0],
                        "0.4": [-2.5, 0, 0],
                        "0.45": [5, 0, 0],
                        "0.5": [0, 0, 0]
                    },
                    position: {
                        "0.0": [0, 3, 0],
                        "0.15": [0, 8, 0],
                        "0.2": [0, 7, 0],
                        "0.25": [0, 7, 0],
                        "0.4": [0, 1, 0],
                        "0.45": [0, 0.6, 0],
                        "0.5": [0, 0, 0]
                    }
                }
            },
            soundEffects: {
                "0.0": {
                    effect: "roll"
                },
                "0.475": {
                    effect: "land"
                }
            }
        },
        {
            idAnimation: "armadillo.rolled_up",
            loop: "hold_on_last_frame",
            bones: {
                body: {
                    rotation: [0, 0, 0],
                    position: [0, -1, -1]
                },
                tail: {
                    rotation: [0, 0, 0],
                    position: [0, 0, -2]
                },
                head: {
                    rotation: [-72.5, 0, 0],
                    position: [0, 2, 7]
                },
                right_hind_leg: {
                    rotation: [-35, 0, 0],
                    position: [1, 3, -6]
                },
                left_hind_leg: {
                    rotation: [-45, 0, 0],
                    position: [-1, 3, -6]
                },
                right_front_leg: {
                    rotation: [-85, 0, 0],
                    position: [-1, 2, 3]
                },
                left_front_leg: {
                    rotation: [-85, 0, 0],
                    position: [1, 2, 3]
                },
                body_rolled_up: {
                    rotation: [0, 0, 0],
                    position: [0, 0, 0]
                }
            }
        },
        {
            idAnimation: "armadillo.peek",
            loop: "hold_on_last_frame",
            animationLength: 2.5,
            bones: {
                head: {
                    rotation: {
                        "0.0": [-70, 0, 0],
                        "0.15": [-65, 0, 0],
                        "0.4": [-50, 0, 0],
                        "0.5": [0, 0, 0],
                        "0.7": [0, 0, 0],
                        "0.9": {
                            pre: [-7.5, 0, 45],
                            post: [-7.5, 0, 45],
                            lerpMode: "catmullrom"
                        },
                        "1.15": [-7.5, 0, 45],
                        "1.3": {
                            pre: [-0.8639, -1.49592, -39.12866],
                            post: [-0.8639, -1.49592, -39.12866],
                            lerpMode: "catmullrom"
                        },
                        "1.6": [-0.8639, -1.49592, -39.12866],
                        "1.75": [0, 0, 0],
                        "1.8": [-25, 0, 0],
                        "1.85": [-70, 0, 0]
                    },
                    position: {
                        "0.0": [0, 1, 7],
                        "0.1": [0, 1, 4],
                        "0.15": [0, 1, 4],
                        "0.25": [0, 1, 5],
                        "0.35": [0, 1, 0.2],
                        "0.4": [0, 1, 0.2],
                        "0.5": [0, 2.1, 1.2],
                        "0.6": [0, 1.1, 0.2],
                        "0.7": [0, 1.1, 0.2],
                        "1.75": [0, 1.1, 0.2],
                        "1.8": [0, 0.1, 0.2],
                        "1.95": [0, 0.1, 5.2],
                        "2.0": [0, 0.1, 7.2],
                        "2.15": [0, 0.1, 8.2],
                        "2.3": [0, 0.1, 5.2]
                    }
                },
                right_hind_leg: {
                    position: [0, 3, -2]
                },
                left_hind_leg: {
                    position: [0, 3, -2]
                },
                right_front_leg: {
                    rotation: {
                        "0.0": {
                            post: [-90, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.6": {
                            post: [-90, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.85": {
                            post: [-45, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.0": {
                            post: [-45, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.75": {
                            post: [-45, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.8": [-90, 0, 0],
                        "1.95": [-90, 0, 0]
                    },
                    position: {
                        "0.0": {
                            post: [-1, 2, 2],
                            lerpMode: "catmullrom"
                        },
                        "0.6": {
                            post: [-1, 2, 2],
                            lerpMode: "catmullrom"
                        },
                        "0.65": {
                            post: [-1, 2, -2],
                            lerpMode: "catmullrom"
                        },
                        "0.85": {
                            post: [-1, 2, -1],
                            lerpMode: "catmullrom"
                        },
                        "1.0": {
                            post: [-1, 2, -1],
                            lerpMode: "catmullrom"
                        },
                        "1.75": {
                            post: [-1, 2, -1],
                            lerpMode: "catmullrom"
                        },
                        "1.95": [-1, 2, -1],
                        "2.0": [-1, 2, 3],
                        "2.15": [-1, 3, 4]
                    }
                },
                left_front_leg: {
                    rotation: {
                        "0.0": {
                            post: [-90, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.65": {
                            post: [-90, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.85": {
                            post: [-45, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.0": {
                            post: [-45, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.75": {
                            post: [-45, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.8": [-90, 0, 0],
                        "1.95": [-90, 0, 0]
                    },
                    position: {
                        "0.0": {
                            post: [1, 2, 2],
                            lerpMode: "catmullrom"
                        },
                        "0.65": {
                            post: [1, 2, 2],
                            lerpMode: "catmullrom"
                        },
                        "0.75": {
                            post: [1, 2, -2],
                            lerpMode: "catmullrom"
                        },
                        "0.85": {
                            post: [1, 2, -1],
                            lerpMode: "catmullrom"
                        },
                        "1.0": {
                            post: [1, 2, -1],
                            lerpMode: "catmullrom"
                        },
                        "1.75": {
                            post: [1, 2, -1],
                            lerpMode: "catmullrom"
                        },
                        "1.95": [1, 2, -1],
                        "2.0": [1, 2, 3],
                        "2.15": [1, 3, 4]
                    }
                },
                body_rolled_up: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.25": [0, 0, 0],
                        "0.35": [15, 0, 0],
                        "0.5": [-7.5, 0, 0],
                        "0.6": [0, 0, 0],
                        "2.0": [0, 0, 0],
                        "2.05": [-17.5, 0, 0],
                        "2.15": [-25, 0, 0],
                        "2.25": [0, 0, 0],
                        "2.3": [12.5, 0, 0],
                        "2.5": [0, 0, 0]
                    },
                    position: {
                        "0.25": [0, 0, 0],
                        "0.35": [0, 1.6, 0],
                        "0.5": [0, 0.5, 0],
                        "0.6": [0, 0, 0],
                        "2.0": [0, 0, 0],
                        "2.05": [0, 1.2, 0],
                        "2.15": [0, 1.7, 0],
                        "2.25": [0, 0, 0],
                        "2.3": [0, 1.3, 0],
                        "2.5": [0, 0, 0]
                    }
                }
            },
            soundEffects: {
                "0.0": {
                    effect: "peek"
                }
            }
        },
        {
            idAnimation: "armadillo.unroll",
            loop: "hold_on_last_frame",
            animationLength: 1.5,
            bones: {
                head: {
                    rotation: {
                        "0.1": [-50, 0, 0],
                        "0.15": [0, 0, 0],
                        "0.25": [0, 0, 0],
                        "0.4": [0, 0, 0],
                        "0.65": [0, 0, 0],
                        "0.7": [0, 0, 0],
                        "0.85": [-2.5, 0, 0],
                        "0.9": [0, 0, 0],
                        "0.95": [-7.5, 0, 0],
                        "1.05": [0, 0, 0],
                        "1.1": [7.5, 0, 0]
                    },
                    position: {
                        "0.0": [0, 1, 5],
                        "0.05": [0, 1, 0.2],
                        "0.1": [0, 1, 0.2],
                        "0.15": [0, 2.1, 1.2],
                        "0.25": [0, 1.03, 0.13],
                        "0.4": [0, 1.03, 0.13],
                        "0.65": [0, 1.03, 0.13],
                        "0.7": [0, 1.1, 0.2],
                        "0.75": [0, 4.1, 2.2],
                        "0.85": [0, 5.1, 3.2],
                        "0.9": [0, 0.1, 0.2],
                        "0.95": [0, 0.9, -0.8],
                        "1.05": [0, 0.9, 0],
                        "1.1": [0, 2.6, 0.2],
                        "1.15": [0, 2.4, 0.2],
                        "1.2": [0, 0, 0.2],
                        "1.25": [0, 0, 0.2],
                        "1.3": [0, 0, 0.2]
                    }
                },
                right_hind_leg: {
                    rotation: {
                        "1.1": [0, 0, 0],
                        "1.3": [0, 0, 30],
                        "1.4": [0, 0, 0],
                        "1.45": [0, 0, 0],
                        "1.5": [0, 0, 0]
                    },
                    position: {
                        "1.1": [0, 3, -2],
                        "1.2": [0, 8, -2],
                        "1.3": [-1, 3, 0],
                        "1.4": [0, 0, 0],
                        "1.45": [0, 0, 0],
                        "1.5": [0, 0, 0]
                    }
                },
                left_hind_leg: {
                    rotation: {
                        "1.1": [0, 0, 0],
                        "1.3": [0, 0, -30],
                        "1.4": [0, 0, 0],
                        "1.45": [0, 0, 0],
                        "1.5": [0, 0, 0]
                    },
                    position: {
                        "1.1": [0, 3, -2],
                        "1.2": [0, 8, -2],
                        "1.3": [1, 3, 0],
                        "1.35": [1, 3, 0],
                        "1.4": [0, 0, 0],
                        "1.45": [0, 0, 0],
                        "1.5": [0, 0, 0]
                    }
                },
                right_front_leg: {
                    rotation: {
                        "0.0": {
                            post: [-90, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.05": {
                            post: [-90, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.25": [-45, 0, 0],
                        "0.55": [-45, 0, 0],
                        "0.6": {
                            pre: [-92.5, 0, 0],
                            post: [-92.5, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.1": {
                            post: [-90, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.3": {
                            post: [0, 0, 30],
                            lerpMode: "catmullrom"
                        },
                        "1.4": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.45": [0, 0, 0],
                        "1.5": {
                            pre: [0, 0, 0],
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    },
                    position: {
                        "0.0": [-1, 2, 2],
                        "0.05": {
                            pre: [-1, 2, 2],
                            post: [-1, 2, 2],
                            lerpMode: "catmullrom"
                        },
                        "0.25": [-1, 2, -1],
                        "0.55": [-1, 2, -1],
                        "0.7": {
                            pre: [-1, 2, 2.63],
                            post: [-1, 2, 2.63],
                            lerpMode: "catmullrom"
                        },
                        "1.1": [-1, 2, 2],
                        "1.2": [-1, 7, 2],
                        "1.3": [-1, 3, 0],
                        "1.4": [0, 0, 0],
                        "1.45": [0, 0, 0],
                        "1.5": [0, 0, 0]
                    }
                },
                left_front_leg: {
                    rotation: {
                        "0.0": {
                            post: [-90, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.05": {
                            post: [-90, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.25": [-45, 0, 0],
                        "0.55": [-45, 0, 0],
                        "0.6": {
                            pre: [-87.5, 0, 0],
                            post: [-87.5, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.1": {
                            post: [-90, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.3": {
                            post: [0, 0, -30],
                            lerpMode: "catmullrom"
                        },
                        "1.4": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.45": [0, 0, 0],
                        "1.5": {
                            pre: [0, 0, 0],
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    },
                    position: {
                        "0.0": {
                            post: [1, 2, 2],
                            lerpMode: "catmullrom"
                        },
                        "0.05": {
                            post: [1, 2, 2],
                            lerpMode: "catmullrom"
                        },
                        "0.15": {
                            post: [1, 2, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.25": [1, 2, -1],
                        "0.55": [1, 2, -1],
                        "0.7": {
                            pre: [1, 2, 1.88],
                            post: [1, 2, 1.88],
                            lerpMode: "catmullrom"
                        },
                        "0.75": {
                            post: [1, 2, 2.67],
                            lerpMode: "catmullrom"
                        },
                        "1.1": {
                            post: [1, 2, 2],
                            lerpMode: "catmullrom"
                        },
                        "1.2": {
                            post: [1, 8, 2],
                            lerpMode: "catmullrom"
                        },
                        "1.25": {
                            post: [1.06, 5.06, 1],
                            lerpMode: "catmullrom"
                        },
                        "1.3": {
                            post: [1, 3, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.4": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.45": [0, 0, 0],
                        "1.5": {
                            pre: [0, 0, 0],
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                body_rolled_up: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.05": [15, 0, 0],
                        "0.15": [-7.5, 0, 0],
                        "0.25": [0, 0, 0],
                        "0.7": [0, 0, 0],
                        "0.75": [-17.5, 0, 0],
                        "0.85": [-25, 0, 0],
                        "0.9": [0, 0, 0],
                        "0.95": [12.5, 0, 0],
                        "1.05": [0, 0, 0],
                        "1.1": [0, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, 0],
                        "0.05": [0, 1.6, 0],
                        "0.15": [0, 0.5, 0],
                        "0.25": [0, 0, 0],
                        "0.7": [0, 0, 0],
                        "0.75": [0, 1.2, 0],
                        "0.85": [0, 1.7, 0],
                        "0.9": [0, 0, 0],
                        "0.95": [0, 1.3, 0],
                        "1.05": [0, 0, 0],
                        "1.2": [0, 5, 0],
                        "1.25": [0, 8, 0],
                        "1.5": [0, 1, 0]
                    }
                },
                body: {
                    position: {
                        "1.1": [0, 0, 0],
                        "1.2": [0, 4, 0],
                        "1.25": [0, 5, 0],
                        "1.3": [0, 4, 0],
                        "1.4": [0, -1, 0],
                        "1.5": [0, 0, 0]
                    }
                }
            },
            soundEffects: {
                "0.0": {
                    effect: "unroll_start"
                },
                "1.5": {
                    effect: "unroll_finish"
                }
            }
        },
        {
            idAnimation: "armadillo.unroll_fast",
            animationLength: 0.05,
            loop: "hold_on_last_frame",
            bones: {
                body: {
                    rotation: [0, 0, 0],
                    position: [0, -1, -1]
                },
                tail: {
                    rotation: [0, 0, 0],
                    position: [0, 0, -2]
                },
                head: {
                    rotation: [-72.5, 0, 0],
                    position: [0, 2, 7]
                },
                right_hind_leg: {
                    rotation: [-35, 0, 0],
                    position: [1, 3, -6]
                },
                left_hind_leg: {
                    rotation: [-45, 0, 0],
                    position: [-1, 3, -6]
                },
                right_front_leg: {
                    rotation: [-85, 0, 0],
                    position: [-1, 2, 3]
                },
                left_front_leg: {
                    rotation: [-85, 0, 0],
                    position: [1, 2, 3]
                },
                body_rolled_up: {
                    rotation: [0, 0, 0],
                    position: [0, 0, 0]
                }
            },
            soundEffects: {
                "0.0": {
                    effect: "unroll_finish"
                }
            }
        },
        {
            idAnimation: "armadillo.baby_roll_up",
            loop: "hold_on_last_frame",
            animationLength: 0.5,
            bones: {
                body: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.15": [0, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, 0],
                        "0.15": [0, 5, 0],
                        "0.2": [0, 6, -1],
                        "0.25": [0, 6, -1],
                        "0.4": [0, -1, -1]
                    }
                },
                tail: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.15": [0, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, 0],
                        "0.15": [0, 0, 0],
                        "0.2": [0, 1, -3],
                        "0.25": [0, 1, -3],
                        "0.4": [0, 2, -3]
                    }
                },
                head: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.15": [17.5, 0, 0],
                        "0.25": [-72.5, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, 0],
                        "0.15": [0, -1, 0],
                        "0.2": [0, 0, 1],
                        "0.25": [0, 0, 1],
                        "0.3": [0, 0, 5],
                        "0.4": [0, 0, 5],
                        "0.5": [0, -0.25, 5]
                    }
                },
                right_hind_leg: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.15": [-35, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, 0],
                        "0.15": [0, 5, -2],
                        "0.2": [0, 8, -2],
                        "0.25": [0, 8, -2],
                        "0.4": [1, 3, -2]
                    }
                },
                left_hind_leg: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.15": [-45, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, 0],
                        "0.15": [0, 5, -2],
                        "0.2": [0, 8, -2],
                        "0.25": [0, 8, -2],
                        "0.4": [-1, 3, -3]
                    }
                },
                right_front_leg: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.15": [-27.5, 0, 0],
                        "0.2": [-32.5, 0, 0],
                        "0.25": [-85, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, 0],
                        "0.15": [0, 5, 0],
                        "0.2": [-1, 8, -1],
                        "0.25": [-1, 9, -1],
                        "0.4": [-1, 2, 3]
                    }
                },
                left_front_leg: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.15": [-12.5, 0, 0],
                        "0.2": [-35, 0, 0],
                        "0.25": [-85, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, 0],
                        "0.15": [0, 5, 0],
                        "0.2": [1, 8, -1],
                        "0.25": [1, 9, -1],
                        "0.4": [1, 2, 3]
                    }
                },
                cube: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.15": [0, 0, 0],
                        "0.4": [-2.5, 0, 0],
                        "0.45": [5, 0, 0],
                        "0.5": [0, 0, 0]
                    },
                    position: {
                        "0.0": [0, 3, 0],
                        "0.15": [0, 8, 0],
                        "0.2": [0, 7, 0],
                        "0.25": [0, 7, 0],
                        "0.4": [0, 1, 0],
                        "0.45": [0, 0.6, 0],
                        "0.5": [0, 0, 0]
                    }
                },
                body_rolled_up: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.15": [0, 0, 0],
                        "0.4": [-2.5, 0, 0],
                        "0.45": [5, 0, 0],
                        "0.5": [0, 0, 0]
                    },
                    position: {
                        "0.0": [0, 3, 0],
                        "0.15": [0, 8, 0],
                        "0.2": [0, 7, 0],
                        "0.25": [0, 7, 0],
                        "0.4": [0, 1, 0],
                        "0.45": [0, 0.6, 0],
                        "0.5": [0, 0, 0]
                    }
                }
            },
            soundEffects: {
                "0.0": {
                    effect: "roll"
                },
                "0.475": {
                    effect: "land"
                }
            }
        },
        {
            idAnimation: "armadillo.baby_walk",
            loop: true,
            animationLength: 1.4583,
            bones: {
                body: {
                    rotation: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.25": {
                            post: [0, 0, 4.6],
                            lerpMode: "catmullrom"
                        },
                        "0.3": {
                            post: [0, 0, 6.81],
                            lerpMode: "catmullrom"
                        },
                        "0.5": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.7": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.95": {
                            post: [0, 0, -4.6],
                            lerpMode: "catmullrom"
                        },
                        "1.0": {
                            post: [0, 0, -6.89],
                            lerpMode: "catmullrom"
                        },
                        "1.25": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.45": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    },
                    position: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.25": {
                            post: [0, -0.2, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.5": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.7": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.95": {
                            post: [0, -0.2, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.25": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.45": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                tail: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.5": [-9.17, 0, 0],
                        "0.75": [5, 0, 0],
                        "1.2": [-8.24, 0, 0],
                        "1.45": [0, 0, 0]
                    }
                },
                right_hind_leg: {
                    rotation: {
                        "0.0": [-50, 0, 0],
                        "0.25": [0, 0, 0],
                        "0.5": [0, 0, 0],
                        "0.75": [50, 0, 0],
                        "1.0": [50, 0, 0],
                        "1.3": [-20, 0, 0],
                        "1.45": [-50, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, 0],
                        "0.25": [0, 0, -0.5],
                        "0.5": [0, 0, 0],
                        "1.0": [0, 0, -0.5],
                        "1.3": [0, 1, -0.18],
                        "1.45": [0, 0, 0]
                    }
                },
                left_hind_leg: {
                    rotation: {
                        "0.0": [50, 0, 0],
                        "0.25": [50, 0, 0],
                        "0.55": [-20, 0, 0],
                        "0.7": [-50, 0, 0],
                        "0.95": [0, 0, 0],
                        "1.2": [0, 0, 0],
                        "1.45": [50, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, -0.25],
                        "0.25": [0, 0, -0.5],
                        "0.55": [0, 1, -0.18],
                        "0.7": [0, 0, 0],
                        "0.95": [0, 0, -0.5],
                        "1.2": [0, 0, 0],
                        "1.45": [0, 0, -0.25]
                    }
                },
                right_front_leg: {
                    rotation: {
                        "0.0": [50, 0, 0],
                        "0.3": [50, 0, 0],
                        "0.55": [-20, 0, 0],
                        "0.7": [-50, 0, 0],
                        "0.95": [0, 0, 0],
                        "1.2": [0, 0, 0],
                        "1.45": [50, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, -0.25],
                        "0.25": [0, 0, -0.5],
                        "0.55": [0, 1, -0.18],
                        "0.7": [0, 0, 0],
                        "0.95": [0, 0, -0.5],
                        "1.2": [0, 0, 0],
                        "1.45": [0, 0, -0.25]
                    }
                },
                left_front_leg: {
                    rotation: {
                        "0.0": [-50, 0, 0],
                        "0.25": [0, 0, 0],
                        "0.5": [0, 0, 0],
                        "0.75": [50, 0, 0],
                        "1.0": [50, 0, 0],
                        "1.3": [-20, 0, 0],
                        "1.45": [-50, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, 0],
                        "0.25": [0, 0, -0.5],
                        "0.5": [0, 0, 0],
                        "1.0": [0, 0, -0.5],
                        "1.3": [0, 1, -0.18],
                        "1.45": [0, 0, 0]
                    }
                },
                head: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.25": [0, 0, -2.5],
                        "0.5": [0, 0, 0],
                        "0.7": [0, 0, 0],
                        "1.0": [0, 0, 2.5],
                        "1.25": [0, 0, 0],
                        "1.45": [0, 0, 0]
                    }
                }
            }
        },
        {
            idAnimation: "armadillo.baby_unroll",
            loop: "hold_on_last_frame",
            animationLength: 1.5,
            bones: {
                head: {
                    rotation: {
                        "0.1": [-50, 0, 0],
                        "0.15": [0, 0, 0],
                        "0.25": [0, 0, 0],
                        "0.4": [0, 0, 0],
                        "0.65": [0, 0, 0],
                        "0.7": [0, 0, 0],
                        "0.85": [-2.5, 0, 0],
                        "0.9": [0, 0, 0],
                        "0.95": [-7.5, 0, 0],
                        "1.05": [0, 0, 0],
                        "1.1": [7.5, 0, 0]
                    },
                    position: {
                        "0.0": [0, -1.9, 5],
                        "0.05": [0, -1, 0.2],
                        "0.1": [0, 0, 0.2],
                        "0.15": [0, 2.1, 1.2],
                        "0.25": [0, 0.03, 0.13],
                        "0.4": [0, 0.03, 0.13],
                        "0.65": [0, 0.03, 0.13],
                        "0.7": [0, 0.1, 0.2],
                        "0.75": [0, 3.1, 2.2],
                        "0.85": [0, 4.1, 2.2],
                        "0.9": [0, 0.1, 0.2],
                        "0.95": [0, 0.9, -0.8],
                        "1.05": [0, 0.9, 0],
                        "1.1": [0, 2.6, 0.2],
                        "1.15": [0, 2.4, 0.2],
                        "1.2": [0, 0, 0.2],
                        "1.25": [0, 0, 0.2],
                        "1.3": [0, 0, 0.2]
                    }
                },
                right_hind_leg: {
                    rotation: {
                        "1.1": [0, 0, 0],
                        "1.3": [0, 0, 30],
                        "1.4": [0, 0, 0],
                        "1.45": [0, 0, 0],
                        "1.5": [0, 0, 0]
                    },
                    position: {
                        "1.1": [0, 3, -2],
                        "1.2": [0, 8, -2],
                        "1.3": [-1, 3, 0],
                        "1.4": [0, 0, 0],
                        "1.45": [0, 0, 0],
                        "1.5": [0, 0, 0]
                    }
                },
                left_hind_leg: {
                    rotation: {
                        "1.1": [0, 0, 0],
                        "1.3": [0, 0, -30],
                        "1.4": [0, 0, 0],
                        "1.45": [0, 0, 0],
                        "1.5": [0, 0, 0]
                    },
                    position: {
                        "1.1": [0, 3, -2],
                        "1.2": [0, 8, -2],
                        "1.3": [1, 3, 0],
                        "1.35": [1, 3, 0],
                        "1.4": [0, 0, 0],
                        "1.45": [0, 0, 0],
                        "1.5": [0, 0, 0]
                    }
                },
                right_front_leg: {
                    rotation: {
                        "0.0": {
                            post: [-90, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.05": {
                            post: [-90, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.25": [-45, 0, 0],
                        "0.55": [-45, 0, 0],
                        "0.6": {
                            pre: [-92.5, 0, 0],
                            post: [-92.5, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.1": {
                            post: [-90, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.3": {
                            post: [0, 0, 30],
                            lerpMode: "catmullrom"
                        },
                        "1.4": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.45": [0, 0, 0],
                        "1.5": {
                            pre: [0, 0, 0],
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    },
                    position: {
                        "0.0": [-1, 2, 2],
                        "0.05": {
                            pre: [-1, 2, 2],
                            post: [-1, 2, 2],
                            lerpMode: "catmullrom"
                        },
                        "0.25": [0, 2, -1],
                        "0.55": [0, 2, -1],
                        "0.7": {
                            pre: [-1, 2, 2.63],
                            post: [-1, 2, 2.63],
                            lerpMode: "catmullrom"
                        },
                        "1.1": [-1, 2, 2],
                        "1.2": [-1, 7, 2],
                        "1.3": [-1, 3, 0],
                        "1.4": [0, 0, 0],
                        "1.45": [0, 0, 0],
                        "1.5": [0, 0, 0]
                    }
                },
                left_front_leg: {
                    rotation: {
                        "0.0": {
                            post: [-90, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.05": {
                            post: [-90, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.25": [-45, 0, 0],
                        "0.55": [-45, 0, 0],
                        "0.6": {
                            pre: [-87.5, 0, 0],
                            post: [-87.5, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.1": {
                            post: [-90, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.3": {
                            post: [0, 0, -30],
                            lerpMode: "catmullrom"
                        },
                        "1.4": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.45": [0, 0, 0],
                        "1.5": {
                            pre: [0, 0, 0],
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    },
                    position: {
                        "0.0": {
                            post: [1, 2, 2],
                            lerpMode: "catmullrom"
                        },
                        "0.05": {
                            post: [1, 2, 2],
                            lerpMode: "catmullrom"
                        },
                        "0.15": {
                            post: [1, 2, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.25": [0, 2, -1],
                        "0.55": [0, 2, -1],
                        "0.7": {
                            pre: [1, 2, 1.88],
                            post: [1, 2, 1.88],
                            lerpMode: "catmullrom"
                        },
                        "0.75": {
                            post: [1, 2, 2.67],
                            lerpMode: "catmullrom"
                        },
                        "1.1": {
                            post: [1, 2, 2],
                            lerpMode: "catmullrom"
                        },
                        "1.2": {
                            post: [1, 8, 2],
                            lerpMode: "catmullrom"
                        },
                        "1.25": {
                            post: [1.06, 5.06, 1],
                            lerpMode: "catmullrom"
                        },
                        "1.3": {
                            post: [1, 3, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.4": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.45": [0, 0, 0],
                        "1.5": {
                            pre: [0, 0, 0],
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                body: {
                    position: {
                        "1.1": [0, 0, 0],
                        "1.2": [0, 4, 0],
                        "1.25": [0, 5, 0],
                        "1.3": [0, 4, 0],
                        "1.4": [0, -1, 0],
                        "1.5": [0, 0, 0]
                    }
                },
                cube: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.05": [15, 0, 0],
                        "0.15": [-7.5, 0, 0],
                        "0.25": [0, 0, 0],
                        "0.7": [0, 0, 0],
                        "0.75": [-17.5, 0, 0],
                        "0.85": [-25, 0, 0],
                        "0.9": [0, 0, 0],
                        "0.95": [12.5, 0, 0],
                        "1.05": [0, 0, 0],
                        "1.1": [0, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, 0],
                        "0.05": [0, 1.6, 0],
                        "0.15": [0, 0.5, 0],
                        "0.25": [0, 0, 0],
                        "0.7": [0, 0, 0],
                        "0.75": [0, 1.2, 0],
                        "0.85": [0, 1.7, 0],
                        "0.9": [0, 0, 0],
                        "0.95": [0, 1.3, 0],
                        "1.05": [0, 0, 0],
                        "1.2": [0, 5, 0],
                        "1.25": [0, 8, 0],
                        "1.5": [0, 1, 0]
                    }
                },
                left_ear: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.25": [0, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, 0],
                        "0.15": [0, -1.41287, 0.06169],
                        "0.25": [0, 0, 0]
                    }
                },
                right_ear: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.25": [0, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, 0],
                        "0.15": [0, -1.41287, 0.06169],
                        "0.25": [0, 0, 0]
                    }
                },
                body_rolled_up: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.05": [15, 0, 0],
                        "0.15": [-7.5, 0, 0],
                        "0.25": [0, 0, 0],
                        "0.7": [0, 0, 0],
                        "0.75": [-17.5, 0, 0],
                        "0.85": [-25, 0, 0],
                        "0.9": [0, 0, 0],
                        "0.95": [12.5, 0, 0],
                        "1.05": [0, 0, 0],
                        "1.1": [0, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, 0],
                        "0.05": [0, 1.6, 0],
                        "0.15": [0, 0.5, 0],
                        "0.25": [0, 0, 0],
                        "0.7": [0, 0, 0],
                        "0.75": [0, 1.2, 0],
                        "0.85": [0, 1.7, 0],
                        "0.9": [0, 0, 0],
                        "0.95": [0, 1.3, 0],
                        "1.05": [0, 0, 0],
                        "1.2": [0, 5, 0],
                        "1.25": [0, 8, 0],
                        "1.5": [0, 1, 0]
                    }
                }
            },
            soundEffects: {
                "0.0": {
                    effect: "unroll_start"
                },
                "1.5": {
                    effect: "unroll_finish"
                }
            }
        },
        {
            idAnimation: "armadillo.baby_peek",
            loop: "hold_on_last_frame",
            animationLength: 2.5,
            bones: {
                head: {
                    rotation: {
                        "0.0": [-70, 0, 0],
                        "0.15": [-65, 0, 0],
                        "0.4": [-50, 0, 0],
                        "0.5": [0, 0, 0],
                        "0.7": [0, 0, 0],
                        "0.9": {
                            pre: [-7.5, 0, 45],
                            post: [-7.5, 0, 45],
                            lerpMode: "catmullrom"
                        },
                        "1.15": [-7.5, 0, 45],
                        "1.3": {
                            pre: [-0.8639, -1.49592, -39.12866],
                            post: [-0.8639, -1.49592, -39.12866],
                            lerpMode: "catmullrom"
                        },
                        "1.6": [-0.8639, -1.49592, -39.12866],
                        "1.75": [0, 0, 0],
                        "1.8": [-25, 0, 0],
                        "1.85": [-70, 0, 0]
                    },
                    position: {
                        "0.0": [0, -1.25, 4],
                        "0.1": [0, -1, 4],
                        "0.15": [0, -1, 4],
                        "0.25": [0, -1, 5],
                        "0.35": [0, 0, 0.2],
                        "0.4": [0, 0, 0.2],
                        "0.45": [0, 0.05, 0.7],
                        "0.5": [0, 1.1, 1.2],
                        "0.6": [0, 0.1, 0.8],
                        "0.7": [0, 0.1, 0.7],
                        "1.75": [0, 0.1, 0.7],
                        "1.8": [0, 0.1, 0.2],
                        "1.9": [0, -1.2, 3.53],
                        "1.95": [0, -1.2, 3.53],
                        "2.0": [0, -1.2, 3.53],
                        "2.15": [0, -0.9, 4.2],
                        "2.3": [0, -0.9, 3.4],
                        "2.5": [0, -1.9, 4.1]
                    }
                },
                right_hind_leg: {
                    position: [0, 3, -2]
                },
                left_hind_leg: {
                    position: [0, 3, -2]
                },
                right_front_leg: {
                    rotation: {
                        "0.0": [-90, 0, 0],
                        "0.6": {
                            pre: [-90, 0, 0],
                            post: [-90, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.85": {
                            post: [-45, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.0": {
                            post: [-45, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.75": {
                            post: [-45, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.8": {
                            post: [-90, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.95": {
                            post: [-90, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    },
                    position: {
                        "0.0": [-1, 2, 2],
                        "0.6": {
                            pre: [-1, 2, 2],
                            post: [-1, 2, 2],
                            lerpMode: "catmullrom"
                        },
                        "0.65": {
                            post: [-1, 2, 1],
                            lerpMode: "catmullrom"
                        },
                        "0.85": {
                            post: [0, 1, -0.5],
                            lerpMode: "catmullrom"
                        },
                        "1.0": {
                            post: [0, 1, -0.5],
                            lerpMode: "catmullrom"
                        },
                        "1.75": {
                            post: [0, 1, -0.5],
                            lerpMode: "catmullrom"
                        },
                        "1.95": {
                            post: [0, 1, 3],
                            lerpMode: "catmullrom"
                        },
                        "2.0": {
                            post: [-1, 2, 3],
                            lerpMode: "catmullrom"
                        },
                        "2.15": {
                            post: [-1, 3, 4],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                left_front_leg: {
                    rotation: {
                        "0.0": [-90, 0, 0],
                        "0.65": {
                            pre: [-90, 0, 0],
                            post: [-90, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.85": {
                            post: [-45, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.0": {
                            post: [-45, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.75": {
                            post: [-45, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.8": {
                            post: [-90, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.95": {
                            post: [-90, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    },
                    position: {
                        "0.0": [1, 2, 2],
                        "0.65": {
                            pre: [1, 2, 2],
                            post: [1, 2, 2],
                            lerpMode: "catmullrom"
                        },
                        "0.85": {
                            post: [0, 1, -0.4],
                            lerpMode: "catmullrom"
                        },
                        "1.0": {
                            post: [0, 1, -0.4],
                            lerpMode: "catmullrom"
                        },
                        "1.75": {
                            post: [0, 1, -0.4],
                            lerpMode: "catmullrom"
                        },
                        "1.95": {
                            post: [1, 1, 2],
                            lerpMode: "catmullrom"
                        },
                        "2.0": {
                            post: [1, 2, 3],
                            lerpMode: "catmullrom"
                        },
                        "2.15": {
                            post: [1, 3, 4],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                cube: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.25": [0, 0, 0],
                        "0.35": [15, 0, 0],
                        "0.5": [-7.5, 0, 0],
                        "0.6": [0, 0, 0],
                        "2.0": [0, 0, 0],
                        "2.05": [-17.5, 0, 0],
                        "2.15": [-25, 0, 0],
                        "2.25": [0, 0, 0],
                        "2.3": [12.5, 0, 0],
                        "2.5": [0, 0, 0]
                    },
                    position: {
                        "0.25": [0, 0, 0],
                        "0.35": [0, 1.6, 0],
                        "0.5": [0, 0.5, 0],
                        "0.6": [0, 0, 0],
                        "2.0": [0, 0, 0],
                        "2.05": [0, 1.2, 0],
                        "2.15": [0, 1.7, 0],
                        "2.25": [0, 0, 0],
                        "2.3": [0, 1.3, 0],
                        "2.5": [0, 0, 0]
                    }
                },
                left_ear: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.4": [0, 0, 0],
                        "0.5": [-15, 0, 0],
                        "0.6": [0, 0, 0],
                        "1.8": [0, 0, 0],
                        "1.85": [-10, 0, 0],
                        "2.5": [0, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, 0],
                        "0.4": [0, -1.13, 1.05],
                        "0.5": [0, -1.41287, 0.06169],
                        "0.6": [0, 0, 0]
                    }
                },
                right_ear: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.4": [0, 0, 0],
                        "0.5": [-15, 0, 0],
                        "0.6": [0, 0, 0],
                        "1.8": [0, 0, 0],
                        "1.85": [-10, 0, 0],
                        "2.5": [0, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, 0],
                        "0.4": [0, -1.13, 1.05],
                        "0.5": [0, -1.41287, 0.06169],
                        "0.6": [0, 0, 0]
                    }
                },
                body_rolled_up: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.25": [0, 0, 0],
                        "0.35": [15, 0, 0],
                        "0.5": [-7.5, 0, 0],
                        "0.6": [0, 0, 0],
                        "2.0": [0, 0, 0],
                        "2.05": [-17.5, 0, 0],
                        "2.15": [-25, 0, 0],
                        "2.25": [0, 0, 0],
                        "2.3": [12.5, 0, 0],
                        "2.5": [0, 0, 0]
                    },
                    position: {
                        "0.25": [0, 0, 0],
                        "0.35": [0, 1.6, 0],
                        "0.5": [0, 0.5, 0],
                        "0.6": [0, 0, 0],
                        "2.0": [0, 0, 0],
                        "2.05": [0, 1.2, 0],
                        "2.15": [0, 1.7, 0],
                        "2.25": [0, 0, 0],
                        "2.3": [0, 1.3, 0],
                        "2.5": [0, 0, 0]
                    }
                }
            },
            soundEffects: {
                "0.0": {
                    effect: "peek"
                }
            }
        },
        {
            idAnimation: "armadillo.baby_unroll_fast",
            loop: "hold_on_last_frame",
            animationLength: 1.5,
            bones: {
                body: {
                    rotation: [0, 0, 0],
                    position: [0, -1, -1]
                },
                tail: {
                    rotation: [0, 0, 0],
                    position: [0, 2, -3]
                },
                head: {
                    rotation: [-72.5, 0, 0],
                    position: [0, -0.25, 5]
                },
                right_hind_leg: {
                    rotation: [-35, 0, 0],
                    position: [1, 3, -2]
                },
                left_hind_leg: {
                    rotation: [-45, 0, 0],
                    position: [-1, 3, -3]
                },
                right_front_leg: {
                    rotation: [-85, 0, 0],
                    position: [-1, 2, 3]
                },
                left_front_leg: {
                    rotation: [-85, 0, 0],
                    position: [1, 2, 3]
                },
                body_rolled_up: {
                    rotation: [0, 0, 0],
                    position: [0, 0, 0]
                }
            },
            soundEffects: {
                "0.0": {
                    effect: "unroll_finish"
                }
            }
        },
        {
            idAnimation: "armadillo.baby_rolled_up",
            loop: true,
            bones: {
                body: {
                    rotation: [0, 0, 0],
                    position: [0, -1, -1]
                },
                tail: {
                    rotation: [0, 0, 0],
                    position: [0, 2, -3]
                },
                head: {
                    rotation: [-72.5, 0, 0],
                    position: [0, -0.25, 5]
                },
                left_ear: {
                    rotation: [0, 0, 0],
                    position: [0, 0, 0]
                },
                right_ear: {
                    rotation: [0, 0, 0],
                    position: [0, 0, 0]
                },
                right_front_leg: {
                    rotation: [-85, 0, 0],
                    position: [-1, 2, 3]
                },
                left_front_leg: {
                    rotation: [-85, 0, 0],
                    position: [1, 2, 3]
                },
                left_hind_leg: {
                    rotation: [-45, 0, 0],
                    position: [-1, 3, -3]
                },
                right_hind_leg: {
                    rotation: [-35, 0, 0],
                    position: [1, 3, -2]
                },
                body_rolled_up: {
                    rotation: [0, 0, 0],
                    position: [0, 0, 0]
                }
            }
        }
    ]
});
