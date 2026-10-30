import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const ParrotAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "parrot.base",
            loop: true,
            bones: {
                body: {
                    position: ["-this", 0.0, 0.0],
                    rotation: ["-this", 0.0, 0.0]
                },
                feather: {
                    rotation: ["-this", 0.0, 0.0]
                },
                head: {
                    position: ["-this", 0.0, 0.0],
                    rotation: [0.0, 0.0, "-this"]
                },
                leg0: {
                    position: [0.0, "-6.0-this", -0.5],
                    rotation: ["-16.713-this", 0.0, "-this"]
                },
                leg1: {
                    position: [0.0, "-6.0-this", -0.5],
                    rotation: ["-16.713-this", 0.0, "-this"]
                },
                tail: {
                    position: ["-this", 0.0, 0.0]
                },
                wing0: {
                    position: ["1.5-this", 0.0, 0.0],
                    rotation: ["-40.0-this", "-180.0-this", 0.0]
                },
                wing1: {
                    position: ["-1.5-this", 0.0, 0.0],
                    rotation: ["-40.0-this", "-180.0-this", 0.0]
                }
            }
        },
        {
            idAnimation: "parrot.dance",
            loop: true,
            bones: {
                body: {
                    position: ["variable.dance.x-this", MoLang.variable("dance.y"), 0.0]
                },
                head: {
                    rotation: ["-this", "-this", "variable.dance.y*23.0 - this"]
                },
                leg0: {
                    position: [`-${MoLang.variable("dance.x")}`, `-${MoLang.variable("dance.y")}`, 0.0],
                    rotation: [0.0, 0.0, "-20.0 - this"]
                },
                leg1: {
                    position: [`-${MoLang.variable("dance.x")}`, `-${MoLang.variable("dance.y")}`, 0.0],
                    rotation: [0.0, 0.0, "20.0 - this"]
                },
                tail: {
                    rotation: ["60.0 - this", 0.0, 0.0]
                },
                wing0: {
                    rotation: [0.0, 0.0, `-5.0 - ${MoLang.variable("wing_flap")}`]
                },
                wing1: {
                    rotation: [0.0, 0.0, `5.0 + ${MoLang.variable("wing_flap")}`]
                }
            }
        },
        {
            idAnimation: "parrot.flying",
            loop: true,
            bones: {
                leg0: {
                    rotation: [`${MoLang.cos(`${MoLang.animTime()} * 38.17`)} * 80.0 * ${MoLang.modifiedMoveSpeed()}`, 0.0, 0.0]
                },
                leg1: {
                    rotation: [`${MoLang.cos(`${MoLang.animTime()} * 38.17`)} * -80.0 * ${MoLang.modifiedMoveSpeed()}`, 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "parrot.moving",
            loop: true,
            bones: {
                body: {
                    position: [0.0, `${MoLang.variable("wing_flap")} * 0.3`, 0.0]
                },
                tail: {
                    rotation: [`60.0 + math.cos(${MoLang.animTime()} * 38.17) * 17.0 - this`, 0.0, 0.0]
                },
                wing0: {
                    rotation: [0.0, 0.0, `-5.0 - ${MoLang.variable("wing_flap")} * 57.3`]
                },
                wing1: {
                    rotation: [0.0, 0.0, `5.0 + ${MoLang.variable("wing_flap")} * 57.3`]
                }
            }
        },
        {
            idAnimation: "parrot.sitting",
            loop: true,
            bones: {
                body: {
                    position: [0.0, -1.9, 0.0]
                },
                leg0: {
                    rotation: [90.0, 0.0, 0.0]
                },
                leg1: {
                    rotation: [90.0, 0.0, 0.0]
                },
                tail: {
                    rotation: ["90.0 - this", 0.0, 0.0]
                },
                wing0: {
                    rotation: [0.0, 0.0, "-5.0-this"]
                },
                wing1: {
                    rotation: [0.0, 0.0, "5.0-this"]
                }
            }
        },
        {
            idAnimation: "parrot.standing",
            loop: true,
            bones: {
                leg0: {
                    rotation: [20.0, 0.0, 0.0]
                },
                leg1: {
                    rotation: [20.0, 0.0, 0.0]
                }
            }
        }
    ]
});
