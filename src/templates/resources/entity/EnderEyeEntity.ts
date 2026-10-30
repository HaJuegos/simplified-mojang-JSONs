import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const EnderEyeEntity = createRPEntityClient({
    idEntity: "minecraft:eye_of_ender_signal",
    params: {
        materials: { default: "eye_of_ender_signal" },
        textures: { default: "textures/items/ender_eye" },
        geometry: { default: "geometry.item_sprite" },
        renderControllers: ["controller.render.item_sprite"],
        animations: { flying: "animation.actor.billboard" },
        scripts: {
            animate: ["flying"]
        }
    }
});
