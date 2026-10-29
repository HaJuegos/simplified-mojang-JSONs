import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const HappyGhastAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "happy_ghast.move",
            loop: true,
            bones: {
                tentacles_0: {
                    rotation: [`${MoLang.sin(`${MoLang.lifeTime()} * 360.0 + 0`)} * 11.5 + 23`, 0.0, 0.0]
                },
                tentacles_1: {
                    rotation: [`${MoLang.sin(`${MoLang.lifeTime()} * 360.0 + 57`)} * 11.5 + 23`, 0.0, 0.0]
                },
                tentacles_2: {
                    rotation: [`${MoLang.sin(`${MoLang.lifeTime()} * 360.0 + 115`)} * 11.5 + 23`, 0.0, 0.0]
                },
                tentacles_3: {
                    rotation: [`${MoLang.sin(`${MoLang.lifeTime()} * 360.0 + 172`)} * 11.5 + 23`, 0.0, 0.0]
                },
                tentacles_4: {
                    rotation: [`${MoLang.sin(`${MoLang.lifeTime()} * 360.0 + 229`)} * 11.5 + 23`, 0.0, 0.0]
                },
                tentacles_5: {
                    rotation: [`${MoLang.sin(`${MoLang.lifeTime()} * 360.0 + 286`)} * 11.5 + 23`, 0.0, 0.0]
                },
                tentacles_6: {
                    rotation: [`${MoLang.sin(`${MoLang.lifeTime()} * 360.0 + 344`)} * 11.5 + 23`, 0.0, 0.0]
                },
                tentacles_7: {
                    rotation: [`${MoLang.sin(`${MoLang.lifeTime()} * 360.0 + 402`)} * 11.5 + 23`, 0.0, 0.0]
                },
                tentacles_8: {
                    rotation: [`${MoLang.sin(`${MoLang.lifeTime()} * 360.0 + 458`)} * 11.5 + 23`, 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "happy_ghast.scale",
            loop: true,
            bones: {
                body: {
                    scale: MoLang.variable("scale")
                }
            }
        }
    ]
});
