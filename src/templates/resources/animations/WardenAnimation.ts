import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const WardenAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "warden.look_at_target.default",
            loop: true,
            bones: {
                head: {
                    relativeTo: {
                        rotation: "entity"
                    },
                    rotation: [MoLang.targetXRotation(), MoLang.targetYRotation(), 0]
                }
            }
        },
        {
            idAnimation: "warden.shiver",
            loop: true,
            bones: {
                left_tendril: {
                    rotation: [MoLang.variable("left_tendril_x_rot"), 0, 0]
                },
                right_tendril: {
                    rotation: [MoLang.variable("right_tendril_x_rot"), 0, 0]
                }
            },
            soundEffects: {
                "0.0": {
                    effect: "clicking"
                }
            }
        },
        {
            idAnimation: "warden.move",
            loop: true,
            bones: {
                head: {
                    rotation: [MoLang.variable("head_x_rot"), 0, MoLang.variable("head_z_rot")]
                },
                body: {
                    rotation: [MoLang.variable("body_x_rot"), 0, MoLang.variable("body_z_rot")]
                },
                left_leg: {
                    rotation: [MoLang.variable("left_leg_x_rot"), 0, 0]
                },
                right_leg: {
                    rotation: [MoLang.variable("right_leg_x_rot"), 0, 0]
                },
                left_arm: {
                    rotation: [MoLang.variable("left_arm_x_rot"), 0, 0]
                },
                right_arm: {
                    rotation: [MoLang.variable("right_arm_x_rot"), 0, 0]
                }
            }
        },
        {
            idAnimation: "warden.emerge",
            animationLength: 6.64,
            bones: {
                body: {
                    rotation: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.52": {
                            post: [0, 0, -22.5],
                            lerpMode: "catmullrom"
                        },
                        "1.2": {
                            post: [0, 0, -7.5],
                            lerpMode: "catmullrom"
                        },
                        "1.68": {
                            post: [0, 0, 10],
                            lerpMode: "catmullrom"
                        },
                        "1.8": {
                            post: [0, 0, 10],
                            lerpMode: "catmullrom"
                        },
                        "2.28": {
                            post: [0, 0, 10],
                            lerpMode: "catmullrom"
                        },
                        "2.88": {
                            post: [0, 0, 10],
                            lerpMode: "catmullrom"
                        },
                        "3.76": {
                            post: [25, 0, -7.5],
                            lerpMode: "catmullrom"
                        },
                        "3.92": {
                            post: [35, 0, -7.5],
                            lerpMode: "catmullrom"
                        },
                        "4.08": {
                            post: [25, 0, -7.5],
                            lerpMode: "catmullrom"
                        },
                        "4.44": {
                            post: [47.5, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "4.56": {
                            post: [47.5, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "4.68": {
                            post: [47.5, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "5.0": {
                            post: [70, 0, 2.5],
                            lerpMode: "catmullrom"
                        },
                        "5.8": {
                            post: [70, 0, 2.5],
                            lerpMode: "catmullrom"
                        },
                        "6.64": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    },
                    position: {
                        "0.0": {
                            post: [0, -63, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.52": {
                            post: [0, -56, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.2": {
                            post: [0, -32, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.68": {
                            post: [0, -32, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.8": {
                            post: [0, -32, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.28": {
                            post: [0, -32, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.88": {
                            post: [0, -32, 0],
                            lerpMode: "catmullrom"
                        },
                        "3.16": {
                            post: [0, -27, 0],
                            lerpMode: "catmullrom"
                        },
                        "3.76": {
                            post: [0, -14, 0],
                            lerpMode: "catmullrom"
                        },
                        "3.92": {
                            post: [0, -11, 0],
                            lerpMode: "catmullrom"
                        },
                        "4.08": {
                            post: [0, -14, 0],
                            lerpMode: "catmullrom"
                        },
                        "4.44": {
                            post: [0, -6, -3],
                            lerpMode: "catmullrom"
                        },
                        "4.56": {
                            post: [0, -4, -3],
                            lerpMode: "catmullrom"
                        },
                        "4.68": {
                            post: [0, -6, -3],
                            lerpMode: "catmullrom"
                        },
                        "5.0": {
                            post: [0, -3, -4],
                            lerpMode: "catmullrom"
                        },
                        "5.8": {
                            post: [0, -3, -4],
                            lerpMode: "catmullrom"
                        },
                        "6.64": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                head: {
                    rotation: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.52": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.92": {
                            post: [0.74, 0, -40.38],
                            lerpMode: "catmullrom"
                        },
                        "1.16": {
                            post: [-67.5, 0, -2.5],
                            lerpMode: "catmullrom"
                        },
                        "1.24": {
                            post: [-67.5, 0, -2.5],
                            lerpMode: "catmullrom"
                        },
                        "1.32": {
                            post: [-47.5, 0, -2.5],
                            lerpMode: "catmullrom"
                        },
                        "1.4": {
                            post: [-67.5, 0, -2.5],
                            lerpMode: "catmullrom"
                        },
                        "1.68": {
                            post: [-67.5, 0, 15],
                            lerpMode: "catmullrom"
                        },
                        "1.76": {
                            post: [-67.5, 0, -5],
                            lerpMode: "catmullrom"
                        },
                        "1.84": {
                            post: [-52.5, 0, -5],
                            lerpMode: "catmullrom"
                        },
                        "1.92": {
                            post: [-67.5, 0, -5],
                            lerpMode: "catmullrom"
                        },
                        "2.64": {
                            post: [-17.5, 0, -10],
                            lerpMode: "catmullrom"
                        },
                        "3.76": {
                            post: [70, 0, 12.5],
                            lerpMode: "catmullrom"
                        },
                        "4.04": {
                            post: [70, 0, 12.5],
                            lerpMode: "catmullrom"
                        },
                        "4.12": {
                            post: [80, 0, 12.5],
                            lerpMode: "catmullrom"
                        },
                        "4.24": {
                            post: [70, 0, 12.5],
                            lerpMode: "catmullrom"
                        },
                        "5.0": {
                            post: [77.5, 0, -2.5],
                            lerpMode: "catmullrom"
                        },
                        "6.64": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    },
                    position: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.52": {
                            post: [-8, -11, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.92": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.24": {
                            post: [0, 0.47, -0.95],
                            lerpMode: "catmullrom"
                        },
                        "1.32": {
                            post: [0, 0.47, -0.95],
                            lerpMode: "catmullrom"
                        },
                        "1.4": {
                            post: [0, 0.47, -0.95],
                            lerpMode: "catmullrom"
                        },
                        "1.68": {
                            post: [0, 1, -2],
                            lerpMode: "catmullrom"
                        },
                        "1.76": {
                            post: [0, 1, -2],
                            lerpMode: "catmullrom"
                        },
                        "1.84": {
                            post: [0, 1, -2],
                            lerpMode: "catmullrom"
                        },
                        "1.92": {
                            post: [0, 1, -2],
                            lerpMode: "catmullrom"
                        },
                        "2.64": {
                            post: [0, -2, -2],
                            lerpMode: "catmullrom"
                        },
                        "3.76": {
                            post: [0, -4, 1],
                            lerpMode: "catmullrom"
                        },
                        "4.04": {
                            post: [0, -1, 1],
                            lerpMode: "catmullrom"
                        },
                        "4.12": {
                            post: [0, -1, 1],
                            lerpMode: "catmullrom"
                        },
                        "4.24": {
                            post: [0, -1, 1],
                            lerpMode: "catmullrom"
                        },
                        "5.0": {
                            post: [0, -1, 1],
                            lerpMode: "catmullrom"
                        },
                        "6.64": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                right_arm: {
                    rotation: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.52": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.2": {
                            post: [-152.5, 2.5, 7.5],
                            lerpMode: "catmullrom"
                        },
                        "1.68": {
                            post: [-180, 12.5, -10],
                            lerpMode: "catmullrom"
                        },
                        "1.8": {
                            post: [-90, 12.5, -10],
                            lerpMode: "catmullrom"
                        },
                        "2.28": {
                            post: [-90, 12.5, -10],
                            lerpMode: "catmullrom"
                        },
                        "2.88": {
                            post: [-90, 12.5, -10],
                            lerpMode: "catmullrom"
                        },
                        "3.08": {
                            post: [-95, 12.5, -10],
                            lerpMode: "catmullrom"
                        },
                        "3.24": {
                            post: [-83.93, 3.93, 5.71],
                            lerpMode: "catmullrom"
                        },
                        "3.36": {
                            post: [-80, 7.5, 17.5],
                            lerpMode: "catmullrom"
                        },
                        "3.76": {
                            post: [-67.5, 2.5, 0],
                            lerpMode: "catmullrom"
                        },
                        "4.08": {
                            post: [-67.5, 2.5, 0],
                            lerpMode: "catmullrom"
                        },
                        "4.44": {
                            post: [-55, 2.5, 0],
                            lerpMode: "catmullrom"
                        },
                        "4.56": {
                            post: [-60, 2.5, 0],
                            lerpMode: "catmullrom"
                        },
                        "4.68": {
                            post: [-55, 2.5, 0],
                            lerpMode: "catmullrom"
                        },
                        "5.0": {
                            post: [-67.5, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "5.56": {
                            post: [-50.45, 0, 2.69],
                            lerpMode: "catmullrom"
                        },
                        "6.08": {
                            post: [-62.72, 0, 4.3],
                            lerpMode: "catmullrom"
                        },
                        "6.64": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    },
                    position: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.52": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.2": {
                            post: [0, -21, 9],
                            lerpMode: "catmullrom"
                        },
                        "1.68": {
                            post: [2, -2, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.8": {
                            post: [2, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.28": {
                            post: [2, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.88": {
                            post: [2, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "3.08": {
                            post: [2, -2, 0],
                            lerpMode: "catmullrom"
                        },
                        "3.24": {
                            post: [2, 2.71, 3.86],
                            lerpMode: "catmullrom"
                        },
                        "3.36": {
                            post: [2, 1, 5],
                            lerpMode: "catmullrom"
                        },
                        "3.76": {
                            post: [2, 3, 3],
                            lerpMode: "catmullrom"
                        },
                        "4.08": {
                            post: [2, 3, 3],
                            lerpMode: "catmullrom"
                        },
                        "4.44": {
                            post: [2.67, 4, 0],
                            lerpMode: "catmullrom"
                        },
                        "4.56": {
                            post: [2.67, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "4.68": {
                            post: [2.67, 4, 0],
                            lerpMode: "catmullrom"
                        },
                        "5.0": {
                            post: [0.67, 3, 4],
                            lerpMode: "catmullrom"
                        },
                        "6.64": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                left_arm: {
                    rotation: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.12": {
                            post: [-167.5, -17.5, -7.5],
                            lerpMode: "catmullrom"
                        },
                        "0.6": {
                            post: [-167.5, -17.5, -7.5],
                            lerpMode: "catmullrom"
                        },
                        "0.88": {
                            post: [-175, -17.5, 15],
                            lerpMode: "catmullrom"
                        },
                        "1.16": {
                            post: [-190, -17.5, 5],
                            lerpMode: "catmullrom"
                        },
                        "1.28": {
                            post: [-90, -5, 5],
                            lerpMode: "catmullrom"
                        },
                        "1.68": {
                            post: [-90, -17.5, -12.5],
                            lerpMode: "catmullrom"
                        },
                        "1.8": {
                            post: [-90, -17.5, -12.5],
                            lerpMode: "catmullrom"
                        },
                        "2.28": {
                            post: [-90, -17.5, -12.5],
                            lerpMode: "catmullrom"
                        },
                        "2.88": {
                            post: [-90, -17.5, -12.5],
                            lerpMode: "catmullrom"
                        },
                        "3.04": {
                            post: [-81.29, -10.64, -14.21],
                            lerpMode: "catmullrom"
                        },
                        "3.16": {
                            post: [-83.5, -5.5, -15.5],
                            lerpMode: "catmullrom"
                        },
                        "3.76": {
                            post: [-62.5, -7.5, 5],
                            lerpMode: "catmullrom"
                        },
                        "3.92": {
                            post: [-58.75, -3.75, 5],
                            lerpMode: "catmullrom"
                        },
                        "4.08": {
                            post: [-55, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "4.44": {
                            post: [-52.5, 0, 5],
                            lerpMode: "catmullrom"
                        },
                        "4.56": {
                            post: [-50, 0, 5],
                            lerpMode: "catmullrom"
                        },
                        "4.68": {
                            post: [-52.5, 0, 5],
                            lerpMode: "catmullrom"
                        },
                        "5.0": {
                            post: [-72.5, -2.5, 5],
                            lerpMode: "catmullrom"
                        },
                        "5.56": {
                            post: [-57.5, -4.54, 2.99],
                            lerpMode: "catmullrom"
                        },
                        "6.08": {
                            post: [-70.99, -5.77, 1.78],
                            lerpMode: "catmullrom"
                        },
                        "6.64": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    },
                    position: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.12": {
                            post: [0, -8, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.6": {
                            post: [0, -8, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.88": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.2": {
                            post: [-2, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.68": {
                            post: [-4, 3, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.8": {
                            post: [-4, 3, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.28": {
                            post: [-4, 3, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.88": {
                            post: [-4, 3, 0],
                            lerpMode: "catmullrom"
                        },
                        "3.04": {
                            post: [-3.23, 5.7, 4.97],
                            lerpMode: "catmullrom"
                        },
                        "3.16": {
                            post: [-1.49, 2.22, 5.25],
                            lerpMode: "catmullrom"
                        },
                        "3.76": {
                            post: [-1.14, 1.71, 1.86],
                            lerpMode: "catmullrom"
                        },
                        "3.92": {
                            post: [-1.14, 1.21, 3.86],
                            lerpMode: "catmullrom"
                        },
                        "4.08": {
                            post: [-1.14, 2.71, 4.86],
                            lerpMode: "catmullrom"
                        },
                        "4.44": {
                            post: [-1, 1, 3],
                            lerpMode: "catmullrom"
                        },
                        "4.56": {
                            post: [0, 1, 1],
                            lerpMode: "catmullrom"
                        },
                        "4.68": {
                            post: [0, 1, 3],
                            lerpMode: "catmullrom"
                        },
                        "5.0": {
                            post: [-2, 0, 4],
                            lerpMode: "catmullrom"
                        },
                        "6.64": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                right_leg: {
                    rotation: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.52": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.28": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.88": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "3.36": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "4.32": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "4.48": {
                            post: [55, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "4.6": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "5.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "5.8": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "6.64": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    },
                    position: {
                        "0.0": {
                            post: [0, -63, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.52": {
                            post: [0, -56, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.2": {
                            post: [0, -32, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.68": {
                            post: [0, -32, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.8": {
                            post: [0, -32, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.28": {
                            post: [0, -32, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.88": {
                            post: [0, -32, 0],
                            lerpMode: "catmullrom"
                        },
                        "3.36": {
                            post: [0, -22, 0],
                            lerpMode: "catmullrom"
                        },
                        "3.76": {
                            post: [0, -12.28, 2.48],
                            lerpMode: "catmullrom"
                        },
                        "3.92": {
                            post: [0, -9.28, 2.48],
                            lerpMode: "catmullrom"
                        },
                        "4.08": {
                            post: [0, -12.28, 2.48],
                            lerpMode: "catmullrom"
                        },
                        "4.32": {
                            post: [0, -4.14, 4.14],
                            lerpMode: "catmullrom"
                        },
                        "4.48": {
                            post: [0, -0.57, -8.43],
                            lerpMode: "catmullrom"
                        },
                        "4.6": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "5.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "5.8": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "6.64": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                left_leg: {
                    rotation: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.52": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.28": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.88": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "3.36": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "3.84": {
                            post: [20, 0, -17.5],
                            lerpMode: "catmullrom"
                        },
                        "4.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "4.68": {
                            post: [20, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "4.84": {
                            post: [10, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "5.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "5.8": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "6.64": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    },
                    position: {
                        "0.0": {
                            post: [0, -63, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.52": {
                            post: [0, -56, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.2": {
                            post: [0, -32, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.68": {
                            post: [0, -32, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.8": {
                            post: [0, -32, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.28": {
                            post: [0, -32, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.88": {
                            post: [0, -32, 0],
                            lerpMode: "catmullrom"
                        },
                        "3.36": {
                            post: [0, -22, 0],
                            lerpMode: "catmullrom"
                        },
                        "3.84": {
                            post: [-4, 2, -7],
                            lerpMode: "catmullrom"
                        },
                        "4.0": {
                            post: [-4, 0, -5],
                            lerpMode: "catmullrom"
                        },
                        "4.68": {
                            post: [-4, 0, -9],
                            lerpMode: "catmullrom"
                        },
                        "4.84": {
                            post: [-2, 2, -3.5],
                            lerpMode: "catmullrom"
                        },
                        "5.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "5.8": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "6.64": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                }
            },
            particleEffects: {
                "0.0": {
                    effect: "digging",
                    preEffectScript: `variable.dig_particle_texture_coordinate = ${MoLang.surfaceParticleTextureCoordinate()}; variable.dig_particle_texture_size = ${MoLang.surfaceParticleTextureSize()}; variable.dig_particle_color = ${MoLang.surfaceParticleColor()};`
                }
            },
            soundEffects: {
                "0.0": {
                    effect: "emerge"
                }
            }
        },
        {
            idAnimation: "warden.dig",
            loop: "hold_on_last_frame",
            animationLength: 5,
            bones: {
                body: {
                    rotation: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.25": {
                            post: [4.13441, 0.94736, 1.2694],
                            lerpMode: "catmullrom"
                        },
                        "0.5": {
                            post: [50, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.7083": {
                            post: [54.45407, -13.53935, -18.14183],
                            lerpMode: "catmullrom"
                        },
                        "1.0417": {
                            post: [59.46442, -10.8885, 35.7954],
                            lerpMode: "catmullrom"
                        },
                        "1.3333": {
                            post: [82.28261, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.625": {
                            post: [53.23606, 10.04715, -29.72932],
                            lerpMode: "catmullrom"
                        },
                        "2.2083": {
                            post: [-17.71739, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.5417": {
                            post: [112.28261, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.6667": {
                            post: [116.06889, 5.11581, -24.50117],
                            lerpMode: "catmullrom"
                        },
                        "2.8333": {
                            post: [121.56244, -4.17248, 19.57737],
                            lerpMode: "catmullrom"
                        },
                        "3.0417": {
                            post: [138.56889, 5.11581, -24.50117],
                            lerpMode: "catmullrom"
                        },
                        "3.25": {
                            post: [144.06244, -4.17248, 19.57737],
                            lerpMode: "catmullrom"
                        },
                        "3.375": {
                            post: [147.28261, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "3.625": {
                            post: [147.28261, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "3.875": {
                            post: [134.36221, 8.81113, -8.90172],
                            lerpMode: "catmullrom"
                        },
                        "4.0417": {
                            post: [132.05966, -8.35927, 9.70506],
                            lerpMode: "catmullrom"
                        },
                        "4.25": {
                            post: [134.36221, 8.81113, -8.90172],
                            lerpMode: "catmullrom"
                        },
                        "4.5": [147.5, 0, 0]
                    },
                    position: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.5": {
                            post: [0, -16.48454, -6.5784],
                            lerpMode: "catmullrom"
                        },
                        "0.7083": {
                            post: [0, -16.48454, -6.5784],
                            lerpMode: "catmullrom"
                        },
                        "1.0417": {
                            post: [0, -16.97, -7.11],
                            lerpMode: "catmullrom"
                        },
                        "1.625": {
                            post: [0, -13.97, -7.11],
                            lerpMode: "catmullrom"
                        },
                        "2.2083": {
                            post: [0, -11.48454, -0.5784],
                            lerpMode: "catmullrom"
                        },
                        "2.5417": {
                            post: [0, -16.48454, -6.5784],
                            lerpMode: "catmullrom"
                        },
                        "2.6667": {
                            post: [0, -20.27, -5.42],
                            lerpMode: "catmullrom"
                        },
                        "3.375": {
                            post: [0, -21.48454, -5.5784],
                            lerpMode: "catmullrom"
                        },
                        "4.0417": {
                            post: [0, -22.48454, -5.5784],
                            lerpMode: "catmullrom"
                        },
                        "4.5": [0, -40, -8]
                    }
                },
                head: {
                    rotation: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.6667": {
                            post: [12.5, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.2083": {
                            post: [12.5, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.75": {
                            post: [45, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.375": {
                            post: [-22.5, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.5417": {
                            post: [67.5, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "4.375": {
                            post: [67.5, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    },
                    position: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "4.375": [0, 0, 0]
                    }
                },
                right_arm: {
                    rotation: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.5": {
                            post: [-101.8036, -21.29587, 30.61478],
                            lerpMode: "catmullrom"
                        },
                        "0.7083": {
                            post: [-101.8036, -21.29587, 30.61478],
                            lerpMode: "catmullrom"
                        },
                        "1.0": {
                            post: [48.7585, -17.61941, 9.9865],
                            lerpMode: "catmullrom"
                        },
                        "1.1667": {
                            post: [48.7585, -17.61941, 9.9865],
                            lerpMode: "catmullrom"
                        },
                        "1.4583": {
                            post: [-101.8036, -21.29587, 30.61478],
                            lerpMode: "catmullrom"
                        },
                        "1.75": {
                            post: [-89.04994, -4.19657, -1.47845],
                            lerpMode: "catmullrom"
                        },
                        "2.2083": {
                            post: [-158.30728, 3.7152, -1.52352],
                            lerpMode: "catmullrom"
                        },
                        "2.5417": {
                            post: [-89.04994, -4.19657, -1.47845],
                            lerpMode: "catmullrom"
                        },
                        "4.375": {
                            post: [-120, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    },
                    position: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.7083": {
                            post: [2.22, 0, 0.86],
                            lerpMode: "catmullrom"
                        },
                        "1.0": {
                            post: [3.12, 0, 4.29],
                            lerpMode: "catmullrom"
                        },
                        "2.2083": {
                            post: [1, 0, 4],
                            lerpMode: "catmullrom"
                        },
                        "4.375": {
                            post: [0, 0, 4],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                left_arm: {
                    rotation: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.2917": {
                            post: [-63.89288, -0.52011, 2.09491],
                            lerpMode: "catmullrom"
                        },
                        "0.5": {
                            post: [-63.89288, -0.52011, 2.09491],
                            lerpMode: "catmullrom"
                        },
                        "0.7083": {
                            post: [-62.87857, 15.15061, 9.97445],
                            lerpMode: "catmullrom"
                        },
                        "0.9167": {
                            post: [-86.93642, 17.45026, 4.05284],
                            lerpMode: "catmullrom"
                        },
                        "1.1667": {
                            post: [-86.93642, 17.45026, 4.05284],
                            lerpMode: "catmullrom"
                        },
                        "1.4583": {
                            post: [-86.93642, 17.45026, 4.05284],
                            lerpMode: "catmullrom"
                        },
                        "1.6667": {
                            post: [63.0984, 8.83573, -8.71284],
                            lerpMode: "catmullrom"
                        },
                        "1.8333": {
                            post: [35.5984, 8.83573, -8.71284],
                            lerpMode: "catmullrom"
                        },
                        "2.2083": {
                            post: [-153.27474, -0.02953, 3.5235],
                            lerpMode: "catmullrom"
                        },
                        "2.5417": {
                            post: [-87.07754, -0.02625, 3.132],
                            lerpMode: "catmullrom"
                        },
                        "4.375": [-120, 0, 0]
                    },
                    position: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.5": {
                            post: [-0.28, 5, 10],
                            lerpMode: "catmullrom"
                        },
                        "0.7083": {
                            post: [-1.51, 4.35, 4.33],
                            lerpMode: "catmullrom"
                        },
                        "0.9167": {
                            post: [-0.6, 3.61, 4.63],
                            lerpMode: "catmullrom"
                        },
                        "1.1667": {
                            post: [-0.6, 3.61, 0.63],
                            lerpMode: "catmullrom"
                        },
                        "1.6667": {
                            post: [-2.85, -0.1, 3.33],
                            lerpMode: "catmullrom"
                        },
                        "2.2083": {
                            post: [-1, 0, 4],
                            lerpMode: "catmullrom"
                        },
                        "4.375": [0, 0, 4]
                    }
                },
                right_leg: {
                    rotation: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.5": {
                            post: [113.27, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.7083": {
                            post: [113.27, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "3.3333": {
                            post: [113.27, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "3.5833": {
                            post: [182.5, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "3.8333": {
                            post: [120, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "4.0833": {
                            post: [182.5, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "4.2917": {
                            post: [120, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "4.5": [90, 0, 0]
                    },
                    position: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.5": {
                            post: [0, -13.98, -2.37],
                            lerpMode: "catmullrom"
                        },
                        "0.7083": {
                            post: [0, -13.98, -2.37],
                            lerpMode: "catmullrom"
                        },
                        "3.3333": {
                            post: [0, -13.98, -2.37],
                            lerpMode: "catmullrom"
                        },
                        "3.5833": {
                            post: [0, -7, -3],
                            lerpMode: "catmullrom"
                        },
                        "3.8333": {
                            post: [0, -9, -3],
                            lerpMode: "catmullrom"
                        },
                        "4.0833": {
                            post: [0, -16.71, -3.69],
                            lerpMode: "catmullrom"
                        },
                        "4.2917": [0, -28, -5]
                    }
                },
                left_leg: {
                    rotation: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.5": {
                            post: [114.98, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.7083": {
                            post: [114.98, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "3.3333": {
                            post: [114.98, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "3.5833": {
                            post: [90, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "3.8333": {
                            post: [172.5, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "4.0833": {
                            post: [90, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "4.2917": {
                            post: [197.5, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "4.5": [90, 0, 0]
                    },
                    position: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.5": {
                            post: [0, -14.01, -2.35],
                            lerpMode: "catmullrom"
                        },
                        "0.7083": {
                            post: [0, -14.01, -2.35],
                            lerpMode: "catmullrom"
                        },
                        "3.3333": {
                            post: [0, -14.01, -2.35],
                            lerpMode: "catmullrom"
                        },
                        "3.5833": {
                            post: [0, -5, -4],
                            lerpMode: "catmullrom"
                        },
                        "3.8333": {
                            post: [0, -7, -4],
                            lerpMode: "catmullrom"
                        },
                        "4.0833": {
                            post: [0, -15.5, -3.76],
                            lerpMode: "catmullrom"
                        },
                        "4.2917": [0, -28, -5]
                    }
                }
            },
            soundEffects: {
                "0.0": {
                    effect: "dig"
                }
            },
            particleEffects: {
                "0.0": {
                    effect: "digging",
                    preEffectScript: `variable.dig_particle_texture_coordinate = ${MoLang.surfaceParticleTextureCoordinate()}; variable.dig_particle_texture_size = ${MoLang.surfaceParticleTextureSize()}; variable.dig_particle_color = ${MoLang.surfaceParticleColor()};`
                }
            }
        },
        {
            idAnimation: "warden.roar",
            animationLength: 4.2,
            bones: {
                body: {
                    rotation: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.24": {
                            post: [-25, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.6": {
                            post: [32.5, 0, -7.5],
                            lerpMode: "catmullrom"
                        },
                        "1.84": {
                            post: [38.33, 0, 2.99],
                            lerpMode: "catmullrom"
                        },
                        "2.08": {
                            post: [40.97, 0, -4.3],
                            lerpMode: "catmullrom"
                        },
                        "2.36": {
                            post: [44.41, 0, 6.29],
                            lerpMode: "catmullrom"
                        },
                        "3.0": {
                            post: [47.5, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "4.2": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    },
                    position: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.24": {
                            post: [0, -1, 3],
                            lerpMode: "catmullrom"
                        },
                        "1.6": {
                            post: [0, -3, -6],
                            lerpMode: "catmullrom"
                        },
                        "3.0": {
                            post: [0, -3, -6],
                            lerpMode: "catmullrom"
                        },
                        "4.2": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                head: {
                    rotation: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.24": {
                            post: [-32.5, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.6": {
                            post: [-32.5, 0, -27.5],
                            lerpMode: "catmullrom"
                        },
                        "1.8": {
                            post: [-32.5, 0, 26],
                            lerpMode: "catmullrom"
                        },
                        "2.04": {
                            post: [-32.5, 0, -27.5],
                            lerpMode: "catmullrom"
                        },
                        "2.44": {
                            post: [-32.5, 0, 26],
                            lerpMode: "catmullrom"
                        },
                        "2.84": {
                            post: [-5, 0, -12.5],
                            lerpMode: "catmullrom"
                        },
                        "4.2": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    },
                    position: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.24": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.6": {
                            post: [0, -2, -6],
                            lerpMode: "catmullrom"
                        },
                        "2.2": {
                            post: [0, -2, -6],
                            lerpMode: "catmullrom"
                        },
                        "2.48": {
                            post: [0, -2, -6],
                            lerpMode: "catmullrom"
                        },
                        "4.2": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                right_tendril: {
                    rotation: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.24": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.76": {
                            post: [0, 0, -10.85],
                            lerpMode: "catmullrom"
                        },
                        "2.08": {
                            post: [0, 0, 12.5],
                            lerpMode: "catmullrom"
                        },
                        "2.4": {
                            post: [0, 0, -10.85],
                            lerpMode: "catmullrom"
                        },
                        "2.72": {
                            post: [0, 0, 12.5],
                            lerpMode: "catmullrom"
                        },
                        "3.0": {
                            post: [0, 0, -10.85],
                            lerpMode: "catmullrom"
                        },
                        "4.2": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                left_tendril: {
                    rotation: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.24": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.76": {
                            post: [0, 0, -15.85],
                            lerpMode: "catmullrom"
                        },
                        "2.08": {
                            post: [0, 0, 12.5],
                            lerpMode: "catmullrom"
                        },
                        "2.4": {
                            post: [0, 0, -15.85],
                            lerpMode: "catmullrom"
                        },
                        "2.72": {
                            post: [0, 0, 12.5],
                            lerpMode: "catmullrom"
                        },
                        "3.0": {
                            post: [0, 0, -15.85],
                            lerpMode: "catmullrom"
                        },
                        "4.2": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                right_arm: {
                    rotation: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.72": {
                            post: [-120, 0, -20],
                            lerpMode: "catmullrom"
                        },
                        "1.24": {
                            post: [-77.5, 3.75, 15],
                            lerpMode: "catmullrom"
                        },
                        "1.48": {
                            post: [67.5, -32.5, 20],
                            lerpMode: "catmullrom"
                        },
                        "2.48": {
                            post: [37.5, -32.5, 25],
                            lerpMode: "catmullrom"
                        },
                        "2.88": {
                            post: [27.6, -17.1, 32.5],
                            lerpMode: "catmullrom"
                        },
                        "4.2": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    },
                    position: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.72": {
                            post: [3, -2, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.48": {
                            post: [4, -2, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.48": {
                            post: [4, -2, 0],
                            lerpMode: "catmullrom"
                        },
                        "4.2": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                left_arm: {
                    rotation: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.72": {
                            post: [-125, 0, 20],
                            lerpMode: "catmullrom"
                        },
                        "1.24": {
                            post: [-76.25, -17.5, -7.5],
                            lerpMode: "catmullrom"
                        },
                        "1.48": {
                            post: [62.5, 42.5, -12.5],
                            lerpMode: "catmullrom"
                        },
                        "2.48": {
                            post: [37.5, 27.5, -27.5],
                            lerpMode: "catmullrom"
                        },
                        "2.88": {
                            post: [25, 18.4, -30],
                            lerpMode: "catmullrom"
                        },
                        "4.2": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    },
                    position: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.72": {
                            post: [-3, -2, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.48": {
                            post: [-4, -2, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.48": {
                            post: [-4, -2, 0],
                            lerpMode: "catmullrom"
                        },
                        "4.2": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                }
            },
            soundEffects: {
                "1.25": {
                    effect: "roar"
                }
            }
        },
        {
            idAnimation: "warden.sniff",
            animationLength: 3.32,
            bones: {
                body: {
                    rotation: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.56": {
                            post: [17.5, 32.5, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.96": {
                            post: [0, 32.5, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.2": {
                            post: [10, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.8": {
                            post: [10, -30, 0],
                            lerpMode: "catmullrom"
                        },
                        "3.32": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                head: {
                    rotation: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.68": {
                            post: [0, 40, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.96": {
                            post: [-22.5, 40, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.24": {
                            post: [0, 20, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.52": {
                            post: [-35, 20, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.76": {
                            post: [0, 20, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.28": {
                            post: [0, -20, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.6": {
                            post: [-25, -23.65037, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.88": {
                            post: [0, -20, 0],
                            lerpMode: "catmullrom"
                        },
                        "3.32": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                right_arm: {
                    rotation: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.96": {
                            post: [17.5, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.2": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.76": {
                            post: [-15, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "3.32": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                left_arm: {
                    rotation: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.96": {
                            post: [-15, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.2": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.76": {
                            post: [17.5, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "3.32": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                }
            },
            soundEffects: {
                "0.0": {
                    effect: "sniff"
                }
            }
        },
        {
            idAnimation: "warden.bob",
            loop: true,
            bones: {
                body: {
                    rotation: [`${MoLang.variable("modified_bob_cos")} * 1.43`, 0, `${MoLang.variable("modified_bob_sin")} * 1.43`]
                },
                head: {
                    rotation: [`${MoLang.variable("modified_bob_sin")} * 3.43`, 0, `${MoLang.variable("modified_bob_cos")} * 3.43`]
                }
            }
        },
        {
            idAnimation: "warden.attack",
            animationLength: 0.33333,
            bones: {
                body: {
                    rotation: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.0417": {
                            post: [-22.5, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.2083": {
                            post: [22.5, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.3333": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    },
                    position: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.0417": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.2083": {
                            post: [0, -1, -2],
                            lerpMode: "catmullrom"
                        },
                        "0.3333": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                head: {
                    rotation: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.0417": {
                            post: [22.5, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.25": {
                            post: [-30.17493, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.3333": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    },
                    position: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.0417": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.25": {
                            post: [0, -2, -2],
                            lerpMode: "catmullrom"
                        },
                        "0.3333": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                right_arm: {
                    rotation: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.0417": {
                            post: [-120.36119, 40.78947, -20.94102],
                            lerpMode: "catmullrom"
                        },
                        "0.1667": {
                            post: [-90, -45, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.3333": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    },
                    position: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.0417": {
                            post: [4, 0, 5],
                            lerpMode: "catmullrom"
                        },
                        "0.1667": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.3333": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                left_arm: {
                    rotation: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.0417": {
                            post: [-120.36119, -40.78947, 20.94102],
                            lerpMode: "catmullrom"
                        },
                        "0.1667": {
                            post: [-61.1632, 42.85882, 11.52421],
                            lerpMode: "catmullrom"
                        },
                        "0.3333": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    },
                    position: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.0417": {
                            post: [-4, 0, 5],
                            lerpMode: "catmullrom"
                        },
                        "0.1667": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.3333": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                }
            }
        },
        {
            idAnimation: "warden.sonic_boom",
            animationLength: 3,
            bones: {
                body: {
                    rotation: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.0833": {
                            post: [47.5, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.625": {
                            post: [55, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.9167": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.0": {
                            post: [-32.5, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.4583": {
                            post: [-32.5, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.7083": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.875": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    },
                    position: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.0833": {
                            post: [0, -3, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.625": {
                            post: [0, -4, -1],
                            lerpMode: "catmullrom"
                        },
                        "1.9167": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.7083": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.875": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                right_ribcage: {
                    rotation: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.5417": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.7917": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.875": {
                            post: [0, 125, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.5": {
                            post: [0, 125, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.6667": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                left_ribcage: {
                    rotation: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.5417": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.7917": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.875": {
                            post: [0, -125, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.5": {
                            post: [0, -125, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.6667": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                head: {
                    rotation: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.0": {
                            post: [67.5, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.75": {
                            post: [80, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.9167": {
                            post: [-45, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.5": {
                            post: [-45, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.7083": {
                            post: [-45, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.875": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    },
                    position: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.9167": {
                            post: [0, 0, -3],
                            lerpMode: "catmullrom"
                        },
                        "2.5": {
                            post: [0, 0, -3],
                            lerpMode: "catmullrom"
                        },
                        "2.7083": {
                            post: [0, 0, -3],
                            lerpMode: "catmullrom"
                        },
                        "2.875": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                right_arm: {
                    rotation: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.875": {
                            post: [-42.28659, -32.69813, -5.00825],
                            lerpMode: "catmullrom"
                        },
                        "1.1667": {
                            post: [-29.83757, -35.39626, -45.28089],
                            lerpMode: "catmullrom"
                        },
                        "1.3333": {
                            post: [-29.83757, -35.39626, -45.28089],
                            lerpMode: "catmullrom"
                        },
                        "1.6667": {
                            post: [-72.28659, -32.69813, -5.00825],
                            lerpMode: "catmullrom"
                        },
                        "1.8333": {
                            post: [35.26439, -30, 35.26439],
                            lerpMode: "catmullrom"
                        },
                        "1.9167": {
                            post: [73.75484, -13.0931, 19.20518],
                            lerpMode: "catmullrom"
                        },
                        "2.5": {
                            post: [73.75484, -13.0931, 19.20518],
                            lerpMode: "catmullrom"
                        },
                        "2.75": {
                            post: [58.20713, -21.1064, 28.7261],
                            lerpMode: "catmullrom"
                        },
                        "3.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    },
                    position: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.8333": {
                            post: [3, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.75": {
                            post: [3, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "3.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                left_arm: {
                    rotation: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.875": {
                            post: [-33.80694, 32.31058, 6.87997],
                            lerpMode: "catmullrom"
                        },
                        "1.1667": {
                            post: [-17.87827, 34.62115, 49.02433],
                            lerpMode: "catmullrom"
                        },
                        "1.3333": {
                            post: [-17.87827, 34.62115, 49.02433],
                            lerpMode: "catmullrom"
                        },
                        "1.6667": {
                            post: [-51.30694, 32.31058, 6.87997],
                            lerpMode: "catmullrom"
                        },
                        "1.8333": {
                            post: [35.26439, 30, -35.26439],
                            lerpMode: "catmullrom"
                        },
                        "1.9167": {
                            post: [73.75484, 13.0931, -19.20518],
                            lerpMode: "catmullrom"
                        },
                        "2.5": {
                            post: [73.75484, 13.0931, -19.20518],
                            lerpMode: "catmullrom"
                        },
                        "2.75": {
                            post: [58.20713, 21.1064, -28.7261],
                            lerpMode: "catmullrom"
                        },
                        "3.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    },
                    position: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.8333": {
                            post: [-3, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.75": {
                            post: [-3, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "3.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                }
            }
        }
    ]
});
