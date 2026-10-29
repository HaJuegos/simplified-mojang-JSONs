import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const DolphinAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "dolphin.move",
            loop: true,
            bones: {
                body: {
                    rotation: [
                        `${MoLang.targetXRotation()} - 2.865 + (-2.865 * ${MoLang.cos(`${MoLang.lifeTime()} * 343.8`)})`,
                        MoLang.targetYRotation(),
                        0.0
                    ]
                },
                left_fin: {
                    rotation: [0.0, 0.0, `17.19 * ${MoLang.cos(`${MoLang.lifeTime()} * 229.2`)} + 22.92`]
                },
                right_fin: {
                    rotation: [0.0, 0.0, `-17.19 * ${MoLang.cos(`${MoLang.lifeTime()} * 229.2`)} - 22.92`]
                },
                tail: {
                    rotation: [`-5.73 * ${MoLang.cos(`${MoLang.lifeTime()} * 343.8`)}`, 0.0, 0.0]
                },
                tail_fin: {
                    rotation: [`-11.46 * ${MoLang.cos(`${MoLang.lifeTime()} * 343.8`)}`, 0.0, 0.0]
                }
            }
        }
    ]
});
