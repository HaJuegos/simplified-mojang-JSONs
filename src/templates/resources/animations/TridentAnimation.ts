import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const TridentAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.MostRecent,
    animations: [
        {
            idAnimation: "trident.wield_first_person",
            loop: true,
            bones: {
                pole: {
                    position: [-7.0, -3.0, -2.0],
                    rotation: [152.0, -9.0, 25.0]
                }
            }
        },
        {
            idAnimation: "trident.wield_first_person_raise",
            loop: true,
            bones: {
                pole: {
                    position: [
                        "6.0 + (variable.charge_amount <= 0.25 ? math.lerp(0.0, -6.5, variable.charge_amount * 4.0) : -6.5) + (variable.charge_amount > 0.25 ? math.lerp(0.0, -4.0, (variable.charge_amount - 0.25) * 1.33) : 0.0)",
                        "-3.0 + (variable.charge_amount <= 0.25 ? math.lerp(0.0, -3.0, variable.charge_amount * 4.0) : -3.0) + (variable.charge_amount > 0.25 ? math.lerp(0.0, 3.0, (variable.charge_amount - 0.25) * 1.33) : 0.0)",
                        "8.0 + (variable.charge_amount <= 0.25 ? math.lerp(0.0, -16.5, variable.charge_amount * 4.0) : -16.5) + (variable.charge_amount > 0.25 ? math.lerp(0.0, 0.0, (variable.charge_amount - 0.25) * 1.33) : 0.0)"
                    ],
                    rotation: [30.0, -20.0, -65.0]
                }
            }
        },
        {
            idAnimation: "trident.wield_first_person_raise_shake",
            loop: true,
            bones: {
                pole: {
                    position: [
                        0.0,
                        `${MoLang.variable("charge_amount")} >= 1.0 ? ${MoLang.sin(`${MoLang.lifeTime()} * 1000.0 * 1.3`)} * 0.1 - ${MoLang.sin(`${MoLang.lifeTime()} * 45.0`)} * 0.5 : 0.0`,
                        0.0
                    ],
                    rotation: [0.0, 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "trident.wield_first_person_riptide",
            loop: true,
            overridePreviousAnimation: true,
            bones: {
                pole: {
                    position: [-2.0, -7.0, -10.0],
                    rotation: [180.0, 60.0, -36.0]
                }
            }
        },
        {
            idAnimation: "trident.wield_third_person",
            loop: true,
            bones: {
                pole: {
                    position: [1.5, -2.5, -10.5],
                    rotation: [97.0, -1.5, -49.0]
                }
            }
        },
        {
            idAnimation: "trident.wield_third_person_raise",
            loop: true,
            bones: {
                pole: {
                    position: [-0.7, 0, 17.5],
                    rotation: [-7, 180.0, -40.0]
                }
            }
        }
    ]
});
