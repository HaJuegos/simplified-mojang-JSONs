import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const FireworksRocketEntity = createRPEntityClient({
    idEntity: "minecraft:fireworks_rocket",
    params: {
        materials: { default: "fireworks_rocket" },
        textures: { default: "textures/entity/fireworks" },
        geometry: { default: "geometry.fireworks_rocket" },
        animations: { move: "animation.fireworks_rocket.move" },
        scripts: {
            animate: ["move"]
        },
        renderControllers: ["controller.render.fireworks_rocket"]
    }
});
