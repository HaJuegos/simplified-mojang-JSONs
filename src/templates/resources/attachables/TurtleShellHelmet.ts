import { createRPAttachable } from "../../../builders/resources/attachables/AttachableTemplateBuilder";
import { FormatVersionAttachList } from "../../../types/resources/attachables/AttachableTemplate";

/**
 * Plantilla vanilla del attachable para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const TurtleShellHelmet = createRPAttachable({
    formatVersion: FormatVersionAttachList.V1_8_0,
    idAttach: "minecraft:turtle_helmet",
    attachable: {
        materials: {
            default: "armor",
            enchanted: "armor_enchanted"
        },
        textures: {
            default: "textures/models/armor/turtle_1",
            enchanted: "textures/misc/enchanted_actor_glint"
        },
        geometry: {
            default: "geometry.humanoid.armor.helmet"
        },
        renderControllers: [
            "controller.render.armor"
        ]
    }
});
