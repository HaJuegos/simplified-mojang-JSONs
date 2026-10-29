import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const BreezeAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "breeze.idle_ground_particles",
            loop: true,
            animationLength: 0.1,
            particleEffects: {
                "0.0": {
                    effect: "ground_particles",
                    preEffectScript: "variable.ground_particle_amount = 1; variable.ground_particle_initial_speed = math.random( 2, 3 ); variable.ground_particle_texture_coordinate = query.surface_particle_texture_coordinate; variable.ground_particle_texture_size = query.surface_particle_texture_size; variable.ground_particle_color = query.surface_particle_color;"
                }
            }
        },
        {
            idAnimation: "breeze.slide_ground_particles",
            loop: true,
            animationLength: 0.1,
            particleEffects: {
                "0.0": {
                    effect: "ground_particles",
                    preEffectScript: "variable.ground_particle_amount = 5; variable.ground_particle_initial_speed = math.random( 3, 4 ); variable.ground_particle_texture_coordinate = query.surface_particle_texture_coordinate; variable.ground_particle_texture_size = query.surface_particle_texture_size; variable.ground_particle_color = query.surface_particle_color;"
                }
            }
        },
        {
            idAnimation: "breeze.whirl_sound",
            loop: true,
            animationLength: 1.5,
            soundEffects: {
                "0.0": {
                    effect: "whirl"
                }
            }
        },
        {
            idAnimation: "breeze.idle",
            loop: true,
            animationLength: 2,
            bones: {
                tornado_top: {
                    position: {
                        "0.0": [0.5, 0, 0],
                        "0.25": [0.5, 0, -0.5],
                        "0.75": [-0.5, 0, -0.5],
                        "1.25": [-0.5, 0, 0.5],
                        "1.75": [0.5, 0, 0.5],
                        "2.0": [0.5, 0, 0]
                    }
                },
                tornado_mid: {
                    position: {
                        "0.0": [0.5, 0, -0.5],
                        "0.5": [-0.5, 0, -0.5],
                        "1.0": [-0.5, 0, 0.5],
                        "1.5": [0.5, 0, 0.5],
                        "2.0": [0.5, 0, -0.5]
                    }
                },
                head: {
                    position: {
                        "0.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        },
                        "1.0": {
                            post: [0, 1, 0],
                            lerpMode: "catmullrom"
                        },
                        "2.0": {
                            post: [0, 0, 0],
                            lerpMode: "catmullrom"
                        }
                    }
                },
                rods: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "2.0": [0, 1080, 0]
                    },
                    position: {
                        "0.0": [0, 0, 0],
                        "1.0": [0, -1, 0],
                        "2.0": [0, 0, 0]
                    }
                }
            }
        },
        {
            idAnimation: "breeze.shoot",
            animationLength: 1.125,
            bones: {
                head: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.25": [-12.5, 0, 0],
                        "0.75": [-12.5, 0, 0],
                        "0.9167": [5, 0, 0],
                        "1.125": [0, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, 0],
                        "0.25": [0, -2, 0],
                        "0.7917": [0, -1, 2],
                        "0.9583": [0, -1, 0],
                        "1.125": [0, 0, 0]
                    }
                },
                tornado_bottom: {
                    rotation: [0, 0, 0]
                },
                tornado_mid: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.25": [12.5, 0, 0],
                        "0.75": [12.5, 0, 0],
                        "0.9167": [-10, 0, 0],
                        "1.125": [0, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, 0],
                        "0.25": [0, 0, 5],
                        "0.75": [0, 0, 6],
                        "0.9167": [0, 0, -2],
                        "1.125": [0, 0, 0]
                    }
                },
                tornado_top: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.25": [15, 0, 0],
                        "0.75": [15, 0, 0],
                        "0.9167": [-10, 0, 0],
                        "1.125": [0, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, 0],
                        "0.25": [0, 0, 3],
                        "0.8333": [0, 0, 4],
                        "0.9583": [0, 0, -2],
                        "1.125": [0, 0, 0]
                    }
                },
                body: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.25": [12.5, 0, 0],
                        "0.75": [12.5, 0, 0],
                        "0.9167": [-2.5, 0, 0],
                        "1.125": [0, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, 0],
                        "0.25": [0, 3, 5],
                        "0.8333": [0, 3, 6],
                        "0.9583": [0, 3, -1],
                        "1.125": [0, 0, 0]
                    }
                },
                rods: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "1.0": [0, 360, 0]
                    }
                }
            }
        },
        {
            idAnimation: "breeze.jump",
            animationLength: 1.125,
            bones: {
                body: {
                    position: {
                        "0.0": [0, 0, 0],
                        "0.5": [0, -10, 0],
                        "0.625": [0, -10, 0],
                        "0.75": [0, 11, 0],
                        "1.125": [0, 0, 0]
                    }
                },
                head: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.5": [22.5, 0, 0],
                        "0.625": [22.5, 0, 0],
                        "0.8333": [-19.25, 0, 0],
                        "1.125": [0, 0, 0]
                    }
                },
                tornado_body: {
                    scale: {
                        "0.0": [1, 1, 1],
                        "0.5": [1, 1, 1],
                        "0.625": [1, 1, 1],
                        "0.75": [1, 1.3, 1],
                        "1.125": [1, 1, 1]
                    }
                },
                tornado_bottom: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.625": [0, 90, 0],
                        "1.125": [0, 360, 0]
                    },
                    scale: {
                        "0.0": [1, 1, 1],
                        "0.5": [1, 1, 1],
                        "0.625": [1, 1, 1],
                        "0.75": [1, 1.1, 1],
                        "1.125": [1, 1, 1]
                    }
                },
                tornado_mid: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.625": [0, 0, 0],
                        "1.125": [0, 180, 0]
                    },
                    position: {
                        "0.0": [0, 0, 0],
                        "0.5": [0, -6, 0],
                        "0.625": [0, -6, 0],
                        "0.75": [0, 2, 0],
                        "1.125": [0, 0, 0]
                    }
                },
                tornado_top: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.625": [0, 0, 0],
                        "1.125": [0, 90, 0]
                    },
                    position: {
                        "0.0": [0, 0, 0],
                        "0.5": [0, -5, 0],
                        "0.625": [0, -5, 0],
                        "0.75": [0, 2, 0],
                        "1.125": [0, 0, 0]
                    }
                },
                rods: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.8333": [0, 360, 0]
                    }
                }
            },
            particleEffects: {
                "0.75": {
                    effect: "ground_particles",
                    preEffectScript: "variable.ground_particle_amount = math.round(math.random( 3, 4)); variable.ground_particle_initial_speed = math.random( 5, 6 ); variable.ground_particle_texture_coordinate = query.surface_particle_texture_coordinate; variable.ground_particle_texture_size = query.surface_particle_texture_size; variable.ground_particle_color = query.surface_particle_color;"
                }
            }
        },
        {
            idAnimation: "breeze.slide",
            loop: "hold_on_last_frame",
            animationLength: 0.2,
            bones: {
                body: {
                    position: {
                        "0.0": [0, 0, 0],
                        "0.2": [0, 0, -6]
                    }
                },
                tornado_mid: {
                    position: {
                        "0.0": [0, 0, 0],
                        "0.2": [0, 0, -3]
                    }
                },
                tornado_top: {
                    position: {
                        "0.0": [0, 0, 0],
                        "0.2": [0, 0, -2]
                    }
                }
            }
        }
    ]
});
