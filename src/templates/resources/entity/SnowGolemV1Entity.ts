import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa en la actualidad, se deja por compatibilidad. Usa la version mas reciente.
 * @author HaJuegos - 30-10-2026
 */
export const SnowGolemV1Entity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:snow_golem",
    params: {
        materials: {
            default: "snow_golem",
            head: "snow_golem_pumpkin"
        },
        textures: { default: "textures/entity/snow_golem" },
        geometry: { default: "geometry.snowgolem" },
        animations: {
            move: "animation.snowgolem.move",
            arms: "animation.snowgolem.arms",
            look_at_target: "animation.common.look_at_target",
            controller_move: "controller.animation.snowgolem.move"
        },
        renderControllers: ["controller.render.snowgolem"],
        spawnEgg: {
            baseColor: "#d9f2f2",
            overlayColor: "#81a4a4"
        },
        scripts: {
            animate: ["controller_move"]
        }
    }
});
