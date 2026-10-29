import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const PhantomAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "phantom.base_pose",
            loop: true,
            bones: {
                body: {
                    position: [0.0, -20.0, 0.0],
                    rotation: [`-${MoLang.targetXRotation()}`, 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "phantom.move",
            loop: true,
            startDelay: "math.random(0, 2.417)",
            animationLength: 2.417,
            bones: {
                tail: {
                    rotation: ["-5.0 * Math.cos(297.9380535 * query.anim_time) - 5.0", 0.0, 0.0]
                },
                tailtip: {
                    rotation: ["-5.0 * Math.cos(297.9380535 * query.anim_time) - 5.0", 0.0, 0.0]
                },
                wing0: {
                    rotation: [0.0, 0.0, "16.0 * Math.cos(148.9690267 * query.anim_time)"]
                },
                wing1: {
                    rotation: [0.0, 0.0, "-16.0 * Math.cos(148.9690267 * query.anim_time)"]
                },
                wingtip0: {
                    rotation: [0.0, 0.0, "16.0 * Math.cos(148.9690267 * query.anim_time)"]
                },
                wingtip1: {
                    rotation: [0.0, 0.0, "-16.0 * Math.cos(148.9690267 * query.anim_time)"]
                }
            },
            soundEffects: {
                "1.4": {
                    effect: "flap"
                }
            }
        }
    ]
});
