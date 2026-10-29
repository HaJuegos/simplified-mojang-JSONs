import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const DressingRoomReactHead2Anim = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "react_head_2",
            loop: false,
            bones: {
                head: {
                    position: {
                        "0": [0, 0, 0],
                        "0.1333333": [0, 0, 0],
                        "0.3": [0, 0, 0],
                        "0.4666667": [0, 0, 0],
                        "0.7": [0, 0, 0],
                        "1.033333": [0, 0, 0],
                        "1.2": [0, 0, 0],
                        "1.566667": [0, 0, 0]
                    },
                    rotation: {
                        "0": [-9.879876e-07, 0, 0],
                        "0.1333333": [13.38454, 0.375861, 1.62539],
                        "0.3": [-12.80211, 2.97829, 12.87945],
                        "0.4666667": [-12.80211, 2.97829, 12.87945],
                        "0.7": [-12.68936, -3.433615, -14.89534],
                        "1.033333": [-12.68936, -3.433615, -14.89534],
                        "1.2": [-16.59949, -1.716808, -7.447668],
                        "1.566667": [-9.879876e-07, 0, 0]
                    },
                    scale: {
                        "0": [1, 1, 1],
                        "0.1333333": [1, 1, 1],
                        "0.3": [1, 1, 1],
                        "0.4666667": [1, 1, 1],
                        "0.7": [1, 1, 1],
                        "1.033333": [1, 1, 1],
                        "1.2": [1, 1, 1],
                        "1.566667": [1, 1, 1]
                    }
                },
                waist: {
                    position: {
                        "0": [0, 0, 0],
                        "0.06666667": [0, 0, 0],
                        "0.3666667": [0, 0, 0],
                        "1.2": [0, 0, 0],
                        "1.533333": [0, 0, 0]
                    },
                    rotation: {
                        "0": [0, 0, 0],
                        "0.06666667": [3.964286, 0, 0],
                        "0.3666667": [-6.412541, 0, 0],
                        "1.2": [-6.412541, 0, 0],
                        "1.533333": [0, 0, 0]
                    },
                    scale: {
                        "0": [1, 1, 1],
                        "0.06666667": [1, 1, 1],
                        "0.3666667": [1, 1, 1],
                        "1.2": [1, 1, 1],
                        "1.533333": [1, 1, 1]
                    }
                }
            }
        }
    ]
});
