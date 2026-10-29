import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const PillagerAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "pillager.crossbow.charge",
            loop: true,
            bones: {
                leftarm: {
                    rotation: [
                        "math.lerp(-90.0 + 34.38, -90.0, variable.crossbow_charge)  -this",
                        "math.lerp(22.92, 48.70, variable.crossbow_charge) -this",
                        0.0
                    ]
                },
                rightarm: {
                    rotation: ["-90.0 + 34.38 -this", "-45.84 -this", 0.0]
                }
            }
        },
        {
            idAnimation: "pillager.crossbow.hold",
            loop: true,
            bones: {
                leftarm: {
                    rotation: [
                        "-85.94 + query.target_x_rotation -this",
                        "34.38 + math.clamp(query.target_y_rotation, -45, 25) -this",
                        0.0
                    ]
                },
                rightarm: {
                    rotation: [
                        "-90.0 + 5.73 + query.target_x_rotation -this",
                        "-17.19 + math.clamp(query.target_y_rotation, -25, 45) -this",
                        0.0
                    ]
                }
            }
        }
    ]
});
