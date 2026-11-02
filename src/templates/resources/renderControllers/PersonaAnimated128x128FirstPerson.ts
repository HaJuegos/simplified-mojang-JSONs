import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const PersonaAnimated128x128FirstPerson = createRPRenderController({
    renderControllers: [
        {
            idRender: "persona_animated_128x128.first_person",
            rebuildAnimationMatrices: true,
            geometry: "Geometry.animated_128x128",
            materials: [
                { "*": "Material.animated" }
            ],
            textures: ["Texture.animated_128x128"],
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
                    `Math.mod(Math.floor(${MoLang.lifeTime()} * 7),variable.animation_frames_128x128)/variable.animation_frames_128x128`
                ],
                scale: [1.0, 1.0]
            }
        }
    ]
});
