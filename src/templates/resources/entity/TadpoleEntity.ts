import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const TadpoleEntity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:tadpole",
    params: {
        materials: { default: "tadpole" },
        textures: { default: "textures/entity/tadpole/tadpole" },
        geometry: { default: "geometry.tadpole" },
        spawnEgg: { texture: "spawn_egg_tadpole" },
        animations: {
            swim: "animation.tadpole.swim",
            controller_general: "controller.animation.tadpole.general"
        },
        renderControllers: ["controller.render.tadpole"],
        scripts: {
            animate: ["controller_general"]
        }
    }
});
