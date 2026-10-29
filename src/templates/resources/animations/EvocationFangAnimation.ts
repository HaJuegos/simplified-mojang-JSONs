import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const EvocationFangAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "evocation_fang.bite",
            loop: true,
            bones: {
                base: {
                    position: [0.0, `-12.0 + ${MoLang.variable("y_offset")}`, 0.0]
                },
                lower_jaw: {
                    rotation: [0.0, 0.0, `180.0 + ${MoLang.variable("bite_amount")}`]
                },
                upper_jaw: {
                    rotation: [0.0, 0.0, `180.0 - ${MoLang.variable("bite_amount")}`]
                }
            }
        }
    ]
});
