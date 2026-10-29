import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const SnifferAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "sniffer.baby_transform",
            loop: true,
            bones: {
                head: {
                    position: [0.0, 1.0, 1.0],
                    scale: 1.2
                }
            }
        },
        {
            idAnimation: "sniffer.walk",
            loop: true,
            animationLength: 2,
            bones: {
                right_front_leg: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.5833": [35, 0, 0],
                        "1.0": [-35, 0, 0],
                        "1.1667": [0, 0, 0],
                        "2.0": [0, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, 3],
                        "0.75": [0, 4, -1],
                        "1.0": [0, 0, 0],
                        "1.1667": [0, 0, -1],
                        "2.0": [0, 0, 3]
                    }
                },
                right_mid_leg: {
                    rotation: {
                        "0.0": [-7, 0, 0],
                        "0.1667": [-35, 0, 0],
                        "0.3333": [0, 0, 0],
                        "1.0": [0, 0, 0],
                        "1.1667": [0, 0, 0],
                        "1.75": [35, 0, 0],
                        "2.0": [-7, 0, 0]
                    },
                    position: {
                        "0.0": [0, 2.67, -0.67],
                        "0.1667": [0, 0, 0],
                        "0.3333": [0, 0, -2],
                        "1.0": [0, 0, 2],
                        "1.1667": [0, 0, 3],
                        "1.9167": [0, 4, -1],
                        "2.0": [0, 2.67, -0.67]
                    }
                },
                right_hind_leg: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.5833": [0, 0, 0],
                        "1.0": [25, 0, 0],
                        "1.1667": [35, 0, 0],
                        "1.5833": [-35, 0, 0],
                        "1.75": [0, 0, 0],
                        "2.0": [0, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, -0.5],
                        "0.5833": [0, 0, 2],
                        "1.0": [0, 2.22, 0.78],
                        "1.3333": [0, 4, -1],
                        "1.5833": [0, 0, 0],
                        "1.75": [0, 0, -2],
                        "2.0": [0, 0, -0.5]
                    }
                },
                left_front_leg: {
                    rotation: {
                        "0.0": [-35, 0, 0],
                        "0.1667": [0, 0, 0],
                        "1.0": [0, 0, 0],
                        "1.5833": [35, 0, 0],
                        "2.0": [-35, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, 0],
                        "0.1667": [0, 0, -1],
                        "1.0": [0, 0, 3],
                        "1.75": [0, 4, -1],
                        "2.0": [0, 0, 0]
                    }
                },
                left_mid_leg: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.1667": [0, 0, 0],
                        "0.75": [35, 0, 0],
                        "1.1667": [-35, 0, 0],
                        "1.3333": [0, 0, 0],
                        "2.0": [0, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, 2],
                        "0.1667": [0, 0, 3],
                        "0.9167": [0, 4, -1],
                        "1.1667": [0, 0, 0],
                        "1.3333": [0, 0, -2],
                        "2.0": [0, 0, 2]
                    }
                },
                left_hind_leg: {
                    rotation: {
                        "0.0": [25, 0, 0],
                        "0.1667": [35, 0, 0],
                        "0.5833": [-35, 0, 0],
                        "0.75": [0, 0, 0],
                        "1.0": [0, 0, 0],
                        "1.5833": [0, 0, 0],
                        "2.0": [25, 0, 0]
                    },
                    position: {
                        "0.0": [0, 2.22, 0.78],
                        "0.3333": [0, 4, -1],
                        "0.5833": [0, 0, 0],
                        "0.75": [0, 0, -2],
                        "1.0": [0, 0, -0.5],
                        "1.5833": [0, 0, 2],
                        "2.0": [0, 2.22, 0.78]
                    }
                },
                body: {
                    rotation: {
                        "0.0": {
                            post: [1, 0, -2.5],
                            lerpMode: "catmullrom"
                        },
                        "0.5": {
                            post: [-1, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.0": {
                            post: [1, 0, 2.5],
                            lerpMode: "catmullrom"
                        },
                        "1.5": {
                            post: [-1, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.0": {
                            post: [1, 0, -2.5],
                            lerpMode: "catmullrom"
                        }
                    },
                    position: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.2083": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.375": {
                            post: [0, -1, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.2083": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.375": {
                            post: [0, -1, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                head: {
                    rotation: {
                        "0.0": {
                            post: [7.5, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.1667": {
                            post: [9, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.875": {
                            post: [-1, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.25": {
                            post: [7, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.75": {
                            post: [5, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.0": {
                            post: [7.5, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                left_ear: {
                    rotation: {
                        "0.0": {
                            post: [0, 0, -2.5],
                            lerpMode: "catmullrom"
                        },
                        "0.5": {
                            post: [0, 0, -7.5],
                            lerpMode: "catmullrom"
                        },
                        "1.0": {
                            post: [0, 0, -2.5],
                            lerpMode: "catmullrom"
                        },
                        "1.5": {
                            post: [0, 0, -7.5],
                            lerpMode: "catmullrom"
                        },
                        "2.0": {
                            post: [0, 0, -2.5],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                right_ear: {
                    rotation: {
                        "0.0": {
                            post: [0, 0, 2.5],
                            lerpMode: "catmullrom"
                        },
                        "0.5": {
                            post: [0, 0, 7.5],
                            lerpMode: "catmullrom"
                        },
                        "1.0": {
                            post: [0, 0, 2.5],
                            lerpMode: "catmullrom"
                        },
                        "1.5": {
                            post: [0, 0, 7.5],
                            lerpMode: "catmullrom"
                        },
                        "2.0": {
                            post: [0, 0, 2.5],
                            lerpMode: "catmullrom"
                        }
                    }
                }
            }
        },
        {
            idAnimation: "sniffer.sniffsniff",
            loop: true,
            animationLength: 8,
            bones: {
                nose: {
                    scale: {
                        "0.0": [1, 1, 1],
                        "0.5417": [1, 1, 1],
                        "0.5833": {
                            pre: [1, 0.5, 1],
                            post: [1, 0.5, 1],
                            lerpMode: "catmullrom"
                        },
                        "0.6667": {
                            post: [1, 2.5, 1],
                            lerpMode: "catmullrom"
                        },
                        "0.7917": {
                            post: [1, 1, 1],
                            lerpMode: "catmullrom"
                        },
                        "0.9167": {
                            post: [1, 1, 1],
                            lerpMode: "catmullrom"
                        },
                        "1.0": {
                            post: [1, 3, 1],
                            lerpMode: "catmullrom"
                        },
                        "1.125": [1, 1, 1],
                        "2.0": [1, 1, 1]
                    }
                }
            },
            soundEffects: {
                "0.0": {
                    effect: "sniffsniff"
                }
            }
        },
        {
            idAnimation: "sniffer.longsniff",
            animationLength: 1,
            bones: {
                nose: {
                    scale: {
                        "0.0": {
                            post: [1, 1, 1],
                            lerpMode: "catmullrom"
                        },
                        "0.0833": {
                            post: [1, 0.7, 1],
                            lerpMode: "catmullrom"
                        },
                        "0.125": {
                            post: [1, 3, 1],
                            lerpMode: "catmullrom"
                        },
                        "0.25": {
                            post: [1, 3, 1],
                            lerpMode: "catmullrom"
                        },
                        "0.7083": {
                            post: [1, 4, 1],
                            lerpMode: "catmullrom"
                        },
                        "0.8333": {
                            post: [1, 1, 1],
                            lerpMode: "catmullrom"
                        },
                        "1.0": {
                            post: [1, 1, 1],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                head: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.125": [-5, 0, 0],
                        "0.875": [-20, 0, 0],
                        "1.0": [0, 0, 0]
                    }
                }
            },
            soundEffects: {
                "0.0": {
                    effect: "long_sniff"
                }
            }
        },
        {
            idAnimation: "sniffer.search",
            loop: true,
            animationLength: 2,
            bones: {
                right_front_leg: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.5833": [35, 0, 0],
                        "1.0": [-35, 0, 0],
                        "1.1667": [0, 0, 0],
                        "2.0": [0, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, 3],
                        "0.75": [0, 4, -1],
                        "1.0": [0, 0, 0],
                        "1.1667": [0, 0, -1],
                        "2.0": [0, 0, 3]
                    }
                },
                right_mid_leg: {
                    rotation: {
                        "0.0": [-7, 0, 0],
                        "0.1667": [-35, 0, 0],
                        "0.3333": [0, 0, 0],
                        "1.0": [0, 0, 0],
                        "1.1667": [0, 0, 0],
                        "1.75": [35, 0, 0],
                        "2.0": [-7, 0, 0]
                    },
                    position: {
                        "0.0": [0, 2.67, -0.67],
                        "0.1667": [0, 0, 0],
                        "0.3333": [0, 0, -2],
                        "1.0": [0, 0, 2],
                        "1.1667": [0, 0, 3],
                        "1.9167": [0, 4, -1],
                        "2.0": [0, 2.67, -0.67]
                    }
                },
                right_hind_leg: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.5833": [0, 0, 0],
                        "1.0": [25, 0, 0],
                        "1.1667": [35, 0, 0],
                        "1.5833": [-35, 0, 0],
                        "1.75": [0, 0, 0],
                        "2.0": [0, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, -0.5],
                        "0.5833": [0, 0, 2],
                        "1.0": [0, 2.22, 0.78],
                        "1.3333": [0, 4, -1],
                        "1.5833": [0, 0, 0],
                        "1.75": [0, 0, -2],
                        "2.0": [0, 0, -0.5]
                    }
                },
                left_front_leg: {
                    rotation: {
                        "0.0": [-35, 0, 0],
                        "0.1667": [0, 0, 0],
                        "1.0": [0, 0, 0],
                        "1.5833": [35, 0, 0],
                        "2.0": [-35, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, 0],
                        "0.1667": [0, 0, -1],
                        "1.0": [0, 0, 3],
                        "1.75": [0, 4, -1],
                        "2.0": [0, 0, 0]
                    }
                },
                left_mid_leg: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.1667": [0, 0, 0],
                        "0.75": [35, 0, 0],
                        "1.1667": [-35, 0, 0],
                        "1.3333": [0, 0, 0],
                        "2.0": [0, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, 2],
                        "0.1667": [0, 0, 3],
                        "0.9167": [0, 4, -1],
                        "1.1667": [0, 0, 0],
                        "1.3333": [0, 0, -2],
                        "2.0": [0, 0, 2]
                    }
                },
                left_hind_leg: {
                    rotation: {
                        "0.0": [25, 0, 0],
                        "0.1667": [35, 0, 0],
                        "0.5833": [-35, 0, 0],
                        "0.75": [0, 0, 0],
                        "1.0": [0, 0, 0],
                        "1.5833": [0, 0, 0],
                        "2.0": [25, 0, 0]
                    },
                    position: {
                        "0.0": [0, 2.22, 0.78],
                        "0.3333": [0, 4, -1],
                        "0.5833": [0, 0, 0],
                        "0.75": [0, 0, -2],
                        "1.0": [0, 0, -0.5],
                        "1.5833": [0, 0, 2],
                        "2.0": [0, 2.22, 0.78]
                    }
                },
                body: {
                    rotation: {
                        "0.0": [2.5, 0, 0],
                        "0.5": [1.25, 0, 0],
                        "1.5": [0, 0, 0],
                        "2.0": [2.5, 0, 0]
                    }
                },
                head: {
                    rotation: {
                        "0.0": [35, 0, 0],
                        "0.125": [33.61503, 11.46526, 9.803],
                        "0.875": [34.71128, 17.67415, 14.15251],
                        "1.125": [37.21128, -17.67415, -14.15251],
                        "1.875": [38.30529, -21.62827, -17.40292],
                        "2.0": [35, 0, 0]
                    },
                    position: [0, -2, 0]
                },
                left_ear: {
                    rotation: {
                        "0.0": [0, 0, -2.5],
                        "0.25": [0, 0, -15],
                        "0.5": [0, 0, -2.5],
                        "0.75": [0, 0, -15],
                        "1.0": [0, 0, -2.5],
                        "1.25": [0, 0, -15],
                        "1.5": [0, 0, -2.5],
                        "1.75": [0, 0, -15],
                        "2.0": [0, 0, -2.5]
                    }
                },
                right_ear: {
                    rotation: {
                        "0.0": [0, 0, 2.5],
                        "0.25": [0, 0, 15],
                        "0.5": [0, 0, 2.5],
                        "0.75": [0, 0, 15],
                        "1.0": [0, 0, 2.5],
                        "1.25": [0, 0, 15],
                        "1.5": [0, 0, 2.5],
                        "1.75": [0, 0, 15],
                        "2.0": [0, 0, 2.5]
                    }
                },
                nose: {
                    scale: {
                        "0.0": {
                            post: [1, 1, 1],
                            lerpMode: "catmullrom"
                        },
                        "0.0833": {
                            post: [1, 1.5, 1],
                            lerpMode: "catmullrom"
                        },
                        "0.2083": {
                            post: [1, 1, 1],
                            lerpMode: "catmullrom"
                        },
                        "0.375": {
                            post: [1, 1, 1],
                            lerpMode: "catmullrom"
                        },
                        "0.4583": {
                            post: [1, 2.5, 1],
                            lerpMode: "catmullrom"
                        },
                        "0.625": {
                            post: [1, 1, 1],
                            lerpMode: "catmullrom"
                        },
                        "0.8333": {
                            post: [1, 1, 1],
                            lerpMode: "catmullrom"
                        },
                        "0.9167": {
                            post: [1, 2.5, 1],
                            lerpMode: "catmullrom"
                        },
                        "1.0833": {
                            post: [1, 1, 1],
                            lerpMode: "catmullrom"
                        },
                        "1.2917": {
                            post: [1, 1, 1],
                            lerpMode: "catmullrom"
                        },
                        "1.3333": {
                            post: [1, 2.5, 1],
                            lerpMode: "catmullrom"
                        },
                        "1.5": {
                            post: [1, 1, 1],
                            lerpMode: "catmullrom"
                        },
                        "1.625": {
                            post: [1, 1, 1],
                            lerpMode: "catmullrom"
                        },
                        "1.6667": {
                            post: [1, 3.5, 1],
                            lerpMode: "catmullrom"
                        },
                        "1.8333": {
                            post: [1, 1, 1],
                            lerpMode: "catmullrom"
                        },
                        "2.0": {
                            post: [1, 1, 1],
                            lerpMode: "catmullrom"
                        }
                    }
                }
            },
            soundEffects: {
                "0.0": {
                    effect: "searching"
                },
                "1.0": {
                    effect: "searching"
                }
            }
        },
        {
            idAnimation: "sniffer.dig",
            loop: "hold_on_last_frame",
            animationLength: 8,
            bones: {
                body: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.5": [1.5, 0, 0],
                        "1.3333": [-5, 0, 0],
                        "1.5": [0, 0, 0],
                        "2.0": [0, 0, 0],
                        "2.5": [2.5, 0, 0],
                        "3.0": [0, 0, 0],
                        "3.5": [2.5, 0, 0],
                        "4.0": [0, 0, 0],
                        "4.5": [2.5, 0, 0],
                        "5.6667": [5, 0, 0],
                        "5.8333": [-2.5, 0, 0],
                        "6.0": [0, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, 0],
                        "1.3333": [0, 1, 0],
                        "1.5": [0, -7, 0]
                    },
                    scale: {
                        "0.0": [1, 1, 1],
                        "1.5": [1, 1, 1],
                        "1.5417": [1.04, 0.98, 1.02],
                        "1.5833": [1, 1, 1]
                    }
                },
                head: {
                    rotation: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.1667": {
                            post: [10, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.4167": {
                            post: [-10, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.5": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.5833": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.875": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.0833": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.5": {
                            post: [47.5, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.6667": {
                            post: [38.44, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.875": {
                            post: [10.95951, 13.57454, -14.93501],
                            lerpMode: "catmullrom"
                        },
                        "3.2083": {
                            post: [47.5, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "3.5833": {
                            post: [55, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "3.7917": {
                            post: [4.2932, -16.187, 10.90042],
                            lerpMode: "catmullrom"
                        },
                        "4.125": {
                            post: [47.5, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "4.4167": {
                            post: [54.71135, 7.98009, -5.56662],
                            lerpMode: "catmullrom"
                        },
                        "4.5": {
                            post: [55.72895, -6.77684, 4.46197],
                            lerpMode: "catmullrom"
                        },
                        "4.5833": {
                            post: [54.71135, 7.98009, -5.56662],
                            lerpMode: "catmullrom"
                        },
                        "4.6667": {
                            post: [55.72895, -6.77684, 4.46197],
                            lerpMode: "catmullrom"
                        },
                        "4.75": {
                            post: [54.71135, 7.98009, -5.56662],
                            lerpMode: "catmullrom"
                        },
                        "4.8333": {
                            post: [55.72895, -6.77684, 4.46197],
                            lerpMode: "catmullrom"
                        },
                        "5.0": {
                            post: [65, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "5.75": {
                            post: [65, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "5.9167": {
                            post: [-32.5, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "6.25": [0, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, 0],
                        "0.625": [0, 0, 0],
                        "1.375": [0, 1, 0],
                        "1.5": [0, 1, 0],
                        "1.5833": [0, 1, 0],
                        "1.875": [0, 1, 0],
                        "2.0833": [0, 3, 0],
                        "2.2917": [0, 6, 0],
                        "2.6667": [0, 0, 0],
                        "3.2083": [0, 4, 0],
                        "3.5833": [0, 0, 0],
                        "4.125": [0, 4, 0],
                        "5.0": [0, 0, 0],
                        "5.75": [0, 1, 0],
                        "6.0": [0, 1.5, 0],
                        "6.25": [0, 1, 0]
                    }
                },
                left_ear: {
                    rotation: {
                        "0.0": [0, 0, -2.5],
                        "1.25": [0, 0, -2.5],
                        "1.4167": [0, 0, -50],
                        "1.5833": [0, 0, -30],
                        "5.9167": [0, 0, -30],
                        "6.0833": [0, 0, -65],
                        "6.3333": [0, 0, -30]
                    }
                },
                right_ear: {
                    rotation: {
                        "0.0": [0, 0, 2.5],
                        "1.25": [0, 0, 2.5],
                        "1.4167": [0, 0, 50],
                        "1.5833": [0, 0, 30],
                        "5.9167": [0, 0, 30],
                        "6.0833": [0, 0, 65],
                        "6.3333": [0, 0, 30]
                    }
                },
                right_front_leg: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "1.2083": [0, 0, 0],
                        "1.375": [0, 0, 90]
                    },
                    position: {
                        "0.0": [0, 0, 0],
                        "1.2083": [0, 0, 0],
                        "1.2917": [-2, -0.75, 0],
                        "1.375": [-4, -5.5, 0]
                    }
                },
                right_mid_leg: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "1.25": [0, 0, 0],
                        "1.4167": [0, 0, 90]
                    },
                    position: {
                        "0.0": [0, 0, 0],
                        "1.25": [0, 0, 0],
                        "1.3333": [-2, -0.75, 0],
                        "1.4167": [-4, -5.5, 0]
                    }
                },
                right_hind_leg: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "1.3333": [0, 0, 0],
                        "1.5": [0, 0, 90]
                    },
                    position: {
                        "0.0": [0, 0, 0],
                        "1.3333": [0, 0, 0],
                        "1.4167": [-2, -0.75, 0],
                        "1.5": [-4, -5.5, 0]
                    }
                },
                left_front_leg: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "1.2083": [0, 0, 0],
                        "1.375": [0, 0, -90]
                    },
                    position: {
                        "0.0": [0, 0, 0],
                        "1.2083": [0, 0, 0],
                        "1.2917": [2, -0.75, 0],
                        "1.375": [4, -5.5, 0]
                    }
                },
                left_mid_leg: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "1.25": [0, 0, 0],
                        "1.4167": [0, 0, -90]
                    },
                    position: {
                        "0.0": [0, 0, 0],
                        "1.25": [0, 0, 0],
                        "1.3333": [2, -0.75, 0],
                        "1.4167": [4, -5.5, 0]
                    }
                },
                left_hind_leg: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "1.3333": [0, 0, 0],
                        "1.5": [0, 0, -90]
                    },
                    position: {
                        "0.0": [0, 0, 0],
                        "1.3333": [0, 0, 0],
                        "1.4167": [2, -0.75, 0],
                        "1.5": [4, -5.5, 0]
                    }
                }
            },
            soundEffects: {
                "0.0": {
                    effect: "digging"
                },
                "6.0": {
                    effect: "drop_seed"
                }
            }
        },
        {
            idAnimation: "sniffer.stand_up",
            loop: "hold_on_last_frame",
            animationLength: 3,
            bones: {
                body: {
                    rotation: {
                        "0.25": [0, 0, 0],
                        "0.75": [2.5, 0, 0],
                        "1.5": [-2.5, 0, 0],
                        "1.7083": [0, 0, 0]
                    },
                    position: {
                        "0.25": [0, -7, 0],
                        "0.75": [0, -7, 0],
                        "1.5": [0, 0, 0],
                        "1.7083": [0, 0, 0]
                    }
                },
                head: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.3333": [-5, 0, 0],
                        "0.7083": [0, 0, 0],
                        "1.0": [10, 0, 0],
                        "1.375": [0, 0, 0]
                    },
                    position: {
                        "0.0": [0, 1, 0],
                        "1.375": [0, 1, 0]
                    }
                },
                left_ear: {
                    rotation: {
                        "0.0": [0, 0, -30],
                        "0.9167": [0, 0, -30],
                        "1.2083": [0, 0, -5]
                    }
                },
                right_ear: {
                    rotation: {
                        "0.0": [0, 0, 30],
                        "0.9167": [0, 0, 30],
                        "1.2083": [0, 0, 5]
                    }
                },
                right_front_leg: {
                    rotation: {
                        "0.0": {
                            post: [0, 0, 90],
                            lerpMode: "catmullrom"
                        },
                        "0.4583": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    },
                    position: {
                        "0.0": {
                            post: [-4, -5.5, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.2083": {
                            post: [6, -5.5, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.4583": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                right_mid_leg: {
                    rotation: {
                        "0.0833": {
                            pre: [0, 0, 90],
                            post: [0, 0, 90],
                            lerpMode: "catmullrom"
                        },
                        "0.5833": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    },
                    position: {
                        "0.0833": {
                            pre: [-4, -5.5, 0],
                            post: [-4, -5.5, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.3333": {
                            post: [6, -5.5, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.5833": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                right_hind_leg: {
                    rotation: {
                        "0.1667": {
                            pre: [0, 0, 90],
                            post: [0, 0, 90],
                            lerpMode: "catmullrom"
                        },
                        "0.6667": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    },
                    position: {
                        "0.1667": {
                            pre: [-4, -5.5, 0],
                            post: [-4, -5.5, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.4167": {
                            post: [6, -5.5, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.6667": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                left_front_leg: {
                    rotation: {
                        "0.0": {
                            post: [0, 0, -90],
                            lerpMode: "catmullrom"
                        },
                        "0.4583": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    },
                    position: {
                        "0.0": {
                            post: [4, -5.5, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.2083": {
                            post: [-6, -5.5, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.4583": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                left_mid_leg: {
                    rotation: {
                        "0.0833": {
                            pre: [0, 0, -90],
                            post: [0, 0, -90],
                            lerpMode: "catmullrom"
                        },
                        "0.5833": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    },
                    position: {
                        "0.0833": {
                            pre: [4, -5.5, 0],
                            post: [4, -5.5, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.3333": {
                            post: [-6, -5.5, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.5833": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                left_hind_leg: {
                    rotation: {
                        "0.1667": {
                            pre: [0, 0, -90],
                            post: [0, 0, -90],
                            lerpMode: "catmullrom"
                        },
                        "0.6667": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    },
                    position: {
                        "0.1667": {
                            pre: [4, -5.5, 0],
                            post: [4, -5.5, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.4167": {
                            post: [-6, -5.5, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.6667": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                }
            },
            soundEffects: {
                "0.0": {
                    effect: "stand_up"
                }
            }
        },
        {
            idAnimation: "sniffer.feeling_happy",
            loop: true,
            animationLength: 2,
            bones: {
                head: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.5": {
                            pre: [-32.00206, 19.3546, -11.70092],
                            post: [-32.00206, 19.3546, -11.70092],
                            lerpMode: "catmullrom"
                        },
                        "1.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.5": {
                            post: [-32.00206, -19.3546, 11.70092],
                            lerpMode: "catmullrom"
                        },
                        "2.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                left_ear: {
                    rotation: {
                        "0.5": {
                            pre: [0, 0, 0],
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.75": {
                            post: [0, 0, -67.5],
                            lerpMode: "catmullrom"
                        },
                        "0.9583": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.125": {
                            post: [0, 0, -67.5],
                            lerpMode: "catmullrom"
                        },
                        "1.2917": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                right_ear: {
                    rotation: {
                        "0.5": {
                            pre: [0, 0, 0],
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "0.75": {
                            post: [0, 0, 67.5],
                            lerpMode: "catmullrom"
                        },
                        "0.9583": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.125": {
                            post: [0, 0, 67.5],
                            lerpMode: "catmullrom"
                        },
                        "1.2917": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                }
            },
            soundEffects: {
                "0.0": {
                    effect: "happy"
                }
            }
        }
    ]
});
