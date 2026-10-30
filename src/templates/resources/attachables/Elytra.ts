import { createRPAttachable } from "../../../builders/resources/attachables/AttachableTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del attachable para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const Elytra = createRPAttachable({
    idAttach: "minecraft:elytra",
    attachable: {
        materials: {
            default: "elytra",
            enchanted: "elytra_glint"
        },
        textures: {
            default: "textures/models/armor/elytra",
            enchanted: "textures/misc/enchanted_actor_glint"
        },
        geometry: {
            default: "geometry.elytra"
        },
        animations: {
            default_controller: "controller.animation.elytra.default",
            default: "animation.elytra.default",
            gliding: "animation.elytra.gliding",
            sneaking: "animation.elytra.sneaking",
            sleeping: "animation.elytra.sleeping",
            swimming: "animation.elytra.swimming"
        },
        scripts: {
            parentSetup: `${MoLang.variable("chest_layer_visible")} = 0.0;`,
            animate: [
                "default_controller"
            ]
        },
        renderControllers: [
            "controller.render.armor"
        ]
    }
});
