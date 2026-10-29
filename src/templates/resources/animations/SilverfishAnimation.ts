import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const SilverfishAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "silverfish.move",
            animTimeUpdate: MoLang.modifiedDistanceMoved(),
            loop: true,
            bones: {
                bodypart_0: {
                    position: [`${MoLang.sin(`${MoLang.lifeTime()} * 1031.4`)} * 1.26`, 0.0, 0.0],
                    rotation: [0.0, `${MoLang.cos(`${MoLang.lifeTime()} * 1031.4`)} * 27`, 0.0]
                },
                bodypart_1: {
                    position: [`${MoLang.sin(`${MoLang.lifeTime()} * 1031.4 + 27`)} * 0.63`, 0.0, 0.0],
                    rotation: [0.0, `${MoLang.cos(`${MoLang.lifeTime()} * 1031.4 + 27`)} * 18`, 0.0]
                },
                bodypart_2: {
                    rotation: [0.0, `${MoLang.cos(`${MoLang.lifeTime()} * 1031.4 + 54`)} * 9`, 0.0]
                },
                bodypart_3: {
                    position: [`${MoLang.sin(`${MoLang.lifeTime()} * 1031.4 + 81`)} * 0.63`, 0.0, 0.0],
                    rotation: [0.0, `${MoLang.cos(`${MoLang.lifeTime()} * 1031.4 + 81`)} * 18`, 0.0]
                },
                bodypart_4: {
                    position: [`${MoLang.sin(`${MoLang.lifeTime()} * 1031.4 + 108`)} * 1.26`, 0.0, 0.0],
                    rotation: [0.0, `${MoLang.cos(`${MoLang.lifeTime()} * 1031.4 + 108`)} * 27`, 0.0]
                },
                bodypart_5: {
                    position: [`${MoLang.sin(`${MoLang.lifeTime()} * 1031.4 + 135`)} * 1.89`, 0.0, 0.0],
                    rotation: [0.0, `${MoLang.cos(`${MoLang.lifeTime()} * 1031.4 + 135`)} * 36`, 0.0]
                },
                bodypart_6: {
                    position: [`${MoLang.sin(`${MoLang.lifeTime()} * 1031.4 + 162`)} * 2.52`, 0.0, 0.0],
                    rotation: [0.0, `${MoLang.cos(`${MoLang.lifeTime()} * 1031.4 + 162`)} * 45`, 0.0]
                }
            }
        }
    ]
});
