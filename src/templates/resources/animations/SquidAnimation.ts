import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const SquidAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "squid.move",
            animTimeUpdate: MoLang.modifiedDistanceMoved(),
            loop: true,
            bones: {
                body: {
                    position: [0.0, `${MoLang.isBaby()} ? 3 : 7.5`, 1.8]
                },
                tentacle1: {
                    rotation: ["variable.squid.tentacle_angle - this", "90.0 - this", 0.0]
                },
                tentacle2: {
                    rotation: ["variable.squid.tentacle_angle - this", "45.0 - this", 0.0]
                },
                tentacle3: {
                    rotation: ["variable.squid.tentacle_angle - this", "0.0 - this", 0.0]
                },
                tentacle4: {
                    rotation: ["variable.squid.tentacle_angle - this", "-45.0 - this", 0.0]
                },
                tentacle5: {
                    rotation: ["variable.squid.tentacle_angle - this", "-90.0 - this", 0.0]
                },
                tentacle6: {
                    rotation: ["variable.squid.tentacle_angle - this", "-135.0 - this", 0.0]
                },
                tentacle7: {
                    rotation: ["variable.squid.tentacle_angle - this", "-180.0 - this", 0.0]
                },
                tentacle8: {
                    rotation: ["variable.squid.tentacle_angle - this", "-225.0 - this", 0.0]
                }
            }
        },
        {
            idAnimation: "squid.rotate",
            animTimeUpdate: MoLang.modifiedDistanceMoved(),
            loop: true,
            bones: {
                body: {
                    rotation: [
                        {
                            y: "180.0 - this"
                        },
                        {
                            x: MoLang.bodyXRotation()
                        },
                        {
                            y: MoLang.variable("squid.swim_rotation")
                        }
                    ]
                }
            }
        }
    ]
});
