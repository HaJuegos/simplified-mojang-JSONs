import { createRPAttachable } from "../../../builders/resources/attachables/AttachableTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del attachable para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const GoldenBootsPlayer = createRPAttachable({
    idAttach: "minecraft:golden_boots.player",
    attachable: {
        item: {
            "minecraft:golden_boots": `${MoLang.ownerIdentifier()} == 'minecraft:player'`
        },
        materials: {
            default: "armor",
            enchanted: "armor_enchanted"
        },
        textures: {
            default: "textures/models/armor/gold_1",
            enchanted: "textures/misc/enchanted_actor_glint"
        },
        geometry: {
            default: "geometry.player.armor.boots"
        },
        scripts: {
            parentSetup: `${MoLang.variable("boot_layer_visible")} = 0.0;`,
            animate: [
                "offset"
            ]
        },
        animations: {
            offset: "animation.armor.boots.offset"
        },
        renderControllers: [
            "controller.render.armor"
        ]
    }
});
