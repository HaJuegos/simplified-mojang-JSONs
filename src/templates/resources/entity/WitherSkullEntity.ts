import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const WitherSkullEntity = createRPEntityClient({
    idEntity: "minecraft:wither_skull",
    params: {
        materials: { default: "wither_skull" },
        textures: { default: "textures/entity/wither_boss/wither" },
        geometry: { default: "geometry.wither_skull" },
        animations: { move: "animation.wither_skull.move" },
        scripts: {
            animate: ["move"]
        },
        renderControllers: ["controller.render.wither_skull"]
    }
});
