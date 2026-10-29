import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const SheepAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "sheep.grazing.v2",
            animationLength: 2.0,
            loop: true,
            bones: {
                head: {
                    position: {
                        "0": [0.0, 0.0, 0.0],
                        "0.2": [0.0, -9.0, 0.0],
                        "1.8": [0.0, -9.0, 0.0],
                        "2": [0.0, 0.0, 0.0]
                    },
                    rotation: {
                        "0.2": {
                            post: [`180.0 * (0.2 + 0.07 * ${MoLang.sin(`${MoLang.keyFrameLerpTime()} * 1644.39`)})`, 0.0, 0.0],
                            pre: [36.0, 0.0, 0.0]
                        },
                        "1.8": {
                            post: [36.0, 0.0, 0.0],
                            pre: [`180.0 * (0.2 + 0.07 * ${MoLang.sin(`${MoLang.keyFrameLerpTime()} * 1644.39`)})`, 0.0, 0.0]
                        }
                    }
                }
            }
        },
        {
            idAnimation: "sheep.baby_grazing",
            animationLength: 2.0,
            loop: true,
            bones: {
                head: {
                    position: {
                        "0": [0.0, 0.0, 0.0],
                        "0.2": [0.0, -2.5, 0.0],
                        "1.8": [0.0, -2.5, 0.0],
                        "2": [0.0, 0.0, 0.0]
                    },
                    rotation: {
                        "0.2": {
                            post: [`180.0 * (0.2 + 0.07 * ${MoLang.sin(`${MoLang.keyFrameLerpTime()} * 1644.39`)})`, 0.0, 0.0],
                            pre: [36.0, 0.0, 0.0]
                        },
                        "1.8": {
                            post: [36.0, 0.0, 0.0],
                            pre: [`180.0 * (0.2 + 0.07 * ${MoLang.sin(`${MoLang.keyFrameLerpTime()} * 1644.39`)})`, 0.0, 0.0]
                        }
                    }
                }
            }
        }
    ]
});
