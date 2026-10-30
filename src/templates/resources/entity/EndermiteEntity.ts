import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const EndermiteEntity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:endermite",
    params: {
        materials: { default: "endermite" },
        textures: { default: "textures/entity/endermite" },
        geometry: { default: "geometry.endermite" },
        animations: {
            move: "animation.endermite.move",
            controller_move: "controller.animation.endermite.move"
        },
        renderControllers: ["controller.render.endermite"],
        spawnEgg: { texture: "spawn_egg_endermite" },
        scripts: {
            animate: ["controller_move"]
        }
    }
});
