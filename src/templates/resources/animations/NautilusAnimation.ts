import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const NautilusAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "nautilus.breathe",
            loop: true,
            animationLength: 1,
            animTimeUpdate: `${MoLang.animTime()} + ${MoLang.pow(3, MoLang.modifiedMoveSpeed())} / 2 * ${MoLang.deltaTime()}`,
            bones: {
                body: {
                    scale: {
                        "0.0": [1, 1, 1],
                        "0.5": [1, 1, 1.2],
                        "0.75": [1, 1, 0.9],
                        "0.875": [1, 1, 1],
                        "1.0": [1, 1, 1]
                    }
                },
                mouth_top: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.5": [30, 0, 0],
                        "0.75": [0, 0, 0],
                        "0.875": [0, 0, 0],
                        "1.0": [0, 0, 0]
                    },
                    scale: {
                        "0.0": [1, 1, 1],
                        "0.5": [1, 1, 1.4],
                        "0.75": [1, 1, 0.9],
                        "0.875": [1, 1, 1],
                        "1.0": [1, 1, 1]
                    }
                },
                inner_mouth: {
                    scale: {
                        "0.0": [1, 1, 1],
                        "0.5": [0.8, 0.8, 1],
                        "0.75": [1, 1, 0.9],
                        "0.875": [1, 1, 1],
                        "1.0": [1, 1, 1]
                    }
                },
                mouth_bottom: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.5": [-30, 0, 0],
                        "0.75": [0, 0, 0],
                        "0.875": [0, 0, 0],
                        "1.0": [0, 0, 0]
                    },
                    scale: {
                        "0.0": [1, 1, 1],
                        "0.5": [1, 1, 1.4],
                        "0.75": [1, 1, 0.9],
                        "0.875": [1, 1, 1],
                        "1.0": [1, 1, 1]
                    }
                }
            }
        },
        {
            idAnimation: "nautilus.swim",
            loop: true,
            animationLength: 1,
            animTimeUpdate: `${MoLang.animTime()} + ${MoLang.pow(3, MoLang.modifiedMoveSpeed())} / 2 * ${MoLang.deltaTime()}`,
            bones: {
                head: {
                    position: {
                        "0.0": [0, 0, 0],
                        "0.5": [0, 0, 2],
                        "0.8125": [0, 0, 0],
                        "1.0": [0, 0, 0]
                    }
                }
            }
        },
        {
            idAnimation: "nautilus.dashing",
            animationLength: 0.5,
            loop: false,
            soundEffects: {
                "0.0": {
                    effect: "dash"
                }
            }
        },
        {
            idAnimation: "nautilus.look_at_target",
            loop: true,
            animationLength: 1,
            bones: {
                head: {
                    rotation: [0, MoLang.variable("yHeadRot"), 0]
                },
                body: {
                    rotation: [MoLang.variable("xHeadRot"), 0, 0]
                }
            }
        }
    ]
});
