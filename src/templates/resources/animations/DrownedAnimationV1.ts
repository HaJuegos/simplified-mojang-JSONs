import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @deprecated Ya no se usa en la actualidad. Se mantiene por compatibilidad. Usa la version normal.
 * @author HaJuegos - 29-10-2026
 */
export const DrownedAnimationV1 = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "drowned.attack.rotations.v1.0",
            loop: true,
            bones: {
                body: {
                    rotation: [0.0, `${MoLang.sin(`${MoLang.sqrt(MoLang.variable("attack_time"))} * 360.0`)} * 11.46`, 0.0]
                },
                leftarm: {
                    rotation: [
                        `-(${MoLang.sin(`(1.0 - (1.0 - ${MoLang.variable("attack_time")}) * (1.0 - ${MoLang.variable("attack_time")})) * 180.0`)} + ${MoLang.sin(`${MoLang.variable("attack_time")} * 180.0`)}) * 5.73`,
                        `${MoLang.sin(`${MoLang.sqrt(MoLang.variable("attack_time"))} * 360.0`)} * 11.46`,
                        0.0
                    ]
                },
                rightarm: {
                    rotation: [
                        `-(${MoLang.sin(`(1.0 - (1.0 - ${MoLang.variable("attack_time")}) * (1.0 - ${MoLang.variable("attack_time")})) * 180.0`)} * 34.38 + ${MoLang.sin(`${MoLang.variable("attack_time")} * 180.0`)} * 28.65) * (${MoLang.variable("is_brandishing_spear")} ? -2.5 : 1.0)`,
                        `${MoLang.variable("is_brandishing_spear")} ? 0.0 : ${MoLang.sin(`${MoLang.sqrt(MoLang.variable("attack_time"))} * 360.0`)} * 22.92`,
                        0.0
                    ]
                }
            }
        },
        {
            idAnimation: "drowned.swimming.v1.0",
            loop: true,
            bones: {
                leftarm: {
                    rotation: [
                        `math.lerp(this, -180.0, variable.swim_amount) - (variable.swim_amount * ((math.sin(variable.attack_time * 180.0) * 57.3) * 1.2 - (math.sin((1.0 - (1.0 - variable.attack_time) * (1.0 - variable.attack_time)) * 180.0) * 57.3) * 0.4)) - (variable.swim_amount * (math.sin(${MoLang.lifeTime()} * 76.776372) * 2.865)) - this`,
                        "math.lerp(this, -14.325, variable.swim_amount) - this",
                        `math.lerp(this, 14.325, variable.swim_amount) - (variable.swim_amount * (math.cos(${MoLang.lifeTime()} * 103.13244) * 2.865 + 2.865)) - this`
                    ]
                },
                leftleg: {
                    rotation: [
                        `math.lerp(this, math.cos(${MoLang.lifeTime()} * 390.0 + 180.0) * 0.3, variable.swim_amount) - this`,
                        0.0,
                        0.0
                    ]
                },
                rightarm: {
                    rotation: [
                        `math.lerp(this, -180.0, variable.swim_amount) - (variable.swim_amount * ((math.sin(variable.attack_time * 180.0) * 57.3) * 1.2 - (math.sin((1.0 - (1.0 - variable.attack_time) * (1.0 - variable.attack_time)) * 180.0) * 57.3) * 0.4)) + (variable.swim_amount * (math.sin(${MoLang.lifeTime()} * 76.776372) * 2.865)) - this`,
                        "math.lerp(this, 14.325, variable.swim_amount) - this",
                        `math.lerp(this, -14.325, variable.swim_amount) + (variable.swim_amount * (math.cos(${MoLang.lifeTime()} * 103.13244) * 2.865 + 2.865)) - this`
                    ]
                },
                rightleg: {
                    rotation: [`math.lerp(this, math.cos(${MoLang.lifeTime()} * 390.0) * 0.3, variable.swim_amount)`, 0.0, 0.0]
                },
                root: {
                    position: [0.0, "variable.swim_amount * -10.0 - this", "variable.swim_amount * 9.0 - this"],
                    rotation: [`${MoLang.variable("swim_amount")} * (90.0 + ${MoLang.targetXRotation()})`, 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "drowned.attack.baby_rotations",
            loop: true,
            bones: {
                body: {
                    rotation: [0.0, `${MoLang.sin(`${MoLang.sqrt(MoLang.variable("attack_time"))} * 360.0`)} * 11.46`, 0.0]
                },
                leftarm: {
                    rotation: [
                        `90 - (${MoLang.sin(`(1.0 - (1.0 - ${MoLang.variable("attack_time")}) * (1.0 - ${MoLang.variable("attack_time")})) * 180.0`)} + ${MoLang.sin(`${MoLang.variable("attack_time")} * 180.0`)}) * 5.73`,
                        `${MoLang.sin(`${MoLang.sqrt(MoLang.variable("attack_time"))} * 360.0`)} * 11.46`,
                        0.0
                    ]
                },
                rightarm: {
                    rotation: [
                        `90 - (${MoLang.sin(`(1.0 - (1.0 - ${MoLang.variable("attack_time")}) * (1.0 - ${MoLang.variable("attack_time")})) * 180.0`)} * 34.38 + ${MoLang.sin(`${MoLang.variable("attack_time")} * 180.0`)} * 28.65) * (${MoLang.variable("is_brandishing_spear")} ? -2.5 : 1.0)`,
                        `${MoLang.variable("is_brandishing_spear")} ? 0.0 : ${MoLang.sin(`${MoLang.sqrt(MoLang.variable("attack_time"))} * 360.0`)} * 22.92`,
                        0.0
                    ]
                }
            }
        }
    ]
});
