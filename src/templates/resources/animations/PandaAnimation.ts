import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const PandaAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "panda.baby_transform",
            loop: true,
            bones: {
                body: {
                    position: [0.0, 1.77, 0.0],
                    scale: [1.15, 1.15, 1.0]
                },
                head: {
                    position: [0.0, -0.18, 0.15],
                    scale: 1.8
                }
            }
        },
        {
            idAnimation: "panda.lying",
            loop: true,
            bones: {
                body: {
                    position: [0.0, `-7.67 * ${MoLang.lieAmount()} -10 - this`, 0.0],
                    rotation: [`${MoLang.lieAmount()} * -180 - this`, 0.0, 0.0]
                },
                head: {
                    rotation: [`(${MoLang.lieAmount()} * 90) - this`, 0.0, 0.0]
                },
                leg0: {
                    rotation: [`math.sin(${MoLang.lifeTime()} * 206.28) * -17.2 - this`, 0.0, 0.0]
                },
                leg1: {
                    rotation: [`math.sin(${MoLang.lifeTime()} * 263.58) * 17.2 - this`, 0.0, 0.0]
                },
                leg2: {
                    rotation: [`math.sin(${MoLang.lifeTime()} * 172) * 17.2 - this`, 0.0, 0.0]
                },
                leg3: {
                    rotation: [`math.sin(${MoLang.lifeTime()} * 229.2) * -17.2 - this`, 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "panda.baby_lying",
            loop: true,
            bones: {
                body: {
                    position: [0.0, `-10.55 * ${MoLang.lieAmount()} -10 - this`, 0.0],
                    rotation: [`${MoLang.lieAmount()} * -180 - this`, 0.0, 0.0]
                },
                head: {
                    rotation: [`(${MoLang.lieAmount()} * 90) - this`, 0.0, 0.0]
                },
                leg0: {
                    rotation: [`math.sin(${MoLang.lifeTime()} * 206.28) * -17.2 - this`, 0.0, 0.0]
                },
                leg1: {
                    rotation: [`math.sin(${MoLang.lifeTime()} * 263.58) * 17.2 - this`, 0.0, 0.0]
                },
                leg2: {
                    rotation: [`math.sin(${MoLang.lifeTime()} * 172) * 17.2 - this`, 0.0, 0.0]
                },
                leg3: {
                    rotation: [`math.sin(${MoLang.lifeTime()} * 229.2) * -17.2 - this`, 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "panda.rolling",
            loop: true,
            bones: {
                body: {
                    rotation: [`(${MoLang.rollCounter()} / 32) * 360`, 0.0, 0.0]
                },
                head: {
                    rotation: [`(this * -118) + ${MoLang.rollCounter()} - this`, 0.0, 0.0]
                },
                leg0: {
                    rotation: [`math.sin(${MoLang.lifeTime()} * 60 * 0.5 * 57.3) * 8.6 - this`, 0.0, 0.0]
                },
                leg1: {
                    rotation: [`math.sin(${MoLang.lifeTime()} * 60 * 0.5 * 57.3) * -8.6 - this`, 0.0, 0.0]
                },
                leg2: {
                    rotation: [`math.sin(${MoLang.lifeTime()} * 60 * 0.5 * 57.3) * -8.6 - this`, 0.0, 0.0]
                },
                leg3: {
                    rotation: [`math.sin(${MoLang.lifeTime()} * 60 * 0.5 * 57.3) * 8.6 - this`, 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "panda.baby_rolling",
            loop: true,
            bones: {
                body: {
                    rotation: [`(${MoLang.rollCounter()} / 32) * 360`, 0.0, 0.0]
                },
                head: {
                    rotation: [`(this * -118) + ${MoLang.rollCounter()} - this`, 0.0, 0.0]
                },
                leg0: {
                    rotation: [`math.sin(${MoLang.lifeTime()} * 60 * 0.95 * 57.3) * 8.6 - this`, 0.0, 0.0]
                },
                leg1: {
                    rotation: [`math.sin(${MoLang.lifeTime()} * 60 * 0.95 * 57.3) * -8.6 - this`, 0.0, 0.0]
                },
                leg2: {
                    rotation: [`math.sin(${MoLang.lifeTime()} * 60 * 0.95 * 57.3) * -8.6 - this`, 0.0, 0.0]
                },
                leg3: {
                    rotation: [`math.sin(${MoLang.lifeTime()} * 60 * 0.95 * 57.3) * 8.6 - this`, 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "panda.sitting",
            loop: true,
            bones: {
                body: {
                    position: [0.0, "-2.15 -10 -this", 0.0],
                    rotation: [
                        `(${MoLang.isScared()} * math.cos(${MoLang.lifeTime()} * 71.62) * 16.2) + (${MoLang.sitAmount()} * -90) - this`,
                        0.0,
                        0.0
                    ]
                },
                head: {
                    rotation: [
                        `${MoLang.isEating()} ? (90.0 + 11.5 * math.sin(${MoLang.lifeTime()} * 750)) : (${MoLang.sitAmount()} * (100 - this)) - this`,
                        0.0,
                        0.0
                    ]
                },
                leg0: {
                    rotation: [0.0, 0.0, "32.7 - this"]
                },
                leg1: {
                    rotation: [0.0, 0.0, "-32.7 - this"]
                },
                leg2: {
                    rotation: [`(${MoLang.isEating()} ? (-23 - (16.5 * math.sin(${MoLang.lifeTime()} * 750))) : 0) - this`, 0.0, -15.0]
                },
                leg3: {
                    rotation: [`(${MoLang.isEating()} ? (-23 - (16.5 * math.sin(${MoLang.lifeTime()} * 750))) : 0) - this`, 0.0, 15.0]
                }
            }
        },
        {
            idAnimation: "panda.baby_sitting",
            loop: true,
            bones: {
                body: {
                    position: [0.0, -0.5, 0.0],
                    rotation: [
                        `(${MoLang.isScared()} * ${MoLang.cos(`${MoLang.lifeTime()} * 71.62`)} * 8.0) + (${MoLang.sitAmount()} * -90)`,
                        0.0,
                        0.0
                    ]
                },
                head: {
                    rotation: [
                        `${MoLang.isEating()} ? (90.0 + 11.5 * math.sin(${MoLang.lifeTime()} * 750)) : (${MoLang.sitAmount()} * (100 - this)) - this`,
                        0.0,
                        0.0
                    ]
                },
                leg0: {
                    rotation: [0.0, 0.0, "32.7 - this"]
                },
                leg1: {
                    rotation: [0.0, 0.0, "-32.7 - this"]
                },
                leg2: {
                    rotation: [`(${MoLang.isEating()} ? (-23 - (16.5 * math.sin(${MoLang.lifeTime()} * 750))) : 0) - this`, 0.0, -15.0]
                },
                leg3: {
                    rotation: [`(${MoLang.isEating()} ? (-23 - (16.5 * math.sin(${MoLang.lifeTime()} * 750))) : 0) - this`, 0.0, 15.0]
                }
            }
        },
        {
            idAnimation: "panda.sneezing",
            loop: true,
            bones: {
                head: {
                    rotation: [
                        `(${MoLang.sneezeCounter()} < 15) ? (-45 * (${MoLang.sneezeCounter()} / 14)) : (-45 + (9 * (${MoLang.sneezeCounter()} - 15)) - this)`,
                        0.0,
                        0.0
                    ]
                }
            }
        },
        {
            idAnimation: "panda.unhappy",
            loop: true,
            bones: {
                head: {
                    rotation: [
                        0.0,
                        `(math.sin(${MoLang.lifeTime()} * 327.6) * 20) - this`,
                        `(math.sin(${MoLang.lifeTime()} * 327.6) * 20) - this`
                    ]
                },
                leg2: {
                    rotation: [`(math.sin(${MoLang.lifeTime()} * 343.8) * -43) - this`, 0.0, 0.0]
                },
                leg3: {
                    rotation: [`(math.sin(${MoLang.lifeTime()} * 343.8) * 43) - this`, 0.0, 0.0]
                }
            }
        }
    ]
});
