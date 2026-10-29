import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const VindicatorAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "vindicator.attack",
            loop: true,
            bones: {
                leftarm: {
                    rotation: [
                        `${MoLang.isRiding()} ? 0.0 : ((${MoLang.cos(`${MoLang.lifeTime()} * 20.0 * 10.89`)} * 28.65) + (${MoLang.sin(`${MoLang.variable("attack_time")} * 180.0`)} * 68.76 - (${MoLang.sin(`(1.0 - (1.0 - ${MoLang.variable("attack_time")}) * (1.0 - ${MoLang.variable("attack_time")})) * 180.0`)}) * 22.92))`,
                        0.0,
                        0.0
                    ]
                },
                rightarm: {
                    rotation: [
                        `(-108 + ${MoLang.cos(`${MoLang.lifeTime()} * 20.0 * 3.84`)} * 2.87) + (${MoLang.sin(`${MoLang.variable("attack_time")} * 180.0`)} * 126.05 - (${MoLang.sin(`(1.0 - (1.0 - ${MoLang.variable("attack_time")}) * (1.0 - ${MoLang.variable("attack_time")})) * 180.0`)}) * 22.92)`,
                        0.0,
                        0.0
                    ]
                }
            }
        },
        {
            idAnimation: "vindicator.hand_attack",
            loop: true,
            bones: {
                leftarm: {
                    rotation: [
                        `(-108 + ${MoLang.cos(`${MoLang.lifeTime()} * 20.0 * 3.84`)} * 2.87) + (${MoLang.sin(`${MoLang.variable("attack_time")} * 180.0`)} * 126.05 - (${MoLang.sin(`(1.0 - (1.0 - ${MoLang.variable("attack_time")}) * (1.0 - ${MoLang.variable("attack_time")})) * 180.0`)}) * 22.92)`,
                        0.0,
                        0.0
                    ]
                },
                rightarm: {
                    rotation: [
                        `(-108 + ${MoLang.cos(`${MoLang.lifeTime()} * 20.0 * 3.84`)} * 2.87) + (${MoLang.sin(`${MoLang.variable("attack_time")} * 180.0`)} * 126.05 - (${MoLang.sin(`(1.0 - (1.0 - ${MoLang.variable("attack_time")}) * (1.0 - ${MoLang.variable("attack_time")})) * 180.0`)}) * 22.92)`,
                        0.0,
                        0.0
                    ]
                }
            }
        },
        {
            idAnimation: "vindicator.base",
            loop: true,
            bones: {
                arms: {
                    position: [0.0, "-3.0 - this", "-1.0 - this"],
                    rotation: ["-42.97 - this", 0.0, 0.0]
                },
                leftarm: {
                    rotation: [
                        `${MoLang.cos(`${MoLang.lifeTime()} * 20.0 * 3.84`)} * 2.87`,
                        -9.0,
                        `-1 * (${MoLang.cos(`${MoLang.lifeTime()} * 20.0 * 5.16`)} * 2.87 + 2.87)`
                    ]
                },
                rightarm: {
                    rotation: [
                        `${MoLang.cos(`${MoLang.lifeTime()} * 20.0 * 3.84`)} * 2.87`,
                        9.0,
                        `${MoLang.cos(`${MoLang.lifeTime()} * 20.0 * 5.16`)} * 2.87 + 2.87`
                    ]
                },
                rightItem: {
                    scale: `${MoLang.isAngry()} ? 1.0 : 0.0`
                },
                leftItem: {
                    scale: `${MoLang.isAngry()} ? 1.0 : 0.0`
                }
            }
        },
        {
            idAnimation: "vindicator.riding.arms",
            loop: true,
            bones: {
                leftarm: {
                    rotation: [-36.0, 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "vindicator.riding.legs",
            loop: true,
            bones: {
                leg0: {
                    rotation: ["-72.0 - this", "18.0 - this", "-this"]
                },
                leg1: {
                    rotation: ["-72.0 - this", "-18.0 - this", "-this"]
                }
            }
        },
        {
            idAnimation: "vindicator.walk",
            loop: true,
            bones: {
                leg0: {
                    rotation: [
                        `(${MoLang.cos(`${MoLang.modifiedDistanceMoved()} * 38.17`)} * 80.21) * ${MoLang.modifiedMoveSpeed()} * 0.5`,
                        0.0,
                        0.0
                    ]
                },
                leg1: {
                    rotation: [
                        `(${MoLang.cos(`${MoLang.modifiedDistanceMoved()} * 38.17 + 180`)} * 80.21) * ${MoLang.modifiedMoveSpeed()} * 0.5`,
                        0.0,
                        0.0
                    ]
                }
            }
        }
    ]
});
