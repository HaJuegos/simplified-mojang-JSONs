import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const ShulkerBulletEntity = createRPEntityClient({
    idEntity: "minecraft:shulker_bullet",
    params: {
        materials: { default: "shulker_bullet" },
        textures: { default: "textures/entity/shulker/spark" },
        geometry: { default: "geometry.shulker_bullet" },
        animations: { move: "animation.shulker_bullet.move" },
        scripts: {
            animate: ["move"]
        },
        renderControllers: ["controller.render.shulker_bullet"]
    }
});
