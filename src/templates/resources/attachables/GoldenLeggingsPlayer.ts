import { createRPAttachable } from "../../../builders/resources/attachables/AttachableTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del attachable para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const GoldenLeggingsPlayer = createRPAttachable({
    idAttach: "minecraft:golden_leggings.player",
    attachable: {
        item: { "minecraft:golden_leggings": `${MoLang.ownerIdentifier()} == 'minecraft:player'` },
        materials: {
            default: "armor",
            enchanted: "armor_enchanted"
        },
        textures: {
            default: "textures/models/armor/gold_2",
            enchanted: "textures/misc/enchanted_actor_glint"
        },
        geometry: {
            default: "geometry.player.armor.leggings"
        },
        scripts: {
            parentSetup: `${MoLang.variable("leg_layer_visible")} = 0.0;`,
            animate: [
                "offset"
            ]
        },
        animations: {
            offset: "animation.armor.leggings.offset"
        },
        renderControllers: [
            "controller.render.armor"
        ]
    }
});
