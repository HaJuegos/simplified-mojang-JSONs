import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const VillagerAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "villager.baby_transform",
            loop: true,
            bones: {
                head: {
                    scale: 1.5
                }
            }
        },
        {
            idAnimation: "villager.general",
            loop: true,
            bones: {
                arms: {
                    position: [0.0, -1.0, -1.0],
                    rotation: ["-42.97 - this", 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "villager.general.v1.0",
            loop: true,
            bones: {
                arms: {
                    position: [0.0, "-3.0 - this", "-1.0 - this"],
                    rotation: ["-42.97 - this", 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "villager.get_in_bed",
            loop: true,
            bones: {
                body: {
                    position: [0.0, 1.0, `${MoLang.isBaby()} ? -3.0 : -15.0`],
                    rotation: [-90.0, 0.0, 0.0]
                }
            }
        },
        {
            idAnimation: "villager.move",
            animTimeUpdate: MoLang.modifiedDistanceMoved(),
            loop: true,
            bones: {
                leg0: {
                    rotation: ["(math.cos(query.anim_time * 38.17) * 40.0) - this", "-this", 0.0]
                },
                leg1: {
                    rotation: ["(math.cos(query.anim_time * 38.17 + 180) * 40.0) - this", "-this", 0.0]
                }
            }
        },
        {
            idAnimation: "villager.raise_arms",
            loop: true,
            bones: {
                arms: {
                    rotation: [`${MoLang.variable("raise_arms")} * -15.0`, 0.0, 0.0]
                }
            }
        }
    ]
});
