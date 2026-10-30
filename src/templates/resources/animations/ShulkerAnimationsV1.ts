import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @deprecated Ya no se usa en la actualidad. Se mantiene por compatibilidad. Usa la version normal.
 * @author HaJuegos - 29-10-2026
 */
export const ShulkerAnimationsV1 = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "shulker.facing.v1.0",
            animTimeUpdate: MoLang.modifiedDistanceMoved(),
            loop: true,
            bones: {
                base: {
                    position: [
                        MoLang.variable("shulker.xoffset"),
                        MoLang.variable("shulker.yoffset"),
                        MoLang.variable("shulker.zoffset")
                    ],
                    rotation: [MoLang.variable("shulker.xprerotation"), 0.0, MoLang.variable("shulker.zprerotation")],
                    scale: 0.98
                },
                lid: {
                    position: [
                        `(${MoLang.variable("shulker.eastfacing")} - ${MoLang.variable("shulker.westfacing")}) * 8`,
                        `(${MoLang.variable("shulker.northfacing")} + ${MoLang.variable("shulker.southfacing")} + ${MoLang.variable("shulker.eastfacing")} + ${MoLang.variable("shulker.westfacing")}) * 8 + (${MoLang.variable("shulker.upfacing")}) * 16`,
                        `(${MoLang.variable("shulker.northfacing")} - ${MoLang.variable("shulker.southfacing")}) * 8`
                    ],
                    rotation: [MoLang.variable("shulker.xprerotation"), 0.0, MoLang.variable("shulker.zprerotation")]
                }
            }
        },
        {
            idAnimation: "shulker.move.v1.0",
            animTimeUpdate: MoLang.modifiedDistanceMoved(),
            loop: true,
            bones: {
                head: {
                    position: [
                        0.0,
                        `-${MoLang.variable("shulker.upfacing")} * 3 - (3 * (${MoLang.variable("shulker.northfacing")} + ${MoLang.variable("shulker.southfacing")} + ${MoLang.variable("shulker.westfacing")} + ${MoLang.variable("shulker.eastfacing")}))`,
                        0.0
                    ]
                },
                lid: {
                    position: [
                        `(7.2 - ${MoLang.sin(`${MoLang.variable("shulker.lidpositionfactor")} * 1.16`)} * 7.5 + (${MoLang.variable("shulker.lidpositionfactor")} > 180 ? ${MoLang.sin(`${MoLang.lifeTime()} * 114.6`)} * 0.7 + 1.5 : 0.0)) * (${MoLang.variable("shulker.westfacing")} - ${MoLang.variable("shulker.eastfacing")})`,
                        `(7.2 - ${MoLang.sin(`${MoLang.variable("shulker.lidpositionfactor")} * 1.16`)} * 7.5 + (${MoLang.variable("shulker.lidpositionfactor")} > 180 ? ${MoLang.sin(`${MoLang.lifeTime()} * 114.6`)} * 0.7 + 1.5 : 0.0)) * ((${MoLang.variable("shulker.facingdirection")} == 0 ? 1.0 : 0.0) - ${MoLang.variable("shulker.upfacing")})`,
                        `(7.2 - ${MoLang.sin(`${MoLang.variable("shulker.lidpositionfactor")} * 1.16`)} * 7.5 + (${MoLang.variable("shulker.lidpositionfactor")} > 180 ? ${MoLang.sin(`${MoLang.lifeTime()} * 114.6`)} * 0.7 + 1.5 : 0.0)) * (${MoLang.variable("shulker.southfacing")} - ${MoLang.variable("shulker.northfacing")})`
                    ],
                    rotation: [
                        0.0,
                        `(${MoLang.variable("shulker.peekamount")} > 0.3 ? ${MoLang.pow(MoLang.variable("shulker.lidrotationfactor"), 4)} * 22.5 : 0.0) * ((${MoLang.variable("shulker.facingdirection")} == 0 ? 1.0 : 0.0) + ${MoLang.variable("shulker.westfacing")} + ${MoLang.variable("shulker.eastfacing")} + ${MoLang.variable("shulker.upfacing")})`,
                        `(${MoLang.variable("shulker.peekamount")} > 0.3 ? ${MoLang.pow(MoLang.variable("shulker.lidrotationfactor"), 4)} * 22.5 : 0.0) * (${MoLang.variable("shulker.northfacing")} + ${MoLang.variable("shulker.southfacing")})`
                    ]
                }
            }
        }
    ]
});
