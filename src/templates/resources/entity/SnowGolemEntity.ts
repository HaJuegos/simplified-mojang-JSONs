import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const SnowGolemEntity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:snow_golem",
    params: {
        minEngineVersion: FormatVersionListEntities.V1_8_0,
        materials: {
            default: "snow_golem",
            head: "snow_golem_pumpkin"
        },
        textures: { default: "textures/entity/snow_golem" },
        geometry: { default: "geometry.snowgolem.v1.8" },
        animations: {
            move: "animation.snowgolem.move.v1.8",
            look_at_target: "animation.common.look_at_target",
            controller_move: "controller.animation.snowgolem.move.v1.8"
        },
        renderControllers: ["controller.render.snowgolem"],
        spawnEgg: { texture: "spawn_egg_snow_golem" },
        scripts: {
            animate: ["controller_move"]
        }
    }
});
