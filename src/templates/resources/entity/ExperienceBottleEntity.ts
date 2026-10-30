import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const ExperienceBottleEntity = createRPEntityClient({
    idEntity: "minecraft:xp_bottle",
    params: {
        materials: { default: "xp_bottle" },
        textures: {
            default: "textures/items/experience_bottle",
            enchanted: "textures/misc/enchanted_item_glint"
        },
        geometry: { default: "geometry.item_sprite" },
        renderControllers: ["controller.render.experience_bottle"],
        animations: { flying: "animation.actor.billboard" },
        scripts: {
            animate: ["flying"]
        }
    }
});
