import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const DrownedAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "drowned.attack.rotations",
            loop: true,
            bones: {
                body: {
                    rotation: [0.0, `${MoLang.sin(`${MoLang.sqrt(MoLang.variable("attack_time"))} * 360.0`)} * 11.46`, 0.0]
                },
                leftarm: {
                    rotation: [
                        `-(${MoLang.sin(`(1.0 - (1.0 - ${MoLang.variable("attack_time")}) * (1.0 - ${MoLang.variable("attack_time")})) * 180.0`)} + ${MoLang.sin(`${MoLang.variable("attack_time")} * 180.0`)}) * 5.73`,
                        0.0,
                        0.0
                    ]
                },
                rightarm: {
                    rotation: [
                        `-(${MoLang.sin(`(1.0 - (1.0 - ${MoLang.variable("attack_time")}) * (1.0 - ${MoLang.variable("attack_time")})) * 180.0`)} * 34.38 + ${MoLang.sin(`${MoLang.variable("attack_time")} * 180.0`)} * 28.65) * (${MoLang.variable("is_brandishing_spear")} ? -2.5 : 1.0)`,
                        `${MoLang.variable("is_brandishing_spear")} ? 0.0 : ${MoLang.sin(`${MoLang.sqrt(MoLang.variable("attack_time"))} * 360.0`)} * 22.92`,
                        0.0
                    ]
                }
            }
        }
    ]
});
