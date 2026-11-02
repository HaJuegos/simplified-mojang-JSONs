import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const PersonaAnimated32x32FirstPerson = createRPRenderController({
    renderControllers: [
        {
            idRender: "persona_animated_32x32.first_person",
            rebuildAnimationMatrices: true,
            geometry: "Geometry.animated_32x32",
            materials: [
                { "*": "Material.animated" }
            ],
            textures: ["Texture.animated_32x32"],
            partVisibility: [
                { "*": false },
                {
                    rightArm: `${MoLang.getEquippedItemName(0, 1)} == '' || ${MoLang.getEquippedItemName(0, 1)} == 'map'`
                },
                {
                    rightSleeve: `${MoLang.getEquippedItemName(0, 1)} == '' || ${MoLang.getEquippedItemName(0, 1)} == 'map'`
                },
                {
                    leftArm: `(${MoLang.getEquippedItemName(0, 1)} == 'map' && ${MoLang.getEquippedItemName('off_hand')} != 'shield') || (${MoLang.getEquippedItemName('off_hand')} == 'map' && !${MoLang.itemIsCharged()}) || (!${MoLang.itemIsCharged()} && (variable.item_use_normalized > 0 && variable.item_use_normalized < 1.0))`
                },
                {
                    leftSleeve: `(${MoLang.getEquippedItemName(0, 1)} == 'map' && ${MoLang.getEquippedItemName('off_hand')} != 'shield') || (${MoLang.getEquippedItemName('off_hand')} == 'map' && !${MoLang.itemIsCharged()}) || (!${MoLang.itemIsCharged()} && (variable.item_use_normalized > 0 && variable.item_use_normalized < 1.0))`
                }
            ],
            uvAnim: {
                offset: [
                    0.0,
                    `Math.mod(Math.floor(${MoLang.lifeTime()} * 7),variable.animation_frames_32x32)/variable.animation_frames_32x32`
                ],
                scale: [1.0, 1.0]
            }
        }
    ]
});
