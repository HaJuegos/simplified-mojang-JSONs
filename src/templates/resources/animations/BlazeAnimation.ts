import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const BlazeAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "blaze.move",
            loop: true,
            bones: {
                upperbodyparts0: {
                    position: [
                        `${MoLang.cos(`${MoLang.lifeTime()} * -360.0`)} * 9.0`,
                        `2.0 + ${MoLang.cos(`(0 * 2 + ${MoLang.lifeTime()} * 20.0) * 14.32`)}`,
                        `${MoLang.sin(`${MoLang.lifeTime()} * -360.0`)} * 9.0`
                    ]
                },
                upperbodyparts1: {
                    position: [
                        `${MoLang.cos(`${MoLang.lifeTime()} * -360.0 + 90.0`)} * 9.0`,
                        `2.0 + ${MoLang.cos(`(1 * 2 + ${MoLang.lifeTime()} * 20.0) * 14.32`)}`,
                        `${MoLang.sin(`${MoLang.lifeTime()} * -360.0 + 90.0`)} * 9.0`
                    ]
                },
                upperbodyparts10: {
                    position: [
                        `${MoLang.cos(`${MoLang.lifeTime()} * -180.0 + 207.0`)} * 5.0`,
                        `-11.0 + ${MoLang.cos(`(10 * 1.5 + ${MoLang.lifeTime()} * 20.0) * 14.32`)}`,
                        `${MoLang.sin(`${MoLang.lifeTime()} * -180.0 + 207.0`)} * 5.0`
                    ]
                },
                upperbodyparts11: {
                    position: [
                        `${MoLang.cos(`${MoLang.lifeTime()} * -180.0 + 297.0`)} * 5.0`,
                        `-11.0 + ${MoLang.cos(`(11 * 1.5 + ${MoLang.lifeTime()} * 20.0) * 14.32`)}`,
                        `${MoLang.sin(`${MoLang.lifeTime()} * -180.0 + 297.0`)} * 5.0`
                    ]
                },
                upperbodyparts2: {
                    position: [
                        `${MoLang.cos(`${MoLang.lifeTime()} * -360.0 + 180.0`)} * 9.0`,
                        `2.0 + ${MoLang.cos(`(2 * 2 + ${MoLang.lifeTime()} * 20.0) * 14.32`)}`,
                        `${MoLang.sin(`${MoLang.lifeTime()} * -360.0 + 180.0`)} * 9.0`
                    ]
                },
                upperbodyparts3: {
                    position: [
                        `${MoLang.cos(`${MoLang.lifeTime()} * -360.0 + 270.0`)} * 9.0`,
                        `2.0 + ${MoLang.cos(`(3 * 2 + ${MoLang.lifeTime()} * 20.0) * 14.32`)}`,
                        `${MoLang.sin(`${MoLang.lifeTime()} * -360.0 + 270.0`)} * 9.0`
                    ]
                },
                upperbodyparts4: {
                    position: [
                        `${MoLang.cos(`${MoLang.lifeTime()} * 108.0 + 45.0`)} * 7.0`,
                        `-2.0 + ${MoLang.cos(`(4 * 2 + ${MoLang.lifeTime()} * 20.0) * 14.32`)}`,
                        `${MoLang.sin(`${MoLang.lifeTime()} * 108.0 + 45.0`)} * 7.0`
                    ]
                },
                upperbodyparts5: {
                    position: [
                        `${MoLang.cos(`${MoLang.lifeTime()} * 108.0 + 135.0`)} * 7.0`,
                        `-2.0 + ${MoLang.cos(`(5 * 2 + ${MoLang.lifeTime()} * 20.0) * 14.32`)}`,
                        `${MoLang.sin(`${MoLang.lifeTime()} * 108.0 + 135.0`)} * 7.0`
                    ]
                },
                upperbodyparts6: {
                    position: [
                        `${MoLang.cos(`${MoLang.lifeTime()} * 108.0 + 225.0`)} * 7.0`,
                        `-2.0 + ${MoLang.cos(`(6 * 2 + ${MoLang.lifeTime()} * 20.0) * 14.32`)}`,
                        `${MoLang.sin(`${MoLang.lifeTime()} * 108.0 + 225.0`)} * 7.0`
                    ]
                },
                upperbodyparts7: {
                    position: [
                        `${MoLang.cos(`${MoLang.lifeTime()} * 108.0 + 315.0`)} * 7.0`,
                        `-2.0 + ${MoLang.cos(`(7 * 2 + ${MoLang.lifeTime()} * 20.0) * 14.32`)}`,
                        `${MoLang.sin(`${MoLang.lifeTime()} * 108.0 + 315.0`)} * 7.0`
                    ]
                },
                upperbodyparts8: {
                    position: [
                        `${MoLang.cos(`${MoLang.lifeTime()} * -180.0 + 27.0`)} * 5.0`,
                        `-11.0 + ${MoLang.cos(`(8 * 1.5 + ${MoLang.lifeTime()} * 20.0) * 14.32`)}`,
                        `${MoLang.sin(`${MoLang.lifeTime()} * -180.0 + 27.0`)} * 5.0`
                    ]
                },
                upperbodyparts9: {
                    position: [
                        `${MoLang.cos(`${MoLang.lifeTime()} * -180.0 + 117.0`)} * 5.0`,
                        `-11.0 + ${MoLang.cos(`(9 * 1.5 + ${MoLang.lifeTime()} * 20.0) * 14.32`)}`,
                        `${MoLang.sin(`${MoLang.lifeTime()} * -180.0 + 117.0`)} * 5.0`
                    ]
                }
            }
        }
    ]
});
