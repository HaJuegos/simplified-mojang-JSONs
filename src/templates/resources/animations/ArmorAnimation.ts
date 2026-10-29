import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const ArmorAnimation = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "armor.helmet.offset",
            loop: true,
            bones: {
                head: {
                    position: [
                        MoLang.getRootLocatorOffset("armor_offset.helmet", 0),
                        MoLang.getRootLocatorOffset("armor_offset.helmet", 1),
                        MoLang.getRootLocatorOffset("armor_offset.helmet", 2)
                    ]
                }
            }
        },
        {
            idAnimation: "armor.chestplate.offset",
            loop: true,
            bones: {
                body: {
                    position: [
                        MoLang.getRootLocatorOffset("armor_offset.chestplate", 0),
                        MoLang.getRootLocatorOffset("armor_offset.chestplate", 1),
                        MoLang.getRootLocatorOffset("armor_offset.chestplate", 2)
                    ]
                },
                leftArm: {
                    position: [
                        MoLang.getRootLocatorOffset("armor_offset.left_arm", 0),
                        MoLang.getRootLocatorOffset("armor_offset.left_arm", 1),
                        MoLang.getRootLocatorOffset("armor_offset.left_arm", 2)
                    ]
                },
                rightArm: {
                    position: [
                        MoLang.getRootLocatorOffset("armor_offset.right_arm", 0),
                        MoLang.getRootLocatorOffset("armor_offset.right_arm", 1),
                        MoLang.getRootLocatorOffset("armor_offset.right_arm", 2)
                    ]
                }
            }
        },
        {
            idAnimation: "armor.leggings.offset",
            loop: true,
            bones: {
                body: {
                    position: [
                        MoLang.getRootLocatorOffset("armor_offset.leggings", 0),
                        MoLang.getRootLocatorOffset("armor_offset.leggings", 1),
                        MoLang.getRootLocatorOffset("armor_offset.leggings", 2)
                    ]
                },
                leftLeg: {
                    position: [
                        MoLang.getRootLocatorOffset("armor_offset.left_leg", 0),
                        MoLang.getRootLocatorOffset("armor_offset.left_leg", 1),
                        MoLang.getRootLocatorOffset("armor_offset.left_leg", 2)
                    ]
                },
                rightLeg: {
                    position: [
                        MoLang.getRootLocatorOffset("armor_offset.right_leg", 0),
                        MoLang.getRootLocatorOffset("armor_offset.right_leg", 1),
                        MoLang.getRootLocatorOffset("armor_offset.right_leg", 2)
                    ]
                }
            }
        },
        {
            idAnimation: "armor.boots.offset",
            loop: true,
            bones: {
                leftLeg: {
                    position: [
                        MoLang.getRootLocatorOffset("armor_offset.left_boot", 0),
                        MoLang.getRootLocatorOffset("armor_offset.left_boot", 1),
                        MoLang.getRootLocatorOffset("armor_offset.left_boot", 2)
                    ]
                },
                rightLeg: {
                    position: [
                        MoLang.getRootLocatorOffset("armor_offset.right_boot", 0),
                        MoLang.getRootLocatorOffset("armor_offset.right_boot", 1),
                        MoLang.getRootLocatorOffset("armor_offset.right_boot", 2)
                    ]
                }
            }
        }
    ]
});
