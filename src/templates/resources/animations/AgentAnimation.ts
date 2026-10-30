import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const AgentAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "agent.move",
            loop: true,
            bones: {
                body: {
                    position: [
                        0,
                        `${MoLang.variable("agent.easein")} * (${MoLang.sin(`${MoLang.lifeTime()} * 114.6 * ${MoLang.variable("agent.movespeedscalar")}`)} + 1.0) * 1.12`,
                        0
                    ]
                },
                leftArm: {
                    rotation: [
                        `((-0.2 + 1.5 * (math.abs(math.mod(${MoLang.modifiedDistanceMoved()}, 13) - 6.5) - 3.25) / 3.25) * ${MoLang.modifiedMoveSpeed()}) * 57.3 - variable.agent.armxrotationfactor`,
                        0,
                        `-${MoLang.variable("agent.armzrotation")}`
                    ]
                },
                leftLeg: {
                    rotation: [
                        `((-1.5 * (math.abs(math.mod(${MoLang.modifiedDistanceMoved()}, 13) - 6.5) - 3.25) / 3.25) * ${MoLang.modifiedMoveSpeed()}) * 57.3 + (variable.agent.ishovering * variable.agent.legxrotationfactor)`,
                        0,
                        0
                    ]
                },
                rightArm: {
                    rotation: [
                        `((-0.2 - 1.5 * (math.abs(math.mod(${MoLang.modifiedDistanceMoved()}, 13) - 6.5) - 3.25) / 3.25) * ${MoLang.modifiedMoveSpeed()}) * 57.3 + variable.agent.armxrotationfactor`,
                        0,
                        MoLang.variable("agent.armzrotation")
                    ]
                },
                rightLeg: {
                    rotation: [
                        `((1.5 * (math.abs(math.mod(${MoLang.modifiedDistanceMoved()}, 13) - 6.5) - 3.25) / 3.25) * ${MoLang.modifiedMoveSpeed()}) * 57.3 - (variable.agent.ishovering * variable.agent.legxrotationfactor)`,
                        0,
                        0
                    ]
                }
            }
        },
        {
            idAnimation: "agent.swing_arms",
            loop: true,
            animationLength: 1.5,
            bones: {
                rightArm: {
                    rotation: [
                        `(-2.0 + 1.5 * (math.abs(math.mod(variable.agent.swinganimationtick - ${MoLang.frameAlpha()}, variable.agent.swinganimationduration) - variable.agent.swinganimationduration * 0.5) - variable.agent.swinganimationduration * 0.25) / (variable.agent.swinganimationduration * 0.25)) * 57.3`,
                        0,
                        0
                    ]
                }
            }
        },
        {
            idAnimation: "agent.shrug",
            animationLength: 1.5,
            bones: {
                head: {
                    rotation: {
                        "0.3333": [0, 0, 0],
                        "0.5833": [0, 0, 0],
                        "0.8333": [0, 72.5, 0],
                        "1.0417": [0, 0, 0],
                        "1.2917": [0, -62.5, 0],
                        "1.5": [0, 0, 0]
                    },
                    position: {
                        "0.0": [0, 0, 0],
                        "0.125": [0, 0, 0]
                    }
                },
                leftArm: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.25": [-64.03195, -33.38529, 26.32435],
                        "0.625": [0, 0, 0],
                        "0.75": [0, 0, 0],
                        "0.9583": [0, 0, -10],
                        "1.1667": [0, 0, 0]
                    },
                    position: {
                        "0.75": [0, 0, 0],
                        "0.9583": [0, 1, 0],
                        "1.1667": [0, 0, 0]
                    }
                },
                rightArm: {
                    rotation: {
                        "0.0": [0, 0, 0],
                        "0.25": [-58.25703, 25.73828, -15.06695],
                        "0.625": [0, 0, 0],
                        "0.75": [0, 0, 0],
                        "0.9583": [0, 0, 10],
                        "1.1667": [0, 0, 0]
                    },
                    position: {
                        "0.75": [0, 0, 0],
                        "0.9583": [0, 1, 0],
                        "1.1667": [0, 0, 0]
                    }
                }
            }
        }
    ]
});
