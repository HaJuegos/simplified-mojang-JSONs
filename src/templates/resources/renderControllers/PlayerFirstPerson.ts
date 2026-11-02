import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const PlayerFirstPerson = createRPRenderController({
    renderControllers: [
        {
            idRender: "player.first_person",
            geometry: "Geometry.default",
            materials: [
                { "*": "Material.default" }
            ],
            textures: ["Texture.default"],
            partVisibility: [
                { "*": false },
                {
                    rightArm: `${MoLang.getEquippedItemName(0, 1)} == '' || ${MoLang.getEquippedItemName(0, 1)} == 'filled_map'`
                },
                {
                    rightSleeve: `${MoLang.getEquippedItemName(0, 1)} == '' || ${MoLang.getEquippedItemName(0, 1)} == 'filled_map'`
                },
                {
                    leftArm: `(${MoLang.getEquippedItemName(0, 1)} == 'filled_map' && ${MoLang.getEquippedItemName('off_hand')} != 'shield') || (${MoLang.getEquippedItemName('off_hand')} == 'filled_map' && !${MoLang.itemIsCharged()}) || (!${MoLang.itemIsCharged()} && (variable.item_use_normalized > 0 && variable.item_use_normalized < 1.0))`
                },
                {
                    leftSleeve: `(${MoLang.getEquippedItemName(0, 1)} == 'filled_map' && ${MoLang.getEquippedItemName('off_hand')} != 'shield') || (${MoLang.getEquippedItemName('off_hand')} == 'filled_map' && !${MoLang.itemIsCharged()}) || (!${MoLang.itemIsCharged()} && (variable.item_use_normalized > 0 && variable.item_use_normalized < 1.0))`
                }
            ]
        }
    ]
});
