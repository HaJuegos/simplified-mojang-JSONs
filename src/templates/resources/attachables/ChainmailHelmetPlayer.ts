import { createRPAttachable } from "../../../builders/resources/attachables/AttachableTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del attachable para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const ChainmailHelmetPlayer = createRPAttachable({
    idAttach: "minecraft:chainmail_helmet.player",
    attachable: {
        item: {
            "minecraft:chainmail_helmet": `${MoLang.ownerIdentifier()} == 'minecraft:player'`
        },
        materials: {
            default: "armor",
            enchanted: "armor_enchanted"
        },
        textures: {
            default: "textures/models/armor/chain_1",
            enchanted: "textures/misc/enchanted_actor_glint"
        },
        geometry: {
            default: "geometry.player.armor.helmet"
        },
        scripts: {
            parentSetup: `${MoLang.variable("helmet_layer_visible")} = 0.0;`,
            animate: [
                "offset"
            ]
        },
        animations: {
            offset: "animation.armor.helmet.offset"
        },
        renderControllers: [
            "controller.render.armor"
        ]
    }
});
