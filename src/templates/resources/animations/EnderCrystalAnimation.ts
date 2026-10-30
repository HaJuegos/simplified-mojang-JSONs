import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const EnderCrystalAnimation = createRPAnimation({
    animations: [
        {
            idAnimation: "ender_crystal.move",
            loop: true,
            bones: {
                outerglass: {
                    position: [0.0, `16.0 + Math.sin(${MoLang.lifeTime()} * 230.0 + variable.time_offset) * 8.0`, 0.0],
                    rotation: [39.2, `14.5 + (${MoLang.lifeTime()} * -60.0 + ${MoLang.variable("time_offset")})`, -39.2]
                },
                innerglass: {
                    scale: [0.875, 0.875, 0.875],
                    rotation: [39.2, `14.5 + (${MoLang.lifeTime()} * -60.0 + ${MoLang.variable("time_offset")})`, -39.2]
                },
                crystal: {
                    scale: [0.875, 0.875, 0.875],
                    rotation: [219.2, `14.5 + (${MoLang.lifeTime()} * -60.0 + ${MoLang.variable("time_offset")})`, -39.2]
                }
            }
        }
    ]
});
