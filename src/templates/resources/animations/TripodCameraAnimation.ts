import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const TripodCameraAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "tripod_camera.neutral",
            loop: true,
            bones: {
                body: {
                    position: [0.0, "-this", 0.0]
                },
                leg0: {
                    rotation: ["18 - this", 0.0, 0.0]
                },
                leg1: {
                    rotation: ["-(18 + this)", 0.0, 0.0]
                },
                leg2: {
                    rotation: [0.0, 0.0, "18 - this"]
                },
                leg3: {
                    rotation: [0.0, 0.0, "-(18 + this)"]
                }
            }
        }
    ]
});
