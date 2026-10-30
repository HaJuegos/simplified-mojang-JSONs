import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const MinecartAnimationV10 = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "minecart.move.v1.0",
            loop: true,
            bones: {
                root: {
                    position: [
                        `${MoLang.variable("rail_offset.x")} / ${MoLang.modelScale()}`,
                        `${MoLang.variable("rail_offset.y")} / ${MoLang.modelScale()} - 18.5`,
                        `${MoLang.variable("rail_offset.z")} / ${MoLang.modelScale()}`
                    ],
                    rotation: [
                        `variable.hurt > 0 ? -Math.sin(variable.hurt * 360 / (Math.pi * 2)) * variable.hurt * (((20 * 2 - ${MoLang.structuralIntegrity()}) - ${MoLang.frameAlpha()}) < 0 ? 0: (20 * 2 - ${MoLang.structuralIntegrity()}) - ${MoLang.frameAlpha()}) / 10 * ${MoLang.hurtDirection()} : 0`,
                        0.0,
                        `-${MoLang.variable("rail_rotation.z")}`
                    ]
                }
            }
        }
    ]
});
