import { createRPAttachable } from "../../../builders/resources/attachables/AttachableTemplateBuilder";
import { FormatVersionAttachList } from "../../../types/resources/attachables/AttachableTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del attachable para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const DiamondHelmet = createRPAttachable({
    formatVersion: FormatVersionAttachList.V1_8_0,
    idAttach: "minecraft:diamond_helmet",
    attachable: {
        materials: {
            default: "armor",
            enchanted: "armor_enchanted"
        },
        textures: {
            default: "textures/models/armor/diamond_1",
            enchanted: "textures/misc/enchanted_actor_glint"
        },
        geometry: {
            default: "geometry.humanoid.armor.helmet"
        },
        scripts: {
            parentSetup: `${MoLang.variable("helmet_layer_visible")} = 0.0;`
        },
        renderControllers: [
            "controller.render.armor"
        ]
    }
});
