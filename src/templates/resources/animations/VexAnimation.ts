import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const VexAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "vex.idle",
            loop: true,
            bones: {
                leftarm: {
                    rotation: {
                        "0.0": [0.0, 0.0, -32.34],
                        "0.75": [0.0, 0.0, -45],
                        "2.0": [0.0, 0.0, -32.34]
                    }
                },
                rightarm: {
                    rotation: {
                        "0.0": [0.0, 0.0, 32.34],
                        "0.75": [0.0, 0.0, 45],
                        "2.0": [0.0, 0.0, 32.34]
                    }
                },
                leftwing: {
                    rotation: ["27.0 - this", `-(15.0 + math.cos(${MoLang.lifeTime()} * 916.8) * 9.0) - this`, "-45.0 - this"]
                },
                rightwing: {
                    rotation: ["27.0 - this", `15.0 + math.cos(${MoLang.lifeTime()} * 916.8) * 9.0 - this`, "45.0 - this"]
                },
                rightItem: {
                    scale: 0.7
                },
                leftItem: {
                    scale: 0.7
                }
            }
        },
        {
            idAnimation: "vex.charge",
            animTimeUpdate: MoLang.modifiedDistanceMoved(),
            loop: true,
            bones: {
                rightarm: {
                    rotation: [
                        `variable.empty_handed ? -70.0 - this : (${MoLang.isItemEquipped(0)} ? 210.0 - this : this)`,
                        `variable.empty_handed ? this : (${MoLang.isItemEquipped(0)} ? 15.0 - this : this)`,
                        `variable.empty_handed ? this : (${MoLang.isItemEquipped(0)} ? -25.0 - 32.34 - this : this)`
                    ]
                },
                leftarm: {
                    rotation: [
                        `variable.empty_handed ? -70.0 - this : (${MoLang.isItemEquipped(1)} ? 210.0 - this : this)`,
                        `variable.empty_handed ? this : (${MoLang.isItemEquipped(1)} ? -15.0 - this : this)`,
                        `variable.empty_handed ? this : (${MoLang.isItemEquipped(1)} ? 25.0 + 32.34 - this : this)`
                    ]
                }
            }
        }
    ]
});
