import { createRPAttachable } from "../../../builders/resources/attachables/AttachableTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del attachable para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const NetheriteChestplatePlayer = createRPAttachable({
    idAttach: "minecraft:netherite_chestplate.player",
    attachable: {
        item: {
            "minecraft:netherite_chestplate": `${MoLang.ownerIdentifier()} == 'minecraft:player'`
        },
        materials: {
            default: "armor",
            enchanted: "armor_enchanted"
        },
        textures: {
            default: "textures/models/armor/netherite_1",
            enchanted: "textures/misc/enchanted_actor_glint"
        },
        geometry: {
            default: "geometry.player.armor.chestplate"
        },
        scripts: {
            parentSetup: `${MoLang.variable("chest_layer_visible")} = 0.0;`,
            animate: [
                "offset"
            ]
        },
        animations: {
            offset: "animation.armor.chestplate.offset"
        },
        renderControllers: [
            "controller.render.armor"
        ]
    }
});
