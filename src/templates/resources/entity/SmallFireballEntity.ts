import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const SmallFireballEntity = createRPEntityClient({
    idEntity: "minecraft:small_fireball",
    params: {
        materials: { default: "fireball" },
        textures: { default: "textures/items/fireball" },
        geometry: { default: "geometry.fireball" },
        animations: { face_player: "animation.actor.billboard" },
        scripts: {
            scale: "0.5",
            animate: ["face_player"]
        },
        renderControllers: ["controller.render.fireball"]
    }
});
